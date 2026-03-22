import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaMobileAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const contactLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-4xl mb-6 text-[#0077b5]" />,
      href: "https://www.linkedin.com/in/ritesh-parasher/",
      text: "ritesh-parasher",
      desc: "Connect for professional updates."
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-4xl mb-6 text-white" />,
      href: "https://github.com/Ritesh9115",
      text: "Ritesh9115",
      desc: "Check out my repos and contributions."
    },
    {
      name: "Email",
      icon: <FaEnvelope className="text-4xl mb-6 text-cyan-400" />,
      href: "mailto:riteshparasher87@gmail.com",
      text: "Send an Email",
      desc: "riteshparasher87@gmail.com"
    },
    {
      name: "Phone",
      icon: <FaMobileAlt className="text-4xl mb-6 text-cyan-400" />,
      href: "tel:+918950803039",
      text: "Call Me",
      desc: "+91-8950803039"
    }
  ];

  return (
    <section id="contact" className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-5/12 text-left"
        >
          <div className="inline-block px-5 py-2 border-2 border-cyan-500/50 bg-cyan-500/10 text-cyan-400 text-xs font-black tracking-[0.2em] uppercase mb-8 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            Let's Connect
          </div>
          <h2 className="text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight uppercase leading-[1.1] drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Contact <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]">Me Now</span>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8 border-l-4 border-cyan-500/50 pl-6 font-medium bg-black/20 py-4 rounded-r-lg">
            I'm currently seeking new opportunities and open to exciting projects or technical collaborations. Awaiting your message!
          </p>
          <div className="flex items-center gap-4 text-white/60 text-sm font-black tracking-widest uppercase bg-black/40 inline-flex px-6 py-3 rounded-full border border-white/10">
             <FaMapMarkerAlt className="text-cyan-400 text-xl" /> Jalandhar, Punjab
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-7/12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactLinks.map(link => (
              <a 
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-start justify-between p-8 bg-[#010405] border border-white/10 hover:border-cyan-400 transition-all duration-300 overflow-hidden shadow-[0_10px_30px_rgba(34,211,238,0.05)] rounded-2xl"
              >
                <div className="absolute top-0 left-0 w-full h-[3px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-20" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-[50px] group-hover:bg-cyan-500/20 transition-all" />
                
                <div className="relative z-10 w-full">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all">
                    {link.icon}
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-wide text-white mb-2">{link.name}</h3>
                  <p className="text-cyan-400 font-bold mb-4 text-sm tracking-wider uppercase">{link.text}</p>
                  <p className="text-white/50 text-xs font-semibold border-t border-white/10 pt-5">{link.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
