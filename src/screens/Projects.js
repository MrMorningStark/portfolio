import Card from "../components/Card";

const Projects = () => {

    const projectdData = [
        {
            img: 'https://anshrathod.com/_next/image?url=%2Fimgs%2FCineast-1.PNG&w=128&q=75',
            name: 'Chat App',
            title: 'Chat App',
            description: 'A chat app built with React, Next.js, and Tailwind CSS. It uses the OpenAI API to respond to messages.'
        },
        {
            img: 'https://anshrathod.com/_next/image?url=%2Fimgs%2FMusive-3.PNG&w=128&q=75',
            name: 'MUSIVE',
            title: 'Fully Functional music player with UI like Spotify app.',
            description: 'Full-stack music player app is written in flutter and dart using node.js music API. Fully Functional music player with UI like Spotify app. Added 1000+ royalty-free music and information about artists. Application users can make their own playlist or collect liked songs.'
        },
        {
            img: 'https://anshrathod.com/_next/image?url=%2Fimgs%2FPhotoarc-1.PNG&w=128&q=75',
            name: 'PHOTOARC',
            title: 'A movie search app',
            description: 'A movie search app built with React, Next.js, and Tailwind CSS. It uses the TMDB API to fetch movies and display them.'
        },
        {
            img: 'https://anshrathod.com/_next/image?url=%2Fimgs%2FMoviedb-2.PNG&w=128&q=75',
            name: 'MOVIEDB',
            title: 'A movie search app',
            description: 'A movie search app built with React, Next.js, and Tailwind CSS. It uses the TMDB API to fetch movies and display them.'
        },
        {
            img: 'https://anshrathod.com/_next/image?url=%2Fimgs%2FCineast-1.PNG&w=128&q=75',
            name: 'Cineast',
            title: 'A movie search app',
            description: 'A movie search app built with React, Next.js, and Tailwind CSS. It uses the TMDB API to fetch movies and display them.'
        },
    ];
    return (
        <section id="projects">
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
                                index={index}
                                img={project.img}
                                name={project.name}
                                title={project.title}
                                description={project.description}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Projects;