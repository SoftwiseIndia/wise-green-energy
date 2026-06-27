import Link from "next/link";

export default function Header() {
  return (
    <nav className="fixed w-full z-50 top-0 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-wider text-white">
          Wise<span className="text-[#2ecc71]">Green</span> Energy
        </Link>
        
        <div className="hidden lg:flex gap-8 items-center text-sm">
          <Link href="/services" className="text-gray-300 hover:text-[#2ecc71] transition-colors font-semibold">Services</Link>
          <Link href="/portfolio" className="text-gray-300 hover:text-[#2ecc71] transition-colors font-semibold">Portfolio</Link>
          <Link href="/blog" className="text-gray-300 hover:text-[#2ecc71] transition-colors font-semibold">Knowledge Hub</Link>
        </div>

        <Link href="/#contact" className="bg-[#2ecc71] hover:bg-[#27ae60] text-black px-6 py-2 rounded transition-all font-bold text-sm">
          Get a Quote
        </Link>
      </div>
    </nav>
  );
}
