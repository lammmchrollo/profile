import SectionHeader from '../common/SectionHeader';

export default function Projects({ projects }) {
  return (
    <section id="projects">
      <SectionHeader number="03 / PROJECTS" title="Projects" subtitle="Một số dự án nổi bật" />
      <div className="pgrid">
        {projects.map((project) => (
          <div className="pcard rv tilt" key={project.title}>
            <div className="pthumb" style={{ background: project.background }}>
              {project.emoji}
              <div className="pov"></div>
            </div>
            <div className="pinfo">
              <div className="ptags2">
                {project.tags.map((tag) => (
                  <span className="ptag" style={{ background: tag.color }} key={`${project.title}-${tag.name}`}>
                    {tag.name}
                  </span>
                ))}
              </div>
              <div className="ptitle">{project.title}</div>
              <p className="pdesc">{project.description}</p>
              <div className="plinks">
                {project.links.map((link) => (
                  <a href={link.href} className="plink" target="_blank" rel="noreferrer" key={`${project.title}-${link.label}`}>
                    {link.label} →
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
