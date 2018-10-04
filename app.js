//For Feathericons
feather.replace();

//TODO
/*
1) FAB to scroll to top
2) Multiple hero with snapping
3) Weird things added to each of those heroes
4) Bottom NavBar with even more shit
5)?? still to decide
*/
//hero Pagination code::
$(function () {
    $.scrollify({
        section: ".hero",
        interstitialSection: ".footer",
        scrollbars: false,
        before: function (i, hero) {

            var ref = hero[i].attr("data-section-name");

            $(".pagination .active").removeClass("active");

            $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
        },
        afterRender: function () {
            var pagination = "<ul class=\"pagination\">";
            var activeClass = "";
            $(".panel").each(function (i) {
                activeClass = "";
                if (i === 0) {
                    activeClass = "active";
                }
                pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
            });

            pagination += "</ul>";

            $(".home").append(pagination);
            /*
  
        Tip: The two click events below are the same:
  
        $(".pagination a").on("click",function() {
          $.scrollify.move($(this).attr("href"));
        });
  
        */
            $(".pagination a").on("click", $.scrollify.move);
        }
    });
});