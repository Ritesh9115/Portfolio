import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCloudUploadAlt, FaFileDownload } from "react-icons/fa";

export default function Navbar() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const navItems = [
    { name: "About Me", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Credentials", href: "#credentials" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact Details", href: "#contact" }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 pointer-events-none"
      >
        <div className="pointer-events-auto flex items-center justify-between px-6 py-3 mx-4 rounded-full bg-[#02080a]/80 border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.15)] w-full max-w-5xl">
          <ul className="flex items-center space-x-4 md:space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="text-[10px] md:text-sm font-black uppercase tracking-widest text-white/70 hover:text-cyan-400 hover:shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all drop-shadow-md">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <button 
            onClick={() => setIsResumeModalOpen(true)}
            className="ml-4 px-4 py-2 bg-cyan-400 hover:bg-cyan-300 text-black text-[10px] md:text-sm font-black uppercase tracking-widest rounded-full transition-all shadow-[0_0_15px_rgba(34,211,238,0.4)] whitespace-nowrap"
          >
            View CV
          </button>
        </div>
      </motion.nav>

      {/* Resume Upload / View Modal */}
      <AnimatePresence>
        {isResumeModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setIsResumeModalOpen(false)}
          >
             <motion.div 
               initial={{ scale: 0.95, y: 20, opacity: 0 }}
               animate={{ scale: 1, y: 0, opacity: 1 }}
               exit={{ scale: 0.95, y: 20, opacity: 0 }}
               className="bg-[#02080a] border-2 border-cyan-500 p-6 md:p-8 rounded-2xl max-w-4xl w-full shadow-[0_0_50px_rgba(34,211,238,0.3)] relative"
               onClick={(e) => e.stopPropagation()}
             >
               <button 
                 onClick={() => setIsResumeModalOpen(false)}
                 className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white/10 text-white hover:bg-cyan-400 hover:text-black rounded-full transition-colors z-10 text-xl font-bold"
               >
                 ✕
               </button>

               <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tight pr-6">Professional <span className="text-cyan-400">Credentials</span></h3>
               
               <div className="space-y-6">
                 {/* PDF Viewer Block */}
                 <div className="w-full h-[65vh] max-h-[600px] border border-cyan-500/30 rounded-xl overflow-hidden bg-black/50">
                   <iframe 
                     src="/assets/docs/cv-final.pdf"
                     className="w-full h-full"
                     title="Resume PDF"
                   />
                 </div>

                 {/* Download Block */}
                 <a 
                   href="/assets/docs/cv-final.pdf"
                   download="Ritesh_Sharma_CV.pdf"
                   className="w-full flex items-center justify-center gap-3 py-4 bg-cyan-400 hover:bg-cyan-300 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] text-black font-black text-sm uppercase tracking-widest transition-all rounded-xl"
                 >
                   <FaFileDownload className="text-lg" /> Download CV PDF
                 </a>
               </div>
               
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
