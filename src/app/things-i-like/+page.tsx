import { H1, H2, ExternalLink } from "@/components/typography";

export default function ThingsILike() {
  return (
    <div className="space-y-8">
      <H1>Things I Like</H1>

      <H2>Clothing</H2>
      <ul className="list-disc pl-4 space-y-2">
        <li>
          Tees:{" "}
          <ExternalLink href="https://www.uniqlo.com/us/en/men/tops">
            Uniqlo
          </ExternalLink>{" "}
          (especially the U, and Supia Cotton Crew Necks)
        </li>
        <li>
          Pants:{" "}
          <ExternalLink href="https://www.everlane.com/products/mens-pants">
            Everlane
          </ExternalLink>
        </li>
      </ul>
    </div>
  );
}
