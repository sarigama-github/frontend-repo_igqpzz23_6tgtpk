import { useCallback, useMemo, useState } from "react";
import Header from "./components/Header";
import UploadForm from "./components/UploadForm";
import VideoGrid from "./components/VideoGrid";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [refreshSignal, setRefreshSignal] = useState(0);
  const [filter, setFilter] = useState("");
  const [videosCache, setVideosCache] = useState([]);

  const handleUploaded = () => {
    setRefreshSignal((n) => n + 1);
  };

  const handleSearch = useCallback((q) => setFilter(q.toLowerCase()), []);

  // Filtered view handled in child by re-fetch; simple here for display of count or future use

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <Header />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1 space-y-4">
            <UploadForm onUploaded={handleUploaded} />
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 shadow-sm">
              <h2 className="font-semibold mb-2">Search</h2>
              <SearchBar onChange={handleSearch} />
              <p className="mt-2 text-xs text-zinc-500">Type to filter by title or description. Filtering is client-side.</p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <VideoGrid key={refreshSignal} refreshSignal={refreshSignal} />
          </div>
        </div>
      </main>
    </div>
  );
}
