import Link from "next/link";

export const metadata = {
  title: "About Us - Wise Green Energy",
  description: "Discover the vision and engineering excellence behind India's premier solar energy brand.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 text-center px-6 mt-16">
          <p className="text-[#2ecc71] font-bold tracking-widest uppercase mb-4">Our Vision</p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            Powering The <span className="text-[#2ecc71]">Future.</span>
          </h1>
        </div>
      </section>

      {/* Leadership & Mission */}
      <section className="max-w-6xl mx-auto px-6 mt-20 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Engineered for <br /> Maximum Yield.
          </h2>
          <p className="text-gray-400 text-lg mb-6 leading-relaxed">
            Led by the strategic vision of Raman Sodhi, Wise Green Energy was built on a singular philosophy: Solar power shouldn't just be an alternative; it should be the ultimate upgrade. We don't just install panels; we engineer elite power infrastructures that eliminate electricity bills and maximize ROI.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            Backed by the technological prowess of SoftWise India Innovations, our systems integrate Tier-1 hardware with AI-driven monitoring, ensuring your home or business generates flawless, uninterrupted power for decades.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[#111] p-8 rounded-2xl border border-gray-800 text-center shadow-2xl">
            <h3 className="text-5xl font-extrabold text-[#2ecc71] mb-2">25+</h3>
            <p className="text-gray-400 font-semibold uppercase tracking-wider text-sm">Years Warranty</p>
          </div>
          <div className="bg-[#111] p-8 rounded-2xl border border-gray-800 text-center shadow-2xl">
            <h3 className="text-5xl font-extrabold text-[#2ecc71] mb-2">90%</h3>
            <p className="text-gray-400 font-semibold uppercase tracking-wider text-sm">Bill Reduction</p>
          </div>
          <div className="bg-[#111] p-8 rounded-2xl border border-gray-800 text-center shadow-2xl col-span-2">
            <h3 className="text-3xl font-extrabold text-white mb-2">Tier-1</h3>
            <p className="text-gray-400 font-semibold uppercase tracking-wider text-sm">Global Hardware Partners</p>
          </div>
        </div>
      </section>
    </main>
  );
}
