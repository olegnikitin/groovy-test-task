function fetchStoryParts() {
    $.get(domain + "/storyParts", function () {
        console.log("StoryParts are loading");
    }).done(function (data) {
        console.log("StoryParts are loaded");
        console.log(data);
        return data
    }).fail(function () {
        console.error("StoryParts are loaded with error");
    });
}