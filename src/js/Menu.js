/**
 * @description Side navigation menu controller
 * @constructor
 */
function Menu() {
  this.menu = $('.cd-accordion-menu');
  if (this.menu.length) {
    this.init();
  }
}

Menu.prototype.init = function () {
  var self = this;
  this.menu.each(function () {
    $(this).on('change', 'input[type="checkbox"]', function () {
      self.onCheckboxChange(this, self);
    });
  });
  this.collapseAll();
  this.openMenuToCurrentAnchor();
};

Menu.prototype.openMenuToCurrentAnchor = function (menuItem) {
  if (!menuItem) {
    menuItem = this.getByHref(Location.getCurrent());
  }
  if (menuItem) {
    var ul = this.openAndCheck(menuItem);
    if (ul) {
      this.openAndCheck(ul);
    }
    this.setMenuStyleAsActive(menuItem);
  }
};

Menu.prototype.openAndCheck = function (el) {
  var parent = el.parent().parent();
  if (parent.length) {
    parent.parent().find('input[type="checkbox"]')[0].checked = true;
    this.openMenu(parent);
    return parent;
  }
};

Menu.prototype.onCheckboxChange = function (jqCtx, menuCtx) {
  var checkbox = $(jqCtx);
  var siblings = checkbox.siblings('ul');
  var label = checkbox.siblings('label');
  menuCtx.removeActiveClassFromLevel1Labels(label);
  if (checkbox.prop('checked')) {
    label.addClass('active');
    menuCtx.openMenu(siblings);
    menuCtx.unCheckAdjacent(label);
  }
  else {
    menuCtx.closeMenu(siblings);
    if (label[0].className.indexOf('level1') > -1) {
      menuCtx.closeDescendantMenus(checkbox);
    }
  }
};

/**
 * @description Removes the "active" class from all level1 labels
 * @param $label
 */
Menu.prototype.removeActiveClassFromLevel1Labels = function ($label) {
  if ($label.hasClass('level1')) {
    $('.level1.active').each(function () {
      $(this).removeClass('active');
    });
  }
};

// This is a level1 menu, close it's descendant menus
Menu.prototype.closeDescendantMenus = function (checkbox) {
  checkbox.siblings('ul').find('input[type="checkbox"]').each(function () {
    if (this.checked) {
      this.checked = false;
    }
  });
};

Menu.prototype.closeMenu = function (el) {
  el.attr('style', 'display:block;').slideUp(300)
};

Menu.prototype.openMenu = function (el) {
  el.attr('style', 'display:none;').slideDown(300)
};

Menu.prototype.unCheckAdjacent = function (label) {
  label.parent().siblings('li').find('input[type="checkbox"]').each(function () {
    if (this.checked) {
      this.checked = false;
    }
  });
};

Menu.prototype.collapseAll = function () {
  this.menu.find('li.has-children').each(function () {
    var children = $(this).find('input[type="checkbox"]');
    children.each(function () {
      this.checked = false;
    });
  });
};

Menu.prototype.getByHref = function (href) {
  return this.menu.find('a[href$="' + href + '"]');
};

Menu.prototype.setMenuStyleAsActive = function (el) {
  this.menu.find('a.active').removeClass('active');
  el.addClass('active');
  el.closest('.level1-container').find('label.level1').addClass('active');
};

Menu.prototype.exists = function () {
  return this.menu.length > 0;
};
