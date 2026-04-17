# My Profile React

Portfolio cá nhân đã được chuyển sang **React + Vite**, giữ gần nguyên giao diện và hiệu ứng của bản HTML/CSS/JS cũ.

## Chạy project

```bash
npm install
npm run dev
```

## Build production

```bash
npm run build
npm run preview
```

## Cấu trúc chính

```bash
src/
  assets/css/            # CSS gốc, giữ gần nguyên bản cũ
  components/
    effects/             # Loader, cursor, canvas, music, easter egg
    layout/              # Navbar, Footer
    sections/            # Hero, About, Skills, Projects, Connect, Contact
    common/              # SectionHeader
  data/
    siteContent.js       # Sửa tên, link social, project ở đây
  hooks/                 # Các hiệu ứng cũ chuyển sang React hooks
  App.jsx
  main.jsx
```

## Nơi sửa nội dung nhanh nhất

- `src/data/siteContent.js`
  - đổi tên
  - đổi slogan
  - đổi GitHub / LinkedIn / Email / CV
  - thêm bớt project

## Ghi chú

- CV đang để trong `public/files/CV.pdf`
- Contact form hiện vẫn là mô phỏng UI, chưa gửi mail thật
- Nếu muốn gửi mail thật, có thể gắn EmailJS / Formspree sau
