import "./globals.css";
import Script from "next/script"; // Next.js Optimization ke liye import kiya
import Header from "../common/Header";
import Footer from "../common/Footer";
import WhatsAppButton from "../common/WhatsAppButton";

export const metadata = {
  title: "Wise Green Energy - Premium Solar Solutions",
  description: "Elite solar panel installation and green energy solutions engineered for maximum performance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const gaId = "G-XDQYK9R9W8"; 

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <meta name="google-site-verification" content="c2n0rSIgKIbaTm9eW4TYJQkTsG3Y6XIyeBHN6RfzehU" />
      </head>
      <body className="bg-[#0a0a0a] text-white flex flex-col min-h-screen relative">
        
 
        {gaId !== "G-XDQYK9R9W8" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        {/* Dynamic Header Component */}
        <Header />

        {/* Page Content */}
        <div className="pt-20 flex-grow">
          {children}
        </div>

        {/* Dynamic Footer Component */}
        <Footer />
        
        {/* Floating WhatsApp Widget */}
        <WhatsAppButton />

      </body>
    </html>
  );
}
