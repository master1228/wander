import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Music4, 
  Mail, 
  Phone, 
  MapPin, 
  Youtube, 
  Instagram, 
  Music2, 
  Globe,
  MessageCircle
} from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-50 dark:bg-gray-800/50 py-16 mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center mb-6">
              <Music4 className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Wander Music
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Создаем будущее музыки вместе
            </p>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-gray-100">Контакты</h3>
            <div className="space-y-4">
              <a href="mailto:contact@wandermusic.com" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                <Mail className="w-5 h-5 mr-2" />
                contact@wandermusic.com
              </a>
              <a href="tel:+48123456789" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                <Phone className="w-5 h-5 mr-2" />
                +48 123 456 789
              </a>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5 mr-2" />
                Warsaw, Poland
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-gray-100">Быстрые ссылки</h3>
            <div className="space-y-4">
              <a href="#artists" className="block text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">Артисты</a>
              <a href="#releases" className="block text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">Релизы</a>
              <a href="#blog" className="block text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">Блог</a>
              <a href="#shop" className="block text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">Магазин</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-gray-100">Социальные сети</h3>
            <div className="flex space-x-4">
              <a href="#youtube" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#instagram" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#spotify" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                <Music2 className="w-6 h-6" />
              </a>
              <a href="#telegram" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                <MessageCircle className="w-6 h-6" />
              </a>
              <a href="#website" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                <Globe className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Wander Music. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;