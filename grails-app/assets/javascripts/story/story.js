function fetchStories() {
    $.get(domainName + "/stories", function () {
        console.log("Stories are loading");
    }).done(function (data) {
        console.log("Stories are loaded");
        console.log(data);
        createStoriesTable(data);
    }).fail(function () {
        console.error("Stories are loaded with error");
    });
}

function deleteStory(id) {
    console.log("Story is being deleted");
    $.ajax({
        url: domainName + "/stories/" + id,
        method: "DELETE"
    }).done(function () {
        console.log("Story is deleted");
        fetchStories();
    }).fail(function () {
        console.error("Story isn't deleted");
    });
}

function createStoriesTable(stories) {
    $("content")
        .empty()
        .append('<table id="storiesTable">' + storiesHead() + storyBody(stories) + '</table>');
}

function storiesHead() {
    return '<tr>' +
        '            <td>Id</td>' +
        '            <td>Title</td>' +
        '            <td>Character</td>' +
        '            <td>Selection</td>' +
        '            <td></td>' +
        '        </tr>';
}

function renderEditButtons(id) {
    return '<button class="btn btn-default" type="submit" onclick="openEditPage(' + id + ')">Edit</button>'
        + '<button class="btn btn-default" type="submit" onclick="deleteStory(' + id + ')">Delete</button>';
}

function storyBody(stories) {
    var result = '';

    stories.forEach(function (story) {
        result += '<tr>' +
            '            <td>' + story.id + '</td>' +
            '            <td>' + story.storyTitle + '</td>' +
            '            <td>' + story.characterName + '</td>' +
            '            <td>' + renderSelectedParts(story.selectedParts) + '</td>' +
            '            <td>' + renderEditButtons(story.id) + '</td>' +
            '        </tr>';
    });

    return result;
}

function renderSelectedParts(selectedParts) {
    var result = '';

    selectedParts.forEach(function (part) {
        result += part.id;//todo: make request for real name with async false
    });

    return result;
}

function openCreatePage() {
    $("content")
        .empty()
        .append("");
}

function openEditPage() {
    $("content")
        .empty()
        .append("");
}

function renderCreateEditPage() {
    // $("content").
}