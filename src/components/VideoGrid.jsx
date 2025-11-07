import { useEffect, useState } from "react";

function VideoCard({ video }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
      <div className="aspect-video bg-black/80">
        <video
          src={video.url}
          controls
          className="h-full w-full object-contain bg-black"
          preload="metadata"
        />
      </div>
      <div className="p-3 space-y-1">
        <h3 className="font-medium line-clamp-2">{video.title}</h3>
        {video.description && (
          <p className="text-sm text-zinc-500 line-clamp-2">{video.description}</p>
        )}
      </div>
    </div>
  );
}

export default function VideoGrid({ refreshSignal }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const backend = import.meta.env.VITE_BACKEND_URL || "";

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`${backend}/api/videos`);
        if (!res.ok) throw new Error("Failed to load videos");
        const data = await res.json();
        if (isMounted) setVideos(data);
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    load();
    return () => {
      isMounted = false;
    };
  }, [backend, refreshSignal]);

  if (loading) return <p className="text-sm text-zinc-500">Loading videos...</p>;
  if (error) return <p className="text-sm text-red-600">{error}</p>;
  if (!videos.length) return <p className="text-sm text-zinc-500">No videos yet. Upload one above.</p>;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((v) => (
        <VideoCard key={v.id} video={v} />
      ))}
    </div>
  );
}
