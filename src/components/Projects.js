import React from "react"
import FadeIn from "react-fade-in/lib/FadeIn"
import { OnScreen } from "./OnScreen"
import { ProjectTypewriter } from "./ProjectTypeWriter"
import { ProjectsCarousel } from "./ProjectsCarousel"

export const Projects = () => {
    const [ref, isVisible] = OnScreen();

    return (
        <div ref={ref} className="projects-container" id="projects">
            {isVisible && (
                <>
                    <div className="projects-content">
                        <FadeIn delay={200}>
                            <ProjectTypewriter/>
                            <ProjectsCarousel />
                        </FadeIn>
                    </div>
                </>
            )}
        </div>
    )
}