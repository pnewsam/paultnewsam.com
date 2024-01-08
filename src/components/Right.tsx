import { ReactNode } from "react";

export const Right = ({ children }: { children: ReactNode }) => (
  <div className="py-16 px-8  md:h-screen md:overflow-y-scroll">
    <div className="w-full">{children}</div>
  </div>
);
