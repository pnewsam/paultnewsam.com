import { H1, H2, H3, Body, ExternalLink } from "@/components/typography";

export default function ThingsILike() {
  return (
    <article className="space-y-8">
      <H1>Things I Like</H1>

      <section>
        <H2>Clothing</H2>
        <Body className="mb-4">
          I&apos;m pretty picky when it comes to clothes. I like simple,
          hard-wearing basics. I end up wearing the same few tee shirts and
          pairs of pants over and over again.
        </Body>
        <H3 className="mb-2">Tees</H3>
        <ul className="list-disc pl-4 space-y-4 mb-4">
          <li>
            <ExternalLink href="https://www.uniqlo.com/us/en/products/E422992-000/00?srsltid=AfmBOoo1SBZ-Zr3JdKoHddGtw3EaFqH7apHPmvOota34rK13yYSsKe0y&colorDisplayCode=11&sizeDisplayCode=006">
              Uniqlo U Tee
            </ExternalLink>{" "}
            - A heavyweight basic tee, relaxed fit
          </li>
          <li>
            <ExternalLink href="https://www.uniqlo.com/us/en/products/E455365-000/00?srsltid=AfmBOoon_B5BT1bp3xc9cagRJe9dy44l_XtQgUtGtcNqnmXWufjd8rA7&colorDisplayCode=09&sizeDisplayCode=005">
              Uniqlo Supima Cotton Tee
            </ExternalLink>{" "}
            - A super soft lightweight tee for a tighter fit
          </li>
        </ul>
        <H3 className="mb-2">Pants</H3>
        <ul className="list-disc pl-4 space-y-2 mb-4">
          <li>
            <ExternalLink href="https://www.everlane.com/products/mens-pants">
              Everlane
            </ExternalLink>
          </li>
        </ul>

        <H3 className="mb-2">Shoes</H3>
        <ul className="list-disc pl-4 space-y-2 mb-4">
          <li>
            <ExternalLink href="https://www.beckettsimonon.com/">
              Beckett Simonon
            </ExternalLink>{" "}
            - Beckett Simonon makes some of the most comfortable shoes I&apos;ve
            ever worn.
          </li>
        </ul>
      </section>
    </article>
  );
}
