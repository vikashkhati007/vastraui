import { ClientSideLayout } from "@/components/ClientSideLayout";

interface ComponentLayoutProps {
  children: React.ReactNode;
}

export default function ComponentLayout({
  children,
}: ComponentLayoutProps): JSX.Element {
  return <ClientSideLayout>{children}</ClientSideLayout>;
}

