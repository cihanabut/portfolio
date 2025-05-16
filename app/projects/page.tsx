import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Refonte du site Iziconfort",
      description:
        "Amélioration UX et augmentation des conversions pour cette plateforme de services énergétiques.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["UX/UI", "Gestion de projet", "WordPress"],
      year: "2024",
      link: "#",
    },
    {
      id: 2,
      title: "Campagne marketing Botanalytics",
      description:
        "Stratégie pour augmenter la visibilité de la plateforme d'analyse de chatbots et améliorer l'acquisition.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Marketing Digital", "SEO", "Analytics"],
      year: "2023",
      link: "#",
    },
    {
      id: 3,
      title: "Application de suivi client",
      description:
        "Application interne pour le suivi des interactions clients et l'amélioration du service après-vente.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["JavaScript", "PHP", "SQL"],
      year: "2023",
      link: "#",
    },
    {
      id: 4,
      title: "Optimisation SEO",
      description:
        "Amélioration du classement et du trafic organique pour une entreprise de services B2B.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["SEO", "Analytics", "Content Strategy"],
      year: "2022",
      link: "#",
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
          Une sélection de mes projets récents en gestion de projet digital,
          UX/UI et marketing. Chaque projet représente un défi unique et des
          solutions adaptées.
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
