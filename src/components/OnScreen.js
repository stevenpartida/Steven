import React  from "react";
import { useState, useEffect, useRef } from "react";

export const OnScreen = (options) => {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1,...options}
        );

        if(ref.current) {
            observer.observe(ref.current);
        }

        return() => {
            if(ref.current) {
                observer.unobserve(ref.current);
            }
        }
    }, [ref, options]);

    return [ref, isVisible];

}