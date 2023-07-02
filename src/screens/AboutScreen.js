import { useEffect, useRef, useState } from "react";

const AboutScreen = () => {
    const experienceYears = new Date().getFullYear() - 2022;

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

        const aboutHeading = document.querySelector(".about-heading");
        const aboutContent = document.querySelector(".about-content");
        if (isVisible) {
            aboutHeading.classList.add("animate__fadeInUp");
            aboutContent.classList.add("animate__fadeInUp");
        } else {
            aboutHeading.classList.remove("animate__fadeInUp");
            aboutContent.classList.remove("animate__fadeInUp");
        }
    }, [isVisible]);

    return (
        <section id="about">
            <div className="about-container" ref={domRef}>

                <div className="about-heading">
                    <h2>About</h2>
                    <h4>ME, MYSELF AND I</h4>
                </div>
                <div className="about-content">
                    <p>Hi, I’m a full stack web developer with over {experienceYears} year of experience. I have a knack for solving problems and making things work.
                    </p>
                    <p>
                        I have experience in using a bunch of technologies and frameworks 🛠️. You name it, I’ve probably used it. Or at least googled it. I enjoy learning new skills 📚 and taking on new challenges.
                    </p>
                    <p>
                        I’m always up for a fun and interesting project, whether it’s a website for your business, or an app for your idea. Or maybe something completely crazy and out of the box. I’m game. Contact me today and let’s make something amazing together! 😊
                    </p>

                </div>
            </div>
        </section>
    )
}

export default AboutScreen;