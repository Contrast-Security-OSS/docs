

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
