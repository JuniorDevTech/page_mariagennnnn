// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function DressCode() {
  const colors = [
    { name: "Champagne", color: "#e3d2b8" },
    { name: "Or Doux", color: "#cda933" },
    { name: "Émeraude", color: "#4fb870" },
    { name: "Rose Poudré", color: "#e6c9c5" },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#f5f4ef] text-center px-4">
      {/* Title */}
      <div className="mb-12 md:mb-14">
        <h2 className="text-3xl md:text-5xl font-serif text-gray-700">
          Code Vestimentaire
        </h2>

        <div className="flex items-center justify-center mt-4 md:mt-5 text-yellow-600">
          <span className="border-t w-10 md:w-16 border-yellow-600"></span>
          <span className="mx-3 md:mx-4 text-lg md:text-xl">❤</span>
          <span className="border-t w-10 md:w-16 border-yellow-600"></span>
        </div>

        <p className="mt-5 md:mt-6 text-gray-500 max-w-xl mx-auto text-sm md:text-base">
          Tenue de soirée élégante. Nous vous invitons à porter des tons dans
          notre palette de couleurs.
        </p>
      </div>

      {/* Palette title */}
      <p className="text-gray-600 mb-10 md:mb-12 flex items-center justify-center gap-2 text-sm md:text-base">
        🎨 Notre Palette de Couleurs
      </p>

      {/* Colors */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 max-w-5xl mx-auto">
        {colors.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col items-center"
          >
            <div
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-44 md:h-44 rounded-3xl shadow-lg hover:scale-105 transition"
              style={{ backgroundColor: item.color }}
            />

            <p className="mt-3 md:mt-4 text-gray-600 text-sm md:text-base">
              {item.name}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-12 md:mt-16 flex justify-center"
      >
        <div className="bg-[#ece9da] px-6 md:px-10 py-3 md:py-4 rounded-xl shadow text-gray-600 text-sm md:text-base max-w-md">
          "Habillez-vous avec élégance et laissez votre cœur briller"
        </div>
      </motion.div>
    </section>
  );
}
