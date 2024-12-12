import { CodeBlock } from "@/components/CodeBlock";
import { Body } from "@/components/typography/Body";
import { Bold } from "@/components/typography/Bold";
import { ExternalLink } from "@/components/typography/ExternalLink";
import { H3 } from "@/components/typography/H3";
import { Italic } from "@/components/typography/Italic";

export function TwoPointersContent() {
  return (
    <>
      <Body>
        There are a variety of array and list problems that can be solved using
        the &apos;two pointers&apos; strategy. This strategy is where you use
        two separate pointers that either start at different locations, or move
        at different speeds, and compare them in some way to find the right
        solution.
      </Body>
      <Body>
        Let&apos;s look at a simple example. In the{" "}
        <ExternalLink href="https://leetcode.com/problems/remove-duplicates-from-sorted-array/">
          Remove Duplicates from Sorted Array
        </ExternalLink>{" "}
        problem, you have to reorganize the elements of a <Bold>sorted</Bold>{" "}
        array such that all unique elements occur in-order at the start of the
        array. (The elements following all unique elements can remain the same
        or not.)
      </Body>
      <CodeBlock
        className="mb-4"
        code={`function removeDuplicates(nums: number[]): number {
 //...
}

removeDuplicates([1,1,2,3])
// Returns 3, and updates array in-place to [1,2,3,_]

removeDuplicates([1,4,5,5,7,7,9])
// Returns 5, and updates array in-place to [1,4,5,7,9_,_]
`}
        language="typescript"
      />

      <Body>
        To solve it, we just have to shift the first instance of any unique
        number forward. We can iterate through the list, and whenever we
        encounter a <Bold>new value</Bold>, rewrite it to the appropriate
        position.
      </Body>

      <Body>
        But where is the <Italic>appropriate</Italic> position? That&apos;s
        where the second pointer comes in. While one pointer iterates through
        the list, the second pointer tracks where to put the new value.
      </Body>

      <CodeBlock
        className="mb-4"
        code={`function removeDuplicates(nums: number[]): number {
  if (nums.length === 1) return 1;

  let slow = 0; // Replacement index
  for (let fast = 1; fast < nums.length; fast++) {
      // If we reach a new unique value, rewrite it at the replacement index
      if (nums[slow] !== nums[fast]) {
          slow += 1;
          nums[slow] = nums[fast];
      }
  }

  // The "slow" pointer (plus one) will always reflect the total number of unique elements
  return slow + 1;
};`}
        language="typescript"
      ></CodeBlock>

      <Body>
        Because in this problem we don&apos;t have to rewrite the trailing
        elements, that&apos;s all we need to do.
      </Body>
    </>
  );
}
