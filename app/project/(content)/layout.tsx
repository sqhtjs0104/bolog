import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project"
}

export default function ProjectLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
    </div>
  );
}