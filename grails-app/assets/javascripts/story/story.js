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

function createStoriesTable(stories) {
    // $("content").body("");
    var result = '<table id="storiesTable">' + storiesHead() + storyBody(stories) + '</table>';
    $("content").append(result);
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

function storyBody(stories) {
    var result = '';

    stories.forEach(function (story) {
        result += '<tr>' +
            '            <td>' + story.id + '</td>' +
            '            <td>' + story.storyTitle + '</td>' +
            '            <td>' + story.characterName + '</td>' +
            '            <td>' + renderSelectedParts(story.selectedParts) + '</td>' +
            '            <td class="centered">Edit | delete</td>' +
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