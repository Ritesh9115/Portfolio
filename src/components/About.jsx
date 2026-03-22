import { motion } from "framer-motion";
import profilePic from "../assets/profile.png";
export default function About() {
	return (
		<section
			id="about"
			className="relative max-w-5xl mx-auto px-6 py-16 md:py-24"
		>
			<motion.div
				initial={{ opacity: 0, scale: 0.95, y: 30 }}
				whileInView={{ opacity: 1, scale: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.8 }}
				className="text-left bg-[#02080a] border-l-4 border-cyan-400 border-t border-r border-b border-white/10 p-10 md:p-16 shadow-[0_20px_50px_rgba(34,211,238,0.15)] rounded-2xl relative overflow-hidden"
			>
				<div className="absolute top-0 right-0 w-48 h-48 bg-cyan-400/20 blur-[60px] pointer-events-none" />

				<div className="flex items-center gap-4 mb-10">
					<div className="w-12 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
					<h2 className="text-3xl md:text-5xl font-black text-white tracking-widest uppercase">
						About <span className="text-cyan-400">Me</span>
					</h2>
				</div>

				<div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
					<div className="w-full md:w-2/3 space-y-6">
						<p className="text-lg md:text-xl text-white/80 leading-relaxed border-l-2 px-6 border-cyan-400/30 font-medium">
							I am <strong className="text-cyan-400">Ritesh Sharma</strong>, a
							Full Stack Web Developer passionate about building robust,
							scalable MERN applications and mastering algorithms. I strive to
							write clean code, handle complex data securely, and deliver
							impactful digital experiences that leave a lasting impression.
						</p>

						<p className="text-lg md:text-xl text-white/80 leading-relaxed border-l-2 px-6 border-cyan-400/30 font-medium">
							From crafting highly responsive UI components with React and
							Tailwind to engineering low-latency WebSocket signaling servers,
							my goal is always to bridge the gap between complex engineering
							and beautiful design.
						</p>
					</div>

					<div className="w-full md:w-1/3 flex justify-center mt-8 md:mt-0">
						<div className="relative group">
							<div className="absolute -inset-1 bg-cyan-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
							<img
								src={profilePic}
								alt="Ritesh Sharma Profile"
								className="relative w-64 h-64 md:w-full md:max-w-xs aspect-square object-cover rounded-2xl border-2 border-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.15)] group-hover:border-cyan-400 transition-all"
								onError={(e) => {
									e.target.src =
										"https://via.placeholder.com/400x400/010405/22d3ee?text=Add+Profile+Pic";
								}}
							/>
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
}
