// VideoEmbed component — supports YouTube, Vimeo, or a direct MP4 file
// Usage examples:
//   <VideoEmbed type="youtube" id="dQw4w9WgXcQ" title="Introduction to POTS" />
//   <VideoEmbed type="vimeo"   id="123456789"  title="Active Stand Test Demo" />
//   <VideoEmbed type="mp4"     src="/videos/pots-intro.mp4" title="POTS Overview" />

interface VideoEmbedProps {
  type: "youtube" | "vimeo" | "mp4";
  id?: string;       // YouTube or Vimeo video ID
  src?: string;      // Path to local MP4 file (in /public/videos/)
  title: string;
  caption?: string;
  autoplay?: boolean;
}

export default function VideoEmbed({ type, id, src, title, caption, autoplay = false }: VideoEmbedProps) {
  const autoplayParam = autoplay ? "&autoplay=1&mute=1" : "";

  return (
    <figure className="my-6">
      <div className="relative w-full rounded-2xl overflow-hidden shadow-lg bg-black" style={{ paddingTop: "56.25%" /* 16:9 */ }}>
        {type === "youtube" && id && (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?rel=0${autoplayParam}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
        {type === "vimeo" && id && (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0${autoplayParam}`}
            title={title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        )}
        {type === "mp4" && src && (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            controls
            preload="metadata"
            title={title}
          >
            <source src={src} type="video/mp4" />
            Your browser does not support video playback.
          </video>
        )}
      </div>
      {caption && (
        <figcaption className="text-center text-sm text-gray-500 mt-2 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
