# open-docs

> The best project ever..

Open-Docs is a Contrast project based on the [Assemble Project](http://assemble.io/), which is a descendent of the [Yeoman Web Scaffolding Project](http://yeoman.io). The project has two components:

- [docs](https://github.com/Contrast-Security-OSS/docs): Markdown and assets making up the Open-Docs project.
- [source](https://bitbucket.org/contrastsecurity/open-docs): Handlebars, Node and JavaScript making up the core project.

## Getting Started

These instructions assume you have [git, Node.js and yarn](https://bitbucket.org/contrastsecurity/contrast-developer-environment) installed and are connected to the the Internet.

- Clone the Open-Docs Project

```bash
git clone git@bitbucket.org:contrastsecurity/open-docs.git
cd open-docs
```

- Install project dependencies

```bash
yarn install
```

- Initialize the Docs Sub-Module

```bash
git submodule update --init
```

- Build Only: builds the site and places the resulting assets in the `dist` directory.

```bash
yarn run build
```

- Build and Serve: In addition to building the site as in the previous step, this serves the assets from the `dist` directory locally and opens the site in a browser tab.

```bash
yarn run start
```

## Menu and Article "Hide" Feature

You can hide a menu section or item by adding `hidden: true` to the respective YAML/front matter section.
This feature is custom and not part of the `grunt-assemble` library.

### Example: Hide Sidenav 1st Level Section

In `navbarside.yml`...

    menu:
    - heading: Release News
      hidden: true
      id: release

### Example: Hide Sidenav 2nd Level Section

In `navbarside.yml`...

    menu:
    - heading: Release News
      id: release
      subgroups:
      - heading: Version 3
        hidden: true
        id: version3
        items:
        - name: 3.3.8
          href: release_v33.html#338

### Example: Hide Sidenav 3rd Level Item

In `navbarside.yml`...

    menu:
    - heading: Release News
      id: release
      subgroups:
      - heading: Version 3
        id: version3
        items:
        - name: 3.3.8
          hidden: true
          href: release_v33.html#338
        - name: 3.3.7
          href: release_v33.html#337

### Example: Hide Article

In the front matter of an article (\*.hbs) file:

    title: Release Notes
    breadcrumb: ['Release Notes', 'Version 3.3']
    layout: src/templates/layouts/page.hbs
    sourcelinkArticleBase: content/release/v3/
    articles:
    - heading: Contrast 3.3.8 - March 2017
      sourcelink: ReleaseNotes338.md
      anchor: 338
      md: docs/content/release/v3/ReleaseNotes338.md
      hidden: true

## Menu TOC "Quick Links"

In the article file (\*.hbs) front matter...

- Add the "quickLinks" property, with a list of options, each with a "name" and "anchor" property
- Adding this option will automatically add the "Back to Top" link under each article.

```
title: Upgrade Contrast
breadcrumb: ['Administration', 'EOP Maintenance']
layout: src/templates/layouts/page.hbs
sourcelinkArticleBase: content/admin/eop_maintenance/upgrade/
quickLinks:
- name: Overview
  anchor: contrast
- name: External Rules
  anchor: rules
```

## Menu TOC "Select Menu"

In the article file (\*.hbs) front matter...

- Add the "selectMenu" property.
- selectMenu.placeholder is optional
- selectMenu.options is a list of options, each with a "name" and "anchor" property
- Adding this option will automatically add the "Back to Top" link under each article.

```
title: Installation
breadcrumb: ['Installation &amp; Setup', 'Java Agent']
layout: src/templates/layouts/page.hbs
sourcelinkArticleBase: content/installation/java/installation/
selectMenu:
  placeholder: Select your Container
  options:
  - name: Axis
    anchor: axis
  - name: Cloud Foundry
    anchor: cloud
```
