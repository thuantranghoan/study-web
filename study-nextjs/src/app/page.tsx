import Link from "next/link";

const features = [
  {
    title: "App Router",
    description: "Tổ chức route bằng thư mục src/app và thêm màn hình mới rất nhanh.",
  },
  {
    title: "TypeScript",
    description: "Giữ code dễ bảo trì hơn khi tiếp tục mở rộng project học tập.",
  },
  {
    title: "Tailwind CSS",
    description: "Dựng UI gọn, nhanh, phù hợp để thử layout và component.",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_transparent_32%),radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.18),_transparent_28%),radial-gradient(circle_at_50%_80%,_rgba(34,197,94,0.14),_transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.04),transparent_35%,rgba(255,255,255,0.03))]" />

      <section className="relative mx-auto flex min-h-screen max-w-6xl items-center px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-white/80 backdrop-blur-md shadow-[0_0_30px_rgba(56,189,248,0.12)]">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
              Study Next.js • Updated starter
            </div>

            <div className="space-y-5">
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-300/80">
                Next.js App Router
              </p>
              <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
                Học Next.js,
                <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                  bắt đầu bằng một UI gọn và đẹp.
                </span>
              </h1>
              <p className="max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                Trang chủ giờ đóng vai trò như landing page nhỏ cho repo học tập, đồng thời liên kết
                tới một màn hình mới để luyện tạo route bằng App Router.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(14,165,233,0.35)]"
              >
                Mở màn hình mới
              </Link>
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/12"
              >
                Xem docs Next.js
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-white/10 bg-white/6 p-5 backdrop-blur-md shadow-[0_10px_30px_rgba(15,23,42,0.35)]"
                >
                  <h2 className="text-lg font-semibold text-white">{feature.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-white/65">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cyan-400/25 via-sky-400/10 to-fuchsia-500/20 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/8 p-5 shadow-[0_20px_80px_rgba(2,6,23,0.65)] backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/75 p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-sm text-white/45">src/app/about/page.tsx</p>
                    <p className="mt-1 text-lg font-semibold">New screen added</p>
                  </div>
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
                    Ready
                  </span>
                </div>

                <div className="mt-6 space-y-4 font-mono text-sm leading-7 text-white/75">
                  <p>
                    <span className="text-fuchsia-300">route</span>:
                    <span className="ml-2 text-emerald-300">/about</span>
                  </p>
                  <p>
                    <span className="text-fuchsia-300">goal</span>:
                    <span className="ml-2 text-emerald-300">practice app router + UI composition</span>
                  </p>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white">
                    <p className="text-white/55">What changed</p>
                    <p className="mt-3 text-2xl font-bold tracking-tight text-white">
                      New screen + updated README
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/60">
                      Vừa có route mới, vừa có mô tả rõ hơn để tiếp tục học và mở rộng repo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
