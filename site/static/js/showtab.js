var hash = window.location.hash;
jQuery('.nav.nav-pills a[href="' + hash + '"]').tab('show', function() {
    jQuery(document).scrollTop();
});

jQuery("ul.nav-pills > li > a").on("shown.bs.tab", function (e) {
   scrollposition = jQuery(document).scrollTop();
   var id = jQuery(e.target).attr("href").substr(1);
   window.location.hash = id;
   jQuery(document).scrollTop();
});
