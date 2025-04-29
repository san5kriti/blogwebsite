// src/components/About.tsx
"use client";
import Head from "next/head";
import styles from "@/styles/about.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function About() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = document.getElementById('aboutStarCanvas') as HTMLCanvasElement;
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
      if (!ctx) return; // 🪄 THIS was missing before
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

    // 💡 Bonus: cleanup if you want, but optional
    return () => {
      if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx?.clearRect(0, 0, canvas.width, canvas.height);
      }
    };
  }, []);

  return (
    <>
      <section id="about" className={styles.aboutContainer}>
        <canvas id="aboutStarCanvas" className={styles.starBackground}></canvas>

        <motion.div
          className={styles.aboutFlex}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* LEFT SIDE: Text */}
          <div className={styles.aboutText}>
            <h1 className={styles.heading}>about 𖥔 ݁ ˖</h1>

            <p className={styles.description}>
              Some people journal. I, being extra, built a pixelated wormhole to dump my metaphysical anxieties into.  
              If you know me in real life — <span className={styles.highlight}>no you don't</span>.
              <br /><br />
              Welcome to <span className={styles.siteName}>Esoteric Daughter</span> — a cursed constellation where machine learning plays god, mythologies combust inside black holes, and quantum particles gaslight me at every opportunity.  
              Here, Kafka, Camus, and Nietzsche run an underground fight club in my brain while my ceiling fan spins at 2AM, silently judging.  
              Reality? A hoax. Logic? Optional. Meaning? A group project where nobody showed up.
              <br /><br />
              Expect caffeinated AI ramblings stitched together with pastel existential crises, mythological trauma dumped between API calls, and philosophical fistfights over whether free will was ever a real patch update.
              <br /><br />
              Bring your nihilism. Bring your coffee. Stay for the cosmic melodrama. ☕️
            </p>
          </div>

          {/* RIGHT SIDE: Images */}
          <div className={styles.aboutImages}>
            <div className={styles.imageContainer}>
              <Image src="/kafka.png" alt="Kafka" width={150} height={150} />
            </div>
            <div className={styles.imageContainer}>
              <Image src="/camus.png" alt="Camus" width={150} height={150} />
            </div>
            <div className={styles.imageContainer}>
              <Image src="/Nietzsche.png" alt="Nietzsche" width={150} height={150} />
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}