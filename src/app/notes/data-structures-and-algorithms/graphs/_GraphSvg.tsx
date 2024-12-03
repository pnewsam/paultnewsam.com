import { ReactNode } from "react";

import { cn } from "@/lib/utils";

const Line = ({
  className,
  x1,
  y1,
  x2,
  y2,
}: {
  className: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}) => (
  <line
    className={cn("stroke-cyan-500 dark:stroke-cyan-400", className)}
    x1={x1}
    y1={y1}
    x2={x2}
    y2={y2}
  />
);

const Node = ({
  className,
  children,
  x,
  y,
}: {
  className: string;
  children: ReactNode;
  x: number;
  y: number;
}) => (
  <g>
    <circle
      cx={x}
      cy={y}
      className={cn(
        "fill-cyan-500 dark:fill-cyan-500 stroke-cyan-700 dark:stroke-cyan-200",
        className,
      )}
      r="20"
    />
    <text
      x={x - 4}
      y={y + 5}
      className={cn("[font-family:'Erode',serif] fill-white", className)}
    >
      {children}
    </text>
  </g>
);

export const GraphSvg = () => (
  <svg
    className=""
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 250 200"
    width="400"
    height="300"
  >
    {/* Edges */}
    <Line className="" x1={50} y1={50} x2={100} y2={100} />
    <Line className="" x1={150} y1={50} x2={100} y2={100} />
    <Line className="" x1={50} y1={150} x2={100} y2={100} />
    <Line className="" x1={150} y1={150} x2={100} y2={100} />
    <Line className="" x1={150} y1={50} x2={150} y2={150} />

    {/* Nodes */}
    <Node x={50} y={50} className="">
      A
    </Node>
    <Node x={150} y={50} className="">
      B
    </Node>
    <Node x={50} y={150} className="">
      C
    </Node>
    <Node x={150} y={150} className="">
      D
    </Node>
    <Node x={100} y={100} className="">
      E
    </Node>
    <Node x={200} y={100} className="">
      F
    </Node>
  </svg>
);
