import { CodeBlock } from "@/components/CodeBlock";
import { Body } from "@/components/typography/Body";
import { Bold } from "@/components/typography/Bold";
import { Code } from "@/components/typography/Code";

const snippet = `function binarySearch(nums: number[], target: number) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = low + (high - low) / 2;
    if (nums[mid] === target) return mid;
    else if (nums[mid] > target) high = mid - 1;
    else low = mid + 1;
  }

  return -1;
} 
`;

export function BinarySearchContent() {
  return (
    <>
      <Body>
        The classic case for binary search is searching through a telephone
        book. When you&apos;re looking for a name in the telephone book, you
        don&apos;t open the book at random. And you don&apos;t thumb through the
        tome one page at a time. You open the book somewhere - say, right in the
        middle - and go forward or backward based on what you see. You can do
        that again and again, until eventually, you find the name.
      </Body>

      <Body>
        That&apos;s basically binary search - except that in the canonical
        sense, binary search always bisects the remaining search space rather
        than, say, making a good guess where the name is going to be and going
        there. It seems like an obvious way to search, but sometimes we forget
        the obvious things when we&apos;re coding.
      </Body>

      <Body>
        In practice, binary search works pretty much the way you&apos;d think.
        You grab the middle value, check if it&apos;s too big or too small. Then
        you adjust. If it&apos;s too small, you go right. If it&apos;s too big,
        you go left. Eventually you find what you&apos;re looking for, and you
        return it.
      </Body>

      <CodeBlock className="mb-8" code={snippet} language="typescript" />

      <Body>
        The main thing you&apos;ve got to be careful with is&nbsp;
        <Bold>off-by-one-errors</Bold>. If your array length is even, then you
        won&apos;t actually have a midpoint -- so you&apos;ll have to choose the{" "}
        <Code>Math.ceil</Code> or the <Code>Math.floor</Code> and stick with it.
      </Body>
    </>
  );
}
