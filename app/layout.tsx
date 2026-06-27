import "./globals.css";
import Header from "../common/Header";
import Footer from "../common/Footer";

export const metadata = {
  title: "Wise Green Energy - Premium Solar Solutions",
  description: "Elite solar panel installation and green energy solutions engineered for maximum performance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-[#0a0a0a] text-white flex flex-col min-h-screen">
        
        {/* Dynamic Header Component */}
        <Header />

        {/* Page Content */}
        <div className="pt-20 flex-grow">
          {children}
        </div>

        {/* Dynamic Footer Component */}
        <Footer />

      </body>
    </html>
  );
}
