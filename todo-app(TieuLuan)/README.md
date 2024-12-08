# Todo App (Tiểu Luận)

Ứng dụng Todo List được phát triển như một phần của tiểu luận, giúp người dùng quản lý và theo dõi các công việc hàng ngày một cách hiệu quả.

## Kiến Trúc Hệ Thống

### Frontend
- **Framework & Thư viện chính**
  - React.js 18.x
  - TypeScript để type checking
  - Vite làm build tool
  
- **UI/UX**
  - Tailwind CSS cho styling
  - React Icons cho icon
  - Responsive design hỗ trợ mobile và desktop
  - Dark/Light mode

- **State Management & Data Fetching**
  - React Context API cho global state
  - React Query cho data fetching và caching
  - React Hook Form cho form handling

### Backend
- **Framework & Runtime**
  - Node.js 18.x
  - Express.js cho REST API
  - TypeScript

- **API Features**
  - RESTful API endpoints
  - JWT Authentication
  - API Rate limiting
  - Error handling middleware
  - Request validation

- **Security**
  - CORS configuration
  - Helmet.js cho HTTP headers
  - Input sanitization
  - XSS protection

### Database
- **MongoDB**
  - Mongoose ODM
  - Schemas và Models:
    ```typescript
    // Task Schema
    {
      id: ObjectId,
      title: String,
      description: String,
      status: Enum['TODO', 'IN_PROGRESS', 'DONE'],
      priority: Enum['LOW', 'MEDIUM', 'HIGH'],
      dueDate: Date,
      userId: ObjectId,
      createdAt: Date,
      updatedAt: Date
    }

    // User Schema
    {
      id: ObjectId,
      username: String,
      email: String,
      password: String,
      createdAt: Date,
      updatedAt: Date
    }
    ```

## API Endpoints
### Tasks
GET /api/tasks - Lấy danh sách tasks
POST /api/tasks - Tạo task mới
GET /api/tasks/:id - Lấy chi tiết task
PUT /api/tasks/:id - Cập nhật task
DELETE /api/tasks/:id - Xóa task

### Authentication
POST /api/auth/register - Đăng ký
POST /api/auth/login - Đăng nhập
POST /api/auth/logout - Đăng xuất
GET /api/auth/me - Lấy thông tin user

## Tính Năng Chính

### 1. Quản Lý Tài Khoản
- Đăng ký tài khoản mới
- Đăng nhập/Đăng xuất
- Quản lý thông tin cá nhân
- Khôi phục mật khẩu

### 2. Quản Lý Công Việc Cơ Bản
- Thêm công việc mới với các thông tin:
  - Tiêu đề
  - Mô tả chi tiết
  - Ngày hết hạn
  - Mức độ ưu tiên
  - Danh mục
- Chỉnh sửa thông tin công việc
- Xóa công việc
- Đánh dấu hoàn thành/chưa hoàn thành

### 3. Tổ Chức và Phân Loại
- Tạo và quản lý danh mục công việc
- Phân loại công việc theo:
  - Trạng thái (Cần làm, Đang làm, Đã xong)
  - Mức độ ưu tiên (Thấp, Trung bình, Cao)
  - Danh mục tùy chỉnh
- Sắp xếp công việc theo:
  - Ngày tạo
  - Ngày hết hạn
  - Mức độ ưu tiên
  - Trạng thái

### 4. Tìm Kiếm và Lọc
- Tìm kiếm công việc theo từ khóa
- Lọc công việc theo:
  - Trạng thái
  - Danh mục
  - Mức độ ưu tiên
  - Khoảng thời gian

### 5. Theo Dõi và Thống Kê
- Hiển thị tổng quan công việc trên dashboard
- Thống kê số lượng công việc theo:
  - Trạng thái
  - Danh mục
  - Mức độ ưu tiên
- Biểu đồ tiến độ công việc
- Báo cáo hiệu suất theo thời gian

### 6. Giao Diện Người Dùng
- Giao diện responsive (Desktop, Tablet, Mobile)
- Chế độ Dark/Light mode
- Tùy chỉnh giao diện theo sở thích
- Hỗ trợ đa ngôn ngữ (Tiếng Việt, Tiếng Anh)

### 7. Tính Năng Nâng Cao
- Nhắc nhở công việc sắp đến hạn
- Chia sẻ công việc với người khác
- Xuất báo cáo công việc (PDF, Excel)
- Sao lưu và khôi phục dữ liệu

## Yêu Cầu Hệ Thống

### Development
- Node.js >= 18.x
- MongoDB >= 5.0
- npm hoặc yarn
- Git

### Production
- VPS hoặc Cloud Platform (ví dụ: AWS, DigitalOcean)
- MongoDB Atlas hoặc self-hosted MongoDB
- Nginx cho reverse proxy
- PM2 cho process management

## Cài Đặt và Chạy Ứng Dụng

### Frontend

```bash
# Di chuyển vào thư mục frontend
cd frontend

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build
```

### Backend

```bash
# Di chuyển vào thư mục backend
cd backend

# Cài đặt dependencies
npm install

# Tạo file .env từ mẫu
cp .env.example .env

# Chạy development server
npm run dev

# Build và chạy production
npm run build
npm start
```

## Biến Môi Trường

### Frontend (.env)

```plaintext
VITE_API_URL=http://localhost:5000/api
VITE_NODE_ENV=development
```

### Backend (.env)

```plaintext
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/todo-app
JWT_SECRET=your_jwt_secret
CORS_ORIGIN=http://localhost:3000
```

## Công Cụ Hỗ Trợ Phát Triển

### 1. IDE và Text Editor
- **Visual Studio Code**
  - Extensions:
    - ESLint
    - Prettier
    - GitLens
    - ES7+ React/Redux/React-Native snippets
    - Tailwind CSS IntelliSense
    - MongoDB for VS Code
    - Thunder Client (REST API Testing)

### 2. Version Control
- **Git**
  - GitHub Desktop
  - GitKraken (tùy chọn)
- **GitHub**
  - GitHub Actions cho CI/CD
  - GitHub Projects cho quản lý dự án

### 3. Development Tools
- **Browser DevTools**
  - Chrome DevTools
  - React Developer Tools
  - Redux DevTools (nếu sử dụng Redux)

- **API Testing**
  - Postman
  - Insomnia
  - Thunder Client

- **Database Tools**
  - MongoDB Compass
  - Studio 3T

### 4. Monitoring và Debug
- **Frontend**
  - React Query DevTools
  - React Error Boundary
  - Browser Console
  - Performance Monitoring

- **Backend**
  - Nodemon
  - Debug npm package
  - Morgan (HTTP request logger)
  - Winston (logging)

### 5. Code Quality Tools
- **Linting và Formatting**
  - ESLint
  - Prettier
  - TypeScript
  - Husky (pre-commit hooks)

- **Testing**
  - Jest
  - React Testing Library
  - Cypress (E2E testing)

### 6. Documentation
- **API Documentation**
  - Swagger/OpenAPI
  - Postman Documentation

- **Code Documentation**
  - JSDoc
  - TypeDoc
  - README files

### 7. Deployment và CI/CD
- **Containerization**
  - Docker
  - Docker Compose

- **CI/CD Platforms**
  - GitHub Actions
  - GitLab CI
  - Jenkins

### 8. Performance Monitoring
- **Analytics và Monitoring**
  - Google Analytics
  - Sentry
  - LogRocket
  - New Relic
