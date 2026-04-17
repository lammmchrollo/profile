import { useEffect } from 'react';

export function useJourneyBanner() {
  useEffect(() => {
    const banner = document.getElementById('jbanner');
    if (!banner) return;

    const stops = [
      '🌸 DEPARTING TOKYO · 東京出発',
      '⚡ ENTERING DIGITAL NEXUS',
      '🏮 ARRIVING HUNG YEN · Đến Hưng Yên',
      '✦ ONE DREAM · 一つの夢 · Một ước mơ',
    ];

    let currentIndex = 0;
    const onScroll = () => {
      const sy = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      banner.style.opacity = sy > 80 ? '1' : '0';
      const nextIndex = Math.min(Math.floor((sy / total) * stops.length), stops.length - 1);
      if (nextIndex !== currentIndex) {
        currentIndex = nextIndex;
        banner.style.opacity = '0';
        window.setTimeout(() => {
          banner.textContent = stops[currentIndex];
          banner.style.opacity = '1';
        }, 320);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}
