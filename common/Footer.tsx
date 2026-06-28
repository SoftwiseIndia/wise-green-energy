import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-16 pb-8 border-t border-gray-900 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold tracking-wider text-white mb-4">
            Wise<span className="text-[#2ecc71]">Green</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Empowering India with smart, elite solar solutions engineered for maximum performance and zero electricity bills.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Company</h3>
          <ul className="space-y-3 text-sm text-gray-400 font-medium">
            <li><Link href="/" className="hover:text-[#2ecc71] transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#2ecc71] transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-[#2ecc71] transition-colors">Elite Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-[#2ecc71] transition-colors">Installations</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Resources</h3>
          <ul className="space-y-3 text-sm text-gray-400 font-medium">
            <li><Link href="/blog" className="hover:text-[#2ecc71] transition-colors">Knowledge Hub</Link></li>
            <li><Link href="/contact" className="hover:text-[#2ecc71] transition-colors">Contact Support</Link></li>
            <li><a href="/sitemap.xml" className="hover:text-[#2ecc71] transition-colors">Sitemap</a></li>
          </ul>
        </div>

        {/* Get in Touch (Replaced Emojis with Pro SVG Icons) */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Get in Touch</h3>
          <ul className="space-y-4 text-sm text-gray-400 font-medium">
            
            {/* Phone Icon */}
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2ecc71] shrink-0">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              +91 7055 7054 55
            </li>
            
            {/* Email Icon */}
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2ecc71] shrink-0">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              info@wisegreenenergy.in
            </li>
            
            {/* Location Icon */}
            <li className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2ecc71] shrink-0 mt-0.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Sirsa, Haryana, India
            </li>

          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-gray-900 text-center md:flex md:justify-between md:items-center">
        <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2026 Wise Green Energy. All Rights Reserved.</p>
        <p className="text-gray-600 text-xs font-bold tracking-widest uppercase">
          Initiate by <span className="text-[#2ecc71]">SoftWise India Innovations</span>
        </p>
      </div>
    </footer>
  );
}
