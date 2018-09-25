<!doctype html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>Welcome to Grails</title>
    <asset:link rel="icon" href="favicon.ico" type="image/x-ico"/>

    <asset:stylesheet src="application.css"/>

    <script>
        <g:if env="development">
        var env = "DEV";
        </g:if>
        <g:if env="production">
        var env = "PROD";
        </g:if>
        <g:if env="test">
        var env = "TEST";
        </g:if>
    </script>
</head>

<body>
<h1>Stories</h1>
<button class="btn btn-default" type="submit" id="openCreatePage">Create</button>
<content></content>

<asset:javascript src="application.js"/>
<asset:javascript src="story/story.js"/>
<asset:javascript src="storyPart/storyPart.js"/>
</body>
</html>
