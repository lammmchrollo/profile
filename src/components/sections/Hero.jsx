export default function Hero({ profile }) {
  return (
    <section id="hero">
      <svg className="torii" style={{ right: '-80px', top: '8%', width: '380px', height: '480px' }} viewBox="0 0 200 260" fill="var(--pink)" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="42" width="200" height="22" rx="11"/>
        <rect x="10" y="72" width="180" height="14" rx="4"/>
        <rect x="22" y="84" width="22" height="176"/>
        <rect x="156" y="84" width="22" height="176"/>
        <rect x="40" y="50" width="16" height="35"/>
        <rect x="144" y="50" width="16" height="35"/>
      </svg>
      <svg className="torii" style={{ left: '-60px', bottom: '5%', width: '280px', height: '360px', opacity: '.025', transform: 'scaleX(-1)' }} viewBox="0 0 200 260" fill="var(--sky)" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="42" width="200" height="22" rx="11"/>
        <rect x="10" y="72" width="180" height="14" rx="4"/>
        <rect x="22" y="84" width="22" height="176"/>
        <rect x="156" y="84" width="22" height="176"/>
      </svg>

      <div className="h-eyebrow">{profile.eyebrow}</div>

      <h1 className="h-title">
        <span className="n1">{profile.displayName1}</span>
        <span className="n2">{profile.displayName2}</span>
      </h1>

      <p className="h-tag" dangerouslySetInnerHTML={{ __html: profile.heroTagline }} />

      <div className="ctas">
        <a href="#projects" className="btn btn-p mag">Xem dự án</a>
        <a href="#connect" className="btn btn-s mag">Kết nối</a>
      </div>

      <div className="scrl">
        <div className="scrl-line"></div>
        <span className="scrl-txt">Cuộn xuống để khám phá</span>
      </div>
    </section>
  );
}
