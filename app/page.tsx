"use client";

import { useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Book, 
  Clock, 
  Headphones, 
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Moon,
  Sun,
  Globe,
  GraduationCap,
  CheckCircle,
  Send
} from 'lucide-react';
import { handleContactSubmit } from './contact';

// Composant Header
const Header = () => {
  const { theme, setTheme } = useTheme();
  const [lang, setLang] = useState('fr');

  return (
    <header className="fixed w-full top-0 z-50 bg-white dark:bg-neutral-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src="/app-icon.png"
              alt="Roadmaster Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-xl font-bold">Roadmaster</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-primary">Accueil</a>
            <a href="#pricing" className="hover:text-primary">Nos Prix</a>
            <a href="#contact" className="hover:text-primary">Nous Contacter</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Composant Hero
const Hero = () => {
  return (
    <section className="pt-24 pb-16 relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Hero background"
          fill
          className="object-cover" // blur-[1px] if i need to add blur
          priority
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Préparez votre permis en toute simplicité avec Roadmaster
            </h1>
            <p className="text-xl text-white/90 mb-8">
              920 questions, 42 sujets d'entrainement et une équipe motivée pour vous accompagner vers la réussite !
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="cta-button bg-white hover:bg-gray-50 !text-black">
                <Image
                  src="/google-play.png"
                  alt="Google Play"
                  width={20}
                  height={20}
                  className="inline-block mr-2"
                />
                Télécharger sur Android
              </button>
              <button className="cta-button bg-white hover:bg-gray-50 !text-black">
                <Image
                  src="/app-store.png"
                  alt="App Store"
                  width={20}
                  height={20}
                  className="inline-block mr-2"
                />
                Télécharger sur iOS
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full h-[600px]">
              <Image
                src="/interface_moniteur_roadmaster.png"
                alt="Screenshot de l'application"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Composant Features
const Features = () => {
  const features = [
    {
      icon: Book,
      title: "920 questions conformes à l'examen théorique.",
      description: "Une base complète de questions basées sur le code Rousseau et conforme à l'examen théorique \
      dans les pays francophones de l'Afrique de l'Ouest."
    },
    {
      icon: GraduationCap,
      title: "Des sujets d'entrainement et des examens blancs",
      description: "Préparez-vous dans des conditions réelles d'examen avec nos sujets d'entraînement complets."
    },
    {
      icon: RefreshCw,
      title: "Mises à jour fréquentes",
      description: "Notre contenu est actualisé selon les réformes"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Fonctionnalités Principales
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="feature-card w-full max-w-sm"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const commonBenefits = [
    "Accès à tous les chapitres du code de la route",
    "900+ questions officielles",
    "Exercices d'entraînement et examens blancs",
    "Suivi de progression par les moniteurs",
    "Sessions d'entraînement en conditions réelles"
  ];

  const plans = [
    {
      duration: "03 Mois",
      price: "3000 FCFA",
      buttonClass: "hero-gradient hover:hero-gradient-darker transition-all",
      highlightClass: "from-[#AED733]/20 to-[#87A922]/20"
    },
    {
      duration: "06 Mois",
      price: "6000 FCFA",
      buttonClass: "hero-gradient hover:hero-gradient-darker transition-all",
      highlightClass: "from-[#AED733]/20 to-[#87A922]/20"
    },
    {
      duration: "12 Mois",
      price: "8000 FCFA",
      buttonClass: "hero-gradient hover:hero-gradient-darker transition-all",
      highlightClass: "from-[#AED733]/20 to-[#87A922]/20"
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Offres</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6 relative overflow-hidden"
            >
              {/* Durée */}
              <div className={`text-center mb-6 bg-gradient-to-r ${plan.highlightClass} py-3 -mx-6 -mt-6`}>
                <h3 className="text-2xl font-bold text-primary">{plan.duration}</h3>
              </div>

              {/* Liste des avantages */}
              <ul className="space-y-3 mb-8 text-gray-800 dark:text-gray-200">
                {commonBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Prix comme bouton */}
              <div className="mt-auto">
                <div className="relative">
                  {/* Effet de brillance */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine" />
                  <button
                    className={`${plan.buttonClass} text-white px-6 py-3 rounded-full w-full font-bold text-xl relative`}
                  >
                    {plan.price}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Composant Contact
const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Contactez nous ici !
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Partagez vos idées ou vos préoccupations. L'équipe technique vous répondra dans les plus brefs délais.
        </p>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleContactSubmit} className="space-y-6 bg-neutral-900 rounded-xl p-8">
            <div className="grid grid-cols-1 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Nom"
                required
                className="w-full px-4 py-3 rounded-lg bg-neutral-800 border-transparent focus:border-primary focus:ring-0 text-white placeholder-gray-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 rounded-lg bg-neutral-800 border-transparent focus:border-primary focus:ring-0 text-white placeholder-gray-400"
              />
              <input
                type="text"
                name="subject"
                placeholder="Sujet"
                required
                className="w-full px-4 py-3 rounded-lg bg-neutral-800 border-transparent focus:border-primary focus:ring-0 text-white placeholder-gray-400"
              />
              <textarea
                name="message"
                placeholder="Votre message..."
                rows={6}
                required
                className="w-full px-4 py-3 rounded-lg bg-neutral-800 border-transparent focus:border-primary focus:ring-0 text-white placeholder-gray-400"
              />
            </div>
            
            <div className="text-right">
              <button
                type="submit"
                className="hero-gradient hover:hero-gradient-darker text-white px-8 py-3 rounded-full font-semibold inline-flex items-center transition-all"
              >
                Envoyer
                <Send className="w-4 h-4 ml-2" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

// Composant Footer
const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <Image
                src="/app-icon.png"
                alt="Roadmaster Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold">Roadmaster</span>
            </div>
            <p className="text-gray-400">
              Votre compagnon pour la réussite du permis de conduire en Afrique de l'Ouest.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Accueil</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white">Nos Prix</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Nous Contacter</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Mentions Légales</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Politique de Confidentialité</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Conditions d'Utilisation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Mentions Légales</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Roadmaster. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Page principale
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}