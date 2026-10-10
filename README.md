# 🎙️ Geo Voice Studio - Teleprompter & Voice Recorder

Website thu âm giọng đọc chuyên nghiệp dạng Teleprompter dành riêng cho các video **Geo Trivia X** (Remotion).

Hỗ trợ chạy tĩnh hoàn toàn trên **GitHub Pages**, tối ưu hóa cho điện thoại di động (iPhone / Android) và xuất gói ZIP chứa các file `.mp3` đã được đặt đúng tên chuẩn Remotion.

---

## ✨ Tính năng nổi bật
1. **Chế độ Teleprompter (Thẻ từng câu thoại)**:
   - Hiển thị văn bản chữ to rõ, kèm nhãn `[CÂU HỎI Qx]`, `[ĐÁP ÁN Ax]`, `[LỜI DẪN INTRO]`.
   - Có gợi ý ngữ điệu đọc (💡 Tò mò, hào hứng, dứt khoát...).
   - Hiển thị sẵn tên file đích chuẩn Remotion (VD: `geo-ghost-border_q0.mp3`).
2. **Nút thu âm 1-chạm & Sóng âm trực quan (Waveform Visualizer)**:
   - Bấm thu âm -> Sóng âm chuyển động theo giọng nói thật.
   - Bấm dừng -> Tự động mã hóa sang chuẩn **MP3 (160kbps)** trực tiếp trên trình duyệt bằng `lamejs`.
   - Nghe lại ngay lập tức (Audio Player preview). Nếu vấp chỉ cần bấm "Thu lại" riêng câu đó.
3. **Lưu trữ an toàn trên thiết bị (IndexedDB)**:
   - Dữ liệu thu âm được lưu tự động vào bộ nhớ trình duyệt. Dù vô tình F5 hoặc tắt trang, toàn bộ các câu đã thu vẫn nguyên vẹn 100%.
4. **Đóng gói ZIP 1-click (JSZip)**:
   - Nút **"Tải về trọn bộ ZIP (.zip)"** tự động nén tất cả các file đã thu thành một file `.zip`.
   - Kèm file `manifest.json` ghi chú kịch bản và thời lượng từng câu.

---

## 🚀 Triển khai lên GitHub Pages (1 phút)

1. Repository đã được đẩy lên:
   ```bash
   https://github.com/joealves517/voice
   ```
2. Vào trang GitHub của repo:
   - Bấm **Settings** -> Mục bên trái chọn **Pages**.
   - Tại phần **Build and deployment**:
     - **Source**: Chọn `Deploy from a branch`.
     - **Branch**: Chọn `main`, thư mục `/ (root)`.
     - Bấm **Save**.
3. Sau khoảng 30 giây, website của bạn sẽ hoạt động tại địa chỉ:
   ```
   https://joealves517.github.io/voice/
   ```
4. Gửi đường link trên cho anh trai để mở trực tiếp trên điện thoại và thu âm!

---

## 📥 Cách đồng bộ vào Remotion sau khi thu âm xong

1. Sau khi thu xong các câu trên website, bấm nút **"Tải về trọn bộ ZIP (.zip)"**.
2. Giải nén file `.zip` vừa tải về (các file đã có sẵn tên: `geo-ghost-border_intro.mp3`, `geo-ghost-border_q0.mp3`, `geo-ghost-border_a0.mp3`...).
3. Sao chép toàn bộ các file `.mp3` này thả vào thư mục:
   ```bash
   Geo Trivia X/remotion/public/audio/tts/
   ```
4. Mở Remotion Studio ([http://localhost:3000/GeoGhostBorder](http://localhost:3000/GeoGhostBorder)) để thưởng thức video đã có lồng tiếng mới!
