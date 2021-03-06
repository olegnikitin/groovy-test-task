package oleg.tech.assessment

class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(view:"/index")
        "500"(view:'/error')
        "404"(view:'/notFound')

        "/stories"(resources:'Story')
        "/storyParts"(resources:'StoryPart')
    }
}
