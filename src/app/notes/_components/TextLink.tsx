import Link from "next/link";

export const TextLink = ({
  href,
  children,
}: {
  href: string;
  children: string;
}) => {
  return (
    <Link
      className="text-2xl font-medium underline underline-offset-4 hover:text-cyan-400"
      href={href}
    >
      {children}
    </Link>
  );
};
