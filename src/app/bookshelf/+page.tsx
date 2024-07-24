import { ExternalLink, Body, H1, H2, Ul, Li } from "@/components/typography";
import { fictionBooks } from "./__constants/fiction";
import { nonfictionBooks } from "./__constants/nonFiction";

export default function BookshelfPage() {
  return (
    <div>
      <H1 className="mb-4">Bookshelf</H1>
      <Body className="mb-8">
        I love&nbsp;
        <a
          className="text-blue-400"
          href="https://patrickcollison.com/bookshelf"
        >
          Patrick Collison&apos;s bookshelf page
        </a>
        . So I thought I&apos;d take a page from his book and track the books I
        keep around. I haven&apos;t necessarily read these books.
      </Body>
      <H2 className="mb-4">Non-fiction</H2>
      <Body className="mb-8">
        I especially value simple, well-crafted books that explain a lot about
        the world in a simple way. I put a ★ next to the books that I found
        especially beautiful, or meaningfully changed my views or
        understandings.
      </Body>
      <Ul className="mb-8">
        {[...nonfictionBooks]
          .sort((a, b) => {
            const lastNameA = a.name.split(" ").slice(-1)[0];
            const lastNameB = b.name.split(" ").slice(-1)[0];
            return lastNameA.localeCompare(lastNameB);
          })
          .map((author, i) => (
            <Li key={`${author.name}-${i}`}>
              {author.books.map((book, i) => (
                <>
                  <ExternalLink key={book.title} href={book.href}>
                    {book.title}
                  </ExternalLink>
                  {i < author.books.length - 2 && ", "}
                  {i === author.books.length - 2 && " & "}
                </>
              ))}{" "}
              by {author.name}{" "}
              {author.starred && <span className="ml-1 mb-1">★</span>}
            </Li>
          ))}
      </Ul>{" "}
      <H2 className="mb-4">Fiction</H2>
      <Body className="mb-8">
        For a long time I wanted to be a writer, and only read fiction. Over the
        years I&apos;ve gotten rid of the books I didn&apos;t have some
        sentimental attachment to or see myself re-reading. These are the some
        of the ones that have stuck around.
      </Body>
      <Ul className="mb-8">
        {[...fictionBooks]
          .sort((a, b) => {
            const lastNameA = a.name.split(" ").slice(-1)[0];
            const lastNameB = b.name.split(" ").slice(-1)[0];
            return lastNameA.localeCompare(lastNameB);
          })
          .map((author, i) => (
            <Li key={`${author.name}-${i}`}>
              {author.books.map((book, i) => (
                <>
                  <ExternalLink key={book.title} href={book.href}>
                    {book.title}
                  </ExternalLink>
                  {i < author.books.length - 2 && ", "}
                  {i === author.books.length - 2 && " & "}
                </>
              ))}{" "}
              by {author.name}{" "}
            </Li>
          ))}
      </Ul>{" "}
    </div>
  );
}
