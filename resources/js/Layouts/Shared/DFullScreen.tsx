import { Fullscreen, Minimize } from 'lucide-react';
import { useState, useEffect } from 'react';

const DFullScreen = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement !== null);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="md:flex hidden">
      <button onClick={toggleFullscreen} type="button" className="nav-link p-2">
        <span className="sr-only">{isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}</span>
        <span className="flex items-center justify-center h-6 w-6">
          {isFullscreen ? <Minimize /> : <Fullscreen />}
        </span>
      </button>
    </div>
  );
};

export default DFullScreen;