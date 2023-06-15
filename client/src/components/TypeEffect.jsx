import React, {useState, useEffect} from "react";

const TypeEffect = ({ text, speed = 100 }) => {
    
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let index = 0
        const typingInterval = setInterval(() => {
            if (index < text.length - 1) {
                setDisplayedText((prevText) => prevText + text[index])
                index++;
            } else {
                clearInterval(typingInterval)
            }
        }, speed)

        return () => {
            clearInterval(typingInterval)
        }
    }, [text, speed])
    return <span className="slogan"> { displayedText }</span>
}

export default TypeEffect;