import { useEffect } from 'react';

export function useCanvasBackground() {
  useEffect(() => {
    const canvas = document.getElementById('bgc');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let frame = 0;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    class Petal {
      constructor() { this.reset(true); }
      reset(init = false) {
        this.x = Math.random() * canvas.width;
        this.y = init ? Math.random() * canvas.height * 1.5 : -20;
        this.sz = Math.random() * 9 + 4;
        this.sp = Math.random() * 1.2 + 0.4;
        this.wx = Math.random() * .7 - .35;
        this.rot = Math.random() * Math.PI * 2;
        this.rsp = (Math.random() - .5) * .04;
        this.op = Math.random() * .5 + .15;
        this.col = Math.random() > .45 ? '#FFB6C1' : 'rgba(255,255,255,.9)';
        this.sw = Math.random() * 2.2;
        this.sa = Math.random() * Math.PI * 2;
        this.ssp = Math.random() * .018;
      }
      tick() {
        this.sa += this.ssp;
        this.x += this.wx + Math.sin(this.sa) * this.sw * .25;
        this.y += this.sp;
        this.rot += this.rsp;
        if (this.y > canvas.height + 20) this.reset();
      }
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rot);
        ctx.globalAlpha = this.op;
        ctx.fillStyle = this.col;
        ctx.beginPath();
        ctx.ellipse(0, 0, this.sz, this.sz * .45, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    class Dot {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - .5) * .35;
        this.vy = (Math.random() - .5) * .35;
        this.sz = Math.random() * 1.8 + .4;
        this.op = Math.random() * .4 + .1;
        this.col = Math.random() > .5 ? '#87CEEB' : '#FFB6C1';
      }
      tick() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.op;
        ctx.fillStyle = this.col;
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.col;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.sz, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    resize();
    const petals = Array.from({ length: 55 }, () => new Petal());
    const dots = Array.from({ length: 70 }, () => new Dot());

    const drawLines = () => {
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 110) {
            ctx.save();
            ctx.globalAlpha = (1 - d / 110) * .08;
            ctx.strokeStyle = '#87CEEB';
            ctx.lineWidth = .5;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
    };

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((dot) => { dot.tick(); dot.draw(); });
      drawLines();
      petals.forEach((petal) => { petal.tick(); petal.draw(); });
      frame = requestAnimationFrame(loop);
    };

    const onResize = () => resize();
    const onScroll = () => { canvas.style.transform = `translateY(${window.scrollY * .28}px)`; };
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll);
    frame = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);
}
