// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const stories = [
  {
    title: "Notre Rencontre",
    date: "Septembre 2022",
    text: "Un regard échangé lors d’une soirée entre amis à Abidjan. Ce moment magique a changé nos vies à jamais.",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200",
    align: "left",
  },
  {
    title: "Les Fiançailles",
    date: "Mars 2025",
    text: "Une demande romantique au bord de la plage au coucher du soleil. Elle a dit oui avec des larmes de joie.",
    image:
      "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=1200",
    align: "right",
  },
  {
    title: "Notre Mariage",
    date: "Juillet 2026",
    text: "Le début de notre nouvelle vie ensemble, entourés de nos proches et de tout notre amour.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200",
    align: "left",
  },
];

export default function LoveStory() {
  return (
    <section id="love-story" className="py-24 md:py-36 bg-[#f8f8f8]   ">
      {/* Title */}
      <div className="text-center mb-20 md:mb-28 px-4">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-gray-700">
          Notre Histoire d'Amour
        </h2>

        <div className="flex items-center justify-center mt-6 text-yellow-500">
          <span className="border-t w-14 border-yellow-500"></span>
          <span className="mx-4 text-3xl">❤</span>
          <span className="border-t w-14 border-yellow-500"></span>
        </div>
      </div>

      <div className="space-y-24 md:space-y-32 max-w-7xl mx-auto px-6">
        {stories.map((story, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 ${
              story.align === "right" ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: story.align === "left" ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <img
                src={story.image}
                alt={story.title}
                className="w-80 h-80 md:w-105 md:h-105 lg:w-115 lg:h-115 xl:w-125 xl:h-125 object-cover rounded-full shadow-2xl hover:scale-110 transition duration-500"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: story.align === "left" ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 px-2 md:px-4 text-center md:text-left"
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-700">
                {story.title}
              </h3>

              <p className="text-yellow-500 text-xl md:text-2xl mt-3">
                {story.date}
              </p>

              <p className="text-gray-600 mt-6 text-xl md:text-2xl leading-relaxed max-w-2xl">
                {story.text}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
