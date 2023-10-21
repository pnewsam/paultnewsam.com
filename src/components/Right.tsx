import { ReactNode } from "react";

export const Right = ({ children }: { children: ReactNode }) => (
  <div className="py-8 md:py-32 px-8 lg:px-16 md:h-screen md:overflow-y-scroll">
    <div className="w-full">{children}</div>
  </div>
);
