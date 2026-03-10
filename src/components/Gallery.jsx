// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800&auto=format&fit=crop&q=80",
  ];

  return (
    <section className="py-24 bg-[#e9e6d8]">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-serif text-gray-700">Galerie Photos</h2>

        <div className="flex items-center justify-center mt-4 text-yellow-600">
          <span className="border-t w-16 border-yellow-600"></span>
          <span className="mx-4 text-xl">❤</span>
          <span className="border-t w-16 border-yellow-600"></span>
        </div>

        <p className="text-gray-500 mt-4">
          Quelques moments précieux capturés de notre histoire d'amour
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {/* Big image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 row-span-2"
        >
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&auto=format&fit=crop&q=80"
            className="w-full h-full object-cover rounded-3xl hover:scale-105 transition duration-500"
          />
        </motion.div>

        {/* Small images */}
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              loading="lazy"
              src={img}
              className="w-full h-56 object-cover rounded-3xl hover:scale-105 transition duration-500"
            />
          </motion.div>
        ))}

        {/* Bottom image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1200&auto=format&fit=crop&q=80"
            className="w-full h-64 object-cover rounded-3xl hover:scale-105 transition duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
}
