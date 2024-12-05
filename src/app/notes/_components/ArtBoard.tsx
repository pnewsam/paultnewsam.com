"use client";

import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { cn } from "@/lib/utils";

type GraphNode = {
  id: string;
  x: number;
  y: number;
};

const randomId = () => Math.random().toString(36).substring(2, 15);
const randomX = () => Math.random() * 600;
const randomY = () => Math.random() * 400;

const resizeSvg = (svg: SVGSVGElement) => {
  const { width, height } = svg.getBoundingClientRect();
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.setAttribute("height", `${height}`);
  svg.setAttribute("width", `${width}`);
};

const deriveEdgePoints = (nodes: GraphNode[]) => {
  return nodes.map((node) => `${node.x},${node.y}`);
};

export function ArtBoard() {
  const [nodes, setNodes] = useState<GraphNode[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);

  const addNode = () => {
    setNodes([...nodes, { id: randomId(), x: randomX(), y: randomY() }]);
  };

  useEffect(() => {
    if (svgRef.current) {
      window.addEventListener("resize", () =>
        resizeSvg(svgRef.current as SVGSVGElement),
      );
    }
    return () => {
      if (svgRef.current) {
        window.removeEventListener("resize", () =>
          resizeSvg(svgRef.current as SVGSVGElement),
        );
      }
    };
  }, [svgRef]);

  return (
    <Card className={cn("h-full w-full relative")}>
      <svg
        id="artboard"
        ref={svgRef}
        className="h-full w-full"
        height={400}
        width={600}
        viewBox="0 0 600 400"
      >
        {nodes.map((node) => (
          <circle
            className="fill-cyan-500 transition-transform duration-300"
            key={node.id}
            cx={node.x}
            cy={node.y}
            r={10}
          />
        ))}
      </svg>
      <div className="absolute bottom-0 bg-gray-200 border-t border-gray-300">
        <div className="flex justify-between">
          <Button onClick={addNode}>Add Node</Button>
        </div>
      </div>
    </Card>
  );
}
