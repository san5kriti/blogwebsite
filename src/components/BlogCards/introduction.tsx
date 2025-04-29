"use client";
import styles from "@/styles/Blogcards/introduction.module.css";
import Link from "next/link";

export default function IntroductionCard() {
  return (
    <Link href="/blogs/introblog" className={styles.cardLink}>
      <div className={styles.blogCard}>
        <h2 className={styles.blogTitle}>Lore Dump 🎪</h2>
        <p className={styles.blogSnippet}>
           Before you judge me... start here
        </p>
      </div>
    </Link>
  );
}
