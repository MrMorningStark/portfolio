import './App.css';
import HomeScreen from './screens/HomeScreen';
import './styles/myStyles.css'
import './styles/component.css'
import Header from './components/Header';
import AboutScreen from './screens/AboutScreen';
import SkillsScreen from './screens/SkillsScreen';
import { useEffect, useState } from 'react';
import Projects from './screens/Projects';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    let ele = document.querySelector(':root');
    if (ele) {
      ele.style.setProperty('--bg-color', darkMode ? '#181818' : '#F6F6F6');
      ele.style.setProperty('--color', darkMode ? '#F2F2F2' : '#323232');
      ele.style.setProperty('--colorHover', darkMode ? '#0E8388' : '#0E8388');
      ele.style.setProperty('--color2', darkMode ? 'slateblue' : 'slateblue');
      ele.style.setProperty('--glow-color', darkMode ? 'black' : 'grey');
    }

    const darkModeElem = document.getElementById("darkMode");
    darkModeElem.classList.add('animate');

    var prevScrollpos = window.pageYOffset;
    const onScroll = () => {
      var currentScrollPos = window.pageYOffset;
      let socialsEle = document.querySelector('#home .home-scials .socials');
      if (prevScrollpos > currentScrollPos) {
        darkModeElem.style.opacity = '1';
        darkModeElem.style.visibility = 'visible';
        socialsEle.style.left = '0';
        socialsEle.style.opacity = '1';
        socialsEle.style.cursor = 'default';
      } else {
        darkModeElem.style.opacity = '0';
        darkModeElem.style.visibility = 'hidden';
        socialsEle.style.left = '-55px';
        socialsEle.style.opacity = '0.5';
        socialsEle.style.cursor = 'pointer';
      }
      prevScrollpos = currentScrollPos;
    }

    setTimeout(() => {
      document.addEventListener("scroll", onScroll);
    }, 4000);

    return () => {
      document.removeEventListener("scroll", onScroll);
    }

  }, [darkMode]);

  useEffect(() => {
    setTimeout(() => {
      setDarkMode(true);
    }, 1500);
  }, []);


  return (
    <>
      <span title={darkMode ? 'switch to light mode' : 'switch to dark mode'} id='darkMode' onClick={() => setDarkMode(!darkMode)}>
        <i style={{ color: darkMode ? 'black' : "yellow" }} className={`fa fa-lightbulb fa-lg`} />
      </span>
      <Header />
      <HomeScreen />
      <AboutScreen />
      <SkillsScreen />
      <Projects />
      <Footer />
    </>
  )
}

export default App;
