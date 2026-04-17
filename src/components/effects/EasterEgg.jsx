export default function EasterEgg({ visible, onClose }) {
  return (
    <div id="egg" className={visible ? 'on' : ''}>
      <div className="egg-c">
        <span className="egg-em">🌸</span>
        <div className="egg-t">Bạn đã mở khóa một chi tiết bí mật!</div>
        <div className="egg-s">A hidden detail just appeared</div>
        <p className="egg-p">"Giữa cảm hứng văn hóa và công nghệ, tôi muốn tạo ra những sản phẩm có dấu ấn riêng."</p>
        <button className="btn btn-p" onClick={onClose}>Đóng &nbsp;✕</button>
      </div>
    </div>
  );
}
