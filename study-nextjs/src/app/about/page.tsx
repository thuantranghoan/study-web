import Link from "next/link";

const checkpoints = [
  "Tạo route mới bằng src/app/about/page.tsx",
  "Thiết kế một màn hình riêng để luyện App Router",
  "Cập nhật README để phản ánh thay đổi mới",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-16 text-slate-900 sm:px-10">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-xl shadow-slate-300/40">
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-700">
              New screen
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Màn hình giới thiệu cho repo study-nextjs
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Đây là route mới để bạn tiếp tục luyện App Router, chia layout, tách component,
              hoặc thêm dữ liệu động ở bước tiếp theo.
            </p>
          </div>

          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-semibold">Những gì đã làm</h2>
            <ul className="mt-4 space-y-3 text-slate-700">
              {checkpoints.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-cyan-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Quay về trang chủ
            </Link>
            <a
              href="https://nextjs.org/learn"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
            >
              Học Next.js
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
