import SectionHeader from '../common/SectionHeader';

const skills = [
  { name: 'Frontend Development', level: 88, gradient: 'linear-gradient(90deg,var(--sky),var(--pink))' },
  { name: 'UI / UX Design', level: 82, gradient: 'linear-gradient(90deg,var(--pink),var(--gold))' },
  { name: 'Backend & APIs', level: 74, gradient: 'linear-gradient(90deg,#00D4FF,var(--sky))' },
  { name: 'Machine Learning', level: 67, gradient: 'linear-gradient(90deg,var(--gold),#FF6B6B)' },
  { name: 'Communication & Collaboration', level: 76, gradient: 'linear-gradient(90deg,var(--pink),var(--sky))' },
];

export default function Skills() {
  return (
    <section id="skills">
      <SectionHeader number="02 / SKILLS" title="Skills" subtitle="Kỹ năng và công nghệ tôi sử dụng" />
      <div className="skwrap">
        <div className="orbitwrap rv" id="orbwrap">
          <div className="orbitring"></div>
          <div className="orbitring"></div>
          <div className="ocenter">💻</div>
        </div>

        <div className="sklist" id="sklist">
          {skills.map((skill) => (
            <div className="ski" key={skill.name}>
              <div className="skh">
                <span className="skn">{skill.name}</span>
                <span className="sklv">{skill.level}%</span>
              </div>
              <div className="skbar">
                <div className="skfill" data-l={skill.level} style={{ background: skill.gradient }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
