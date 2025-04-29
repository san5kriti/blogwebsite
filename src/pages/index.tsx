"use client";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import About from "@/components/About"; // 🌟 Import About
import Blogs from "@/components/Blogs"; // 🌟 Import Blogs

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const smoothScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.3,
      speed: Math.random() * 0.2 + 0.1,
      color: Math.random() > 0.5 ? "#f5f5f5" : "#de7fa1",
    }));

    function animateStars() {
      if (!canvas || !ctx) return;
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

      requestAnimationFrame(animateStars);
    }

    animateStars();
  }, []);

  return (
    <>
      <Head>
        <title>Esoteric Daughter</title>
        <meta name="description" content="A sanctuary for cosmic hearts and secret dreams." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
        <link rel="icon" href="/draft.png" />
      </Head>

      <div className={styles.container}>
        {/* ✨ Canvas Stars */}
        <canvas ref={canvasRef} className={styles.starCanvas}></canvas>

        {/* ✨ Main Landing */}
        <main className={styles.main}>
          <div className={styles.titleSection}>
            <h1 className={styles.title}>Esoteric</h1>
            <h2 className={styles.subtitle}>daughter.</h2>
          </div>

          <div className={styles.ghostContainer}>
            <Image
              src="/draft.png"
              alt="Ghost Astronaut Mascot"
              width={300}
              height={300}
              className={styles.ghost}
              priority
            />
          </div>
        </main>

        {/* 🚀 Navbar */}
        <nav className={styles.navbar}>
          <a href="#about" onClick={(e) => smoothScroll(e, "about")}>ABOUT</a>
          <a href="#blogs" onClick={(e) => smoothScroll(e, "blogs")}>BLOGS</a>
        </nav>

        {/* 🌸 Imported Sections */}
        <About />
        <Blogs />
      </div>
    </>
  );
}