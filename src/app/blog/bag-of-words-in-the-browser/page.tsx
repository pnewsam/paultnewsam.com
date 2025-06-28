import { Container } from "@/components/Container";
import { Body } from "@/components/typography/Body";

import { BlogPageHeader } from "../_components/BlogPageHeader";
import Layout from "./_components/layout";

export default function BagOfWordsInTheBrowser() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <BlogPageHeader slug="bag-of-words-in-the-browser" />
        <Body className="mb-4">
          This is a very simple semantic search. It creates embeddings of the
          text on the page. Then when the user searches, it creates an embedding
          of the query and filters the results based on the degree of
          similarity.
        </Body>
        <Body className="mb-4">
          This uses a very simple &quot;bag-of-words&quot; embedding model,
          which means that the search just looks for the records where the
          inputted word(s) are present. If the word is present many times over,
          the similarity score will be higher.
        </Body>
        <Body className="mb-8">
          You&apos;ll notice that two records might have the inputted word the
          same number of times, but different similarity scores nonetheless.
          This is because the embedding also encodes how much &quot;weight&quot;
          the word has in the record. If another word features very frequently
          in a given record, the relative weight of the inputted word will be
          lower.
        </Body>
        <Layout />
      </section>
    </Container>
  );
}
