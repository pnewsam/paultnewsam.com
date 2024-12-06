"use client";

import { Brush } from "lucide-react";
import { useEffect } from "react";

import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Body } from "@/components/typography/Body";
import { Subject } from "@/types/subject";

import initializers from "./_scripts/initializers";
import { setupCanvas } from "./_scripts/setupCanvas";

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
        <PageHeader title="Whiteboard" tags={[Subject.UserInterface]} />
        <Body>
          {`A basic whiteboard using HTML <canvas />. Click and drag to draw.`}
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
