import { H1, Body } from "@/components/typography";

interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="mb-16">
      <H1 className="mb-2">{title}</H1>
      {description && <Body>{description}</Body>}
    </header>
  );
}
