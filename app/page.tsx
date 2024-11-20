'use client';

import {useEffect} from "react";

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
    <div>
      <iframe src='/game.html' width='100%' height='100%'
              style={{border: 'none', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}
              allowFullScreen></iframe>
    </div>
  );
}
