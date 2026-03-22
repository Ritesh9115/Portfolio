import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Parallax3DBackground() {
	const [mouse, setMouse] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouse = (e) => {
			const x = (e.clientX / window.innerWidth - 0.5) * 60;
			const y = (e.clientY / window.innerHeight - 0.5) * 60;
			setMouse({ x, y });
		};

		window.addEventListener("mousemove", handleMouse);
		return () => window.removeEventListener("mousemove", handleMouse);
	}, []);

	return (
		<div className="fixed inset-0 z-0 overflow-hidden bg-black">
			{/* Layer 1 */}
			<motion.div
				animate={{ x: mouse.x * 0.2, y: mouse.y * 0.2 }}
				transition={{ type: "spring", stiffness: 50 }}
				className="absolute top-20 left-10 w-80 h-80 bg-cyan-400/60 rounded-full blur-[120px]"
			/>

			{/* Layer 2 */}
			<motion.div
				animate={{ x: mouse.x * 0.4, y: mouse.y * 0.4 }}
				transition={{ type: "spring", stiffness: 50 }}
				className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-purple-400/60 rounded-full blur-[140px]"
			/>

			{/* Auto floating motion (THIS is what you're missing) */}
			<motion.div
				className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400/40 rounded-full blur-[100px]"
				animate={{
					x: [0, 80, -80, 0],
					y: [0, -60, 60, 0],
				}}
				transition={{
					duration: 12,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>

			{/* Grid */}
			<div
				className="absolute inset-0 opacity-[0.08]"
				style={{
					backgroundImage:
						"linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
					backgroundSize: "60px 60px",
				}}
			/>

			{/* Overlay */}
			<div className="absolute inset-0 bg-black/50" />
		</div>
	);
}
