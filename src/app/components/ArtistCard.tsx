//displays how each card on the artists page should look
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {
  name: string;
  category: string;
  location: string;
  price: string;
  image: string;
};

export default function ArtistCard({
  name,
  category,
  location,
  price,
  image,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.2,
        ease: [0.25, 0.8, 0.25, 1],
      }}
      className="bg-white dark:bg-zinc-900 rounded-lg shadow hover:shadow-md transition overflow-hidden"
    >
      <div className="relative w-full h-48">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      <div className="p-4 space-y-1">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{name}</h3>
        <p className="text-sm text-gray-500 dark:text-white">{category}</p>
        <p className="text-sm text-gray-500 dark:text-white">{location}</p>
        <p className="text-sm font-medium text-blue-600">{price}</p>

        <button className="mt-3 w-full text-sm bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition">
          Ask for Quote
        </button>
      </div>
    </motion.div>
  );
}
