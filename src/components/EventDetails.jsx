// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { MapPin, Clock, Church, Wine } from "lucide-react";

export default function EventDetails() {
  return (
    <section className="py-24 bg-[#e9e6d8] text-center">
      {/* Title */}
      <div className="mb-16">
        <h2 className="text-5xl font-serif text-gray-700">
          Détails du Mariage
        </h2>

        <div className="flex items-center justify-center mt-6 text-yellow-600">
          <span className="border-t w-16 border-yellow-600"></span>
          <span className="mx-4 text-xl">❤</span>
          <span className="border-t w-16 border-yellow-600"></span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
        {/* Ceremony */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-10 rounded-3xl shadow-xl text-left"
        >
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-yellow-600 w-20 h-20 flex items-center justify-center rounded-full text-white">
              <Church size={34} />
            </div>
          </div>

          <h3 className="text-3xl font-serif text-center mb-6 text-gray-700">
            Cérémonie
          </h3>

          <div className="space-y-4 text-gray-600 text-lg">
            <div className="flex items-start gap-3">
              <MapPin className="text-yellow-600" />
              <div>
                <p className="font-medium">Cathédrale Saint-Paul</p>
                <p className="text-gray-500 text-base">
                  Plateau, Abidjan, Côte d'Ivoire
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="text-yellow-600" />
              <p>15:00</p>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button className="border-2 border-yellow-600 text-yellow-600 px-8 py-3 rounded-full hover:bg-yellow-600 hover:text-white transition">
              Voir sur la carte
            </button>
          </div>
        </motion.div>

        {/* Reception */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-10 rounded-3xl shadow-xl text-left"
        >
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-yellow-600 w-20 h-20 flex items-center justify-center rounded-full text-white">
              <Wine size={34} />
            </div>
          </div>

          <h3 className="text-3xl font-serif text-center mb-6 text-gray-700">
            Réception
          </h3>

          <div className="space-y-4 text-gray-600 text-lg">
            <div className="flex items-start gap-3">
              <MapPin className="text-yellow-600" />
              <div>
                <p className="font-medium">Hôtel Ivoire</p>
                <p className="text-gray-500 text-base">
                  Cocody, Abidjan, Côte d'Ivoire
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="text-yellow-600" />
              <p>18:00</p>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button className="border-2 border-yellow-600 text-yellow-600 px-8 py-3 rounded-full hover:bg-yellow-600 hover:text-white transition">
              Voir sur la carte
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
