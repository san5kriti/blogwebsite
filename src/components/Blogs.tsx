"use client";
import styles from "@/styles/blogs.module.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import IntroductionCard from "@/components/BlogCards/introduction";

export default function Blogs() {
  useEffect(() => {
    const canvas = document.getElementById('blogsStarCanvas') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.2 + 0.1,
      color: Math.random() > 0.5 ? "#f5f5f5" : "#de7fa1",
    }));

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();
        star.y -= star.speed;
        if (star.y < 0) {
          star.y = canvas.height;
        }
      });
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <section id="blogs" className={styles.blogsContainer}>
      <canvas id="blogsStarCanvas" className={styles.starBackground}></canvas>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={styles.innerContent}
      >
        <h1 className={styles.heading}>Blogs ☄︎₊˚⊹</h1>

        <div className={styles.blogGrid}>
          {/* ✨ Blog Cards */}
          <div className={styles.blogGrid}>
             <IntroductionCard />
          </div>

          <div className={styles.blogCard}>
            <h2 className={styles.blogTitle}>Meta-Hybrid Quantum Optimization</h2>
            <p className={styles.blogSnippet}>
              A deep dive into blending classical heuristics and quantum-inspired algorithms to solve the TSP.
            </p>
            <Link href="/blogs/blog2" className={styles.readMore}>read more →</Link>
          </div>
        </div>
        
      </motion.div>
    </section>
  );
}