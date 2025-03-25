import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Instagram, Music2, Globe } from 'lucide-react';

const artists = [
  {
    name: 'Luna Echo',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Электронная музыка с элементами эмбиента и неоклассики',
    rotation: Math.random() * (35 - 15) + 15,
    socials: { instagram: '#', spotify: '#', website: '#' }
  },
  {
    name: 'Quantum Drift',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Техно с футуристическим звучанием',
    rotation: Math.random() * (-15 - (-35)) + (-35),
    socials: { instagram: '#', spotify: '#', website: '#' }
  },
  {
    name: 'Neural Pulse',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'IDM и экспериментальная электроника',
    rotation: Math.random() * (35 - 15) + 15,
    socials: { instagram: '#', spotify: '#', website: '#' }
  },
  {
    name: 'Cyber Synthesis',
    image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Синтвейв и ретрофутуризм',
    rotation: Math.random() * (-15 - (-35)) + (-35),
    socials: { instagram: '#', spotify: '#', website: '#' }
  }
];

const Artists: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="artists" className="py-32 relative overflow-hidden dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
        >
          {t('artists.title')}
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-2 gap-16 mt-16">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
              style={{ transform: `rotate(${artist.rotation}deg)` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-500/20 rounded-3xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative bg-white/5 dark:bg-gray-800/5 backdrop-blur-lg rounded-3xl p-6 shadow-xl transform group-hover:scale-105 transition-all duration-300 border border-white/10 dark:border-gray-700/10">
                <div className="aspect-w-16 aspect-h-9 mb-6">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="rounded-2xl object-cover w-full h-64"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  {artist.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{artist.description}</p>
                <div className="flex space-x-4">
                  <a href={artist.socials.instagram} className="p-2 rounded-full bg-white/10 dark:bg-gray-800/20 hover:bg-white/20 dark:hover:bg-gray-700/30 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 backdrop-blur-sm transition-all duration-300">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href={artist.socials.spotify} className="p-2 rounded-full bg-white/10 dark:bg-gray-800/20 hover:bg-white/20 dark:hover:bg-gray-700/30 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 backdrop-blur-sm transition-all duration-300">
                    <Music2 className="w-6 h-6" />
                  </a>
                  <a href={artist.socials.website} className="p-2 rounded-full bg-white/10 dark:bg-gray-800/20 hover:bg-white/20 dark:hover:bg-gray-700/30 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 backdrop-blur-sm transition-all duration-300">
                    <Globe className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artists;