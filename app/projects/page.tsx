import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Localsteps",
      description:
        "Refonte UX et pilotage du projet de A à Z pour cette plateforme de recommandations locales.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["UX/UI", "Gestion de projet"],
      link: "https://localstepsv2.onrender.com/",
    },
    {
      id: 2,
      title: "Campagne marketing Botanalytics",
      description:
        "Stratégie pour augmenter la visibilité de la plateforme d'analyse de chatbots et améliorer l'acquisition.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Marketing Digital", "SEO", "Analytics"],
      link: "#",
    },
    {
      id: 3,
      title: "WindMap",
      description:
        "Prototype d’interface de data visualisation sur les énergies renouvelables, conçu avec Figma.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Figma"],
      link: "https://www.figma.com/proto/4HrzLKPHl6Jz6C67MFcinI/Abut-Cihan-CMW-Groupe-2---WindMap?node-id=7-63&starting-point-node-id=7%3A63",
    },
    {
      id: 4,
      title: "CMS",
      description:
        "Un système simple de gestion de contenu (CMS) simple pour un blog.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["JS", "PHP", "CSS"],
      link: "https://github.com/cihanabut/CMS-content",
    },
  ];

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

        <h1 className="mb-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-[#fb923c]">
          Projets
        </h1>
        <p className="mb-8 text-gray-400 max-w-2xl">
          Une sélection de mes projets récents en gestion de projet digital, développement web UX/UI et marketing. Chaque projet représente un défi unique et des solutions adaptées.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden transition-all duration-300 border rounded-lg border-[#333] hover:border-[#f97316] hover:shadow-lg hover:shadow-[#f97316]/10 hover:-translate-y-1 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-bold group-hover:text-[#f97316] transition-colors">
                    {project.title}
                  </h2>
                  <span className="text-sm text-[#f97316]">{project.year}</span>
                </div>
                <p className="mb-4 text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-[#333] rounded-full transition-all duration-300 hover:bg-[#444] hover:scale-105"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-sm text-[#f97316] hover:underline group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le projet
                  <ExternalLink className="ml-1 w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
