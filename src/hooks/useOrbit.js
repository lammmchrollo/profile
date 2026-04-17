import { useEffect } from 'react';

const orbIcons = [
  { i: '⚛️', l: 'React' }, { i: '🐍', l: 'Python' }, { i: '🎨', l: 'Design' }, { i: '🗄️', l: 'Database' },
  { i: '📱', l: 'Mobile' }, { i: '☁️', l: 'Cloud' }, { i: '🔐', l: 'Security' }, { i: '🧠', l: 'AI/ML' },
];

export function useOrbit() {
  useEffect(() => {
    const wrap = document.getElementById('orbwrap');
    if (!wrap) return;

    const nodes = [];
    const frames = [];

    orbIcons.forEach((item, idx) => {
      const el = document.createElement('div');
      el.className = 'oicon';
      el.textContent = item.i;
      el.title = item.l;
      wrap.appendChild(el);
      nodes.push(el);

      const inner = idx < 4;
      const r = inner ? 88 : 142;
      const ang = (idx % 4 / 4) * Math.PI * 2;
      const spd = inner ? .0025 : -.0018;
      let a = ang;

      const loop = () => {
        a += spd;
        const x = Math.cos(a) * r;
        const y = Math.sin(a) * r;
        el.style.transform = `translate(calc(-50% + ${x}px),calc(-50% + ${y}px))`;
        frames[idx] = requestAnimationFrame(loop);
      };
      frames[idx] = requestAnimationFrame(loop);
    });

    return () => {
      frames.forEach((id) => cancelAnimationFrame(id));
      nodes.forEach((node) => node.remove());
    };
  }, []);
}
