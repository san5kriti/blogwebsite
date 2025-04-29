"use client";
import { useEffect } from "react";
import styles from "@/styles/blogsstyles/introblog.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaDiscord, FaMedium, FaSpotify, FaCoffee, FaGithub, FaChrome } from "react-icons/fa";

export default function IntroBlog() {
  useEffect(() => {
    const canvas = document.getElementById('introStarCanvas') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.2 + 0.1,
      color: Math.random() > 0.5 ? "#f5f5f5" : "#de7fa1",
    }));

    function animate() {
      if (!ctx) return; // ✅ very important
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

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className={styles.blogContainer}>
      {/* ✨ BACKGROUND STARS */}
      <canvas id="introStarCanvas" className={styles.starBackground}></canvas>

      {/* ✨ CONTENT */}
      <div className={styles.contentWrapper}>
        {/* left side (text) */}
        <div className={styles.textContent}>
          <Link href="/#blogs" className={styles.backLink}>← back to blogs</Link>

          <h1 className={styles.blogTitle}>Lore Dump</h1>

          <p>
            Hey, I'm <span className={styles.highlight}>Sanskriti</span>. I like cats, existentialism, and coffee.  
            I build side projects at <b>4 AM</b> just for the sake of it and sometimes spiral headfirst into metaphysical concepts.
            Like — tell me you didn't know <span className={styles.highlight}>morality was subjective</span>, or that <span className={styles.highlight}>quantum reality loop jumping</span> might be real.
          </p>

          <p>
            I've always wanted to start my own blog, and I used to keep a diary — until I realized it didn’t even help <span className={styles.highlight}>Kafka</span> that much.  
            Nonetheless, <b>writing remains a sacred rebellion.</b>
          </p>

          <p>
            Eventually, I got sick of scavenging through sad WordPress templates,  
            so I did the rational thing: <b>built my own website in a single, sleep-deprived five-hour sitting.</b>
          </p>

          <p>
            This is real, I promise — <span className={styles.highlight}>no AI-written monologues</span> here.  
            Just <b>raw neuron misfires</b> streaming straight out of my cerebrum.
          </p>

          <p>
            I want to talk about everything as important as theoretical:  
            from the piece of toast I had one morning, to the <span className={styles.highlight}>importance of individuality</span>,  
            to <span className={styles.highlight}>intellectualizing every morsel of human connection</span>.
          </p>

          <p>
            If you have ideas for collabs, or you're just a fellow <span className={styles.highlight}>Greek mythology</span> fan (I love <b>Ovid</b> — if you don't, that's your own tragedy),  
            find me on LinkedIn or Discord.
          </p>

          <p>
            <b>Enjoy the reads. Stay Unhinged. Stay Unbothered. Stay Chaotic. 🌌</b>
          </p>
        </div>

        {/* right side */}
        <div className={styles.imageWrapper}>
          <div className={styles.catAndButtons}>
            <Image
              src="/catto.png"
              alt="cat"
              width={300}
              height={300}
              priority
            />

            {/* 🌐 Social Icons */}
            <div className={styles.socialIcons}>
              <a href="https://linkedin.com/in/sanskritishelke" target="_blank" className={styles.iconLink}><FaLinkedin /></a>
              <a href="https://discordapp.com/users/san5kriti" target="_blank" className={styles.iconLink}><FaDiscord /></a>
              <a href="https://medium.com/@san5kriti" target="_blank" className={styles.iconLink}><FaMedium /></a>
              <a href="https://github.com/san5kriti/" target="_blank" className={styles.iconLink}><FaGithub /></a>
              <a href="https://sanskritishelke.com/" target="_blank" className={styles.iconLink}><FaChrome /></a>
              <a href="https://open.spotify.com/show/5FbN4lYxZUKf6oTQiBFSe3" target="_blank" className={styles.iconLink}><FaSpotify /></a>
              <a href="https://buymeacoffee.com/san5kriti" target="_blank" className={styles.iconLink}><FaCoffee /></a>
            </div>

            {/* ✨ Favourites Section */}
            <div className={styles.favouritesSection}>
              <h2 className={styles.favouritesTitle}>Favourites</h2>
              <ul className={styles.favouritesList}>
                <li><b>🔖 Book:</b> The Secret History by Donna Tartt</li>
                <li><b>💗 Movie:</b> Interstellar</li>
                <li><b>🧬 Theory:</b> Many Worlds Interpretation (Quantum Physics)</li>
                <li><b>🎀 Song:</b> Crush - Ethel Cain</li>
                <li><b>🪐 Concept:</b> Sonder</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}