import Socials from "./Socials";

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <h3>CONTACT ME</h3>
                <p>Leave a message on my any of my social media, i'll reach out to you soon.</p>
                <Socials />
            </div>
            <div className="footer-bottom">
                © {new Date().getFullYear()} Rajat Khatri. All rights reserved.
            </div>
        </footer>
    )

}

export default Footer;