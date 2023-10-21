import { Home, Gift, Book } from "lucide-react";

export const Footer = () => (
  <footer className="fixed bottom-8 border border-stone-300 bg-white rounded-[48px] left-[50%] -translate-x-[50%] px-3 py-2 shadow-lg">
    <div className="inline-flex gap-1">
      <a
        className="flex items-center gap-1 text-xs text-stone-600 hover:bg-stone-100 rounded-full px-3 py-2"
        href="/"
      >
        <Home className="w-5 h-5" />
        <span>Home</span>
      </a>
      <a
        className="flex items-center gap-1 text-xs text-stone-600 hover:bg-stone-100 rounded-full px-3 py-2"
        href="/downloads"
      >
        <Gift className="w-5 h-5" />
        <span>Downloads</span>
      </a>
      {/* <a
        className="flex items-center gap-1 text-xs text-stone-600 hover:bg-stone-100 rounded-full px-3 py-2"
        href="/blog"
      >
        <Book className="w-5 h-5" />
        Blog
      </a> */}
    </div>
  </footer>
);
