import { Metadata } from "next";
import { notFound } from "next/navigation";

import { dataStructuresAndAlgorithmsPages } from "./_constants/pages";

export const metadata: Metadata = {
  title: "Paul T. Newsam | Notes",
  description: "Notes on various topics",
};

export default function NotesLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    path: string;
  };
}) {
  return <>{children}</>;
}
