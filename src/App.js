import './App.css';
import HomeScreen from './screens/HomeScreen';
import './styles/myStyles.css'
import './styles/component.css'
import Header from './components/Header';
import AboutScreen from './screens/AboutScreen';
import SkillsScreen from './screens/SkillsScreen';
import { useEffect, useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    let ele = document.querySelector(':root');
    if (ele) {
      ele.style.setProperty('--bg-color', darkMode ? '#181818' : '#F6F6F6');
      ele.style.setProperty('--color', darkMode ? '#F2F2F2' : '#323232');
      ele.style.setProperty('--colorHover', darkMode ? '#0E8388' : '#0E8388');
      ele.style.setProperty('--color2', darkMode ? 'slateblue' : 'slateblue');
    }

    const darkModeElem = document.getElementById("darkMode");

    var prevScrollpos = window.pageYOffset;
    const onScroll = () => {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        darkModeElem.style.visibility = 'visible';
      } else {
        darkModeElem.style.visibility = 'hidden';
      }
      prevScrollpos = currentScrollPos;
    }

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    }

  }, [darkMode]);

  return (
    <>
      <span title={darkMode ? 'switch to light mode' : 'switch to dark mode'} id='darkMode' onClick={() => setDarkMode(!darkMode)}>
        <i className={`fa ${darkMode ? 'fa-moon' : 'fa-sun'}`} />
      </span>
      <Header />
      <HomeScreen />
      <AboutScreen />
      <SkillsScreen />
    </>
  )
}

export default App;
