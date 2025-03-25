import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n/config';
import Header from './components/Header';
import Hero from './components/Hero';
import Artists from './components/Artists';
import Releases from './components/Releases';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <Hero />
        <Artists />
        <Releases />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;