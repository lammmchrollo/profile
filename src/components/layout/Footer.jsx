export default function Footer({ line1, line2 }) {
  return (
    <footer>
      <span className="fk">🌸 · 🪷</span>
      <div className="fc">
        <p>{line1}</p>
        <p>{line2}</p>
        <p style={{ marginTop: '.4rem', fontSize: '.7rem', opacity: '.35' }}>
          Minimal · Personal · Professional
        </p>
      </div>
    </footer>
  );
}
