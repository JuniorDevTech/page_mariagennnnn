import { useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import vid from "../assets/videos/mariage.mp4";
import music from "../assets/audio/mariageMP3.mp3";

export default function Hero() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // On suppose que LoveStory a un id="love-story"
  const handleDiscover = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setIsPlaying(true);
    }

    // Scroll smooth vers la section LoveStory
    const target = document.getElementById("love-story");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={vid} type="video/mp4" />
      </video>

      {/* Background Music */}
      <audio ref={audioRef} loop>
        <source src={music} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="tracking-[3px] md:tracking-[6px] text-yellow-400 text-xs sm:text-sm mb-4 md:mb-6"
        >
          NOUS NOUS MARIONS
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-slate-200 leading-tight"
        >
          Aminata Koné
        </motion.h1>

        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex items-center justify-center my-4 md:my-6 text-yellow-400 text-lg md:text-xl"
        >
          <span className="mx-3 md:mx-4 border-t w-8 md:w-12 border-yellow-400"></span>{" "}
          ❤️{" "}
          <span className="mx-3 md:mx-4 border-t w-8 md:w-12 border-yellow-400"></span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-slate-200 leading-tight"
        >
          Yao Koffi
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4 md:mt-6 text-sm sm:text-lg md:text-xl text-slate-200"
        >
          12 Juillet 2026
        </motion.p>

        <motion.button
          onClick={handleDiscover}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 md:mt-10 bg-yellow-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-lg shadow-lg hover:bg-yellow-600 transition"
        >
          Découvrir l'invitation
        </motion.button>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mt-8 md:mt-12 text-yellow-400 text-xl md:text-2xl"
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
}
