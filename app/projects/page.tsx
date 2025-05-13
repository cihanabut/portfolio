import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Refonte du site Iziconfort",
      description: "Amélioration UX et augmentation des conversions",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["UX/UI", "Gestion de projet", "WordPress"],
      year: "2024",
    },
    {
      id: 2,
      title: "Campagne marketing Botanalytics",
      description: "Stratégie pour augmenter la visibilité de la plateforme",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Marketing Digital", "SEO", "Analytics"],
      year: "2023",
    },
    {
      id: 3,
      title: "Application de suivi client",
      description: "App interne pour le suivi des interactions clients",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["JavaScript", "PHP", "SQL"],
      year: "2023",
    },
    {
      id: 4,
      title: "Optimisation SEO",
      description: "Amélioration du classement et du trafic organique",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["SEO", "Analytics", "Content Strategy"],
      year: "2022",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-24">
      <div className="container max-w-5xl px-4 mx-auto">
        <Link href="/" className="inline-flex items-center mb-12 text-[#f97316] hover:underline">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour à l'accueil
        </Link>

        <h1 className="mb-12 text-4xl font-bold">Projets</h1>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden transition-all duration-300 border rounded-lg border-[#333] hover:border-[#f97316]"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-bold">{project.title}</h2>
                  <span className="text-sm text-[#f97316]">{project.year}</span>
                </div>
                <p className="mb-4 text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 text-xs bg-[#333] rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
