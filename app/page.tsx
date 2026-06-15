"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "",
    monthly_bill: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // Yahan apni cPanel wali domain ka link dalein
      const response = await fetch("https://wisegreenenergy.in/api.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.status === "success") {
        setStatus("Quote requested successfully! Our team will contact you.");
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
          <a href="#contact" className="bg-[#2ecc71] hover:bg-[#27ae60] text-white px-6 py-2 rounded transition-all font-semibold">
            Get a Quote
          </a>
        </div>
      </nav>

      {/* Cinematic Hero Section */}
      <section className="relative h-screen flex items-center justify-center hero-bg">
        <div className="text-center px-6 max-w-4xl z-10 mt-16">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Empowering India with <br />
            <span className="text-[#2ecc71]">Smart Solar</span> Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10">
            Cut your electricity bills by up to 90% with elite, high-efficiency solar panel setups engineered for maximum performance.
          </p>
          <a href="#contact" className="bg-[#2ecc71] hover:bg-[#27ae60] text-white px-8 py-4 rounded text-lg font-bold transition-all shadow-[0_0_20px_rgba(46,204,113,0.3)]">
            Start Your Green Journey
          </a>
        </div>
      </section>

      {/* Services / Tech Specs */}
      <section className="py-24 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Premium Installations</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Residential Solar", desc: "Sleek rooftop grids that power your home seamlessly and save massive utility costs." },
              { title: "Commercial Grids", desc: "Heavy-duty industrial setups tailored for factories and large corporate spaces." },
              { title: "Lifetime Support", desc: "From site inspection to net-metering and regular maintenance, we handle it all." }
            ].map((service, index) => (
              <div key={index} className="p-8 bg-[#1a1a1a] border border-gray-800 rounded-lg hover:border-[#2ecc71] transition-all">
                <h3 className="text-2xl font-semibold mb-4 text-[#2ecc71]">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form connected to cPanel API */}
      <section id="contact" className="py-24 bg-black">
        <div className="max-w-3xl mx-auto px-6">
          <div className="p-10 border border-gray-800 bg-[#0a0a0a] rounded-xl shadow-2xl">
            <h2 className="text-3xl font-bold mb-2">Request Free Inspection</h2>
            <p className="text-gray-400 mb-8">Enter your details to get a customized 4K site review and quotation.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                <input required type="text" value={formData.full_name} onChange={(e) => setFormData({ ...formData, full_name: e.target.value })} className="w-full bg-[#111] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[#2ecc71]" placeholder="Raman Sodhi" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                <input required type="tel" value={formData.phone_number} onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })} className="w-full bg-[#111] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[#2ecc71]" placeholder="+91 98765 43210" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Average Monthly Bill (₹)</label>
                <input type="number" value={formData.monthly_bill} onChange={(e) => setFormData({ ...formData, monthly_bill: e.target.value })} className="w-full bg-[#111] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[#2ecc71]" placeholder="5000" />
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
