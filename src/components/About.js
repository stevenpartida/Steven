import React from "react"
import { AboutTypewriter } from "./AboutTypeWriter"
import { OnScreen } from "./OnScreen"
import FadeIn from "react-fade-in/lib/FadeIn"
import { AboutList } from "./AboutList"

export const About = () => {
    const [ref, isVisible] = OnScreen();

    return (
        <div ref={ref}  className="about-container" id="about">
            {isVisible && (
                <>
                    <div className="about-content">
                        <AboutTypewriter/>
                        <div className="about-description">
                            <FadeIn delay={200}>
                                <div className="about-top">
                                    <p>I am currently a College Student pursuing a Bachelor of Science degree in Computer Science at <b>California State University, Los Angeles</b>.
                                    My post-graduation goals are to secure a position as a software engineer and potentially pursue a Master's degree in Computer Science.
                                    </p>
                                </div>
                                <div className="about-mid">
                                    <p>
                                        These are some technologies I've been working with:
                                    </p>
                                    <AboutList/>
                                </div>
                                <div className="about-bottom">
                                    <p>
                                        Outside of college, I enjoy playing video games and further developing my programming skills.
                                    </p>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}