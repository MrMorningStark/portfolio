import { startTransition, useEffect, useState } from "react";

const Header = () => {

    const hash = window.location.hash;

    useEffect(() => {

        const header = document.getElementById("header");

        // Get all sections
        const sections = document.querySelectorAll('section');

        var prevScrollpos = window.pageYOffset;
        const onScroll = (e) => {
            // Get viewport height
            const viewportHeight = window.innerHeight;

            // Loop through sections
            sections.forEach(section => {
                // Get section's bounding rectangle
                const rect = section.getBoundingClientRect();

                // Check if section is visible
                if (rect.top >= 0 && rect.top < viewportHeight) {
                    // Section is visible, do something with it
                    startTransition(() => {
                        if (document.scrollingElement.scrollTop == 0) {
                            setActive('home');
                        } else {
                            setActive(section.id);
                        }
                    })

                }
            });

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

    const onResumeClick = () => {
        fetch('RajatKhatri.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'RajatKhatri.pdf';
                alink.click();
            })
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
                <li className="contact">
                    <a href="#contact" className={active == 'contact' ? "active" : ''} onClick={() => onLinkClick('contact')}>CONTACT</a>
                </li>
                <li className="resume">
                    <a href="#resume" className={active == 'resume' ? "active" : ''} onClick={onResumeClick}>RESUME <i className="fa fa-cloud-arrow-down" /></a>
                </li>
            </ul>
            <span className={`hamburger`} onClick={handleHamburgerClick}>
                <i className={`fa ${hamburger ? 'fa-xmark' : 'fa-bars'} fa-xl`} />
            </span>
        </header>
    )
}

export default Header;