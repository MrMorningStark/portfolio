import { useEffect, useState } from "react";

const Header = () => {

    const hash = window.location.hash;

    useEffect(() => {

        const header = document.getElementById("header");

        var prevScrollpos = window.pageYOffset;
        const onScroll = () => {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                header.style.top = "0";
                if (window.scrollY > 100) {
                    document.getElementById("header-title").innerText = "Rajat Khatri";
                    header.style.background = "var(--bg-color)";
                    header.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.1)";

                } else {
                    document.getElementById("header-title").innerText = "Portfolio";
                    header.style.background = "transparent";
                    header.style.boxShadow = "none";
                }
            } else {
                header.style.top = "-60px";
            }
            prevScrollpos = currentScrollPos;
        }

        document.addEventListener("scroll", onScroll);

        return () => {
            document.removeEventListener("scroll", onScroll);
        }

    }, []);

    const [active, setActive] = useState(hash.substring(1, hash.length) || 'home');
    const [hamburger, setHamburger] = useState(false);

    const onLinkClick = (name) => {
        if (hamburger) {
            handleHamburgerClick()
        }
        setActive(name);
    }

    const handleHamburgerClick = () => {
        setHamburger(old => {
            if (old) {
                document.getElementsByTagName('body')[0].style.overflow = 'scroll';
                return false;
            } else {
                document.getElementsByTagName('body')[0].style.overflow = 'hidden';
                return true;
            }
        })
    }

    return (
        <header id={`header`} className={`${hamburger && 'hamburger-active'}`}>
            <span id="header-title" className="title" onClick={() => {
                onLinkClick('home');
                window.location.href = '#home';
            }} >Portfolio</span>
            <ul className="list-unstyled">
                <li>
                    <a href="#home" className={active == 'home' ? "active" : ''} onClick={() => onLinkClick('home')}>HOME</a>
                </li>
                <li>
                    <a href="#about" className={active == 'about' ? "active" : ''} onClick={() => onLinkClick('about')}>ABOUT</a>
                </li>
                <li>
                    <a href="#skills" className={active == 'skills' ? "active" : ''} onClick={() => onLinkClick('skills')}>SKILLS</a>
                </li>                
                <li>
                    <a href="#projects" className={active == 'projects' ? "active" : ''} onClick={() => onLinkClick('projects')}>PROJECTS</a>
                </li>
                <li className="resume">
                    <a href="#resume" className={active == 'resume' ? "active" : ''} onClick={() => onLinkClick('resume')}>RESUME <i className="fa fa-cloud-arrow-down" /></a>
                </li>
            </ul>
            <span className={`hamburger`} onClick={handleHamburgerClick}>
                <i className={`fa ${hamburger ? 'fa-xmark' : 'fa-bars'} fa-xl`} />
            </span>
        </header>
    )
}

export default Header;