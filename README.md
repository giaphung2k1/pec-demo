# PEC Energy Consulting & EPC - Website Redesign Demo

Dự án thiết kế lại toàn bộ giao diện website cho **PEC (Công ty TNHH Tư vấn Xây dựng Điện Hoà Bình)** dựa trên nội dung thực tế từ [pec.vn](https://pec.vn/vi/simple-corporate/) kết hợp với phong cách giao diện doanh nghiệp năng lượng hiện đại của [Vũ Phong Energy Group](https://vuphong.vn/).

---

## 🌟 Tính năng & Điểm nổi bật trong thiết kế

- **Hệ màu sắc nhận diện năng lượng xanh:**
  - Xanh Navy chuyên nghiệp (`#002060`): Thể hiện sự vững chắc và uy tín của tập đoàn kỹ thuật.
  - Xanh Eco Green (`#00b675`): Đại diện cho chuyển dịch xanh, phát triển bền vững và Net-Zero.
  - Cam Solar (`#ff7713`): Điểm nhấn các nút hành động (CTA), số liệu và huy hiệu nổi bật.
- **Header cố định thông minh (Sticky Header):** Tích hợp Topbar liên hệ (Hotline 24/7, email, ngôn ngữ), mega-menu phân cấp và nút "Nhận Báo Giá".
- **Hero Banner:** Thẻ nổi bật (Floating Highlights Bar) tóm tắt các chỉ số cốt lõi (+3,000 MW, 150+ dự án, 15+ năm kinh nghiệm, 100% chuẩn ISO).
- **Bộ đếm động (Counters):** Tự động đếm số liệu ấn tượng khi cuộn chuột vào tầm nhìn.
- **Bộ lọc dự án tương tác (Interactive Filter Tabs):** Lọc dự án bằng JavaScript thuần theo danh mục (*Áp mái công nghiệp, Nhà máy điện mặt trời, Điện gió, O&M*).
- **Hệ sinh thái dịch vụ toàn diện:** Thẻ dịch vụ có huy hiệu, icon vector sắc nét và hiệu ứng hover đa chiều.
- **Khối Net-Zero ESG:** Trình bày giải pháp tiết kiệm 35% chi phí điện năng, bảo hành 25 năm và giám sát số hóa SCADA.
- **Tiện ích nổi:** Nút gọi điện thoại tỏa sóng, nút chat Zalo và nút cuộn lên đầu trang (Back to top).
- **Thiết kế Responsive 100%:** Tối ưu mượt mà trên mọi thiết bị: Desktop, Tablet và Mobile với Menu Drawer chuyên dụng.

---

## 📂 Cấu trúc thư mục dự án

```text
pec-demo/
│
├── index.html                   # Trang chủ
├── gioi-thieu.html              # Giới thiệu công ty & Thư ngỏ Ban Giám Đốc
├── chung-chi-nang-luc.html      # Chứng chỉ năng lực & Pháp lý (ISO 9001:2015, Giấy phép ĐL)
├── doi-tac.html                 # Khách hàng & Đối tác chiến lược
├── dich-vu.html                 # Danh mục 8 dịch vụ & Quy trình 5 bước
├── dich-vu-chi-tiet.html        # Chi tiết dịch vụ Vận hành & Bảo trì (O&M)
├── du-an.html                   # Danh mục hơn 150 dự án tiêu biểu (kèm bộ lọc)
├── du-an-chi-tiet.html          # Chi tiết dự án Cụm Nhà Máy ĐMT Đá Bạc (48 MWp)
├── i-rec.html                   # Dịch vụ Chứng chỉ năng lượng tái tạo quốc tế I-REC
├── cho-thue-nha-xuong.html      # Cho thuê nhà xưởng An Thạnh (5.5 ha Tam Anh)
├── tin-tuc.html                 # Tin tức & Xu hướng ngành năng lượng
├── tin-tuc-chi-tiet.html        # Bài viết kỹ thuật chuyên sâu về tối ưu O&M
├── lien-he.html                 # Thông tin liên hệ, bản đồ và form tư vấn
│
├── css/
│   └── style.css                # Toàn bộ stylesheet thiết kế chuẩn Vu Phong
├── js/
│   └── main.js                  # Xử lý tương tác sticky nav, tabs, drawer, modal, counter
└── images/                      # Hình ảnh, logo, chứng chỉ và ảnh công trình
```

---

## 🚀 Hướng dẫn cài đặt & Khởi chạy

1. Clone dự án về máy:
   ```bash
   git clone https://github.com/giaphung2k1/pec-demo.git
   cd pec-demo
   ```

2. Chạy website:
   - **Cách 1 (Trực tiếp):** Mở file `index.html` bằng bất kỳ trình duyệt web nào (Chrome, Edge, Firefox, Safari).
   - **Cách 2 (Local Server):** Chạy lệnh Python:
     ```bash
     python -m http.server 8080
     ```
     Sau đó truy cập vào: [http://localhost:8080](http://localhost:8080)
   - **Cách 3 (XAMPP):** Đặt thư mục vào `c:/xampp/htdocs/pec-demo` và truy cập [http://localhost/pec-demo](http://localhost/pec-demo).

---

## 📄 Bản quyền & Tác giả

- Bản quyền nội dung & thông số: **Công ty TNHH Tư vấn Xây dựng Điện Hoà Bình (PEC)**
- Thiết kế giao diện lấy cảm hứng: **Vũ Phong Energy Group**
