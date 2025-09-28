# Hành trình Hồ Chí Minh tại Pháp (1911-1923)

Một website React TypeScript hiển thị thông tin chi tiết về hành trình lịch sử của Hồ Chí Minh tại Pháp từ 1911 đến 1923.

## 🌟 Tính năng

- **4 trang nội dung chính:**
  - 🏠 Giới thiệu chung - Tổng quan về hành trình
  - 📚 Hoàn cảnh lịch sử - Bối cảnh Việt Nam và thế giới đầu thế kỷ XX
  - 🛳️ Hành trình (1911-1917) - Quá trình di chuyển và trải nghiệm
  - ⭐ Hoạt động tại Pháp (1917-1923) - Hoạt động chính trị tích cực

- **UI/UX hiện đại:**
  - Thiết kế responsive cho mọi thiết bị
  - Styled Components với theme màu sắc lịch sử
  - Animation và hiệu ứng smooth
  - Typography đẹp với Google Fonts

- **Công nghệ:**
  - React 18 với TypeScript
  - React Router v6 cho navigation
  - Styled Components cho styling
  - React Icons cho biểu tượng

## 🚀 Cài đặt và chạy

1. **Clone hoặc tải project**
2. **Cài đặt dependencies:**
   ```bash
   npm install
   ```

3. **Chạy development server:**
   ```bash
   npm start
   ```

4. **Mở trình duyệt tại:** `http://localhost:3000`

## 📱 Responsive Design

Website được tối ưu cho:
- 📱 Mobile (< 768px)
- 📱 Tablet (768px - 1024px)  
- 💻 Desktop (> 1024px)

## 🎨 Theme màu sắc

- **Primary:** #B8860B (Dark Goldenrod) - Màu vàng lịch sử
- **Secondary:** #8B4513 (Saddle Brown) - Màu nâu cổ điển  
- **Accent:** #DC143C (Crimson) - Màu đỏ tươi
- **Background:** #FEFEFE (Off White)

## 🏗️ Cấu trúc dự án

```
src/
├── components/          # Các component UI
│   ├── Layout.tsx      # Layout chính
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Footer
├── pages/              # Các trang nội dung
│   ├── Home.tsx        # Trang chủ
│   ├── HistoricalContext.tsx
│   ├── Journey.tsx     
│   └── Activities.tsx
├── styles/             # Styles và theme
│   ├── GlobalStyles.ts # CSS global
│   └── theme.ts        # Theme configuration
├── App.tsx             # App chính
└── index.tsx           # Entry point
```

## 📚 Nội dung lịch sử

Website cung cấp thông tin chi tiết về:

### Giới thiệu chung
- Ý nghĩa bước ngoặt của hành trình
- Những khía cạnh tiêu biểu
- Timeline các sự kiện quan trọng

### Hoàn cảnh lịch sử  
- Tình hình Việt Nam đầu thế kỷ XX
- Các phong trào yêu nước và thất bại
- Ảnh hưởng quốc tế và nguyên nhân ra đi

### Hành trình (1911-1917)
- Chi tiết từng giai đoạn di chuyển
- Trải nghiệm tại các quốc gia
- Ý nghĩa và tầm quan trọng

### Hoạt động tại Pháp (1917-1923)
- Timeline hoạt động chính trị
- Các sự kiện và thành tựu quan trọng
- Ý nghĩa lịch sử sâu sắc

## 🔧 Scripts có sẵn

- `npm start` - Chạy development server
- `npm run build` - Build production
- `npm test` - Chạy tests
- `npm run eject` - Eject cấu hình (không khuyến khích)

## 📄 License

Dự án mang tính chất giáo dục, chia sẻ kiến thức lịch sử về Hồ Chí Minh.

---

*"Con đường cách mạng của dân tộc ta phải đi qua con đường giải phóng dân tộc, gắn liền với con đường giải phóng giai cấp"* - Hồ Chí Minh