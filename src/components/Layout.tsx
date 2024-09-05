import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 dark:bg-stone-900">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        <TopNav />
        <main className="py-8">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
