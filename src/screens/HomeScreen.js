import { useEffect } from "react";
import Socials from "../components/Socials";
import "../styles/particle.css";

const HomeScreen = () => {

    useEffect(() => {
        //typwriter effect to show text and delete then show another text
        const texts = ["A Full Stack Web Developer ", "A Programmer ", "A Student ", "A Tech Enthusiast "];
        let count = 0;
        let index = 0;
        let currentText = "";
        let letter = "";
        let isDeleting = false;

        const type = () => {
            if (count === texts.length) {
                count = 0;
            }
            currentText = texts[count];
            if (isDeleting) {
                letter = currentText.slice(0, --index);
            } else {
                letter = currentText.slice(0, ++index);
            }
            document.querySelector(".home-content p").textContent = letter == '' ? '.' : letter;
            if (letter.length === currentText.length) {
                isDeleting = true;
            }
            if (letter.length === 0) {
                isDeleting = false;
                count++;
            }
            setTimeout(type, 150);
        }
        type();



    }, [])

    return (
        <section id="home">
            <div id="particle-container">
                {
                    [...Array(20)].map((e, i) => {
                        return <div key={i} class="particle"></div>
                    })
                }
            </div>
            <div className="home-content">
                <h1>HEY, I'M <span style={{ color: "orange" }}>RAJAT&nbsp;KHATRI</span></h1>
                <iframe style={{ pointerEvents: "none", userSelect: "none" }} src="https://giphy.com/embed/LEe5yo2E9Fi3FmuEPK" width="180" height="180" allowFullScreen></iframe>
                <p></p>
            </div>
            <span style={{ position: "absolute", bottom: "7%" }} class="scroll-btn">
                <a href="#about">
                    <span class="mouse">
                        <span>
                        </span>
                    </span>
                </a>
            </span>
            <div className="home-scials">
                <Socials />
            </div>
        </section >
    )
}

export default HomeScreen;