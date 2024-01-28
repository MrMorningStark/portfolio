import Socials from "./Socials";

const Footer = () => {
    return (
        <section id="contact">
            <footer>
                <div className="footer-top">
                    <h3>CONTACT ME</h3>
                    <p>Feel free to contact me anytime and I will get back to you as soon as possible.</p>
                    <Socials />
                </div>
                <div className="footer-bottom">
                    © {new Date().getFullYear()} Rajat Khatri. All rights reserved.
                </div>
            </footer>
        </section>
    )

}

export default Footer;