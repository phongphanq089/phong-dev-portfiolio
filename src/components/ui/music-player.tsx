import { useEffect, useRef, useState } from "react"

const SONG = {
  title: "Lofi Hip Hop",
  artist: "ChillHop",
  src: "https://cdn.pixabay.com/audio/2022/01/20/audio_d0c6ff1bab.mp3",
}

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [hovered, setHovered] = useState(false)

  // Autoplay on mount
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 0.35
    const t = setTimeout(async () => {
      try {
        await audio.play()
        setPlaying(true)
      } catch {
        /* Browser blocked — wait for user interaction */
      }
    }, 1000)
    return () => clearTimeout(t)
  }, [])

  const toggle = async () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      await audio.play()
      setPlaying(true)
    }
  }

  return (
    <>
      <audio ref={audioRef} src={SONG.src} loop preload="auto" />

      {/* Floating music button — bottom right */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">

        {/* Song name tooltip — shows on hover */}
        <div
          className={`pointer-events-none flex items-center gap-2 rounded-full border border-white/10 bg-black/80 px-3 py-1.5 backdrop-blur-md transition-all duration-300 ${
            hovered ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
          }`}
        >
          {/* Mini equalizer inside tooltip */}
          {playing && (
            <span className="flex items-end gap-[2px] h-3">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="w-[2px] rounded-full bg-white/60"
                  style={{
                    height: "100%",
                    animation: "eq-bar 0.7s ease-in-out infinite alternate",
                    animationDelay: `${i * 0.15}s`,
                  }}
                />
              ))}
            </span>
          )}
          <span className="font-mono text-[10px] text-white/60 whitespace-nowrap">
            {playing ? `♪ ${SONG.title}` : "Click to play"}
          </span>
        </div>

        {/* Main button */}
        <button
          onClick={toggle}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          aria-label={playing ? "Pause music" : "Play music"}
          className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/70 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-white/30 hover:bg-black/90 hover:scale-110 active:scale-95"
        >
          {/* Ripple ring when playing */}
          {playing && (
            <>
              <span className="absolute inset-0 animate-ping rounded-full border border-white/15 opacity-60" />
              <span
                className="absolute inset-[-6px] animate-ping rounded-full border border-white/8 opacity-40"
                style={{ animationDelay: "0.3s" }}
              />
            </>
          )}

          {/* Icon */}
          {playing ? (
            /* Equalizer bars */
            <span className="flex items-end gap-[3px] h-4 pb-[1px]">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-[3px] rounded-full bg-white/80"
                  style={{
                    height: "100%",
                    transformOrigin: "bottom",
                    animation: "eq-bar 0.8s ease-in-out infinite alternate",
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              ))}
            </span>
          ) : (
            /* Play icon */
            <svg
              className="h-5 w-5 text-white/70 transition-colors hover:text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" opacity="0.7" />
              <path
                d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      <style>{`
        @keyframes eq-bar {
          0%   { transform: scaleY(0.25); }
          50%  { transform: scaleY(1);    }
          100% { transform: scaleY(0.4);  }
        }
      `}</style>
    </>
  )
}
