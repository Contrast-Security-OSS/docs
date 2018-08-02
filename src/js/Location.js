var QUICK_LINKS_HASH = '#quick-links';

/**
 * @description Location handling singleton
 * @constructor
 */
function Location() {
}

/**
 * @description gets 'current location' in a way that is simplified for our app
 * @param {boolean} [stripHash] - if true, the hash/number symbol is removed from the string
 * @returns {string}
 */
Location.getCurrent = function (stripHash) {
  var hash = location.hash;
  var pathname = location.pathname;
  var str = hash.trim() == '' || hash == QUICK_LINKS_HASH ? pathname.substring(1) : hash;
  return stripHash && str.indexOf('#') == 0 ? str.substring(1) : str;
};

/**
 * @description determines if the current hash is the "quick links" hash
 * @returns {boolean}
 */
Location.isQuickLinkHash = function () {
  return location.hash == QUICK_LINKS_HASH;
};
