import Socials from "../components/Socials";
import "../styles/particle.css";

const HomeScreen = () => {

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
                <h1>HEY, I'M RAJAT&nbsp;KHATRI</h1>
                <p>A full-stack developer, Building Seamless mobile & web applications.</p>
            </div>
            <div className="home-scials">
                <Socials />
            </div>
        </section >
    )
}

export default HomeScreen;