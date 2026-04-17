import SectionHeader from '../common/SectionHeader';

export default function About({ profile }) {
  return (
    <section id="about">
      <SectionHeader number="01 / ABOUT" title="Dấu ấn cá nhân" subtitle="Cảm hứng văn hóa và định hướng công nghệ" />

      <div className="ag">
        <div className="fcard rv">
          <div className="finner">
            <div className="ff">
              <div className="fi">⛩️</div>
              <div className="ft">JAPAN</div>
              <div className="fj">Tinh thần tối giản</div>
              <p className="fp">Lấy cảm hứng từ sự chỉn chu, tinh gọn và hài hòa trong thiết kế, tôi theo đuổi những sản phẩm vừa đẹp vừa hữu ích. Di chuột để xem thêm.</p>
            </div>
            <div className="fb">
              <div className="fi" style={{ color: 'var(--sky)' }}>🌸</div>
              <div className="ft">DESIGN MINDSET</div>
              <p className="fp">Tôi trân trọng từng trải nghiệm học tập và làm dự án, vì mỗi lần thực hành đều giúp tôi hoàn thiện tư duy thiết kế và kỹ năng lập trình.</p>
            </div>
          </div>
        </div>

        <div className="pc rv rfloat">
          <div className="pav">🎓</div>
          <div className="pname">{profile.fullName}</div>
          <div className="prole">{profile.role}</div>
          <div className="ptags">
            <span className="tag">Developer</span>
            <span className="tag">Designer</span>
            <span className="tag">Problem Solver</span>
            <span className="tag">Hung Yen</span>
            <span className="tag">VJU '26</span>
          </div>
          <div className="divr"></div>
          <p className="pq" dangerouslySetInnerHTML={{ __html: profile.quote }} />
        </div>

        <div className="fcard rv">
          <div className="finner">
            <div className="ff">
              <div className="fi">🪷</div>
              <div className="ft">HUNG YEN</div>
              <div className="fj">Quê hương tôi</div>
              <p className="fp">Tôi lớn lên tại Hưng Yên, nơi cho tôi sự gần gũi, bền bỉ và cảm hứng để phát triển bản thân theo hướng sáng tạo và thực tế. Di chuột để xem thêm.</p>
            </div>
            <div className="fb">
              <div className="fi" style={{ color: 'var(--gold)' }}>🌾</div>
              <div className="ft">HOMETOWN ROOTS</div>
              <p className="fp">Quê hương luôn là nền tảng để tôi giữ sự chân thành, kỷ luật và động lực phát triển dù học tập hay làm việc ở bất kỳ môi trường nào.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
