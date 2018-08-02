var TIMER_DELAY = 100;
var TIMER_ID;
var ARTICLE_CONTAINER_CLASS = 'article-container';

/**
 * @description View controller for articles
 * @param {boolean} hasTOC
 * @constructor
 */
function Articles(hasTOC) {
  this.hasTOC = hasTOC;
}

/**
 * @description
 * - If "quick links" exist, all articles are displayed and scrollable.
 *   The quick links are just a table of contents that makes use of
 *   in-page anchors and browser auto-scrolling.
 * - If "quick links" do not exist, only the "current" article is displayed.
 *   All other articles are hidden via CSS. The current article is determined
 *   by the current hash, or, if no hash exists in the URL, then the current
 *   file/pathname (first article).
 */
Articles.prototype.toggleArticleVisibility = function () {
  if (!this.hasTOC) {
    this.showCurrentArticle();
  }
};

Articles.prototype.showCurrentArticle = function () {
  this.hideAllArticles();
  var str = Location.getCurrent(true),
    el = document.getElementById(str);
  if (el) {
    $(el).removeClass('hide');
  } else {
    // show the first article because there is probably only one
    var $el = $('.page-article');
    if ($el.length) {
      $el.removeClass('hide');
    }
  }
};

Articles.prototype.hideAllArticles = function () {
  var articles = document.getElementsByClassName('page-article'),
    i = 0,
    len = articles.length,
    article;
  for (; i < len; i++) {
    article = articles[i];
    if (article.className.indexOf('hide') == -1) {
      $(article).addClass('hide');
    }
  }
};

/**
 * @description This auto scrolls for articles w/out quick links
 */
Articles.prototype.scrollToContent = function () {
  var id = Location.getCurrent(true);
  var el = document.getElementById(id);
  if (el) {
    var $articleContainer = $(this.getFirstArticleContainer());
    $articleContainer[0].scrollTop = $articleContainer.offset().top - $articleContainer.parent().offset().top - $articleContainer.parent().scrollTop();
  }
};

Articles.prototype.scrollToQuickLinksContent = function () {
  var id = Location.getCurrent();
  var $el = $(id);
  if ($el.length) {
    var parent = $el.parent()[0];
    parent.scrollTop = $el.offset().top;

    if (TIMER_ID) {
      window.clearTimeout(TIMER_ID);
    }
    TIMER_ID = setTimeout(function () {
      parent.scrollTop = parent.scrollTop - 80;
    }, TIMER_DELAY);
  }
};

/**
 * @description This fixes the browser default scroll functionality
 */
Articles.prototype.fixQuickLinksScroll = function () {
  var id = Location.getCurrent();
  var $el = $(id);
  if ($el.length) {
    var parent = $el.parent()[0];
    parent.scrollTop = parent.scrollTop - 80;
  }
};

/**
 * @description Scrolls the article container to the top, which is necessary since clicking an in-page
 * anchor won't scroll all the way to the top, and the content is clipped.
 */
Articles.prototype.articleScrollFix = function () {
  var self = this;
  if (TIMER_ID) {
    window.clearTimeout(TIMER_ID);
  }
  TIMER_ID = setTimeout(function () {
    var el = self.getFirstArticleContainer();
    if (el) {
      el.scrollTop = 0;
    }
  }, TIMER_DELAY);
};

Articles.prototype.getArticleContainers = function () {
  return document.getElementsByClassName(ARTICLE_CONTAINER_CLASS);
};

Articles.prototype.getFirstArticleContainer = function () {
  return this.getArticleContainers()[0];
};
