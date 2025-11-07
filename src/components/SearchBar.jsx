import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar({ items, onChange }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    onChange?.(query);
  }, [query, onChange]);

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search videos..."
        className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent pl-9 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
    </div>
  );
}
