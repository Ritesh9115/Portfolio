import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Experience() {
	const experience = [
		{
			role: "Freelance Full Stack Developer",
			company: "What A Sandwich (Client Project)",
			date: "Live Project",
			desc: [
				"Developed a full-stack food ordering platform based on real client requirements",
				"Built an admin dashboard with live analytics and user data management",
				"Enabled ordering from table and reception for real-world operational use",
				"Implemented real-time order tracking using WebSockets for live updates",
			],
			link: "https://www.sandwichstore.in/",
			linkText: "Live Link"
		},
		{
			role: "Volunteer",
			company: "Stand With Nature, Bhiwani",
			date: "NGO",
			desc: [
				"Participated in plantation drives to promote environmental sustainability",
				"Contributed to waste management initiatives and awareness programs",
				"Collaborated with local government bodies on environmental activities",
				"Worked in a team to organize and execute community projects",
			],
			link: "http://standwithnature.in/",
			linkText: "Website"
		},
	];

	return (
		<section
			id="experience"
			className="relative max-w-5xl mx-auto px-6 py-16 md:py-24"
		>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				className="flex items-center gap-4 mb-16"
			>
				<div className="w-12 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
				<h2 className="text-3xl md:text-5xl font-black text-white tracking-widest uppercase">
					My <span className="text-cyan-400">Experience</span>
				</h2>
			</motion.div>

			<div className="grid md:grid-cols-2 gap-8 relative z-10" style={{ perspective: "1000px" }}>
				{experience.map((item, idx) => (
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						whileHover={{
							y: -8, // Clean 3D vertical float
							boxShadow: "0 25px 50px -12px rgba(34, 211, 238, 0.25)", // Deep shadow for depth
						}}
						transition={{ duration: 0.3, ease: "easeOut" }} // Smooth professional fade
						key={idx}
						className="bg-[#02080a] border border-cyan-500/30 p-6 shadow-[0_10px_30px_rgba(34,211,238,0.05)] rounded-2xl relative overflow-hidden group hover:border-cyan-400 transition-colors duration-300 h-full flex flex-col justify-between"
					>
						<div className="absolute left-0 top-0 w-2 h-full bg-cyan-500/30 group-hover:bg-cyan-400 transition-colors" />
						<div className="absolute top-0 right-0 w-48 h-48 bg-cyan-400/10 blur-[60px] pointer-events-none" />

						<div className="relative z-10 h-full flex flex-col">
							<div className="flex flex-col mb-4">
								<h3 className="text-xl font-black tracking-wide text-white uppercase group-hover:text-cyan-300 transition-colors ml-4">
									{item.role}
								</h3>
								<p className="text-cyan-400 font-bold text-sm uppercase tracking-widest mt-1 ml-4">
									{item.company}
								</p>
								<span className="text-white/80 font-black uppercase text-xs md:text-sm mt-4 bg-white/10 border border-white/20 px-4 py-1.5 rounded-md self-start ml-4 w-max shadow-sm">
									{item.date}
								</span>
							</div>

							<ul className="text-white/80 text-sm space-y-3 list-disc list-outside pl-4 ml-4 border-t border-white/10 pt-6 mt-4 font-medium flex-grow">
								{item.desc.map((bullet, i) => (
									<li key={i} className="leading-relaxed">
										{bullet}
									</li>
								))}
							</ul>

							{item.link && (
								<div className="mt-8 ml-4">
									<a
										href={item.link}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-400/10 hover:bg-cyan-400 hover:text-black text-cyan-400 text-xs font-black uppercase tracking-widest rounded-full transition-all border border-cyan-400/30 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]"
									>
										{item.linkText} <FaExternalLinkAlt className="text-sm" />
									</a>
								</div>
							)}
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
