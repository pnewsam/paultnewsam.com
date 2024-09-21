import { TopNav } from "@/components/TopNav";
import { SideNav } from "@/components/SideNav";
import { Footer } from "@/components/Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-900">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow grid md:grid-cols-[260px_1fr] gap-16 py-16">
        <SideNav />
        <main className="">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
