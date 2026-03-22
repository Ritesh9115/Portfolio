import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ isOpen, onClose, children }) {
	return (
		<AnimatePresence>
			{isOpen && (
				<>
					<motion.div
						className="fixed inset-0 bg-black/70 z-50"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={onClose}
					/>

					<motion.div
						className="fixed z-50 top-1/2 left-1/2 w-[90%] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-black border border-white/10 p-6"
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.8, opacity: 0 }}
					>
						<button
							onClick={onClose}
							className="absolute top-3 right-3 text-white text-xl hover:text-red-400"
						>
							✕
						</button>

						{children}
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}
