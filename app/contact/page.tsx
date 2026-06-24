"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Your inquiry has been securely routed to our engineering team.");
    // Hum yahan wahi api.php wala logic bhi laga sakte hain aage chal kar
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] pb-20 pt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            Let's <span className="text-[#2ecc71]">Connect.</span>
          </h1>
          <p className="text-xl text-gray-400">Initiate your transition to smart solar energy today.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Details */}
          <div className="space-y-10 mt-4">
            <div className="bg-[#111] p-8 rounded-2xl border border-gray-800 flex items-start gap-6 hover:border-[#2ecc71]/50 transition-all">
              <div className="w-12 h-12 bg-[#2ecc71]/10 rounded-full flex items-center justify-center text-[#2ecc71] text-2xl shrink-0">📍</div>
              <div>
                <h3 className="text-white text-xl font-bold mb-2">Corporate Headquarters</h3>
                <p className="text-gray-400">Wise Green Energy<br/>Powered by SoftWise India Innovations<br/>Haryana, India</p>
              </div>
            </div>

            <div className="bg-[#111] p-8 rounded-2xl border border-gray-800 flex items-start gap-6 hover:border-[#2ecc71]/50 transition-all">
              <div className="w-12 h-12 bg-[#2ecc71]/10 rounded-full flex items-center justify-center text-[#2ecc71] text-2xl shrink-0">✉️</div>
              <div>
                <h3 className="text-white text-xl font-bold mb-2">Direct Email</h3>
                <p className="text-gray-400">projects@wisegreenenergy.in</p>
              </div>
            </div>

            <div className="bg-[#111] p-8 rounded-2xl border border-gray-800 flex items-start gap-6 hover:border-[#2ecc71]/50 transition-all">
              <div className="w-12 h-12 bg-[#2ecc71]/10 rounded-full flex items-center justify-center text-[#2ecc71] text-2xl shrink-0">📞</div>
              <div>
                <h3 className="text-white text-xl font-bold mb-2">Engineering Hotline</h3>
                <p className="text-gray-400">+91 98765 43210</p>
              </div>
            </div>
          </div>

          {/* Secure Query Form */}
          <div className="bg-[#111] p-10 rounded-3xl border border-gray-800 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Secure Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                  <input required type="text" className="w-full bg-[#0a0a0a] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[#2ecc71]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                  <input required type="text" className="w-full bg-[#0a0a0a] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[#2ecc71]" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input required type="email" className="w-full bg-[#0a0a0a] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[#2ecc71]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Project Details</label>
                <textarea required rows={4} className="w-full bg-[#0a0a0a] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[#2ecc71]" placeholder="Tell us about your roof space and monthly bill..."></textarea>
              </div>
              <button type="submit" className="w-full bg-[#2ecc71] hover:bg-[#27ae60] text-black font-bold py-4 rounded transition-all">
                Submit Inquiry
              </button>
              {status && <p className="text-center mt-4 text-[#2ecc71] font-semibold">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
