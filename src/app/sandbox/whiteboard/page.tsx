"use client";

import { useEffect } from "react";
import { Brush } from "lucide-react";
import Container from "@/components/Container";
import { setupCanvas } from "./_scripts/setupCanvas";
import initializers from "./_scripts/initializers";
import Card from "@/components/Card";
import PageHeader from "@/components/PageHeader";

export default function WhiteboardPage() {
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
        <PageHeader
          title="Whiteboard"
          tags={["HTML", "Javascript"]}
          description="I'd spent some time with SVGs but I'd never used HTML <code className='bg-neutral-100 dark:bg-neutral-800 rounded-md p-1'>{`<canvas />`}</code>. I thought I'd give it a shot. This is a simple whiteboard. You can click and drag to draw."
        />
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
