package io.smexdigitaltest.domain

import grails.testing.gorm.DomainUnitTest
import spock.lang.Specification

class StoryPartSpec extends Specification implements DomainUnitTest<StoryPart> {

    def setup() {
    }

    def cleanup() {
    }

    def "validate StoryPart #map with result #expectValue"() {
        when:
        def result = new StoryPart(map).validate()

        then:
        result == expectValue

        where:
        map                                                     | expectValue
        [content: ""]                                           | false
        [content: null]                                         | false
        [type: null]                                            | false
        [content: "a", type: StoryPart.StoryPartType.BEGINNING] | true
    }
}
