package io.smexdigitaltest.domain

import grails.testing.gorm.DomainUnitTest
import spock.lang.Specification

class StorySpec extends Specification implements DomainUnitTest<Story> {

    def setup() {
    }

    def cleanup() {
    }

    def "validate Story #map with result #expectValue"() {
        when:
        def result = new Story(map).validate()

        then:
        result == expectValue

        where:
        map                                   | expectValue
        [storyTitle: ""]                      | false
        [storyTitle: null]                    | false
        [characterName: null]                 | false
        [characterName: ""]                   | false
        [characterName: "a", storyTitle: "v"] | true
    }
}
