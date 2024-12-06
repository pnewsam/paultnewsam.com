import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paul T. Newsam | Notes",
  description: "Notes on various topics",
};

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
