// This is a manifest file that'll be compiled into application.js.
//
// Any JavaScript file within this directory can be referenced here using a relative path.
//
// You're free to add application-wide JavaScript to this file, but it's generally better
// to create separate JavaScript files as needed.
//
//= require jquery-2.2.0.min
//= require bootstrap
//= require_tree .
//= require_self

var domainName = "http://localhost:8080";

if (typeof jQuery !== 'undefined') {
    (function ($) {
        $("#openCreatePage").on("click", function () {
            location.hash = "#create";
        });

        if (!location.hash) {
            fetchStories()
        }
        window.onhashchange = function () {//todo: make the same with reload page
            if (location.hash === "#create") {
                openCreatePage();
                console.log("create page opened");
            } else if (location.hash.startsWith("#editStory")) {
                console.log("edit page opened");
            } else {
                console.log("Index page opened");
                fetchStories();
            }
        }
    })(jQuery);
}
