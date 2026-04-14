import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface Particle {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  color: string;
  alpha: number;
  targetX?: number;
  targetY?: number;
}

export const ParticleCanvas: React.FC<{ mode?: 'float' | 'rain' | 'chaos' | 'heart' }> = ({ mode = 'float' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const createParticles = () => {
      particles.current = [];
      const count = mode === 'rain' ? 200 : 150;
      for (let i = 0; i < count; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          vx: Math.random() * 0.5 - 0.25,
          vy: mode === 'rain' ? Math.random() * 5 + 5 : Math.random() * 0.5 - 0.25,
          color: mode === 'rain' ? '#a5b4fc' : '#ffb6c1',
          alpha: Math.random() * 0.5 + 0.2,
        });
      }
    };

    createParticles();

    let animationFrame: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (mode === 'rain') {
          if (p.y > canvas.height) p.y = -10;
          if (p.x > canvas.width) p.x = 0;
        } else {
          if (p.x > canvas.width) p.x = 0;
          if (p.x < 0) p.x = canvas.width;
          if (p.y > canvas.height) p.y = 0;
          if (p.y < 0) p.y = canvas.height;
        }

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrame);
    };
  }, [mode]);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};
