import { PageHeader } from "@/components/PageHeader";
import { pageMetadataBySlug } from "@/constants/blog";

export function BlogPageHeader({ slug }: { slug: string }) {
  const metadata = pageMetadataBySlug[slug as keyof typeof pageMetadataBySlug];
  return (
    <PageHeader
      title={metadata.title}
      tags={[metadata.subject]}
      date={metadata.publishedAt}
    />
  );
}
