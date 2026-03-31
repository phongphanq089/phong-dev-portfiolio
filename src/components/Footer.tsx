export default function Footer() {
	const year = new Date().getFullYear()

	return (
		<footer className="mt-20 border-t border-slate-200 bg-white/50 px-4 pb-14 pt-12 dark:border-slate-800 dark:bg-black/20 backdrop-blur-sm">
			<div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-4 sm:flex-row">
				{/* Phần nội dung chính của bạn */}
				<h1 className="text-sm font-bold tracking-widest text-slate-900 dark:text-white uppercase">
					Footer
				</h1>

				{/* Phần thông tin bản quyền nhỏ gọn */}
				<p className="text-xs text-slate-500 dark:text-slate-400">
					&copy; {year} Your Brand. All rights reserved.
				</p>
			</div>
		</footer>
	)
}
