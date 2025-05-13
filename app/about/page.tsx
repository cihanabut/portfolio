import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-24">
      <div className="container max-w-5xl px-4 mx-auto">
        <Link
          href="/"
          className="inline-flex items-center mb-12 text-[#f97316] hover:underline"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour à l'accueil
        </Link>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="sticky top-32">
              <div className="relative w-full overflow-hidden rounded-lg aspect-square">
                <Image
                  src="/images/profile.png"
                  alt="Cihan Abut"
                  fill
                  className="object-cover"
                />
              </div>

              <h1 className="mt-6 mb-2 text-3xl font-bold">Cihan Abut</h1>
              <p className="mb-6 text-gray-400">
                Gestion de projet digital / web
              </p>

              <div className="space-y-4">
                <div>
                  <h2 className="mb-2 text-lg font-semibold text-[#f97316]">
                    Contact
                  </h2>
                  <p className="text-gray-300">cihan.abut@gmail.com</p>
                  <p className="text-gray-300">06 80 26 91 41</p>
                </div>

                <div>
                  <h2 className="mb-2 text-lg font-semibold text-[#f97316]">
                    Langues
                  </h2>
                  <p className="text-gray-300">Français, Anglais, Turc</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h2 className="mb-6 text-2xl font-bold">À propos</h2>
            <p className="mb-8 text-gray-300">
              Actuellement à la recherche d'un CDI en gestion de projet digital,
              je suis passionné par les méthodologies agiles et l'amélioration
              de l'expérience utilisateur. Je combine une expertise technique et
              des compétences en gestion de projet pour mener des initiatives
              digitales à succès.
            </p>

            <h2 className="mb-6 text-2xl font-bold">Expérience</h2>
            <div className="space-y-8 mb-12">
              <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
                <div className="md:col-span-1">
                  <span className="text-[#f97316]">2024 — 2025</span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold">
                    Assistante Chef de Projet Digital
                  </h3>
                  <p className="mb-2 text-gray-400">Iziconfort, Groupe EDF</p>
                  <ul className="pl-5 mt-2 space-y-1 list-disc text-gray-300">
                    <li>Gestion et suivi des projets digitaux</li>
                    <li>Évolutions techniques et fonctionnelles</li>
                    <li>Création des cahiers de recette</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
                <div className="md:col-span-1">
                  <span className="text-[#f97316]">2022 — 2024</span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold">
                    Jr. Digital Marketing Specialist
                  </h3>
                  <p className="mb-2 text-gray-400">Botanalytics</p>
                  <ul className="pl-5 mt-2 space-y-1 list-disc text-gray-300">
                    <li>Stratégies de marketing numérique</li>
                    <li>Création de newsletters</li>
                    <li>Documentation pour l'engagement en ligne</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="mb-6 text-2xl font-bold">Formation</h2>
            <div className="space-y-8 mb-12">
              <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
                <div className="md:col-span-1">
                  <span className="text-[#f97316]">2023 — 2025</span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold">
                    Master Culture et Métiers du Web
                  </h3>
                  <p className="text-gray-400">
                    Université Gustave Eiffel, Champs-sur-Marne
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
                <div className="md:col-span-1">
                  <span className="text-[#f97316]">2017 — 2023</span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold">
                    Licence de Linguistique Comparée et LEA
                  </h3>
                  <p className="text-gray-400">
                    Université Galatasaray, Istanbul
                  </p>
                </div>
              </div>
            </div>

            <h2 className="mb-6 text-2xl font-bold">Compétences</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-12">
              <div>
                <h3 className="mb-3 text-lg font-semibold text-[#f97316]">
                  Développement
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm bg-[#333] rounded-full">
                    PHP
                  </span>
                  <span className="px-3 py-1 text-sm bg-[#333] rounded-full">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 text-sm bg-[#333] rounded-full">
                    SQL
                  </span>
                  <span className="px-3 py-1 text-sm bg-[#333] rounded-full">
                    WordPress
                  </span>
                </div>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-[#f97316]">
                  Gestion de projet
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm bg-[#333] rounded-full">
                    Agile
                  </span>
                  <span className="px-3 py-1 text-sm bg-[#333] rounded-full">
                    Jira
                  </span>
                  <span className="px-3 py-1 text-sm bg-[#333] rounded-full">
                    Trello
                  </span>
                  <span className="px-3 py-1 text-sm bg-[#333] rounded-full">
                    Asana
                  </span>
                </div>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-[#f97316]">
                  Marketing Digital
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm bg-[#333] rounded-full">
                    Google Tag Manager
                  </span>
                  <span className="px-3 py-1 text-sm bg-[#333] rounded-full">
                    SEO Tools
                  </span>
                  <span className="px-3 py-1 text-sm bg-[#333] rounded-full">
                    Google Ads
                  </span>
                </div>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-[#f97316]">
                  Langues
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm bg-[#333] rounded-full">
                    Français
                  </span>
                  <span className="px-3 py-1 text-sm bg-[#333] rounded-full">
                    Anglais
                  </span>
                  <span className="px-3 py-1 text-sm bg-[#333] rounded-full">
                    Turc
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
