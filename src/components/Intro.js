import React from "react"
import { Typewriter } from "./Typewriter"
import FadeIn from "react-fade-in/lib/FadeIn"
import { OnScreen } from "./OnScreen"

export const Intro = () => {
    const [ref, isVisible] = OnScreen();

    return (
        <div ref={ref}  className="intro-container" id="intro">
            {isVisible && (
                <>
                    <div className="intro-content">
                        <Typewriter/>
                        <div className="intro-description">
                            <FadeIn delay={200}>
                                <p>
                                I am a Computer Science student from Los Angeles, California, with a strong interest in full stack development.
                                I thrive on the challenges and opportunities that come with developing dynamic and responsive software and web applications.
                                </p>
                                <a href="mailto:spartida0002@gmail.com" className="intro-email-btn">
                                    <svg className="intro-email-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>email</title>
                                        <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                                    </svg>
                                    <p>Say hi!</p>
                                </a>
                            </FadeIn>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}