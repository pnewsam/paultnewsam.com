import Link from "next/link";

import { Container } from "@/components/Container";
import { Tags } from "@/components/Tags";
import { Body } from "@/components/typography/Body";
import { H4 } from "@/components/typography/H4";
import { blogPages } from "@/constants/blog";

export default function Blog() {
  return (
    <Container>
      <div>Blog</div>
      <div className="grid gap-4 rounded-md">
        {blogPages.map((item) => (
          <Link
            href={`/blog/${item.slug}`}
            key={item.title}
            className="group py-3 -mx-4 px-4 rounded-md flex items-center justify-between gap-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <div>
              <H4 className="!mb-0 font-normal text-neutral-900 dark:text-white">
                {item.title}
              </H4>
              <Body className="mb-0 font-normal !text-neutral-500" size="xs">
                {item.publishedAt
                  ? new Date(item.publishedAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })
                  : ""}
              </Body>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Tags tags={[item.subject]} size="sm" />
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
