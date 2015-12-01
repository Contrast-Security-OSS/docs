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
    
})()

// Side Nav Menu Dynamic Expand
(function() {
    var path = window.location.pathname,
        // match any keyword that is in between an underscore and a period
        // /foobar(.|_)
        location_key = path.match(/\_[a-z0-9]+(\.)/);

    if (location_key === null) return;

    // get first item from the returned match array
    location_key = location_key[0];

    // replace the "\", ".", and/or _
    location_key = location_key.replace(/[\/\._]+/g, '');

    // target our section-tab class with the location name
    $('.panel-title-' + location_key).addClass('active');

}) ()


