// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#364955] text-white py-16 px-4 sm:py-24 sm:px-6 overflow-hidden">
      {/* decorative hearts */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute left-4 sm:left-10 top-4 sm:top-10 text-white/20 text-5xl sm:text-6xl"
      >
        ❤
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute right-4 sm:right-10 bottom-4 sm:bottom-10 text-white/20 text-6xl sm:text-7xl"
      >
        ❤
      </motion.div>

      <div className="max-w-3xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-serif mb-4"
        >
          Merci
        </motion.h2>

        {/* heart divider */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8">
          <div className="h-px w-12 sm:w-16 bg-yellow-400"></div>
          <span className="text-yellow-400 text-lg">❤</span>
          <div className="h-px w-12 sm:w-16 bg-yellow-400"></div>
        </div>

        {/* quote */}
        <p className="italic text-gray-200 max-w-xl mx-auto mb-6 text-sm sm:text-base">
          "L'amour ne consiste pas à se regarder l'un l'autre, mais à regarder
          ensemble dans la même direction."
        </p>

        <p className="text-gray-300 mb-8 text-sm sm:text-base">
          Votre présence à nos côtés rendra ce jour encore plus spécial
        </p>

        {/* contacts */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-10 text-gray-200 text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <Phone size={16} sm={18} />
            <span>+225 XX XX XX XX XX (Aminata)</span>
          </div>

          <div className="flex items-center gap-2">
            <Phone size={16} sm={18} />
            <span>+225 YY YY YY YY YY (Yao)</span>
          </div>
        </div>

        {/* bottom */}
        <p className="text-xs sm:text-sm text-gray-300">
          Créé avec <span className="text-yellow-400">❤</span> pour Aminata &
          Yao
        </p>
      </div>
    </footer>
  );
}
