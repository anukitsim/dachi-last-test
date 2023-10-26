
"use client"

import { useEffect } from "react";


function Psr() {
  useEffect(() => {
    const audio = new Audio('/audio/psr.mp3');
    audio.loop = true; 
    audio.play();

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  return (
    <>
    <div className="absolute top-0 left-0 z-0 w-screen h-full">
      <div className="z-10 bg-cover md:mt-[-40%] bg-no-repeat">
      <video className="w-full h-full object-cover" autoPlay muted playsInline loop>
        <source src="/video/gif.mp4" type="video/mp4" />
      </video>
      </div>
    </div>
  </>
  )
}

export default Psr