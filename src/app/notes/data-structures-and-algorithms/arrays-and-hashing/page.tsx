import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Callout from "../../_components/Callout";
import { Body } from "@/components/typography/Body";
import { H2 } from "@/components/typography/H2";
import { Summary } from "../../_components/Summary";

export default function Page() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader
          title="Arrays and Hashing"
          tags={["Data Structures", "Algorithms"]}
        />
        <Callout title="Key Concepts" className="mb-8">
          <em className="not-italic font-medium">Sliding window</em>;&nbsp;
          <em className="not-italic font-medium">two-pointer technique</em>
          ;&nbsp;
          <em className="not-italic font-medium">hashing for fast lookups</em>
        </Callout>

        <Body>
          Arrays are a fundamental data structure in computer science,
          representing a collection of elements identified by index or key.
        </Body>

        <H2 className="mb-8">Sliding Window</H2>
        <Body>
          Sliding window is a technique used to solve problems involving
          subarrays.
        </Body>

        <H2 className="mb-8">Two-Pointer Technique</H2>
        <Body>
          The two-pointer technique is a common approach to solving problems
          involving arrays or linked lists.
        </Body>

        <Summary
          title="Problems to Solve"
          problems={[
            {
              title: "1. Two Sum",
              url: "https://leetcode.com/problems/two-sum/",
            },
            {
              title: "3. Longest Substring Without Repeating Characters",
              url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
            },
            {
              title: "53. Maximum Subarray (Kadane’s Algorithm)",
              url: "https://leetcode.com/problems/maximum-subarray/",
            },
            {
              title: "238. Product of Array Except Self",
              url: "https://leetcode.com/problems/product-of-array-except-self/",
            },
          ]}
        />
      </section>
    </Container>
  );
}
