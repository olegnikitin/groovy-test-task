package io.smexdigitaltest.domain

import grails.rest.Resource

@Resource(uri='/stories')
class Story {

    String storyTitle
    String characterName
    Set<StoryPart> selectedParts

    static constraints = {
        storyTitle blank: false, unique: true
        characterName blank: false
    }
}
