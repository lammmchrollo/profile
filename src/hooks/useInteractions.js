import { useEffect } from 'react';

export function useInteractions() {
  useEffect(() => {
    const magneticButtons = document.querySelectorAll('.mag');
    const buttons = document.querySelectorAll('.btn');
    const tiltCards = document.querySelectorAll('.tilt');

    const magneticHandlers = Array.from(magneticButtons).map((button) => {
      const move = (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        button.style.transform = `translate(${x * .22}px,${y * .22}px)`;
      };
      const leave = () => { button.style.transform = ''; };
      button.addEventListener('mousemove', move);
      button.addEventListener('mouseleave', leave);
      return { button, move, leave };
    });

    const rippleHandlers = Array.from(buttons).map((button) => {
      const click = (e) => {
        const rect = button.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.className = 'rip';
        ripple.style.left = `${e.clientX - rect.left - 4}px`;
        ripple.style.top = `${e.clientY - rect.top - 4}px`;
        button.appendChild(ripple);
        window.setTimeout(() => ripple.remove(), 750);
      };
      button.addEventListener('click', click);
      return { button, click };
    });

    const tiltHandlers = Array.from(tiltCards).map((card) => {
      const move = (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - .5;
        const y = (e.clientY - rect.top) / rect.height - .5;
        card.style.transform = `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 9}deg) translateZ(8px)`;
      };
      const leave = () => { card.style.transform = 'perspective(900px) rotateY(0) rotateX(0) translateZ(0)'; };
      card.addEventListener('mousemove', move);
      card.addEventListener('mouseleave', leave);
      return { card, move, leave };
    });

    return () => {
      magneticHandlers.forEach(({ button, move, leave }) => {
        button.removeEventListener('mousemove', move);
        button.removeEventListener('mouseleave', leave);
      });
      rippleHandlers.forEach(({ button, click }) => button.removeEventListener('click', click));
      tiltHandlers.forEach(({ card, move, leave }) => {
        card.removeEventListener('mousemove', move);
        card.removeEventListener('mouseleave', leave);
      });
    };
  }, []);
}
