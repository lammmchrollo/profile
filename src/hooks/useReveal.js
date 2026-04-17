import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const animateBars = () => {
      document.querySelectorAll('.skfill').forEach((bar) => {
        window.setTimeout(() => { bar.style.width = `${bar.dataset.l}%`; }, 400);
      });
    };

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('vis');
          if (entry.target.id === 'sklist') animateBars();
        }
      });
    }, { threshold: .12 });

    const sio = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          window.setTimeout(() => entry.target.classList.add('vis'), i * 130);
        }
      });
    }, { threshold: .25 });

    const revealEls = document.querySelectorAll('.rv');
    const skillEls = document.querySelectorAll('.ski');
    revealEls.forEach((el) => io.observe(el));
    skillEls.forEach((el) => sio.observe(el));

    return () => {
      revealEls.forEach((el) => io.unobserve(el));
      skillEls.forEach((el) => sio.unobserve(el));
      io.disconnect();
      sio.disconnect();
    };
  }, []);
}
