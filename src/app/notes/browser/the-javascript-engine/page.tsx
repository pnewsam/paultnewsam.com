import { CodeBlock } from "@/components/CodeBlock";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Body } from "@/components/typography/Body";
import { Bold } from "@/components/typography/Bold";
import { H3 } from "@/components/typography/H3";
import { Subject } from "@/types/subject";

export default function TheJavascriptEngine() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader title="The Javascript Engine" tags={[Subject.Javascript]} />
        <Body>
          Javascript is a high-level interpreted language. What does that mean
          in practice?
        </Body>
        <Body>
          Javascript is a high-level, interpreted language. Before it can be
          run, it must be compiled to <Bold>bytecode</Bold> and then to{" "}
          <Bold>machine code</Bold>. (It differs therefore from lower-level
          languages like C or Go which are compiled directly to machine code.)
          This compilation is handled by the Javascript engine, and different
          execution environments use different Javascript engines. Chrome and
          NodeJS use V8, Safari uses JavascriptCore, and Firefox uses
          SpiderMonkey.
        </Body>
        <Body>
          In addition to simply compiling the code, the engine performs memory
          allocation, garbage collection and performance optimization. This work
          is happening in real time whenever and wherever Javascript code is
          running, and that means that Javascript programs will always have a
          memory/CPU overhead that lower-level, compiled languages do not have.
          However the engine&apos;s performance optimizations mean that
          Javascript can still be very fast in practice.
        </Body>

        <Body>
          Code execution happens in a few steps. First the Javascript code is
          converted into the <Bold>AST</Bold> or{" "}
          <Bold>Abstract Syntax Tree</Bold>. This syntax tree is then converted
          into <Bold>bytecode</Bold>, which is run by the
          <Bold>interpreter</Bold>. Then as the program runs, the engine
          monitors which code paths are run most frequently, and selectively
          compiles those
          <Bold>hot paths</Bold> to machine code. This is called a{" "}
          <Bold>tiered compilation</Bold>
          strategy, and it allows for a fast startup speed without compromising
          too much on performance.
        </Body>

        <Body>
          Although these are simplified representations, this is what the code
          may look like at each of these steps:
        </Body>
        <H3>Javascript</H3>
        <CodeBlock
          className="mb-8"
          language="javascript"
          code={`function add(a, b) {
  return a + b;
}

add(1, 2);`}
        />
        <H3>Abstract Syntax Tree (AST)</H3>
        <CodeBlock
          className="mb-8"
          language="json"
          code={`{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "add"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "a"
        },
        {
          "type": "Identifier",
          "name": "b"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Identifier",
                "name": "a"
              },
              "right": {
                "type": "Identifier",
                "name": "b"
              }
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "add"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 1
          },
          {
            "type": "Literal",
            "value": 2
          }
        ]
      }
    }
  ]
}`}
        />
        <H3>V8 Bytecode (Simplified)</H3>
        <CodeBlock
          className="mb-8"
          language="text"
          code={`// Function add
LdaZero                 // Load accumulator with 0
Star r0                 // Store accumulator to register 0
LdaSmi [1]             // Load Small Integer 1
Add r0                  // Add register 0 to accumulator
Return                  // Return with accumulator

// Calling code
LdaGlobal [0]          // Load 'add' function
Star r1                // Store in register 1
LdaSmi [1]             // Load argument 1
Star r2                // Store in register 2
LdaSmi [2]             // Load argument 2
Star r3                // Store in register 3
Call r1, r2, r3        // Call add(1,2)`}
        />
        <H3>x86-64 Machine Code (Simplified)</H3>
        <CodeBlock
          className="mb-8"
          language="x86asm"
          code={`; Function prologue
push    rbp
mov     rbp, rsp

; Load parameters
mov     rax, QWORD PTR [rbp+8]     ; Load first parameter
mov     rcx, QWORD PTR [rbp+16]    ; Load second parameter

; Add numbers
add     rax, rcx                   ; Add the numbers

; Function epilogue
pop     rbp
ret

; Calling code
mov     rdi, 1                     ; First argument (using 64-bit register)
mov     rsi, 2                     ; Second argument (using 64-bit register)
call    add                        ; Call the function`}
        />
      </section>
    </Container>
  );
}
