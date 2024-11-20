'use client';

import {useEffect} from "react";
import styles from './page.module.css';

export default function Home() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "Build/webglbuild.loader.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Swash: The Pirate Roguelike</h1>
      <iframe src='/game.html' width='1000px' height='700px'
              allowFullScreen className={styles.game}></iframe>
    </div>
  );
}
