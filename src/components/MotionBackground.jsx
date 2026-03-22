import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function MotionBackground() {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		let animationFrameId;

		// Set canvas to full screen
		const setCanvasSize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};
		setCanvasSize();
		window.addEventListener("resize", setCanvasSize);

		// Particle Wave Configuration
		const particles = [];
		const rows = 40; // Depth of the wave
		const cols = 60; // Width of the wave
		const spacing = 45; // Space between dots

		// Initialize grid of particles
		for (let z = 0; z < rows; z++) {
			for (let x = 0; x < cols; x++) {
				particles.push({
					x: (x - cols / 2) * spacing,
					z: z * spacing,
					y: 0,
				});
			}
		}

		let time = 0;

		const render = () => {
			// Clear canvas with a very slight fade for a motion blur effect
			ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			time += 0.03; // Speed of the wave

			const cx = canvas.width / 2;
			const cy = canvas.height / 2 + 150; // Push wave down slightly
			const fov = 400; // Field of view (Camera distance)

			particles.forEach((p) => {
				// 3D Wave Math: Combine sine and cosine waves on X and Z axes
				const wave1 = Math.sin(p.x * 0.015 + time) * 80;
				const wave2 = Math.cos(p.z * 0.02 + time * 0.8) * 120;
				p.y = wave1 + wave2;

				// 3D to 2D Projection
				const zOffset = 200; // Distance from camera
				const scale = fov / (fov + p.z + zOffset);

				const x2d = p.x * scale + cx;
				const y2d = p.y * scale + cy;

				// Calculate depth-based opacity and size
				// Particles closer to camera are brighter and larger
				const alpha = Math.max(0.1, Math.min(1, scale * 1.8 - 0.2));
				const size = Math.max(0.5, scale * 3);

				// Draw the neon particle
				ctx.beginPath();
				ctx.arc(x2d, y2d, size, 0, Math.PI * 2);

				// Create the Cyan/Teal glow effect from your image
				ctx.fillStyle = `rgba(34, 211, 238, ${alpha})`;
				ctx.shadowBlur = 10;
				ctx.shadowColor = "rgba(34, 211, 238, 0.8)";
				ctx.fill();
			});

			animationFrameId = requestAnimationFrame(render);
		};

		render();

		return () => {
			cancelAnimationFrame(animationFrameId);
			window.removeEventListener("resize", setCanvasSize);
		};
	}, []);

	return (
		<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black">
			{/* The 3D Canvas Wave */}
			<canvas ref={canvasRef} className="absolute inset-0 z-0" />

			{/* Soft ambient glows from your original file to blend it with the UI */}
			<motion.div
				className="absolute -top-40 left-[-10%] h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[130px] z-10"
				animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
				transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
			/>
			<motion.div
				className="absolute top-1/4 right-[-10%] h-[480px] w-[480px] rounded-full bg-teal-300/10 blur-[140px] z-10"
				animate={{ x: [0, -70, 0], y: [0, 50, 0] }}
				transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
			/>
		</div>
	);
}
