#!/usr/bin/env node

const fs = require("fs");
const xml2js = require("xml2js");

// Test that the static files are generated correctly

read("./dist/index.html")
  .then(data => {
    return validateContentVersion(data)
      ? Promise.resolve()
      : Promise.reject("release news version validation failed");
  })
  .then(() => {
    return Promise.all([
      read("./docs/content/glossary/Glossary.md"),
      read("./dist/glossary.html")
    ]);
  })
  .then(resp => {
    return validateGlossary(resp[0], resp[1]);
  })
  .then(() => {
    return read("./dist/sitemap.xml");
  })
  .then(validateSitemap)
  .then(() => {
    console.log("All tests passed :)");
    process.exit(0);
  })
  .catch(err => {
    console.log("The test suite failed :(");
    console.log(err);
    process.exit(1);
  });

function read(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
}

// This proves that the release news version strings match
// it also proves that the front matter inside a template is compiled
function validateContentVersion(data) {
  const re = /^.*Release News.*release\.html#([0-9]{3})">([0-9.]{5})/gm;
  const resp = re.exec(data);
  if (resp.length == 0) {
    console.log("No release news versions found in template.");
    return false;
  }
  const g1 = resp[1];
  const g2 = resp[2].replace(/\./g, "");

  if (g1 !== g2) {
    console.log(
      `Release news version validation failed: ${g1} does not equal ${g2}`
    );
    return false;
  } else {
    console.log(
      `Release news version validation passed: ${g1} is equal to ${g2}!`
    );
  }
  return true;
}

// Validate that the docs content subrepo has been compiled in the final build correctly
// The glossary should contain the content from
// https://raw.githubusercontent.com/Contrast-Security-OSS/docs/master/content/glossary/Glossary.md
function validateGlossary(content, output) {
  const headings = extractGlossaryHeadings(content);
  const filtered = headings.filter(heading => {
    console.log(`Validating glossary heading "${heading}"`);
    return output.indexOf(heading) >= 0;
  });
  if (headings.length != filtered.length) {
    console.log("Glossary validation failed :(");
    return Promise.reject();
  }
  console.log("Glossary validation passed :)");
  return Promise.resolve();
}

function extractGlossaryHeadings(content) {
  const re = /^## (.*)$/gm;
  let matches;
  const headings = [];
  while ((matches = re.exec(content)) !== null) {
    headings.push(matches[1]);
  }
  return headings;
}

// Prove that the "dist/" substrings have been removed from the sitemap
function validateSitemap(data) {
  return new Promise((resolve, reject) => {
    const parser = xml2js.Parser();
    return parser.parseString(data, (err, result) => {
      if (err) {
        console.log("Parsing sitemap XML failed");
        return reject(err);
      }
      return resolve(result);
    });
  }).then(data => {
    return new Promise((resolve, reject) => {
      const urls = data.urlset.url;
      const found = urls.map(o => o.loc[0]).find(url => {
        console.log(`Validating sitemap entry: "${url}"`);
        return url.indexOf("/dist/") >= 0;
      });
      if (found) {
        console.log(`Sitemap validation failed on url: "${found}"`);
        return reject();
      }
      return resolve();
    });
  });
}
