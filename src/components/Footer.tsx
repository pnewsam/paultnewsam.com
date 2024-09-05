import { ExternalLink } from "@/components/typography";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 py-8 border-t border-stone-200 dark:border-stone-800">
      <div className="text-center text-sm text-stone-500 dark:text-stone-400">
        <p>© {currentYear} Paul T. Newsam. All rights reserved.</p>
        <p className="mt-2">
          Built with{" "}
          <ExternalLink href="https://nextjs.org">Next.js</ExternalLink> and{" "}
          <ExternalLink href="https://tailwindcss.com">
            Tailwind CSS
          </ExternalLink>
        </p>
      </div>
    </footer>
  );
}
