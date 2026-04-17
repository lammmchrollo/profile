import { useState } from 'react';
import SectionHeader from '../common/SectionHeader';

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (sending) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setTimeout(() => setSent(false), 3500);
    }, 1600);
  };

  return (
    <section id="contact">
      <div className="cwrap">
        <SectionHeader number="05 / CONTACT" title="Liên hệ" subtitle="Gửi lời nhắn nhanh cho tôi" />
        <div className="cintro rv">
          <p>Nếu bạn muốn trao đổi về dự án, cơ hội thực tập, hợp tác hoặc chỉ đơn giản là kết nối, hãy để lại lời nhắn cho tôi.</p>
        </div>
        <div className="cform rv">
          <div className="fg2w">
            <input type="text" className="fi2" placeholder=" " id="ni" />
            <label className="flbl" htmlFor="ni">Họ và tên</label>
          </div>
          <div className="fg2w">
            <input type="email" className="fi2" placeholder=" " id="ei" />
            <label className="flbl" htmlFor="ei">Email</label>
          </div>
          <div className="fg2w">
            <textarea className="fta" placeholder=" " id="mi"></textarea>
            <label className="flbl" htmlFor="mi">Nội dung lời nhắn</label>
          </div>
          <div>
            <button className="btn btn-p mag" id="sendbtn" onClick={handleSend}>
              {sending ? 'Đang gửi...' : sent ? '✓ Đã gửi!' : 'Gửi lời nhắn ✦'}
            </button>
            <div className="fsub-msg" id="sendmsg" style={{ opacity: sent ? 1 : 0 }}>
              ✓ Tin nhắn đã được ghi nhận.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
