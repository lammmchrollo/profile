export default function Loader() {
  return (
    <div id="loader">
      <div style={{ textAlign: 'center' }}>
        <div className="ldr-kanji">✦</div>
        <div className="ldr-label">Đang tải portfolio...</div>
        <div className="ldr-track"><div className="ldr-fill"></div></div>
      </div>
    </div>
  );
}
