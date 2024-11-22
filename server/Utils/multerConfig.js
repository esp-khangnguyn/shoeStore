import multer from "multer";
// Cấu hình nơi lưu trữ file
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Thư mục lưu file
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueSuffix); // Tạo tên file duy nhất
  },
});

const upload = multer({ storage });
export default upload;
