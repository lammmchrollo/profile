export default function SectionHeader({ number, title, subtitle }) {
  return (
    <div className="sh rv">
      <span className="sn">{number}</span>
      <h2 className="st">
        {title}
        <span className="ja">{subtitle}</span>
      </h2>
      <div className="divr"></div>
    </div>
  );
}
