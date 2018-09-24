package io.smexdigitaltest.domain

import grails.rest.Resource

@Resource(uri='/storyParts')
class StoryPart {
    String content
    StoryPartType type

    static constraints = {
        content blank: false
    }

    enum StoryPartType {
        BEGINNING, MIDDLE, END
    }
}
