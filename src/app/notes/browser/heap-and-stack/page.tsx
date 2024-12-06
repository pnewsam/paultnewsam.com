import { CodeBlock } from "@/components/CodeBlock";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Body } from "@/components/typography/Body";
import { Bold } from "@/components/typography/Bold";
import { H3 } from "@/components/typography/H3";
import { Subject } from "@/types/subject";

export default function HeapAndStack() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader
          title="Heap and Stack in Javascript Memory Management"
          tags={[Subject.Javascript]}
        />
        <Body>
          When we code in Javascript, we don&apos;t have to think too much about
          memory. That&apos;s one of Javascripts main advantages -- memory
          management can be laborious and error-prone, so leaving that work to
          the engine means we can focus on application logic. However, the
          engine isn&apos;t perfect, and it&apos;s possible to write code that
          impedes the engine&apos;s work. So it&apos;s helpful to understand
          some practical details about how memory management happens.
        </Body>

        <H3>Heap and Stack</H3>
        <Body>
          As with all other programs, memory in Javascript programs is managed
          in two areas: the <Bold>stack</Bold> and the <Bold>heap</Bold>. In
          Javascript&apos;s case, the <Bold>stack</Bold> manages the execution
          context of the running code, as well as primitive values and object
          references. The <Bold>heap</Bold> stores basically everything else,
          so: all non-primitives such as objects, arrays, and functions. (Note
          that in practice, both arrays and functions are actually objects too.)
          Here are some examples of values stored on the <Bold>stack</Bold> and{" "}
          <Bold>heap</Bold> respectively:
        </Body>

        <CodeBlock
          className="mb-8"
          language="javascript"
          code={`// Stack storage
let number = 42; // Primitive stored directly
let str = "hello"; // Primitive stored directly
let obj = { name: "John" }; // Reference stored (object in heap)

// Heap allocations
let array = new Array(1000); // Large array in heap
let obj = {
  // Object in heap
  data: new ArrayBuffer(1000), // Large buffer in heap
};`}
        />

        <Body>
          Mostly we can ignore this as an implementation detail. But there are a
          couple of cases where you might want to take note of distinction. One
          is <Bold>memory leaks</Bold>. Stack-allocated data is automatically
          freed when it goes out of scope, but heap-allocated data is not. So
          it&apos;s fairly common to create memory leaks by neglecting to free
          references to heap-allocated objects.
        </Body>

        <CodeBlock
          className="mb-8"
          language="javascript"
          code={`function doMath() {
  let x = 1;
  let y = 2;
  return x + y;
}

// Potential memory leak - heap allocated objects not being cleaned up
function addHandler() {
  const bigData = {
    /* lots of data */
  };
  element.addEventListener("click", () => {
    console.log(bigData); // bigData can't be garbage collected
    // while this handler exists
  });
}`}
        />

        <Body>
          The second is <Bold>caching</Bold>. If you&apos;re having to
          frequently access heap-allocated data, you can limit your overhead by
          caching it on the stack.
        </Body>

        <CodeBlock
          className="mb-8"
          language="javascript"
          code={`// Less efficient - repeated heap access
function sum(obj) {
  let sum = 0;
  for (let i = 0; i < 1000; i++) {
    sum += obj.value; // accessing heap each time
  }
  return sum;
}

// More efficient - single heap access
function sum(obj) {
  let sum = 0;
  const value = obj.value; // cache heap value in stack
  for (let i = 0; i < 1000; i++) {
    sum += value;
  }
  return sum;
}`}
        />
      </section>
    </Container>
  );
}
