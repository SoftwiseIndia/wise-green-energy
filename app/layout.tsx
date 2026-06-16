import "./globals.css";

export const metadata = {
  title: "Wise Green Energy - Premium Solar Solutions",
  description: "Elite solar panel installation and green energy solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
