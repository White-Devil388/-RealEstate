import React from 'react';
import { useLead } from '../../context/LeadContext';
import { X, Play } from 'lucide-react';

const Lightbox = () => {
  const { activeLightboxMedia, setActiveLightboxMedia } = useLead();

  if (!activeLightboxMedia) return null;

  return (
    <div className="modal-overlay">
      {/* Close Button */}
      <button
        onClick={() => setActiveLightboxMedia(null)}
        className="absolute top-6 right-6 p-3 text-white hover:text-accent-light bg-dark/80 rounded-full border border-white/20 transition-colors z-10"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center">
        {activeLightboxMedia.type === 'video' ? (
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-accent/30 bg-black">
            <iframe
              src={activeLightboxMedia.videoUrl || "https://www.youtube.com/embed/dQw4w9WgXcQ"}
              title={activeLightboxMedia.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <img
            src={activeLightboxMedia.url || activeLightboxMedia}
            alt={activeLightboxMedia.title || 'Gurukripa Media Showcase'}
            className="max-h-[70vh] w-auto object-contain rounded-lg border border-accent/30 shadow-2xl"
          />
        )}

        {activeLightboxMedia.title && (
          <div className="mt-4 text-center">
            <h3 className="font-heading text-xl text-[var(--text-inverse)] font-semibold">
              {activeLightboxMedia.title}
            </h3>
            {activeLightboxMedia.caption && (
              <p className="text-sm text-white/60 mt-1">
                {activeLightboxMedia.caption}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Lightbox;
