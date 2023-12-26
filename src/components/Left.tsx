import { ReactNode } from "react";

export const Left = ({ children }: { children: ReactNode }) => (
  <div className="pt-16 pb-8 md:py-32 px-8 lg:px-16 border-b md:border-r border-stone-200 bg-stone-100">
    <div className="w-full">{children}</div>
  </div>
);
