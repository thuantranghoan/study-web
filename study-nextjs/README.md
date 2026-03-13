# study-nextjs

Một project nhỏ để học **Next.js App Router** với **TypeScript** và **Tailwind CSS**.

Repo này hiện có một trang chủ dạng landing page và một màn hình riêng tại `/about` để luyện cách tổ chức route, UI và mở rộng cấu trúc project.

## Có gì trong repo

- Trang chủ `/` với giao diện landing page hiện đại
- Màn hình `/about` để thử thêm route mới bằng App Router
- Cấu trúc dựa trên `src/app/`
- Phù hợp để dùng như một playground học Next.js

## Tech stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- ESLint

## Routes hiện có

- `/` — trang chủ
- `/about` — màn hình mới để học routing và UI composition

## Chạy local

```bash
npm install
npm run dev
```

Sau đó mở:

```bash
http://localhost:3000
```

## Build production

```bash
npm run build
npm run start
```

## Scripts

```bash
npm run dev     # chạy môi trường development
npm run build   # build production
npm run start   # chạy bản production
npm run lint    # kiểm tra lint
```

## Cấu trúc thư mục chính

```bash
src/app/
├─ about/
│  └─ page.tsx
├─ globals.css
├─ layout.tsx
└─ page.tsx
```

## Mục tiêu học tập

Repo này phù hợp để luyện các phần sau:

- tạo route mới bằng App Router
- chia layout và component
- dựng UI nhanh với Tailwind CSS
- mở rộng từ một màn hình đơn thành mini project hoàn chỉnh

## Hướng nâng cấp tiếp

- thêm navbar dùng chung
- tách hero section thành component riêng
- thêm dữ liệu mẫu hoặc fetch API
- deploy lên Vercel

## Repo

GitHub: <https://github.com/thuantranghoan/study-nextjs>
