import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Resume() {
	const [activeCert, setActiveCert] = useState(null);
	const [isAllCertsOpen, setIsAllCertsOpen] = useState(false);

	const skills = {
		Languages: [
			{
				name: "C++",
				tip: "Primary language for competitive programming and DSA",
			},
			{
				name: "JavaScript",
				tip: "Core language for frontend and NodeJS backend",
			},
			{ name: "C", tip: "Strong foundation in procedural programming" },
			{
				name: "Python",
				tip: "Used for scripting, automation, and AI/ML experiments",
			},
		],
		Frameworks: [
			{
				name: "React",
				tip: "Primary framework for building SPA and complex UI",
			},
			{ name: "NodeJS", tip: "Runtime for scalable backend services" },
			{
				name: "HTML/CSS",
				tip: "Building blocks for web structure and styling",
			},
			{ name: "Bootstrap", tip: "Legacy styling framework proficiency" },
			{ name: "Tailwind", tip: "Modern utility-first styling choice" },
		],
		Tools: [
			{
				name: "MySQL",
				tip: "Proficient in relational database design & queries",
			},
			{
				name: "MongoDB",
				tip: "NoSQL database used extensively in the MERN stack",
			},
		],
		"Soft Skills": [
			{
				name: "Problem-Solving",
				tip: "Analytical approach to complex algorithms and bugs",
			},
			{
				name: "Team Player",
				tip: "Collaborative mindset and effective communication",
			},
			{
				name: "Project Management",
				tip: "Task delegation and lifecycle management",
			},
			{
				name: "Adaptability",
				tip: "Quick to learn new frameworks and technologies",
			},
			{
				name: "Leadership",
				tip: "Taking initiative to guide technical directions",
			},
		],
	};

	const education = [
		{
			degree: "Bachelor of Technology - CSE",
			school: "Lovely Professional University",
			date: "2023 - Present",
			grade: "CGPA: 7.84",
		},
		{
			degree: "Intermediate (12th Grade)",
			school: "Vaish Model Sr. Sec. School, Bhiwani",
			date: "2021 - 2022",
			grade: "76%",
		},
		{
			degree: "Matriculation (10th Grade)",
			school: "Vaish Model Sr. Sec. School, Bhiwani",
			date: "2019 - 2020",
			grade: "72%",
		},
	];

	const certificates = [
		{
			title: "Cloud Computing",
			issuer: "NPTEL (IIT Kharagpur) / SWAYAM",
			date: "Jul - Oct 2025",
			link: "https://nptel.ac.in/courses/106105167",
			image: "/assets/certificates/cloud-computing.png",
			desc: "A comprehensive course covering the foundational concepts, architecture, and deployment models of cloud computing, along with resource management and security.",
		},
		{
			title: "Full-Stack Development Training (MERN)",
			issuer: "CipherSchools",
			date: "July 2025",
			link: "https://www.cipherschools.com/batches/stp4f922",
			image: "/assets/certificates/fs.png",
			desc: "An intensive batch training program focused on building scalable MERN stack applications. The curriculum covered developing RESTful APIs, implementing secure JWT authentication, managing state with Redux, and optimizing MongoDB queries for efficient backend architecture.",
		},
		{
			title: "Communication in the 21st Century Workplace",
			issuer: "University of California, (Coursera)",
			date: "March 2026",
			link: "https://coursera.org/verify/HDG49TZ34AH2",
			image: "/assets/certificates/communication.png",
			desc: "Focuses on essential interpersonal and professional communication skills required for modern, diverse, and digital workplace environments.",
		},
		{
			title: "Master Generative AI & Tools",
			issuer: "Udemy",
			date: "August 2025",
			link: "https://ude.my/UC-7179b4ba-5643-4a43-9d2e-50a366b67b40",
			image: "/assets/certificates/ai-master.png",
			desc: "An in-depth exploration of Generative AI concepts, focusing on practical applications and prompt engineering using tools like ChatGPT.",
		},
		{
			title: "Generative AI Apps with No-Code Tools",
			issuer: "Udemy",
			date: "August 2025",
			link: "https://ude.my/UC-4f1c10bc-a19b-4ac2-9e6e-b78b08f98622",
			image: "/assets/certificates/ai-nocode.png",
			desc: "A project-based course teaching how to integrate and build AI-powered applications without writing complex code, utilizing modern no-code platforms.",
		},
		{
			title: "ChatGPT Made Easy: AI Essentials",
			issuer: "Udemy",
			date: "August 2025",
			link: "https://ude.my/UC-a21505a5-529d-46df-9eb8-21d1cc6e4cb2",
			image: "/assets/certificates/chatgpt-made-easy.png",
			desc: "A quick-start guide to understanding the basics of ChatGPT, including how to structure queries and leverage AI for daily productivity tasks.",
		},
		{
			title: "Computational Theory & Automata",
			issuer: "Infosys Springboard",
			date: "August 2025",
			link: "https://infyspringboard.onwingspan.com/web/en/app/toc/lex_auth_0135015511562403847605/overview",
			image: "/assets/certificates/computational-theory.png",
			desc: "Covers the core principles of theoretical computer science, including finite state machines, formal languages, and automata theory.",
		},
	];

	return (
		<section
			id="credentials"
			className="relative max-w-6xl mx-auto px-6 py-16 md:py-24"
		>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				className="text-center mb-16"
			>
				<h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-widest drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
					My{" "}
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
						Resume
					</span>
				</h2>
				<p className="text-white/60 font-bold text-sm max-w-xl mx-auto uppercase tracking-wide">
					Hover over skills to view details or click credentials to expand.
				</p>
			</motion.div>

			<div className="grid lg:grid-cols-2 gap-12 mb-16">
				{/* Skills Column */}
				<div className="space-y-8 bg-[#02080a] border border-white/5 p-6 md:p-8 shadow-[0_10px_30px_rgba(34,211,238,0.05)] rounded-2xl relative overflow-hidden">
					<div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[50px]" />
					<h3 className="text-2xl font-black text-white pb-4 uppercase tracking-wide border-b border-white/10 relative z-10">
						Core Skills
					</h3>

					{Object.entries(skills).map(([category, items]) => (
						<div key={category} className="mb-6 relative z-10">
							<h4 className="text-sm font-black tracking-widest text-cyan-400/80 mb-3 block uppercase">
								{category}
							</h4>
							<div className="flex flex-wrap gap-3 mt-4">
								{items.map((skill) => (
									<div key={skill.name} className="relative group cursor-help">
										<span className="px-5 py-2.5 bg-black border border-white/10 text-xs font-bold text-white/90 group-hover:bg-cyan-500/20 group-hover:border-cyan-400 group-hover:text-cyan-300 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all inline-block rounded-full uppercase tracking-wider">
											{skill.name}
										</span>
										{/* Tooltip Dialog */}
										<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-52 p-4 bg-[#010405] border border-cyan-500 rounded-xl text-xs text-white/90 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 shadow-[0_0_20px_rgba(34,211,238,0.3)] font-medium text-center">
											{skill.tip}
											<div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-cyan-500" />
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>

				{/* Credentials / Education Column */}
				<div className="space-y-8">
					<div className="bg-[#02080a] border border-white/5 p-6 md:p-8 shadow-[0_10px_30px_rgba(34,211,238,0.05)] rounded-2xl h-full relative overflow-hidden">
						<div className="absolute bottom-0 right-0 w-48 h-48 bg-cyan-500/10 blur-[60px]" />
						<h3 className="text-2xl font-black text-white pb-4 uppercase tracking-wide border-b border-white/10 mb-8 relative z-10">
							Education
						</h3>

						<div className="space-y-6 relative z-10">
							{education.map((item, idx) => (
								<div
									key={idx}
									className="bg-black/60 border border-cyan-500/20 p-6 rounded-xl hover:border-cyan-400/80 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all relative overflow-hidden group"
								>
									<div className="absolute left-0 top-0 w-1.5 h-full bg-cyan-500/30 group-hover:bg-cyan-400 transition-colors" />
									<h4 className="text-lg font-black tracking-wide text-white uppercase ml-4">
										{item.degree}
									</h4>
									<p className="text-cyan-400 font-bold text-xs uppercase tracking-widest mt-1 mb-5 ml-4">
										{item.school}
									</p>
									<div className="flex justify-between items-center text-sm border-t border-white/10 pt-4 ml-4">
										<span className="text-white/60 font-black uppercase">
											{item.date}
										</span>
										<span className="font-black text-cyan-300 bg-cyan-900/40 px-3 py-1 rounded-md border border-cyan-500/30">
											{item.grade}
										</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Certifications Section (Full Width Grid) */}
			<div
				id="certificates"
				className="bg-[#02080a] border border-white/5 p-6 md:p-12 shadow-[0_10px_30px_rgba(34,211,238,0.05)] rounded-2xl relative overflow-hidden"
			>
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent pointer-events-none" />
				<h3 className="text-3xl font-black text-white pb-6 uppercase tracking-wide border-b border-white/10 mb-10 text-center relative z-10">
					Professional <span className="text-cyan-400">Certifications</span>
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 relative z-10">
					{certificates.map((cert, idx) => (
						<motion.button
							key={idx}
							whileHover={{ scale: 1.03 }}
							whileTap={{ scale: 0.97 }}
							onClick={() => setActiveCert(cert)}
							className="w-full text-left bg-black/80 border border-white/10 p-6 rounded-xl hover:bg-cyan-900/20 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all group flex flex-col justify-between h-full min-h-[160px]"
						>
							<div>
								<h5 className="text-xl font-black tracking-wide text-white group-hover:text-cyan-300 transition-colors uppercase leading-snug">
									{cert.title}
								</h5>
								<p className="text-[11px] text-white/50 mt-2 uppercase tracking-widest font-bold">
									{cert.issuer}
								</p>
							</div>
							<div className="mt-6 flex justify-between items-center">
								<span className="text-xs font-bold bg-white/10 px-3 py-1.5 text-white/80 border border-white/5 uppercase rounded-md">
									{cert.date}
								</span>
								<div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-cyan-400 flex items-center justify-center transition-colors">
									<FaExternalLinkAlt className="text-white/40 group-hover:text-black transition-colors text-sm" />
								</div>
							</div>
						</motion.button>
					))}

					<motion.button
						whileHover={{ scale: 1.03 }}
						whileTap={{ scale: 0.97 }}
						onClick={() => setIsAllCertsOpen(true)}
						className="w-full text-center bg-cyan-900/10 border border-cyan-500/30 border-dashed p-6 rounded-xl hover:bg-cyan-900/30 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all group flex flex-col items-center justify-center h-full min-h-[160px]"
					>
						<div className="w-12 h-12 rounded-full border border-cyan-400/50 flex items-center justify-center mb-4 group-hover:bg-cyan-400 group-hover:text-black text-cyan-400 transition-colors">
							<span className="text-2xl font-black">+</span>
						</div>
						<h5 className="text-lg font-black tracking-wide text-white group-hover:text-cyan-300 transition-colors uppercase leading-snug">
							View All Certificates
						</h5>
						<p className="text-[11px] text-white/50 mt-2 uppercase tracking-widest font-bold">
							List View
						</p>
					</motion.button>
				</div>
			</div>

			{/* Certificate Modal */}
			<AnimatePresence>
				{activeCert && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
						onClick={() => setActiveCert(null)}
					>
						<motion.div
							initial={{ scale: 0.95, y: 20, opacity: 0 }}
							animate={{ scale: 1, y: 0, opacity: 1 }}
							exit={{ scale: 0.95, y: 20, opacity: 0 }}
							className="bg-[#02080a] border-2 border-cyan-500 p-6 md:p-10 rounded-2xl max-w-lg w-full shadow-[0_0_50px_rgba(34,211,238,0.3)] relative"
							onClick={(e) => e.stopPropagation()}
						>
							<button
								onClick={() => setActiveCert(null)}
								className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white/10 text-white hover:bg-cyan-400 hover:text-black rounded-full transition-colors z-10 text-xl font-bold"
							>
								✕
							</button>

							<div className="w-16 h-16 bg-cyan-400/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/50 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
								<FaExternalLinkAlt className="text-cyan-400 text-2xl" />
							</div>

							<h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tight pr-6">
								{activeCert.title}
							</h3>
							<p className="text-cyan-400 font-black text-sm uppercase tracking-widest mb-6">
								{activeCert.issuer} • {activeCert.date}
							</p>

							<div className="w-full aspect-video bg-black/50 border border-cyan-500/20 rounded-xl mb-6 overflow-hidden flex items-center justify-center relative">
								{/* Remove text and add actual image tracking when real pics are in public folder */}
								<img
									src={activeCert.image}
									alt={activeCert.title}
									className="w-full h-full object-contain p-2 opacity-100"
									onError={(e) => {
										e.target.style.display = "none";
										e.target.nextSibling.style.display = "block";
									}}
								/>
								<span className="text-cyan-400/50 uppercase tracking-widest font-black text-sm absolute hidden">
									Certificate Image Missing
								</span>
							</div>

							<p className="text-white/80 text-base leading-relaxed mb-10 font-medium border-l-2 border-cyan-400/50 pl-4">
								{activeCert.desc}
							</p>

							<a
								href={activeCert.link}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center gap-3 w-full py-4 bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.4)] text-black font-black text-sm uppercase tracking-widest transition-colors rounded-xl"
							>
								Verify External Link <FaExternalLinkAlt />
							</a>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* All Certificates List Modal */}
			<AnimatePresence>
				{isAllCertsOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
						onClick={() => setIsAllCertsOpen(false)}
					>
						<motion.div
							initial={{ scale: 0.95, y: 20, opacity: 0 }}
							animate={{ scale: 1, y: 0, opacity: 1 }}
							exit={{ scale: 0.95, y: 20, opacity: 0 }}
							className="bg-[#02080a] border-2 border-cyan-500 p-6 md:p-10 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-[0_0_50px_rgba(34,211,238,0.3)] relative"
							onClick={(e) => e.stopPropagation()}
						>
							<button
								onClick={() => setIsAllCertsOpen(false)}
								className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white/10 text-white hover:bg-cyan-400 hover:text-black rounded-full transition-colors z-10 text-xl font-bold"
							>
								✕
							</button>

							<h3 className="text-3xl font-black text-white mb-8 uppercase tracking-tight pr-10 border-b border-white/10 pb-4">
								All <span className="text-cyan-400">Certifications</span>
							</h3>

							<div className="space-y-4">
								{certificates.map((cert, idx) => (
									<a
										key={idx}
										href={cert.link}
										target="_blank"
										rel="noopener noreferrer"
										className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 md:p-6 bg-black/50 border border-cyan-500/20 rounded-xl hover:bg-cyan-900/20 hover:border-cyan-400 transition-all group"
									>
										<div>
											<h4 className="text-lg font-black text-white group-hover:text-cyan-300 transition-colors uppercase">
												{cert.title}
											</h4>
											<p className="text-cyan-400/80 text-xs uppercase tracking-widest font-bold mt-1">
												{cert.issuer} • {cert.date}
											</p>
										</div>
										<div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-cyan-400 transition-colors whitespace-nowrap">
											View Link <FaExternalLinkAlt />
										</div>
									</a>
								))}
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}
