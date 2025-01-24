import { useEffect, useState } from 'react';

interface VideoBackgroundProps {
  isVisible: boolean;
}

export default function VideoBackground({ isVisible }: VideoBackgroundProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Force reload iframes when visibility changes to ensure autoplay
      const video1 = document.getElementById('video1') as HTMLIFrameElement;
      const video2 = document.getElementById('video2') as HTMLIFrameElement;
      if (video1) video1.src = video1.src;
      if (video2) video2.src = video2.src;
    }
  }, [isVisible]);

  if (!mounted || !isVisible) return null;

  return (
    <div className="fixed inset-0 z-10 pointer-events-none">
      <div className="absolute left-0 top-0 w-1/6 h-screen">
        <iframe
          src="https://www.youtube.com/embed/zZ7AimPACzc?autoplay=1&mute=1&loop=1&playlist=zZ7AimPACzc&controls=0&version=3&playerapiid=ytplayer&enablejsapi=1"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          id="video1"
        />
      </div>
      <div className="absolute right-0 top-0 w-1/6 h-screen">
        <iframe
          src="https://www.youtube.com/embed/s600FYgI5-s?autoplay=1&mute=1&loop=1&playlist=s600FYgI5-s&controls=0&version=3&playerapiid=ytplayer&enablejsapi=1"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          id="video2"
        />
      </div>
    </div>
  );
} 