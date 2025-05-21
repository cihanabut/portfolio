import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Download } from "lucide-react";
import AudioPlayer from "@/components/audio-player";

export default function About() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-20 pb-12">
      <div className="container max-w-5xl px-4 mx-auto">
        <Link
          href="/"
          className="inline-flex items-center mb-8 text-[#f97316] hover:underline group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
          Retour à l'accueil
        </Link>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="relative w-full overflow-hidden rounded-lg aspect-square group">
                <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-[#333] group-hover:border-[#f97316] transition-colors duration-300">
                  <Image
                    src="/images/profile.png"
                    alt="Cihan Abut"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <h1 className="mt-6 mb-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-[#fb923c]">
                Cihan Abut
              </h1>
              <p className="mb-6 text-gray-400">
                Gestion de projet digital • UX • Méthodologies agiles
              </p>

              {/* Pronunciation */}
              <div className="mb-6 p-4 border border-[#333] rounded-lg hover:border-[#f97316] transition-colors duration-300 hover:shadow-lg hover:shadow-[#f97316]/10 hover:-translate-y-1">
                <h2 className="mb-3 text-lg font-medium text-[#f97316]">
                  Comment prononcer mon nom ?
                </h2>
                <AudioPlayer audioSrc="/audio/pronunciation.mp3" />
              </div>

              <div className="space-y-6">
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

                <div>
                  <a
                    href="/cv-cihan-abut.pdf"
                    download
                    className="inline-flex items-center px-4 py-2 bg-[#f97316] text-white rounded-md hover:bg-[#ea580c] transition-colors duration-300"
                  >
                    <Download className="mr-2 h-4 w-4" /> Télécharger CV
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h2 className="mb-6 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-[#fb923c]">
              À propos
            </h2>
            <p className="mb-8 text-gray-300 leading-relaxed">
              Actuellement à la recherche d'un CDI en gestion de projet digital,
              je suis passionnée par les méthodologies agiles et l'amélioration
              de l'expérience utilisateur. Je combine une expertise technique et
              des compétences en gestion de projet pour mener des initiatives
              digitales à succès.
            </p>

            <h2 className="mb-6 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-[#fb923c]">
              Expérience
            </h2>
            <div className="space-y-8 mb-12">
              <div className="grid grid-cols-1 gap-2 md:grid-cols-4 p-4 rounded-lg border border-transparent hover:border-[#333] hover:shadow-lg hover:shadow-[#f97316]/5 hover:-translate-y-1 transition-all duration-300">
                <div className="md:col-span-1">
                  <span className="text-[#f97316] font-medium">
                    2024 — 2025
                  </span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold">
                    Assistante Chef de Projet Digital
                  </h3>
                  <p className="mb-2 text-gray-400">Iziconfort, Groupe EDF</p>
                  <ul className="pl-5 mt-2 space-y-1 list-disc text-gray-300">
                    <li>Assistance à la cheffe de projet web pour la gestion du site e-commerce Iziconfort</li>
                    <li>Gestion et suivi des projets digitaux</li>
                    <li>Évolutions techniques et fonctionnelles</li>
                    <li>Création des cahiers de recette</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 md:grid-cols-4 p-4 rounded-lg border border-transparent hover:border-[#333] hover:shadow-lg hover:shadow-[#f97316]/5 hover:-translate-y-1 transition-all duration-300">
                <div className="md:col-span-1">
                  <span className="text-[#f97316] font-medium">
                    2022 — 2024
                  </span>
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

            <h2 className="mb-6 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-[#fb923c]">
              Formation
            </h2>
            <div className="space-y-8 mb-12">
              <div className="grid grid-cols-1 gap-2 md:grid-cols-4 p-4 rounded-lg border border-transparent hover:border-[#333] hover:shadow-lg hover:shadow-[#f97316]/5 hover:-translate-y-1 transition-all duration-300">
                <div className="md:col-span-1">
                  <span className="text-[#f97316] font-medium">
                    2023 — 2025
                  </span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold">
                    Gestion de projet informatique
                  </h3>
                  <p className="text-gray-400">
                    Université Gustave Eiffel, Champs-sur-Marne
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 md:grid-cols-4 p-4 rounded-lg border border-transparent hover:border-[#333] hover:shadow-lg hover:shadow-[#f97316]/5 hover:-translate-y-1 transition-all duration-300">
                <div className="md:col-span-1">
                  <span className="text-[#f97316] font-medium">
                    2017 — 2023
                  </span>
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

            <h2 className="mb-6 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-[#fb923c]">
              Compétences
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-12">
              <div className="p-4 rounded-lg border border-transparent hover:border-[#333] hover:shadow-lg hover:shadow-[#f97316]/5 hover:-translate-y-1 transition-all duration-300">
                <h3 className="mb-3 text-lg font-semibold text-[#f97316]">
                  Développement
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm bg-[#333] rounded-full transition-all duration-300 hover:bg-[#444] hover:scale-105">
                    PHP
                  </span>
                  <span className="px-3 py-1 text-sm bg-[#333] rounded-full transition-all duration-300 hover:bg-[#444] hover:scale-105">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 text-sm bg-[#333] rounded-full transition-all duration-300 hover:bg-[#444] hover:scale-105">
                    SQL
                  </span>
                  <span className="px-3 py-1 text-sm bg-[#333] rounded-full transition-all duration-300 hover:bg-[#444] hover:scale-105">
                    WordPress
                  </span>
                </div>
              </div>
              <div className="p-4 rounded-lg border border-transparent hover:border-[#333] hover:shadow-lg hover:shadow-[#f97316]/5 hover:-translate-y-1 transition-all duration-300">
                <h3 className="mb-3 text-lg font-semibold text-[#f97316]">
                  Gestion de projet
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm bg-[#333] rounded-full transition-all duration-300 hover:bg-[#444] hover:scale-105">
                    Méthodologies agiles 
                  </span>
                  <span className="px-3 py-1 text-sm bg-[#333] rounded-full transition-all duration-300 hover:bg-[#444] hover:scale-105">
                    Jira
                  </span>
                  <span className="px-3 py-1 text-sm bg-[#333] rounded-full transition-all duration-300 hover:bg-[#444] hover:scale-105">
                    Trello
                  </span>
                  <span className="px-3 py-1 text-sm bg-[#333] rounded-full transition-all duration-300 hover:bg-[#444] hover:scale-105">
                    Asana
                  </span>
                </div>
              </div>
              <div className="p-4 rounded-lg border border-transparent hover:border-[#333] hover:shadow-lg hover:shadow-[#f97316]/5 hover:-translate-y-1 transition-all duration-300">
                <h3 className="mb-3 text-lg font-semibold text-[#f97316]">
                  Marketing Digital
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm bg-[#333] rounded-full transition-all duration-300 hover:bg-[#444] hover:scale-105">
                    Google Tag Manager
                  </span>
                  <span className="px-3 py-1 text-sm bg-[#333] rounded-full transition-all duration-300 hover:bg-[#444] hover:scale-105">
                    SEO Tools
                  </span>
                  <span className="px-3 py-1 text-sm bg-[#333] rounded-full transition-all duration-300 hover:bg-[#444] hover:scale-105">
                    Google Ads
                  </span>
                </div>
              </div>
              <div className="p-4 rounded-lg border border-transparent hover:border-[#333] hover:shadow-lg hover:shadow-[#f97316]/5 hover:-translate-y-1 transition-all duration-300">
                <h3 className="mb-3 text-lg font-semibold text-[#f97316]">
                  Langues
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm bg-[#333] rounded-full transition-all duration-300 hover:bg-[#444] hover:scale-105">
                    Français 
                  </span>
                  <span className="px-3 py-1 text-sm bg-[#333] rounded-full transition-all duration-300 hover:bg-[#444] hover:scale-105">
                    Anglais
                  </span>
                  <span className="px-3 py-1 text-sm bg-[#333] rounded-full transition-all duration-300 hover:bg-[#444] hover:scale-105">
                    Turc (natif)
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
