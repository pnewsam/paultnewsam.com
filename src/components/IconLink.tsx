import { FC } from "react";
import { ExternalLink } from "@/components/typography";

export const IconLink = ({
  href,
  text,
  Icon,
}: {
  href: string;
  text: string;
  Icon: FC<{ className?: string }>;
}) => {
  return (
    <ExternalLink
      href={href}
      className="rounded-full w-12 h-12 p-2 inline-flex justify-center hover:bg-sky-100"
    >
      <Icon className="w-6 h-6 stroke-[1.5]" />
      <span className="text-base sr-only">{text}</span>
    </ExternalLink>
  );
};
