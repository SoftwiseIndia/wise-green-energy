import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Wise Green Energy - Premium Solar Solutions",
  description: "Elite solar panel installation and green energy solutions engineered for maximum performance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Tailwind CDN ensure fixed design loading */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-[#0a0a0a] text-white">
        
        {/* === COMMON ELITE NAVBAR === */}
        <nav className="fixed w-full z-50 top-0 bg-black/80 backdrop-blur-md border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold tracking-wider text-white">
              Wise<span className="text-[#2ecc71]">Green</span> Energy
            </Link>
            
            {/* Nav Links - Updated with About & Contact */}
            <div className="hidden lg:flex gap-6 items-center text-sm">
              <Link href="/" className="text-gray-300 hover:text-[#2ecc71] transition-colors font-semibold">Home</Link>
              <Link href="/about" className="text-gray-300 hover:text-[#2ecc71] transition-colors font-semibold">About Us</Link>
              <Link href="/services" className="text-gray-300 hover:text-[#2ecc71] transition-colors font-semibold">Services</Link>
              <Link href="/portfolio" className="text-gray-300 hover:text-[#2ecc71] transition-colors font-semibold">Portfolio</Link>
              <Link href="/blog" className="text-gray-300 hover:text-[#2ecc71] transition-colors font-semibold">Knowledge Hub</Link>
              <Link href="/contact" className="text-gray-300 hover:text-[#2ecc71] transition-colors font-semibold">Contact</Link>
            </div>

            <Link href="/#contact" className="bg-[#2ecc71] hover:bg-[#27ae60] text-black px-5 py-2 rounded transition-all font-bold text-sm">
              Get a Quote
            </Link>
          </div>
        </nav>

        {/* === DYNAMIC PAGE CONTENT WILL LOAD HERE === */}
        <div className="pt-20">
          {children}
        </div>

        {/* === COMMON FOOTER === */}
        <footer className="py-8 bg-black border-t border-gray-900 text-center mt-auto">
          <p className="text-gray-500 text-sm">© 2026 Wise Green Energy. All Rights Reserved.</p>
          <p className="text-gray-600 mt-2 text-xs font-semibold tracking-widest">
            Powered by <span className="text-[#2ecc71]">SoftWise India Innovations</span>
          </p>
        </footer>

      </body>
    </html>
  );
}
