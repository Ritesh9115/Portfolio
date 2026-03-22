import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const neonCyan = "rgba(34, 211, 238, {alpha})"; // cyan-400

class Particle {
  constructor(x, y, dx, dy, size) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.size = size;
    this.baseZ = Math.random() * 3 + 1;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = neonCyan.replace("{alpha}", "0.9");
    ctx.shadowBlur = 12;
    ctx.shadowColor = neonCyan.replace("{alpha}", "1");
    ctx.fill();
    ctx.shadowBlur = 0; 
  }

  update(ctx, canvas, mouse) {
    if (this.x > canvas.width || this.x < 0) this.dx = -this.dx;
    if (this.y > canvas.height || this.y < 0) this.dy = -this.dy;

    let targetX = this.x;
    let targetY = this.y;

    if (mouse.x && mouse.y) {
      const mdx = mouse.x - canvas.width / 2;
      const mdy = mouse.y - canvas.height / 2;
      
      targetX += (mdx * this.baseZ) * -0.015;
      targetY += (mdy * this.baseZ) * -0.015;
    }

    this.x += this.dx;
    this.y += this.dy;

    ctx.beginPath();
    ctx.arc(targetX, targetY, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = neonCyan.replace("{alpha}", "0.9");
    ctx.shadowBlur = 12;
    ctx.shadowColor = neonCyan.replace("{alpha}", "1");
    ctx.fill();
    ctx.shadowBlur = 0;
  }
}

export default function ParallaxBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;
    let mouse = { x: null, y: null };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    // Particle class has been moved outside the component

    const init = () => {
      particles = [];
      const numberOfParticles = (canvas.width * canvas.height) / 7500;
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 2 + 1;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const dx = (Math.random() - 0.5) * 1.5;
        const dy = (Math.random() - 0.5) * 1.5;
        particles.push(new Particle(x, y, dx, dy, size));
      }
    };

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let ax = particles[a].x;
          let ay = particles[a].y;
          let bx = particles[b].x;
          let by = particles[b].y;

          if (mouse.x && mouse.y) {
            ax += ((mouse.x - canvas.width / 2) * particles[a].baseZ) * -0.015;
            ay += ((mouse.y - canvas.height / 2) * particles[a].baseZ) * -0.015;
            bx += ((mouse.x - canvas.width / 2) * particles[b].baseZ) * -0.015;
            by += ((mouse.y - canvas.height / 2) * particles[b].baseZ) * -0.015;
          }

          const distanceSq = (ax - bx) ** 2 + (ay - by) ** 2;
          
          if (distanceSq < 15000) {
            const opacityValue = 1 - Math.sqrt(distanceSq) / 122;
            ctx.strokeStyle = neonCyan.replace("{alpha}", opacityValue * 0.4);
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(ctx, canvas, mouse);
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1.5 }}
      className="fixed inset-0 z-0 bg-[#02080a] pointer-events-none overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-[#02080a]/80 to-[#010405] z-10" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 opacity-100"
      />
    </motion.div>
  );
}
