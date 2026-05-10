function App() {
	const year = new Date().getFullYear();

	return (
		<div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0f1419] px-6 text-[#f4f1ea]">
			<div
				className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_1200px_800px_at_20%_-10%,rgba(196,92,62,0.35),transparent_55%),radial-gradient(ellipse_900px_600px_at_110%_20%,rgba(80,140,255,0.18),transparent_50%)]"
				aria-hidden
			/>
			<main className="relative z-10 w-full max-w-lg rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-12 text-center shadow-2xl backdrop-blur-md">
				<p className="mb-4 text-sm font-medium tracking-wide text-white/60">
					Repairs · Builds · Bikes we trust
				</p>
				<h1 className="mb-4 text-4xl font-semibold tracking-tight sm:text-5xl">
					Ladypool Cycles
				</h1>
				<p className="mb-8 text-lg leading-relaxed text-white/70">
					We’re putting the finishing touches on our new site. Thanks for your
					patience — we’ll be live here soon.
				</p>
				<a
					href="mailto:info@ladypoolcycles.co.uk"
					className="inline-block rounded-xl bg-[#f4f1ea] px-6 py-3 font-medium text-[#0f1419] transition-opacity hover:opacity-90"
				>
					Email us
				</a>
			</main>
			<p className="relative z-10 mt-10 text-sm text-white/40">
				© {year} Ladypool Cycles
			</p>
		</div>
	);
}

export default App;
