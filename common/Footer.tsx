import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-16 pb-8 border-t border-gray-900 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-bold tracking-wider text-white mb-4">
            Wise<span className="text-[#2ecc71]">Green</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Empowering India with smart, elite solar solutions engineered for maximum performance and zero electricity bills.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Company</h3>
          <ul className="space-y-3 text-sm text-gray-400 font-medium">
            <li><Link href="/" className="hover:text-[#2ecc71] transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#2ecc71] transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-[#2ecc71] transition-colors">Elite Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-[#2ecc71] transition-colors">Installations</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Resources</h3>
          <ul className="space-y-3 text-sm text-gray-400 font-medium">
            <li><Link href="/blog" className="hover:text-[#2ecc71] transition-colors">Knowledge Hub</Link></li>
            <li><Link href="/contact" className="hover:text-[#2ecc71] transition-colors">Contact Support</Link></li>
            <li><a href="/sitemap.xml" className="hover:text-[#2ecc71] transition-colors">Sitemap</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Get in Touch</h3>
          <ul className="space-y-3 text-sm text-gray-400 font-medium">
            <li className="flex items-center gap-2"><span>📞</span> +91 98765 43210</li>
            <li className="flex items-center gap-2"><span>✉️</span> projects@wisegreenenergy.in</li>
            <li className="flex items-center gap-2"><span>📍</span> Haryana, India</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-gray-900 text-center md:flex md:justify-between md:items-center">
        <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2026 Wise Green Energy. All Rights Reserved.</p>
        <p className="text-gray-600 text-xs font-bold tracking-widest uppercase">
          Powered by <span className="text-[#2ecc71]">SoftWise India Innovations</span>
        </p>
      </div>
    </footer>
  );
}
