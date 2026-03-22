export default function GlassCard({ children, className = "" }) {
	return (
		<div
			className={`rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl ${className}`}
		>
			{children}
		</div>
	);
}
