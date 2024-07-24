import { InternalLink } from "@/components/typography";
import Link from "next/link";

export const TopNav = () => {
  return (
    <div className="py-8 md:py-16 px-8">
      <div className="w-full flex justify-between gap-4">
        <Link
          className="text-lg tracking-tight text-neutral-800 font-semibold mb-2transition hover:text-neutral-600"
          href="/"
        >
          Paul T. Newsam
        </Link>
        <div className="inline-flex items-center gap-4">
          {/* <InternalLink className="text-sm" href="/bookshelf">
            Bookshelf
          </InternalLink> */}
        </div>
      </div>
    </div>
  );
};
