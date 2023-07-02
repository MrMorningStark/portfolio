import { useState } from "react";
import Card from "../components/Card";
import ProjectReadMore from "../components/ProjectReadMore";

const Projects = () => {

    const [readMoreData, setReadMoreData] = useState(false);

    const projectdData = [
        {
            img: 'https://anshrathod.com/_next/image?url=%2Fimgs%2FCineast-1.PNG&w=128&q=75',
            name: 'Brain Wave',
            title: 'Brain Wave',
            description: 'Brain Wave built with ReactJS, NodeJS. It uses the OpenAI API to respond to messages.',
            liveDemo: 'https://chat-client-1oud.onrender.com/'
        },
        {
            img: 'https://anshrathod.com/_next/image?url=%2Fimgs%2FMusive-3.PNG&w=128&q=75',
            name: 'MUSIVE',
            title: 'Fully Functional music player with UI like Spotify app.',
            description: 'Full-stack music player app is written in flutter and dart using node.js music API. Fully Functional music player with UI like Spotify app. Added 1000+ royalty-free music and information about artists. Application users can make their own playlist or collect liked songs.',
            liveDemo: 'https://chat-client-1oud.onrender.com/'
        },
        {
            img: 'https://anshrathod.com/_next/image?url=%2Fimgs%2FPhotoarc-1.PNG&w=128&q=75',
            name: 'PHOTOARC',
            title: 'A movie search app',
            description: 'A movie search app built with React, Next.js, and Tailwind CSS. It uses the TMDB API to fetch movies and display them.',
            liveDemo: 'https://chat-client-1oud.onrender.com/'
        },
        {
            img: 'https://anshrathod.com/_next/image?url=%2Fimgs%2FMoviedb-2.PNG&w=128&q=75',
            name: 'MOVIEDB',
            title: 'A movie search app',
            description: 'A movie search app built with React, Next.js, and Tailwind CSS. It uses the TMDB API to fetch movies and display them.',
            liveDemo: 'https://chat-client-1oud.onrender.com/'
        },
        {
            img: 'https://anshrathod.com/_next/image?url=%2Fimgs%2FCineast-1.PNG&w=128&q=75',
            name: 'Cineast',
            title: 'A movie search app',
            description: 'A movie search app built with React, Next.js, and Tailwind CSS. It uses the TMDB API to fetch movies and display them.',
            liveDemo: ''
        },
    ];

    const handleReadMore = (data) => {
        setReadMoreData(data);
        if (data) {
            window.location.href = "#projects";
            document.body.style.overflow = "hidden";
            //BLUR HEADER
            document.getElementById("header").style.filter = "blur(5px)";
            document.getElementById("header").style.pointerEvents = "none";
        }else{
            document.body.style.overflow = "auto";
            document.getElementById("header").style.filter = "blur(0px)";
            document.getElementById("header").style.pointerEvents = "auto";
        }
    }

    return (
        <><section id="projects">
            <div className="project-heading">
                <h3>COMPLETED PROJECTS</h3>
                <p>I have worked with multiple technologies as a developer to build and maintain my projects.</p>
            </div>
            <div className="project-cards">
                {
                    projectdData.map((project, index) => {
                        return (
                            <Card
                                key={index}
                                index={index + 1}
                                img={project.img}
                                name={project.name}
                                title={project.title}
                                description={project.description}
                                liveDemo={project.liveDemo}
                                handleReadMore={handleReadMore}
                            />
                        )
                    })
                }
            </div>
        </section>
            {
                readMoreData && <ProjectReadMore readMoreData={readMoreData} />
            }
        </>
    )
}

export default Projects;