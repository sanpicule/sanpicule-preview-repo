import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.video-reveal', {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section id="video" ref={sectionRef} className="py-16 px-6 md:px-12 bg-cream overflow-hidden">
      <div className="container-max">
        <div className="divider mb-12" />

        <div className="video-reveal">
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="text-[11px] tracking-[0.25em] text-muted uppercase mb-2">Featured Work</p>
              <h2 className="font-serif font-black text-4xl md:text-6xl text-dark leading-tight">
                AI Generated<br />
                <span className="italic">Visual</span>
              </h2>
            </div>
            <p className="text-xs text-muted max-w-xs text-right leading-relaxed hidden md:block">
              最新のAI技術を活用して生成したビジュアルコンテンツ。
              テクノロジーとクリエイティビティの融合。
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden bg-dark border border-warm aspect-video group">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src="/videos/hero-video.mp4"
              muted
              loop
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Overlay controls */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-dark/20">
              <motion.button
                onClick={togglePlay}
                className="w-16 h-16 rounded-full bg-light/90 flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isPlaying ? <Pause size={24} className="text-dark" /> : <Play size={24} className="text-dark ml-1" />}
              </motion.button>
            </div>

            {/* Bottom controls */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              <motion.button
                onClick={toggleMute}
                className="w-9 h-9 rounded-full bg-dark/60 backdrop-blur-sm flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMuted ? <VolumeX size={14} className="text-light" /> : <Volume2 size={14} className="text-light" />}
              </motion.button>
            </div>

            {/* Click to play when not hovering */}
            {!isPlaying && (
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={togglePlay}
              >
                <motion.div
                  className="w-20 h-20 rounded-full bg-light/80 backdrop-blur-sm flex items-center justify-center"
                  initial={{ opacity: 1 }}
                  whileHover={{ scale: 1.1, opacity: 0.95 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Play size={28} className="text-dark ml-1" />
                </motion.div>
              </div>
            )}
          </div>
        </div>

        <div className="divider mt-12" />
      </div>
    </section>
  );
};

export default VideoSection;
