import { useEffect, useState } from 'react';
import { siteContent } from './data/siteContent';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import BackgroundCanvas from './components/effects/BackgroundCanvas';
import CustomCursor from './components/effects/CustomCursor';
import Loader from './components/effects/Loader';
import JourneyBanner from './components/effects/JourneyBanner';
import PageOverlay from './components/effects/PageOverlay';
import MusicButton from './components/effects/MusicButton';
import EasterEgg from './components/effects/EasterEgg';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Connect from './components/sections/Connect';
import Contact from './components/sections/Contact';
import { useLoader } from './hooks/useLoader';
import { useCursor } from './hooks/useCursor';
import { useCanvasBackground } from './hooks/useCanvasBackground';
import { useInteractions } from './hooks/useInteractions';
import { useReveal } from './hooks/useReveal';
import { useJourneyBanner } from './hooks/useJourneyBanner';
import { useOrbit } from './hooks/useOrbit';
import { useAmbientMusic } from './hooks/useAmbientMusic';

export default function App() {
  const [eggVisible, setEggVisible] = useState(false);
  const [logoClicks, setLogoClicks] = useState({ count: 0, time: 0 });
  const { playing, toggleMusic } = useAmbientMusic();

  useLoader();
  useCursor();
  useCanvasBackground();
  useInteractions();
  useReveal();
  useJourneyBanner();
  useOrbit();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    const themeButton = document.getElementById('thm');
    const onToggleTheme = () => {
      const root = document.documentElement;
      root.setAttribute('data-theme', root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    };
    themeButton?.addEventListener('click', onToggleTheme);

    const logo = document.getElementById('logo');
    const onLogoClick = () => {
      const now = Date.now();
      setLogoClicks((prev) => {
        const count = now - prev.time > 2000 ? 1 : prev.count + 1;
        if (count >= 5) {
          setEggVisible(true);
          for (let i = 0; i < 18; i++) {
            window.setTimeout(() => {
              const e = document.createElement('div');
              const em = ['🌸', '🪷', '✨', '🌟', '⚡'][Math.floor(Math.random() * 5)];
              e.textContent = em;
              e.style.cssText = `position:fixed;left:${Math.random() * 100}vw;top:${Math.random() * 100}vh;font-size:${Math.random() * 2 + 1}rem;pointer-events:none;z-index:10001;animation:kfloat 3s ease forwards;`;
              document.body.appendChild(e);
              window.setTimeout(() => e.remove(), 3100);
            }, i * 60);
          }
          return { count: 0, time: now };
        }
        return { count, time: now };
      });
    };
    logo?.addEventListener('click', onLogoClick);

    return () => {
      themeButton?.removeEventListener('click', onToggleTheme);
      logo?.removeEventListener('click', onLogoClick);
    };
  }, []);

  return (
    <>
      <EasterEgg visible={eggVisible} onClose={() => setEggVisible(false)} />
      <PageOverlay />
      <CustomCursor />
      <Loader />
      <BackgroundCanvas />
      <Navbar logo={siteContent.profile.logo} />
      <JourneyBanner />
      <Hero profile={siteContent.profile} />
      <About profile={siteContent.profile} />
      <Skills />
      <Projects projects={siteContent.projects} />
      <Connect socials={siteContent.socials} />
      <Contact />
      <Footer line1={siteContent.profile.footerLine1} line2={siteContent.profile.footerLine2} />
      <MusicButton playing={playing} onToggle={toggleMusic} />
    </>
  );
}
