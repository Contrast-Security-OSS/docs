// External Links 

var links = document.links;

for (var i = 0, linksLength = links.length; i < linksLength; i++) {
   if (links[i].hostname != window.location.hostname) {
       links[i].target = '_blank';
   } 
}


// Twitter Button 

getShareButtons();
loadTwitterJs();

function getShareButtons()
{
    var buttons = $('.twitter-share-button'),
    	parent = {},
        anchor = {},
        anchor_id = '',
        headline = '',
        page = window.location.href;

    // iterate over each share button
    for (var i = 0; i < buttons.length; i++) {
        // get it's parent anchor tag (this will not work if the share buttons are moved out <a></a>)
        anchor = buttons.eq(i).siblings('.anchor');
        // get the anchor id of the button's parent
        anchor_id = anchor.attr('id');
        // get the headline text
        parent = buttons.eq(i).parents('.actions');
        headline = parent.siblings('h1').text();
        // change the button's data attributes
        buttons.eq(i).attr('data-url', page + '#' + anchor_id);
        buttons.eq(i).attr('data-text', headline);
    }
}

function loadTwitterJs()
{
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
}


// Top Menu Active State 

(function() {
    var path = window.location.pathname,
        // match any keyword that is in between a forward slash and period or underscore
        // /foobar(.|_)
        location_key = path.match(/\/[a-zA-Z]+(\.|_)/);

    if (location_key === null) return;

    // get first item from the returned match array
    location_key = location_key[0];

    // replace the "\", ".", and/or _
    location_key = location_key.replace(/[\/\._]+/g, '');

    // target our section-tab class with the location name
    $('.section-tab-' + location_key).addClass('active');
    
})();


// Side Nav Menu Auto Expand

(function() {
    var path = window.location.pathname,
        // match any keyword that has letters and numbers, and that are between an underscore and a period
        // _v1.
        location_key = path.match(/_[a-zA-Z0-9]+\./);

    if (location_key === null) return;

    // get first item from the returned match array
    location_key = location_key[0];

    // replace the "\", ".", and/or _
    location_key = location_key.replace(/[\/\._]+/g, '');

    // first collapse all expanded panels
    $('a[aria-expanded="true"]').attr('aria-expanded', "false");
    $('div[class="panel-collapse collapse in"]').removeClass('in');

    // get desired panel and expand it
    var panel = $('#panel-' + location_key),
        panel_wrapper=panel.parents('div.panel'),
        collapse=panel_wrapper.find('div.panel-collapse');
        
        panel.attr('aria-expanded', "true");
        collapse.addClass('in');

})();


// Side Nav Java Install Collapse

(function() {
    var path = window.location.pathname,
        // match "../user.html"
        
        location_key = path.match(/\/user\./);

    if (location_key === null) return;

    // get first item from the returned match array
    location_key = location_key[0];

    // replace the "\", ".", and/or _
    location_key = location_key.replace(/[\/\._]+/g, '');

    // collapse all expanded panels
    $('a[aria-expanded="true"]').attr('aria-expanded', "false");
    $('div[class="panel-collapse collapse in"]').removeClass('in');

})();


// GitHub Direct Path to Article

/**
 * Any <article> wrapper that has a div.iconbar with a github edit link will
 * be updated if the <article> element also contains a div with github path attribute
 * <div data-git-edit="content/user/agent/java/config/JavaAgentSystemProperties.md"></div>
 */
 
(function() {
    // get all article elements
    var articles = $('div.article'),
        // get all links with git-edit classes within the article elements
        git_links = articles.find('a.git-edit'),
        path = {},
        git_edit_root = 'https://github.com/Contrast-Security-OSS/docs/blob/master';

    // iterate over each git link found
    for (var i = 0; i < git_links.length; i++) {
        // find the <div data-gitedit=""> in the article element
        path = git_links.eq(i).parents('div.article').find('div[data-git-edit]');
        if (path.length === 1) {
            // get the git edit path from the data attribute
            path = path.data('git-edit');
            // trim any leading or trailing forward slashes in the path
            path = path.replace(/(^\/|\/$)/g, '');
            // update the git edit link
            git_links.eq(i).attr('href', git_edit_root + '/' + path);
        }
    }
})(); 



