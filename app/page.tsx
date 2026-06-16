"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "",
    monthly_bill: "",
  });
  const [status, setStatus] = useState("");

  // Calculator State
  const [calcBill, setCalcBill] = useState<number>(5000);

  // Solar Math Logic (Approximate values for India)
  const systemSize = Math.max(1, (calcBill / 8 / 120)).toFixed(1); // Rs 8 per unit, 1kW = 120 units/month
  const estimatedSavings = (calcBill * 12 * 25).toLocaleString('en-IN'); // 25 years savings

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://wisegreenenergy.in/api.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.status === "success") {
        setStatus("Quote requested successfully! Our elite team will contact you.");
        setFormData({ full_name: "", phone_number: "", monthly_bill: "" });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Network error. Could not reach the server.");
    }
  };

  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-wider">
            Wise<span className="text-[#2ecc71]">Green</span> Energy
          </div>
          <a href="#contact" className="bg-[#2ecc71] hover:bg-[#27ae60] text-black px-6 py-2 rounded transition-all font-bold">
            Get a Quote
          </a>
        </div>
      </nav>

      {/* Cinematic Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/50"></div>
        <div className="relative text-center px-6 max-w-4xl z-10 mt-16">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white">
            Empowering India with <br />
            <span className="text-[#2ecc71]">Smart Solar</span> Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10">
            Cut your electricity bills by up to 90% with elite, high-efficiency solar panel setups engineered for maximum performance.
          </p>
          <a href="#calculator" className="bg-[#2ecc71] hover:bg-[#27ae60] text-black px-8 py-4 rounded text-lg font-bold transition-all shadow-[0_0_20px_rgba(46,204,113,0.3)]">
            Calculate Your Savings
          </a>
        </div>
      </section>

      {/* Live Solar Calculator */}
      <section id="calculator" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Live Solar Savings Calculator</h2>
            <p className="text-gray-400">See how much you can save over the 25-year lifespan of our elite panels.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center bg-[#111] p-10 rounded-2xl border border-gray-800 shadow-2xl">
            <div>
              <label className="block text-xl font-medium text-gray-300 mb-6">
                Your Average Monthly Electricity Bill: <span className="text-[#2ecc71] font-bold">₹{calcBill.toLocaleString('en-IN')}</span>
              </label>
              <input 
                type="range" 
                min="1000" 
                max="50000" 
                step="500" 
                value={calcBill} 
                onChange={(e) => setCalcBill(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#2ecc71]"
              />
              <div className="flex justify-between text-gray-500 text-sm mt-2">
                <span>₹1,000</span>
                <span>₹50,000+</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800">
                <p className="text-gray-400 text-sm mb-1">Recommended System Size</p>
                <p className="text-3xl font-bold text-white">{systemSize} kW</p>
              </div>
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a1f12] p-6 rounded-xl border border-[#2ecc71]/30">
                <p className="text-[#2ecc71] text-sm mb-1 font-semibold">Estimated 25-Year Savings</p>
                <p className="text-4xl font-extrabold text-[#2ecc71]">₹ {estimatedSavings}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form connected to cPanel API */}
      <section id="contact" className="py-24 bg-black">
        <div className="max-w-3xl mx-auto px-6">
          <div className="p-10 border border-gray-800 bg-[#0a0a0a] rounded-xl shadow-2xl">
            <h2 className="text-3xl font-bold mb-2 text-white">Request Free Inspection</h2>
            <p className="text-gray-400 mb-8">Enter your details to get a customized 4K site review and quotation.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                <input required type="text" value={formData.full_name} onChange={(e) => setFormData({ ...formData, full_name: e.target.value })} className="w-full bg-[#111] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[#2ecc71]" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                <input required type="tel" value={formData.phone_number} onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })} className="w-full bg-[#111] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[#2ecc71]" placeholder="+91 98765 43210" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Average Monthly Bill (₹)</label>
                <input type="number" value={formData.monthly_bill} onChange={(e) => setFormData({ ...formData, monthly_bill: e.target.value })} className="w-full bg-[#111] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[#2ecc71]" placeholder="e.g. 5000" />
              </div>
              
              <button type="submit" className="w-full bg-[#2ecc71] hover:bg-[#27ae60] text-black font-bold py-4 rounded transition-all">
                Submit Request
              </button>
              
              {status && <p className="text-center mt-4 text-[#2ecc71] font-semibold">{status}</p>}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-gray-900 text-center">
        <p className="text-gray-500 text-sm">© 2026 Wise Green Energy. All Rights Reserved.</p>
        <p className="text-gray-600 mt-2 text-xs font-semibold tracking-widest">
          Powered by <span className="text-[#2ecc71]">SoftWise India Innovations</span>
        </p>
      </footer>
    </main>
  );
}
