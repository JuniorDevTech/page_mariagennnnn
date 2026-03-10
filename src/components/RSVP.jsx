import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function RSVP() {
  const [presence, setPresence] = useState(true);

  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-b from-[#f4f1e8] to-[#e8e2d3] px-4 py-20">
      <div className="w-full max-w-xl text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-700 mb-4"
        >
          Confirmez Votre Présence
        </motion.h2>

        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4">
          <div className="h-px w-12 sm:w-16 bg-yellow-600"></div>
          <span className="text-yellow-600 text-xl">♥</span>
          <div className="h-px w-12 sm:w-16 bg-yellow-600"></div>
        </div>

        <p className="text-gray-500 mb-10 text-sm sm:text-base">
          Votre présence serait un honneur pour nous. Merci de confirmer avant
          le 1er juin 2026.
        </p>

        {/* Card */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 text-left space-y-6"
        >
          {/* Nom */}
          <div>
            <label className="text-gray-700 text-sm">Nom Complet *</label>
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full mt-2 p-3 rounded-xl border border-yellow-300 bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition text-sm sm:text-base"
            />
          </div>

          {/* Invités */}
          <div>
            <label className="text-gray-700 text-sm">Nombre d'Invités *</label>
            <select className="w-full mt-2 p-3 rounded-xl border border-yellow-300 bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition text-sm sm:text-base">
              <option>1 personne</option>
              <option>2 personnes</option>
              <option>3 personnes</option>
              <option>4 personnes</option>
            </select>
          </div>

          {/* Présence */}
          <div>
            <label className="text-gray-700 text-sm block mb-2">
              Présence *
            </label>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => setPresence(true)}
                className={`flex-1 py-3 rounded-xl transition ${
                  presence
                    ? "bg-yellow-500 text-white shadow-md"
                    : "border border-yellow-300 text-gray-600"
                }`}
              >
                Je serai présent(e)
              </button>

              <button
                type="button"
                onClick={() => setPresence(false)}
                className={`flex-1 py-3 rounded-xl transition ${
                  !presence
                    ? "bg-yellow-500 text-white shadow-md"
                    : "border border-yellow-300 text-gray-600"
                }`}
              >
                Je ne pourrai pas
              </button>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="text-gray-700 text-sm">Message (optionnel)</label>
            <textarea
              rows="4"
              placeholder="Laissez-nous un mot doux..."
              className="w-full mt-2 p-3 rounded-xl border border-yellow-300 bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition text-sm sm:text-base"
            />
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-linear-to-r from-yellow-500 to-yellow-600 text-white py-4 rounded-full shadow-lg text-lg"
          >
            Envoyer ma confirmation
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
