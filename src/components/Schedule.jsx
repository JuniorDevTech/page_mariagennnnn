// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const events = [
  {
    time: "15:00",
    title: "Cérémonie Religieuse",
    desc: "Échange des vœux à la cathédrale",
    side: "right",
  },
  {
    time: "17:00",
    title: "Cocktail de Bienvenue",
    desc: "Vin d'honneur dans les jardins",
    side: "left",
  },
  {
    time: "18:30",
    title: "Dîner de Réception",
    desc: "Repas gastronomique et discours",
    side: "right",
  },
  {
    time: "21:00",
    title: "Soirée Dansante",
    desc: "Musique et célébration jusqu'au bout de la nuit",
    side: "left",
  },
];

export default function Gallery() {
  return (
    <section className="py-32 bg-[#f7f7f7] relative">
      {/* Title */}
      <div className="text-center mb-24 px-4">
        <h2 className="text-5xl md:text-6xl font-serif text-gray-700">
          Programme de la Journée
        </h2>

        <div className="flex justify-center items-center mt-6 text-yellow-500">
          <span className="border-t w-14 border-yellow-500"></span>
          <span className="mx-4 text-2xl">❤</span>
          <span className="border-t w-14 border-yellow-500"></span>
        </div>
      </div>

      <div className="space-y-24 max-w-6xl mx-auto px-6">
        {events.map((event, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row items-center ${
              event.side === "left" ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Time */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0"
            >
              <div className="bg-yellow-500 text-white px-7 py-3 rounded-full shadow-md font-semibold text-lg md:text-xl">
                {event.time}
              </div>
            </motion.div>

            {/* Card */}
            <motion.div
              initial={{
                opacity: 0,
                x: event.side === "left" ? 80 : -80,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 px-4 md:px-8"
            >
              <div className="relative bg-[#f1eee5] rounded-2xl p-8 md:p-10 shadow-md hover:shadow-xl transition">
                {/* Icon */}
                <div className="absolute -left-6 md:-left-7 top-8 bg-white border-2 border-yellow-500 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-yellow-500 text-xl shadow">
                  ❤
                </div>

                <h3 className="text-2xl md:text-3xl font-serif text-gray-700">
                  {event.title}
                </h3>

                <p className="text-gray-500 text-base md:text-lg mt-3">
                  {event.desc}
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
