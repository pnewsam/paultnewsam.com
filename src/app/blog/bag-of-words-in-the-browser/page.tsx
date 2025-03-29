import { Container } from "@/components/Container";
import { Body } from "@/components/typography/Body";

// import { BlogPageHeader } from "../_components/BlogPageHeader";

export default function BagOfWordsInTheBrowser() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        {/* <BlogPageHeader slug="bag-of-words-in-the-browser" /> */}
        <Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </Body>
      </section>
    </Container>
  );
}
