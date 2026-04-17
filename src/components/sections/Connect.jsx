import SectionHeader from '../common/SectionHeader';

export default function Connect({ socials }) {
  return (
    <section id="connect">
      <SectionHeader number="04 / CONNECT" title="Kết nối chuyên nghiệp" subtitle="Những kênh liên hệ và hồ sơ quan trọng" />
      <div className="cgrid">
        {socials.map((item) => (
          <div className="ccard rv tilt" key={item.title}>
            <div className="cinfo">
              <div className="cicon">{item.icon}</div>
              <div className="ctitle">{item.title}</div>
              <p className="cdesc">{item.description}</p>
              <a className="clink" href={item.href} target="_blank" rel="noreferrer">{item.label} →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
