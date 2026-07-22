import Link from 'next/link';

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Mentions légales</h1>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Roadmaster est une application d&apos;entraînement au code de la route
        éditée dans le cadre du projet pédagogique / produit 4bitWise.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Éditeur</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Contact : abitwise.team@gmail.com
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Hébergement</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Le site vitrine est servi en export statique. L&apos;API et les données
        utilisateurs sont hébergées sur l&apos;infrastructure cloud du projet
        (voir manuel de déploiement).
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Données personnelles</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Consultez la{' '}
        <a
          className="text-primary underline"
          href="https://aman-menda.notion.site/Politique-de-confidentialit-f69588453a9942adabf140dfce46f573?pvs=4"
        >
          politique de confidentialité
        </a>
        .
      </p>
      <Link href="/" className="text-primary underline">
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}
