import RoundButton from "./RoundButton";

const Socials = () => {
    return (
        <div className="socials" style={{}} onClick={() => {
            let socialsEle = document.querySelector('#home .home-scials .socials');
            socialsEle.style.left = '0';
            socialsEle.style.opacity = '1';
            socialsEle.style.cursor = 'default';
        }}>
            <RoundButton title={"github"} url={"https://github.com/MrMorningStark"} icon="fab fa-github fa-lg" />
            <RoundButton title={"twitter"} url={"https://twitter.com/MrMorningStark"} icon="fab fa-twitter fa-lg" iconColor="#1DA1F2" />
            <RoundButton title={"linkedin"} url={"https://www.linkedin.com/in/rajat-khatri-7872ba206/"} icon="fab fa-linkedin fa-lg" iconColor="#0072b1" />
            {/* <RoundButton title={"email"} url={"https://mail.google.com/mail/?view=cm&fs=1&to=khatrirajat888@gmail.com"} icon="fab fa-envelope fa-lg" /> */}
            {/* <RoundButton title={"instagram"} icon="fab fa-instagram fa-lg" /> */}
            <RoundButton title={"whatsapp"} url={"https://wa.me/918882030533"} icon="fab fa-whatsapp fa-xl" iconColor="#075E54" />
        </div>
    )
}

export default Socials;