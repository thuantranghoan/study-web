import Link from "next/link";

const metrics = [
  {
    label: "Weekly revenue",
    value: "$24.8k",
    change: "+12.4% vs last week",
  },
  {
    label: "Conversion rate",
    value: "4.6%",
    change: "+0.8 pts",
  },
  {
    label: "New customers",
    value: "128",
    change: "+19 this week",
  },
];

const channels = [
  { name: "Organic Search", share: "42%" },
  { name: "Direct", share: "31%" },
  { name: "Social", share: "17%" },
  { name: "Referral", share: "10%" },
];

export default function ReportsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
              Analytics overview
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Reports dashboard
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
              A simple extra screen for this demo project, focused on key metrics,
              traffic sources, and quick status cards.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:text-white"
          >
            Back to home
          </Link>
        </div>

        <section className="grid gap-4 md:grid-cols-3">
          {metrics.map((metric) => (
            <article
              key={metric.label}
              className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg shadow-black/10"
            >
              <p className="text-sm text-slate-400">{metric.label}</p>
              <p className="mt-3 text-3xl font-semibold text-white">{metric.value}</p>
              <p className="mt-2 text-sm text-emerald-400">{metric.change}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-semibold text-white">Top traffic channels</h2>
                <p className="mt-1 text-sm text-slate-400">
                  Share of visits across the last 7 days.
                </p>
              </div>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300">
                Last 7 days
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {channels.map((channel) => (
                <div key={channel.name}>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                    <span>{channel.name}</span>
                    <span className="font-medium text-white">{channel.share}</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800">
                    <div
                      className="h-2 rounded-full bg-cyan-400"
                      style={{ width: channel.share }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-800 bg-white p-6 text-slate-900">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
              Status summary
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-slate-600">
              {[
                "3 campaigns exceeded target CPA",
                "Email open rate reached 38%",
                "Mobile sessions account for 64% of traffic",
                "Average order value increased by 9%",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-slate-100 pb-4 last:border-b-0 last:pb-0"
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-900" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </section>
      </div>
    </main>
  );
}
