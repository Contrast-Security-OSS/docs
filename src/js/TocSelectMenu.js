/**
 * @description A controller for any "TOC select menu" used for article navigation
 * @constructor
 */
function TocSelectMenu(observerCb) {
  this.exists = document.getElementsByClassName('article-toc-menu').length > 0;
  if (this.exists) {
    this.observerCb = observerCb;
    document.querySelector('select[name="article-toc-menu"]').onchange = this.onChange.bind(this);
  }
}

TocSelectMenu.prototype.onChange = function (event) {
  var val = event.target.value;
  if (val && typeof this.observerCb === 'function') {
    this.observerCb(val);
  }
};

TocSelectMenu.prototype.reset = function () {
  var el = document.querySelector('select[name="article-toc-menu"]');
  el.options.selectedIndex = 0;
};
