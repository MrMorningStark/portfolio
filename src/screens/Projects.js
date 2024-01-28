import { useState } from "react";
import Card from "../components/Card";
import ProjectReadMore from "../components/ProjectReadMore";
import brainWaveDemoGif from "../images/BrainWaveDemo.gif";
import brainWaveImg from "../images/BrainWave.jpg";
import dataShuttleproImg from '../images/data_shuttle_pro.jpg';

const Projects = () => {

    const [readMoreData, setReadMoreData] = useState(false);

    const projectdData = [
        {
            img: dataShuttleproImg,
            name: 'Data Shuttle Pro',
            title: 'File Transfer',
            description: 'Effortlessly move your files across the digital universe with Data Shuttle Pro! Seamlessly transfer data between FTP, Google Drive, SFTP, and local storage. Your data, your way!',
            liveDemo: ''
        },
        // {
        //     img: brainWaveImg,
        //     gif: brainWaveDemoGif,
        //     name: 'Brain Wave',
        //     title: 'Brain Wave',
        //     description: 'Brain Wave built with ReactJS, NodeJS. It uses the OpenAI API to respond to messages with a human-like response. It also has a voice feature that can read out the response. User can ask question using voice or text.',
        //     liveDemo: 'https://chat-client-1oud.onrender.com/'
        // },
        // {
        //     img: 'https://anshrathod.com/_next/image?url=%2Fimgs%2FMusive-3.PNG&w=128&q=75',
        //     name: 'MUSIVE',
        //     title: 'Fully Functional music player with UI like Spotify app.',
        //     description: 'Full-stack music player app is written in flutter and dart using node.js music API. Fully Functional music player with UI like Spotify app. Added 1000+ royalty-free music and information about artists. Application users can make their own playlist or collect liked songs. ',
        //     liveDemo: 'https://chat-client-1oud.onrender.com/'
        // },
        // {
        //     img: 'https://anshrathod.com/_next/image?url=%2Fimgs%2FPhotoarc-1.PNG&w=128&q=75',
        //     name: 'PHOTOARC',
        //     title: 'A movie search app',
        //     description: 'A movie search app built with React, Next.js, and Tailwind CSS. It uses the TMDB API to fetch movies and display them.',
        //     liveDemo: 'https://chat-client-1oud.onrender.com/'
        // },
        // {
        //     img: 'https://anshrathod.com/_next/image?url=%2Fimgs%2FMoviedb-2.PNG&w=128&q=75',
        //     name: 'MOVIEDB',
        //     title: 'A movie search app',
        //     description: 'A movie search app built with React, Next.js, and Tailwind CSS. It uses the TMDB API to fetch movies and display them.',
        //     liveDemo: 'https://chat-client-1oud.onrender.com/'
        // },
    ];

    const handleReadMore = (data) => {
        setReadMoreData(data);
        if (data) {
            window.location.href = "#projects";
            document.body.style.overflow = "hidden";
            //BLUR HEADER
            document.getElementById("header").style.filter = "blur(5px)";
            document.getElementById("header").style.pointerEvents = "none";
        } else {
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
                                index={index + 5}
                                img={project.img}
                                gif={project.gif}
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