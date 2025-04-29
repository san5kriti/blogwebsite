// src/pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div style={{ backgroundColor: "#0a0616", minHeight: "100vh", width: "100%" }}>
      <Component {...pageProps} />
    </div>
  );
}