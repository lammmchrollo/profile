import { useEffect } from 'react';

export function useCursor() {
  useEffect(() => {
    const ring = document.getElementById('cur-ring');
    const dot = document.getElementById('cur-dot');
    const aura = document.getElementById('cur-aura');
    if (!ring || !dot || !aura) return;

    let mx = 0, my = 0, rx = 0, ry = 0, ax = 0, ay = 0;
    let frame = 0;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = `${mx}px`;
      dot.style.top = `${my}px`;
    };

    const loop = () => {
      rx += (mx - rx) * .14;
      ry += (my - ry) * .14;
      ax += (mx - ax) * .07;
      ay += (my - ay) * .07;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      aura.style.left = `${ax}px`;
      aura.style.top = `${ay}px`;
      frame = requestAnimationFrame(loop);
    };

    const interactive = () => document.querySelectorAll('a,button,.fcard,.pcard,.ccard,.oicon,.tag');
    const enter = () => document.body.classList.add('hov');
    const leave = () => document.body.classList.remove('hov');

    document.addEventListener('mousemove', onMove);
    interactive().forEach((el) => {
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
    });
    frame = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener('mousemove', onMove);
      interactive().forEach((el) => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
      cancelAnimationFrame(frame);
    };
  }, []);
}
