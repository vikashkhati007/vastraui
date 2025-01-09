import { ClientSideLayout } from "@/components/ClientSideLayout";

interface ComponentLayoutProps {
  children: React.ReactNode;
}

export default function ComponentLayout({
  children,
}: ComponentLayoutProps) {
  return <ClientSideLayout>{children}</ClientSideLayout>;
}

