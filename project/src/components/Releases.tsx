import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Play, ExternalLink, Music2 } from 'lucide-react';

const releases = [
  {
    title: 'Quantum Resonance',
    artist: 'Luna Echo',
    cover: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    releaseDate: '2025',
    rotation: Math.random() * (45 - 15) + 15,
    tracks: ['Quantum Field', 'Neural Dance', 'Digital Dreams', 'Cyber Echo']
  },
  {
    title: 'Synthetic Future',
    artist: 'Quantum Drift',
    cover: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    releaseDate: '2025',
    rotation: Math.random() * (-15 - (-45)) + (-45),
    tracks: ['Binary Sunset', 'Data Flow', 'Electric Soul', 'Digital Rain']
  },
  {
    title: 'Neural Networks',
    artist: 'Neural Pulse',
    cover: 'https://images.unsplash.com/photo-1518707399486-6d702a84ff00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    releaseDate: '2024',
    rotation: Math.random() * (45 - 15) + 15,
    tracks: ['Synaptic Bridge', 'Memory Core', 'AI Dreams', 'Deep Learning']
  },
  {
    title: 'Digital Horizons',
    artist: 'Cyber Synthesis',
    cover: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    releaseDate: '2024',
    rotation: Math.random() * (-15 - (-45)) + (-45),
    tracks: ['Circuit Dreams', 'Neon Pulse', 'Virtual Echo', 'Digital Dawn']
  }
];

const Releases: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="releases" className="py-32 bg-gradient-to-b from-white/50 to-purple-50/50 dark:from-gray-900/50 dark:to-purple-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
        >
          {t('releases.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {releases.map((release, index) => (
            <motion.div
              key={release.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
              style={{ transform: `rotate(${release.rotation}deg)` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-500/20 rounded-3xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl transform group-hover:scale-105 transition-all duration-300">
                <div className="relative mb-6 overflow-hidden rounded-2xl group">
                  <img
                    src={release.cover}
                    alt={release.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="p-4 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                      <Play className="w-8 h-8 text-white" />
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                      {release.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">{release.artist}</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm px-3 py-1 rounded-full">
                    {release.releaseDate}
                  </span>
                </div>
                
                <div className="space-y-2">
                  {release.tracks.map((track, trackIndex) => (
                    <div
                      key={trackIndex}
                      className="flex items-center justify-between p-3 rounded-lg bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors group/track"
                    >
                      <div className="flex items-center space-x-3">
                        <Music2 className="w-4 h-4 text-gray-400 group-hover/track:text-purple-500 transition-colors" />
                        <span className="text-gray-700 dark:text-gray-300">{track}</span>
                      </div>
                      <button className="p-2 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-all duration-300">
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover/track:text-purple-500" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Releases;