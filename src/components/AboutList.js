import React from "react";

export const AboutList = () => {
    const technologies = ['Java', 'Python', 'C', 'HTML & CSS', 'React.js', 'JavaScript ES6+']

    return(
        <div className="about-list-container">
            <div className="about-list-left">
                {technologies.slice(0,3).map((technology, index) => (
                    <li key={index} className="list-item">{technology}</li>
                ))}
            </div>
            <div className="about-list-right">
                {technologies.slice(3).map((technology, index) => (
                    <li key={index} className="list-item">{technology}</li>
                ))}
            </div>
        </div>
    )
}