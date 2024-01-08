import { ReactNode } from "react";

export const Left = ({ children }: { children: ReactNode }) => (
  <div className="py-16 px-8 border-b md:border-r border-stone-200">
    <div className="w-full">{children}</div>
  </div>
);
