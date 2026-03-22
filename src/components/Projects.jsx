import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
	const [activeProject, setActiveProject] = useState(null);

	const projects = [
		{
			title: "What A Sandwich",
			subtitle: "Food Ordering Platform",
			description:
				"Engineered a full-stack platform with menu browsing, cart management, checkout logic, and an admin dashboard.",
			details:
				"In this project, I architected a full-scale food backend. I integrated real-time order tracking using Web Sockets, dramatically reducing wait-time inquiries by ~45%. I also built a robust admin dashboard for end-to-end order control. Challenges included handling concurrent WebSocket connections and securing JWT payload scopes.",
			learning:
				"Mastered real-time WebSocket integration for live status updates and robust JWT-based role authentication scopes.",
			techStack: [
				"React",
				"Node.js",
				"Express",
				"MongoDB",
				"WebSockets",
				"Tailwind",
			],
			github: "https://github.com/Ritesh9115/What-a-Sanwich-frontend",
			live: "https://www.sandwichstore.in/",
			date: "Aug 2025 - Nov 2025",
		},
		{
			title: "Baat-Chit",
			subtitle: "Video Conferencing Website",
			description:
				"Built a real-time communications platform using WebRTC and Node.js. Enabled peer-to-peer A/V streaming and screen sharing.",
			details:
				"This application tackled the complex issue of low-latency video streaming. I used WebRTC for peer-to-peer connections and built a custom Node.js signaling server. A major difficulty was handling NAT traversal; I optimized connectivity via STUN which boosted successful connections by 35%.",
			learning:
				"Gained comprehensive knowledge in managing concurrent WebRTC connections, STUN traversal, and scalable signaling interfaces.",
			techStack: [
				"React",
				"WebRTC",
				"Node.js",
				"Express",
				"MongoDB",
				"Tailwind",
			],
			github: "https://github.com/Ritesh9115/Baat-Chit-VideoCallWebsite",
			live: "https://baat-chit-8rq0.onrender.com/",
			date: "Aug 2025 - Oct 2025",
		},
		{
			title: "AIRBNB Clone",
			subtitle: "Property Rental Platform",
			description:
				"Architected a full-stack rental platform with property listings, image uploads, dynamic pricing, and conflict-free availability checks.",
			details:
				"I designed a scalable schema for property booking and 3-level role-based access control (admin/host/guest) secured with Passport.js. Developing a conflict-free availability check algorithm for reservations was a complex logic challenge, but it reduced overall booking time by ~30%.",
			learning:
				"Learnt how to effectively architect complex database schemas for inventory collisions and handle 3-tiered authentication protocols securely.",
			techStack: ["Node.js", "Express", "MongoDB", "Passport.js", "Tailwind"],
			github: "https://github.com/Ritesh9115/AirBnb",
			live: null,
			date: "Aug 2025 - Oct 2025",
		},
	];

	return (
		<section
			id="projects"
			className="relative max-w-6xl mx-auto px-6 py-16 md:py-24 overflow-hidden"
		>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.6 }}
				className="text-center mb-16"
			>
				<div className="flex items-center justify-center gap-4 mb-4">
					<div className="w-12 h-2 bg-cyan-400 hidden sm:block rounded-full shadow-[0_0_15px_rgba(34,211,238,0.6)]" />
					<h2 className="text-3xl md:text-5xl font-black text-white tracking-widest uppercase">
						My <span className="text-cyan-400">Projects</span>
					</h2>
					<div className="w-12 h-2 bg-cyan-400 hidden sm:block rounded-full shadow-[0_0_15px_rgba(34,211,238,0.6)]" />
				</div>
				<p className="text-cyan-400/80 font-bold text-sm max-w-2xl mx-auto uppercase tracking-wider">
					Select a project to view more details.
				</p>
			</motion.div>

			<div className="relative max-w-5xl mx-auto">
				<div className="absolute left-[20px] md:left-1/2 top-4 bottom-4 w-[2px] bg-cyan-400/30 transform md:-translate-x-1/2" />

				<div className="space-y-16 md:space-y-24">
					{projects.map((project, index) => {
						const isEven = index % 2 === 0;
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
								whileInView={{ opacity: 1, x: 0, y: 0 }}
								viewport={{ once: true, margin: "-100px" }}
								transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
								onClick={() => setActiveProject(project)}
								className={`relative flex flex-col md:flex-row items-center justify-between gap-8 cursor-pointer ${
									isEven ? "md:flex-row-reverse" : ""
								}`}
							>
								<div className="absolute left-[20px] md:left-1/2 w-4 h-4 bg-cyan-400 rounded-full transform -translate-x-[7px] md:-translate-x-1/2 top-8 md:top-1/2 md:-translate-y-1/2 z-10 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

								<div className="w-full pl-12 md:pl-0 md:w-5/12">
									<div className="relative bg-[#010405] border border-white/10 p-6 md:p-8 hover:bg-[#02080a] hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] transition-all group duration-300 rounded-2xl">
										<div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-400 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-t-2xl" />

										<div className="flex justify-between items-center mb-4">
											<span className="text-cyan-400 font-bold text-xs bg-cyan-400/10 px-3 py-1 rounded-full">
												{project.date}
											</span>
											<span className="text-white/40 text-xs font-black uppercase tracking-widest">
												Project {index + 1}
											</span>
										</div>

										<h3 className="text-2xl font-black text-white mb-1 group-hover:text-cyan-400 transition-colors uppercase tracking-wide">
											{project.title}
										</h3>
										<h4 className="text-sm font-bold text-white/50 mb-4">
											{project.subtitle}
										</h4>
										<p className="text-white/70 mb-6 leading-relaxed text-sm line-clamp-3 font-medium">
											{project.description}
										</p>

										<div className="flex flex-wrap gap-2 mb-6">
											{project.techStack.slice(0, 3).map((tag) => (
												<span
													key={tag}
													className="text-[10px] font-bold uppercase tracking-widest text-cyan-300 bg-cyan-900/30 px-3 py-1 border border-cyan-500/30 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.1)]"
												>
													{tag}
												</span>
											))}
											{project.techStack.length > 3 && (
												<span className="text-[10px] font-bold uppercase tracking-widest text-cyan-300 bg-cyan-900/30 px-3 py-1 border border-cyan-500/30 rounded-full">
													+{project.techStack.length - 3}
												</span>
											)}
										</div>

										<div className="flex gap-5">
											{project.github && (
												<a
													href={project.github}
													target="_blank"
													rel="noopener noreferrer"
													onClick={(e) => e.stopPropagation()}
													className="p-2 border border-white/20 rounded-full text-white/60 hover:text-white hover:border-white transition-all flex items-center gap-2 text-sm font-bold"
												>
													<FaGithub className="text-lg" />
												</a>
											)}
											{project.live && (
												<a
													href={project.live}
													target="_blank"
													rel="noopener noreferrer"
													onClick={(e) => e.stopPropagation()}
													className="px-4 py-2 bg-cyan-400/10 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all flex items-center gap-2 text-sm font-bold rounded-full"
												>
													Live Demo <FaExternalLinkAlt />
												</a>
											)}
										</div>
									</div>
								</div>

								<div className="hidden md:block w-5/12" />
							</motion.div>
						);
					})}
				</div>
			</div>

			<AnimatePresence>
				{activeProject && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
						onClick={() => setActiveProject(null)}
					>
						<motion.div
							initial={{ scale: 0.95, y: 20, opacity: 0 }}
							animate={{ scale: 1, y: 0, opacity: 1 }}
							exit={{ scale: 0.95, y: 20, opacity: 0 }}
							transition={{ type: "spring", damping: 25, stiffness: 300 }}
							className="bg-[#02080a] border-2 border-cyan-400/50 p-8 md:p-12 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-[0_0_60px_rgba(34,211,238,0.2)] rounded-2xl relative"
							onClick={(e) => e.stopPropagation()}
						>
							<button
								onClick={() => setActiveProject(null)}
								className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white/10 text-white/80 hover:bg-cyan-400 hover:text-black rounded-full transition-colors z-10 text-xl font-bold"
							>
								✕
							</button>

							<h3 className="text-4xl md:text-5xl font-black text-white mb-2 uppercase tracking-tight pr-10 mt-2">
								{activeProject.title}
							</h3>
							<p className="text-cyan-400 font-bold mb-8 text-lg">
								{activeProject.subtitle}
							</p>

							<div className="bg-black/50 p-6 border border-cyan-500/20 mb-8 rounded-xl relative overflow-hidden">
								<div className="absolute top-0 left-0 w-2 h-full bg-cyan-400" />
								<h4 className="text-xs uppercase tracking-widest font-black text-white/50 mb-3 ml-3">
									Tech Stack Used
								</h4>
								<div className="flex flex-wrap gap-2 ml-3">
									{activeProject.techStack.map((tag) => (
										<span
											key={tag}
											className="px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 text-xs font-bold text-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.1)]"
										>
											{tag}
										</span>
									))}
								</div>
							</div>

							<div className="space-y-8">
								<div>
									<h4 className="text-sm font-black text-white mb-3 uppercase tracking-wider flex items-center gap-2">
										<span className="text-cyan-400 text-lg">•</span>{" "}
										Implementation Details
									</h4>
									<p className="text-white/80 leading-relaxed text-sm md:text-base font-medium">
										{activeProject.details}
									</p>
								</div>

								<div>
									<h4 className="text-sm font-black text-white mb-3 uppercase tracking-wider flex items-center gap-2">
										<span className="text-cyan-400 text-lg">•</span> Key
										Highlights
									</h4>
									<p className="text-white/80 leading-relaxed text-sm md:text-base font-medium">
										{activeProject.description}
									</p>
								</div>
							</div>

							<div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-4">
								{activeProject.live && (
									<a
										href={activeProject.live}
										target="_blank"
										rel="noopener noreferrer"
										className="px-8 py-3 bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.4)] text-black font-black text-sm uppercase tracking-wider transition-all flex items-center gap-3 rounded-full"
									>
										View Live <FaExternalLinkAlt />
									</a>
								)}
								{activeProject.github && (
									<a
										href={activeProject.github}
										target="_blank"
										rel="noopener noreferrer"
										className="px-8 py-3 bg-transparent border-2 border-cyan-400/50 hover:bg-cyan-400/10 text-cyan-400 hover:text-cyan-300 font-black text-sm uppercase tracking-wider transition-all flex items-center gap-3 rounded-full"
									>
										<FaGithub className="text-lg" /> GitHub Repo
									</a>
								)}
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}
