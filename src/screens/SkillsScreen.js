import { useEffect, useRef, useState } from "react";

const SkillsScreen = () => {

    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                setVisible(entry.isIntersecting)
            });
        });
        observer.observe(domRef.current);
    }, []);

    useEffect(() => {

        const aboutHeading = document.querySelector(".skills-heading");
        const aboutContent = document.querySelector(".skills-container");
        if (isVisible) {
            aboutHeading.classList.add("animate__fadeInUp");
            aboutContent.classList.add("animate__fadeInUp");
        } else {
            aboutHeading.classList.remove("animate__fadeInUp");
            aboutContent.classList.remove("animate__fadeInUp");
        }
    }, [isVisible]);

    return (
        <section id="skills" ref={domRef}>

            <div className="skills-heading" >
                <h2>SKILLS</h2>
            </div>

            <div className="skills-container">
                <div className="skills-content">
                    <h5>LANGUAGE</h5>
                    <p>Dart</p>
                    <p>Javascript</p>
                    <p>C++</p>
                    <p>C</p>
                    <p>Python</p>
                    <p>Html</p>
                </div>
                <div className="skills-content">
                    <h5>FRAMEWORK</h5>
                    <p>Nodejs</p>
                    <p>Tailwind CSS</p>
                    <p>Bootstrap</p>
                    <p>React</p>
                    <p>Flutter</p>
                </div>

                <div className="skills-content">
                    <h5>DATABASE</h5>
                    <p>Firebase</p>
                    <p>Redis</p>
                    <p>Mongodb</p>
                    <p>MySql</p>
                    <p>Kafka</p>
                </div>
                <div className="skills-content">
                    <h5>TOOL</h5>
                    <p>Docker</p>
                    <p>Git & Github</p>
                    <p>Kubernetes</p>
                    <p>AWS</p>
                    <p>Digital Ocean</p>
                    <p>Heroku</p>
                    <p>Render</p>

                </div>
            </div>
        </section>
    );
}

export default SkillsScreen;