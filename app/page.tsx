import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import AudioPlayer from "@/components/audio-player";

export default function Home() {
  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-[#0a0a0a] text-white">
      <main className="flex flex-col items-center justify-center flex-1 px-4">
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
          {/* Profile Image */}
          <div className="mb-6 relative">
            <div className="relative w-28 h-28 md:w-32 md:h-32 overflow-hidden rounded-full border-2 border-[#333]">
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
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-3 text-[#f97316]">
            Salut, je suis Cihan
          </h1>

          <p className="text-base md:text-lg text-gray-300 text-center mb-6 max-w-lg">
            Passionnée par la tech et la gestion de projets web, basée à Paris.
            Amatrice de voyages et toujours curieuse de découvrir de nouvelles
            cultures.
          </p>

          {/* Pronunciation */}
          <div className="mb-6 p-3 border border-[#333] rounded-lg w-full max-w-sm">
            <h2 className="text-base font-medium text-center mb-2 text-[#f97316]">
              Comment prononcer mon nom ?
            </h2>
            <AudioPlayer audioSrc="app/cihanabut-voice.mp4" />
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              className="bg-[#f97316] hover:bg-[#ea580c] text-white group px-5 py-2 h-auto rounded-md"
            >
              <Link href="/projects" className="flex items-center">
                <span className="relative z-10">Mes projets</span>
                <ArrowRight className="ml-2 h-4 w-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#333] text-white hover:bg-[#333] transition-all duration-300 px-5 py-2 h-auto rounded-md"
            >
              <Link href="/about">À propos</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#333] text-white hover:bg-[#333] transition-all duration-300 group px-5 py-2 h-auto rounded-md"
            >
              <a href="/cv-cihan-abut.pdf" download>
                <FileText className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                Télécharger CV
              </a>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
