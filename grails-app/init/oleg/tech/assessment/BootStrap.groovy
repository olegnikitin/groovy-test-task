package oleg.tech.assessment

import io.smexdigitaltest.domain.Story
import io.smexdigitaltest.domain.StoryPart

class BootStrap {

    def init = { servletContext ->
        new Story([characterName: "a", storyTitle: "v", selectedParts: [new StoryPart(content: "ab", type: StoryPart.StoryPartType.END)]]).save(true)
    }
    def destroy = {
    }
}
