import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import project1 from "../assets/images/TodoProject.png"
import project2 from "../assets/images/FranciscoRoofing.png"
import project3 from "../assets/images/WeatherApp.png"
export const ProjectsCarousel = () => {
    return(
        <div className="carousel-container">
            <Carousel data-bs-theme="dark" interval={3000}>
                <Carousel.Item >
                    <img className="carousel-imgs"
                        src={project3}
                    />
                    <Carousel.Caption>
                    <h3>Weather Web App</h3>
                    <p>Used WeatherApi to design and create a weather web application</p>
                    <div className="projects-link-icons">
                        <a href="https://github.com/stevenpartida/weather-web-app">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>github</title>
                                <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                            </svg>
                        </a>
                        <a href="https://stevenpartida.github.io/weather-web-app/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>upload-box-outline</title>
                            <path d="M8 17V15H16V17H8M16 11L12 7L8 11H10.5V14H13.5V11H16M5 3H19C20.11 3 21 3.9 21 5V19C21 20.11 20.11 21 19 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3M5 5V19H19V5H5Z" />
                        </svg>
                        </a>
                    </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img className="carousel-imgs"
                        src={project2}
                    />
                    <Carousel.Caption>
                    <h3>Business Web Page</h3>
                    <p>Built and deployed a web page for a local roofing company</p>
                    <div className="projects-link-icons">
                        <a href="https://github.com/stevenpartida/FranciscosRoodingInc">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>github</title>
                                <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                            </svg>
                        </a>
                        <a href="https://franciscosroofinginc.co/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>upload-box-outline</title>
                            <path d="M8 17V15H16V17H8M16 11L12 7L8 11H10.5V14H13.5V11H16M5 3H19C20.11 3 21 3.9 21 5V19C21 20.11 20.11 21 19 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3M5 5V19H19V5H5Z" />
                        </svg>
                        </a>
                    </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="carousel-imgs"
                        src={project1}
                    />
                    <Carousel.Caption>
                    <h3>Todo List Web App</h3>
                    <p>
                        Design and developed a todo list web application
                    </p>
                    <div className="projects-link-icons">
                        <a href="https://github.com/stevenpartida/Todo">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>github</title>
                                <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                            </svg>
                        </a>
                        <a href="https://stevenpartida.github.io/Todo/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>upload-box-outline</title>
                            <path d="M8 17V15H16V17H8M16 11L12 7L8 11H10.5V14H13.5V11H16M5 3H19C20.11 3 21 3.9 21 5V19C21 20.11 20.11 21 19 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3M5 5V19H19V5H5Z" />
                        </svg>
                        </a>
                    </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}