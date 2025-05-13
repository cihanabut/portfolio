import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import AudioPlayer from "@/components/audio-player";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-white">
      <main className="flex flex-col items-center justify-center flex-1 px-4">
        <div className="max-w-3xl w-full mx-auto py-20 md:py-32 flex flex-col items-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="relative w-40 h-40 overflow-hidden rounded-full border-4 border-[#333]">
              <Image
                src="/images/profile.png"
                alt="Cihan Abut"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Name and Intro */}
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Cihan Abut
          </h1>

          <p className="text-xl text-gray-300 text-center mb-8 max-w-lg">
            Salut, je suis Cihan Abut. Passionnée par la tech et la gestion de
            projets web, basée à Paris. Amatrice de voyages et toujours curieuse
            de découvrir de nouvelles cultures.
          </p>

          {/* Pronunciation */}
          <div className="mb-8 p-4 border border-[#333] rounded-lg w-full max-w-sm">
            <h2 className="text-lg font-medium text-center mb-3 text-[#f97316]">
              Comment prononcer mon nom ?
            </h2>
            <AudioPlayer audioSrc="/audio/pronunciation.mp3" />
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              asChild
              className="bg-[#f97316] hover:bg-[#ea580c] text-white"
            >
              <Link href="/projects">
                Mes projets <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#333] text-white hover:bg-[#333]"
            >
              <Link href="/about">À propos</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#333] text-white hover:bg-[#333]"
            >
              <a href="/cv-cihan-abut.pdf" download>
                <FileText className="mr-2 h-4 w-4" /> Télécharger CV
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:cihan.abut@gmail.com"
              className="text-gray-400 hover:text-[#f97316] transition-colors"
              aria-label="Email"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/cihanabut"
              className="text-gray-400 hover:text-[#f97316] transition-colors"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/cihanabut"
              className="text-gray-400 hover:text-[#f97316] transition-colors"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
