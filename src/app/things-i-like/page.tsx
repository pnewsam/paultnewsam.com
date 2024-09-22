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
        <ul className="list-disc pl-4 space-y-4 mb-4">
          <li>
            <b>Tees</b>: I wear the{" "}
            <ExternalLink href="https://www.uniqlo.com/us/en/products/E422992-000/00?srsltid=AfmBOoo1SBZ-Zr3JdKoHddGtw3EaFqH7apHPmvOota34rK13yYSsKe0y&colorDisplayCode=11&sizeDisplayCode=006">
              Uniqlo U
            </ExternalLink>{" "}
            tees and&nbsp;
            <ExternalLink href="https://www.uniqlo.com/us/en/products/E455365-000/00?srsltid=AfmBOoon_B5BT1bp3xc9cagRJe9dy44l_XtQgUtGtcNqnmXWufjd8rA7&colorDisplayCode=09&sizeDisplayCode=005">
              Uniqlo Supima Cotton
            </ExternalLink>{" "}
            tees more than almost anything else. They&apos;re high quality and
            super comfy. The U tees are heavier with a relaxed fit, and the
            Supima cotton tees are light and soft.
          </li>
          <li>
            <b>Pants</b>: I&apos;ve had a hard time finding the perfect pants.
            But these days my most reliable pairs are from&nbsp;
            <ExternalLink href="https://www.everlane.com/mens">
              Everlane
            </ExternalLink>
            . I think their{" "}
            <ExternalLink href="https://www.everlane.com/products/mens-slim-fit-stretch-jean-washed-black?collection=mens-jeans">
              slim-fit washed black jeans
            </ExternalLink>{" "}
            are about as versatile as can pants get. You can wear them with dark
            or light shoes, and tops of any color.
          </li>
          <li>
            <b>Shoes</b>: Sneakers are king. You can&apos;t wear them to a black
            tie event, but you can wear them just about anywhere else. I keep
            black sneakers and white sneakers... The Beckett Simonon&nbsp;
            <ExternalLink href="https://www.beckettsimonon.com/products/reid-sneakers">
              Reid Sneakers
            </ExternalLink>{" "}
            are my go-to whites -- they&apos;re high quality and really
            comfortable. And I can&apos;t seem to find a better pair for my
            blacks than{" "}
            <ExternalLink href="https://www.adidas.com/us/samba-og-shoes/B75807.html">
              Adidas Samba OG
            </ExternalLink>
            . I think they&apos;re over-priced for the quality, but the style is
            classic.
          </li>
          <li>
            <b>Jackets</b>: The{" "}
            <ExternalLink href="https://www.backcountry.com/patagonia-nano-puff-insulated-jacket-mens?CMP_SKU=PAT01I3&MER=0406&skid=PAT01I3-SAGKHAA-M&mr:device=c&mr:adType=plaonline&utm_source=google&utm_medium=pla&utm_campaign=20576138872__p:G%7Cs:BC%7Cct:Shopping%7Cct2:pmax%7Cg:xx%7Cc1:Apparel%7Cc2:xx%7Cb:xx%7Cmt:xx&utm_content=&utm_id=go_cmp-20576138872_adg-_ad-__dev-c_ext-_prd-PAT01I3-SAGKHAA-M_mca-7811_sig-Cj0KCQjw3bm3BhDJARIsAKnHoVWgSevGVKyARk3853RT_cd1XGYUUPRK3B0vyJH5_YhUgUraI-_6g3AaAiUTEALw_wcB&gad_source=1&gclid=Cj0KCQjw3bm3BhDJARIsAKnHoVWgSevGVKyARk3853RT_cd1XGYUUPRK3B0vyJH5_YhUgUraI-_6g3AaAiUTEALw_wcB&gclsrc=aw.ds">
              Patagonia Nanopuff Jacket
            </ExternalLink>{" "}
            so popular it could be a meme. But
          </li>
        </ul>
      </section>

      <section>
        <H2>Books</H2>
        <Body className="mb-4">
          In my twenties I was a little obsessed with the idea of being a
          writer. (In all honesty, it&apos;s something I&apos;d like to get back
          to, if I ever achieve financial independence!)
        </Body>
        <ul className="list-disc pl-4 space-y-4 mb-4">
          <li>Corpus by Fyodor Dostoevsky</li>
          <li>Corpus by Leo Tolstoy</li>
          <li>Corpus by Ernest Hemingway</li>
          <li>The Snow Leopard by Peter Mathieesssen</li>
          <li>Plays by Henrik Ibsen</li>
          <li>Novels by Knut Hamsun</li>
        </ul>
      </section>
    </article>
  );
}
