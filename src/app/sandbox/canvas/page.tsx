"use client";
import { useEffect } from "react";
import { Brush } from "lucide-react";
import Container from "@/components/Container";
import { H1, Body } from "@/components/typography";
import { setupCanvas } from "./_scripts/setupCanvas";
import initializers from "./_scripts/initializers";
import Card from "@/components/Card";

export default function CanvasPage() {
  useEffect(() => {
    const canvas = setupCanvas();
    if (canvas) {
      initializers.addMouseListeners(canvas);
      initializers.addResizeListeners(canvas);
      initializers.addScrollListeners(canvas);
    }
  }, []);

  return (
    <Container>
      <section className="py-12 md:py-24">
        <H1>Whiteboard</H1>
        <Body>
          I&apos;d spent some time with SVGs but I&apos;d never used HTML{" "}
          <code className="bg-neutral-100 dark:bg-neutral-800 rounded-md p-1">
            {`<canvas />`}
          </code>
          . I thought I&apos;d give it a shot. This is a simple whiteboard. You
          can click and drag to draw.
        </Body>
        <Card className="relative">
          <span className="absolute top-0 right-0 text-base uppercase tracking-widest font-medium p-4 text-neutral-500 dark:text-neutral-400 flex items-center gap-2 bg-neutral-100 dark:bg-neutral-800 rounded-tr-md rounded-bl-md border-t border-r border-neutral-200 dark:border-neutral-800">
            Canvas
            <Brush className="w-4 h-4" />
          </span>
          <canvas className="block h-[600px] w-full max-w-100vw" />
        </Card>
      </section>
    </Container>
  );
}
