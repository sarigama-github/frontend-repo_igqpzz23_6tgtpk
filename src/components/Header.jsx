import { Video } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur border-b border-zinc-200/60 bg-white/70 dark:bg-zinc-900/60 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-red-500 flex items-center justify-center shadow-sm">
            <Video className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold tracking-tight">FlameTube</span>
            <span className="text-xs text-zinc-500">Simple video sharing</span>
          </div>
        </div>
        <div className="text-xs text-zinc-500">
          Built with FastAPI + React
        </div>
      </div>
    </header>
  );
}
