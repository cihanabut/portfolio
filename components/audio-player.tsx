"use client"

import { useState, useRef } from "react"
import { Pause, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AudioPlayerProps {
  audioSrc: string
}

export default function AudioPlayer({ audioSrc }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleAudioEnded = () => {
    setIsPlaying(false)
  }

  return (
    <div className="flex items-center justify-center">
      <audio ref={audioRef} src={audioSrc} onEnded={handleAudioEnded} className="hidden" />

      <Button
        onClick={togglePlayPause}
        variant="outline"
        size="sm"
        className="flex items-center gap-2 border-[#333] hover:border-[#f97316] text-white"
      >
        {isPlaying ? (
          <>
            <Pause className="h-4 w-4" /> Pause
          </>
        ) : (
          <>
            <Play className="h-4 w-4" /> Écouter
          </>
        )}
      </Button>
    </div>
  )
}
