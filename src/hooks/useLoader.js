import { useEffect } from 'react';

export function useLoader() {
  useEffect(() => {
    const navLinks = () => document.querySelectorAll('.nav-links a');
    const timer = window.setTimeout(() => {
      document.getElementById('loader')?.classList.add('hide');
      navLinks().forEach((link, i) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(-10px)';
        window.setTimeout(() => {
          link.style.transition = 'opacity .5s,transform .5s';
          link.style.opacity = '.55';
          link.style.transform = 'translateY(0)';
        }, i * 90);
      });
    }, 2800);

    return () => window.clearTimeout(timer);
  }, []);
}
