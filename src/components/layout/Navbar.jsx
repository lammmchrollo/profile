export default function Navbar({ logo }) {
  return (
    <nav>
      <div className="nav-logo" id="logo"><span id="logo-text">{logo}</span></div>
      <ul className="nav-links">
        <li><a href="#about">Giới thiệu</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#connect">Connect</a></li>
        <li><a href="#contact">Liên hệ</a></li>
      </ul>
      <div className="nav-r">
        <div id="thm" title="Đổi giao diện"></div>
      </div>
    </nav>
  );
}
