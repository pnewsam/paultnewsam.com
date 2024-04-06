import { ExternalLink } from "@/components/typography";
import { fictionBooks } from "./__constants/fiction";
import { nonfictionBooks } from "./__constants/nonFiction";

export default function BookshelfPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-medium tracking-tight mb-4">Bookshelf</h1>
        <p className="text-neutral-700 mb-4">
          I love&nbsp;
          <a
            className="text-blue-400"
            href="https://patrickcollison.com/bookshelf"
          >
            Patrick Collison&apos;s bookshelf page
          </a>
          . So I thought I&apos;d take a page from his book and track the books
          I keep around. Some of these, I haven&apos;t finished reading. But I
          keep them around so I can to read a chapter here or there. And others,
          I keep around because they remind me of important lessons.
        </p>
      </div>
      <h2 className="text-xl font-medium tracking-tight mb-4">Non-fiction</h2>
      <p className="text-neutral-700 mb-4">
        I especially value simply written, carefully-crafted books that explain
        a lot about the world. I put a ★ next to the books that I found
        especially beautiful, or meaningfully changed the way I understand the
        world.
      </p>
      <ul className="list-disc text-neutral-700 pl-4 mb-8 space-y-4">
        {[...nonfictionBooks]
          .sort((a, b) => {
            const lastNameA = a.name.split(" ").slice(-1)[0];
            const lastNameB = b.name.split(" ").slice(-1)[0];
            return lastNameA.localeCompare(lastNameB);
          })
          .map((author) => (
            <li className="ml-2" key={author.name}>
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
            </li>
          ))}
      </ul>{" "}
      <h2 className="text-xl font-medium tracking-tight mb-4">Fiction</h2>
      <p className="text-neutral-700 mb-4">
        For a long time I wanted to be a writer, and only read fiction. Over the
        years I&apos;ve gotten rid of the books I didn&apos;t have some
        sentimental attachment to or see myself re-reading. These are the some
        of the ones that have stuck around.
      </p>
      <ul className="list-disc text-neutral-700 pl-4 mb-4 space-y-4">
        {[...fictionBooks]
          .sort((a, b) => {
            const lastNameA = a.name.split(" ").slice(-1)[0];
            const lastNameB = b.name.split(" ").slice(-1)[0];
            return lastNameA.localeCompare(lastNameB);
          })
          .map((author) => (
            <li className="ml-2" key={author.name}>
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
            </li>
          ))}
      </ul>{" "}
    </div>
  );
}
