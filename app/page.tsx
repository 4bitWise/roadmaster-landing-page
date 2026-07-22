'use client';

import { useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Book,
  RefreshCw,
  Moon,
  Sun,
  Menu,
  X,
  GraduationCap,
  CheckCircle,
  Send,
} from 'lucide-react';
import { handleContactSubmit } from './contact';

const STORE_ANDROID =
  'https://play.google.com/store/apps/details?id=com.abitwise.roadmaster';
const STORE_IOS = 'https://apps.apple.com/app/roadmaster';
const LINKEDIN = 'https://www.linkedin.com/company/roadmaster-team';
const INSTAGRAM = 'https://www.instagram.com/roadmaster.official';
const PRIVACY =
  'https://aman-menda.notion.site/Politique-de-confidentialit-f69588453a9942adabf140dfce46f573?pvs=4';
const ACCOUNT_DELETION =
  'https://aman-menda.notion.site/Demande-de-suppression-de-compte-b888b3dc468340c2b455f9cce6f95a01?pvs=4';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 dark:bg-neutral-900/90 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <a href="#accueil" className="flex items-center space-x-4">
            <Image
              src="/app-icon.png"
              alt="Logo Roadmaster"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-xl font-bold">Roadmaster</span>
          </a>

          <nav
            className="hidden md:flex items-center space-x-8"
            aria-label="Navigation principale"
          >
            <a href="#accueil" className="hover:text-primary">
              Accueil
            </a>
            <a href="#pricing" className="hover:text-primary">
              Nos Prix
            </a>
            <a href="#contact" className="hover:text-primary">
              Nous Contacter
            </a>
          </nav>

          <div className="flex items-center space-x-2">
            <button
              type="button"
              aria-label={
                theme === 'dark'
                  ? 'Activer le thème clair'
                  : 'Activer le thème sombre'
              }
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Moon className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
            <button
              type="button"
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800"
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            className="md:hidden mt-4 flex flex-col space-y-3 pb-2"
            aria-label="Navigation mobile"
          >
            <a href="#accueil" onClick={() => setMenuOpen(false)}>
              Accueil
            </a>
            <a href="#pricing" onClick={() => setMenuOpen(false)}>
              Nos Prix
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Nous Contacter
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section id="accueil" className="pt-24 pb-16 relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt=""
          fill
          className="object-cover"
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
              920 questions, 42 sujets d&apos;entrainement et une équipe motivée
              pour vous accompagner vers la réussite !
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={STORE_ANDROID}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button bg-white hover:bg-gray-50 !text-black"
              >
                <Image
                  src="/google-play.png"
                  alt=""
                  width={20}
                  height={20}
                  className="inline-block mr-2"
                  aria-hidden="true"
                />
                Télécharger sur Android
              </a>
              <a
                href={STORE_IOS}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button bg-white hover:bg-gray-50 !text-black"
              >
                <Image
                  src="/app-store.png"
                  alt=""
                  width={20}
                  height={20}
                  className="inline-block mr-2"
                  aria-hidden="true"
                />
                Télécharger sur iOS
              </a>
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
                alt="Interface moniteur de l'application Roadmaster"
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

const Features = () => {
  const features = [
    {
      icon: Book,
      title: "920 questions conformes à l'examen théorique.",
      description:
        "Une base complète de questions basées sur le code Rousseau et conforme à l'examen théorique dans les pays francophones de l'Afrique de l'Ouest.",
    },
    {
      icon: GraduationCap,
      title: "Des sujets d'entrainement et des examens blancs",
      description:
        "Préparez-vous dans des conditions réelles d'examen avec nos sujets d'entraînement complets.",
    },
    {
      icon: RefreshCw,
      title: 'Mises à jour fréquentes',
      description: 'Notre contenu est actualisé selon les réformes',
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-neutral-900" aria-labelledby="features-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="features-title" className="text-3xl font-bold text-center mb-12">
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
              <feature.icon className="w-12 h-12 text-primary mb-4" aria-hidden="true" />
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
    'Accès à tous les chapitres du code de la route',
    '920 questions officielles',
    "Exercices d'entraînement et examens blancs",
    'Suivi de progression par les moniteurs',
    "Sessions d'entraînement en conditions réelles",
  ];

  const plans = [
    { duration: '03 Mois', price: '3000 FCFA' },
    { duration: '06 Mois', price: '6000 FCFA' },
    { duration: '12 Mois', price: '8000 FCFA' },
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-50 dark:bg-neutral-900" aria-labelledby="pricing-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="pricing-title" className="text-3xl font-bold text-center mb-12">
          Nos Offres
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6 relative overflow-hidden flex flex-col"
            >
              <div className="text-center mb-6 bg-gradient-to-r from-[#AED733]/20 to-[#87A922]/20 py-3 -mx-6 -mt-6">
                <h3 className="text-2xl font-bold text-primary">{plan.duration}</h3>
              </div>
              <ul className="space-y-3 mb-8 text-gray-800 dark:text-gray-200">
                {commonBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle
                      className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="hero-gradient hover:hero-gradient-darker transition-all text-white px-6 py-3 rounded-full w-full font-bold text-xl text-center mt-auto"
              >
                {plan.price} — Nous contacter
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-16" aria-labelledby="contact-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="contact-title" className="text-3xl font-bold text-center mb-8">
          Contactez nous ici !
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Partagez vos idées ou vos préoccupations. L&apos;équipe technique vous
          répondra dans les plus brefs délais.
        </p>

        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleContactSubmit}
            className="space-y-6 bg-neutral-900 rounded-xl p-8"
            noValidate
          >
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-300 mb-2">
                  Nom
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  className="w-full px-4 py-3 rounded-lg bg-neutral-800 border-transparent focus:border-primary focus:ring-0 text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-300 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="w-full px-4 py-3 rounded-lg bg-neutral-800 border-transparent focus:border-primary focus:ring-0 text-white"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm text-gray-300 mb-2">
                  Sujet
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-neutral-800 border-transparent focus:border-primary focus:ring-0 text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-neutral-800 border-transparent focus:border-primary focus:ring-0 text-white"
                />
              </div>
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="hero-gradient hover:hero-gradient-darker text-white px-8 py-3 rounded-full font-semibold inline-flex items-center transition-all"
              >
                Envoyer
                <Send className="w-4 h-4 ml-2" aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <Image
                src="/app-icon.png"
                alt="Logo Roadmaster"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold">Roadmaster</span>
            </div>
            <p className="text-gray-400">
              Votre compagnon pour la réussite du permis de conduire en Afrique
              de l&apos;Ouest.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#accueil" className="text-gray-400 hover:text-white">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white">
                  Nos Prix
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  Nous Contacter
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Mentions Légales</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={PRIVACY}
                  className="text-gray-400 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Politique de Confidentialité
                </a>
              </li>
              <li>
                <a
                  href={ACCOUNT_DELETION}
                  className="text-gray-400 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Suppression de compte
                </a>
              </li>
              <li>
                <Link href="/mentions-legales" className="text-gray-400 hover:text-white">
                  Mentions Légales
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href={INSTAGRAM}
                className="text-gray-400 hover:text-white"
                aria-label="Instagram Roadmaster"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a
                href={LINKEDIN}
                className="text-gray-400 hover:text-white"
                aria-label="LinkedIn Roadmaster"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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
