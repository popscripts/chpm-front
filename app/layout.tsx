// Root layout: html/body are provided by app/[locale]/layout.tsx.
// This wrapper is required by Next.js for the app directory.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactNode {
  return children;
}
