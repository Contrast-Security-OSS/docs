function Search () {}

Search.init = function ($, lunr) {
  var idx,
    searchData,
    indexData = $.getJSON('assets/index_data.json'),
    searchDataPromise = $.getJSON('assets/search_data.json');

  indexData.then(function (data) {
    idx = lunr.Index.load(data);
  });
  searchDataPromise.then(function (data) {
    searchData = data;
  });

  Handlebars.registerHelper('each', function (context, options) {
    var ret = "";
    for (var i = 0, j = context.length; i < j; i++) {
      ret = ret + options.fn(context[i]);
    }

    return ret;
  });

  var templateHtml = $('#result-template');
  var template = Handlebars.compile(templateHtml.html());

  var substringMatcher = function () {
    return function findMatches(q, cb) {

      var results = idx.search(q),
        matches = [];

      var groups = {};

      //iterate results to find matches with a particular score
      $.each(results, function(i, result) {
          var data = searchData[result.ref];
          if(result.score > 0.01){
              if(!groups[data.group]){
                  groups[data.group] = [];
              }
              groups[data.group].push({
                  url: data.url,
                  title: data.heading ? data.heading : data.title,
                  value: data.title,
                  breadcrumb: data.group
              });
          }
      });

      $.each(groups, function(key, value) {
          matches.push({
              title: key,
              articles: value,
              class: 'developer',
              value: key
          });
      });

      cb(matches);
    };
  };

  var searchEl = $('#search');
  if (searchEl.length) {
    searchEl.typeahead({
        hint: true,
        highlight: true,
        minLength: 1
      },
      {
        name: 'results',
        source: substringMatcher(),
        templates: {
          suggestion: template
        },
        display: function (data) {
          return null;
        }
      });
  }
};
