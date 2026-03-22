import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-24 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-5xl relative z-10 w-full"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="inline-block px-4 py-2 border border-cyan-400/50 bg-cyan-400/10 text-cyan-300 text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-8 shadow-[0_0_15px_rgba(34,211,238,0.2)] rounded-full"
        >
          Welcome to my portfolio
        </motion.div>
        
        <div className="relative mb-8">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring", damping: 20 }}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] leading-none"
          >
            RITESH
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, type: "spring", damping: 20 }}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-cyan-200 to-cyan-500 drop-shadow-[0_0_30px_rgba(34,211,238,0.5)] leading-none -mt-2 md:-mt-6"
          >
            SHARMA
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mb-12 max-w-3xl mx-auto bg-black/40 p-6 sm:p-8 border-l-4 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.15)] backdrop-blur-md rounded-r-lg flex flex-col gap-2"
        >
          <p className="text-lg md:text-2xl text-white/80 font-medium tracking-wide">
            Full Stack Web Developer & Software Engineer.
          </p>
          <p className="text-sm md:text-lg text-cyan-400/90 font-medium tracking-wide text-left md:text-center">
            Building scalable, real-time web applications with React, Node.js, and modern web technologies.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a href="#projects" className="px-10 py-4 text-sm font-bold tracking-widest uppercase text-black bg-cyan-400 hover:bg-cyan-300 transition-all shadow-[0_0_25px_rgba(34,211,238,0.6)] hover:shadow-[0_0_40px_rgba(34,211,238,0.9)] w-full sm:w-auto rounded-full">
            View Projects
          </a>
          <a href="#credentials" className="px-10 py-4 text-sm font-bold tracking-widest uppercase text-cyan-400 bg-black/80 border border-cyan-400/50 hover:bg-cyan-400/10 transition-all backdrop-blur-sm w-full sm:w-auto shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] rounded-full">
            Explore Credentials
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
