function App() {
  this.onPageLoad();
}

App.prototype.onPageLoad = function () {
  this.updateLinks();
  this.menu = new Menu();
  this.tocSelectMenu = new TocSelectMenu(this.tocSelectMenuOnChange.bind(this));
  this.quickLinks = new QuickLinks();
  this.hasTOC = this.tocSelectMenu.exists || this.quickLinks.exists;
  this.articles = new Articles(this.hasTOC);

  if (this.menu.exists()) {
    window.onhashchange = this.onHashChangeHandler.bind(this);
  }
  this.articles.toggleArticleVisibility();
  if (this.hasTOC) {
    if (location.hash) {
      this.expandMenu();
      this.articles.scrollToQuickLinksContent();
    }
  } else {
    this.articles.articleScrollFix();
  }

  Search.init($, lunr);
};

App.prototype.tocSelectMenuOnChange = function (value) {
  location.hash = '#' + value;
  this.tocSelectMenu.reset();
};

App.prototype.onHashChangeHandler = function () {
  var href = Location.getCurrent();
  var menuItem = this.menu.getByHref(href);
  this.menu.setMenuStyleAsActive(menuItem);
  this.articles.toggleArticleVisibility();
  if (Location.isQuickLinkHash()) {
    this.articles.articleScrollFix();
  }
  if (this.hasTOC) {
    href = location.pathname.substring(1);
    menuItem = this.menu.getByHref(href);
    this.menu.setMenuStyleAsActive(menuItem);
    if (location.hash) {
      this.articles.fixQuickLinksScroll();
    }
  } else {
    this.articles.scrollToContent();
  }
};

App.prototype.expandMenu = function () {
  var href = location.pathname.substring(1);
  var menuItem = this.menu.getByHref(href);
  if (menuItem.length) {
    this.menu.openMenuToCurrentAnchor(menuItem);
  }
};

/**
 * @description Ensure that external links are not opened in the same window
 */
App.prototype.updateLinks = function () {
  var links = document.links,
    link;
  for (var i = 0, linksLength = links.length; i < linksLength; i++) {
    link = links[i];
    if (link.href.indexOf('mailto') < 0) {
      if (link.hostname != window.location.hostname) {
        link.target = '_blank';
      } else {
        link.target = '_self';
      }
    }
  }
};
