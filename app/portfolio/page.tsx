import Link from "next/link";

export const metadata = {
  title: "Cinematic Solar Portfolio - Wise Green Energy",
  description: "Explore our landmark solar power installations across residential and commercial sectors in India.",
};

export default function PortfolioPage() {
  // Static array for premium project showcase
  const projects = [
    {
      id: 1,
      title: "150kW Industrial Grid",
      category: "Commercial Infrastructure",
      location: "Industrial Zone",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
      stats: "Reduces 120 Tons of CO2/Year"
    },
    {
      id: 2,
      title: "Luxury Estate Smart Solar",
      category: "Premium Residential",
      location: "Urban Greens",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80",
      stats: "Net-Zero Electricity Bill"
    },
    {
      id: 3,
      title: "Corporate Hub Rooftop Plant",
      category: "Corporate Infrastructure",
      location: "Tech Park",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      stats: "Claimed 40% Accelerated Depreciation"
    },
    {
      id: 4,
      title: "High-Efficiency Bifacial Setup",
      category: "Next-Gen Solar",
      location: "Greenfield Plant",
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80",
      stats: "+25% Dual-Side Power Generation"
    }
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] pb-12">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 mt-10 text-center mb-20">
        <p className="text-[#2ecc71] uppercase tracking-widest font-semibold mb-3 text-sm">Engineering Excellence</p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
          Landmark <span className="text-[#2ecc71]">Installations</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          A visual archive of our high-performance solar setups, showcasing ultimate structural integrity and maximum energy yield.
        </p>
      </section>

      {/* Cinematic Grid System */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div key={project.id} className="bg-[#111] border border-gray-900 rounded-2xl overflow-hidden shadow-2xl group hover:border-[#2ecc71]/40 transition-all duration-500">
            {/* Image Box */}
            <div className="relative h-96 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Floating Badge */}
              <span className="absolute top-6 left-6 bg-[#2ecc71] text-black text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded z-20">
                {project.category}
              </span>
              
              {/* Bottom Project Details Overlaid on Image */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-1">{project.location}</p>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-[#2ecc71] transition-colors">
                  {project.title}
                </h2>
                <div className="flex items-center gap-2 text-[#2ecc71] text-sm font-semibold">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#2ecc71] animate-pulse"></span>
                  {project.stats}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Elite Call to Action */}
      <section className="max-w-5xl mx-auto px-6 mt-28">
        <div className="relative rounded-3xl overflow-hidden border border-gray-800 bg-gradient-to-br from-[#111] to-[#0a140f] p-12 md:p-16 text-center shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Build Your Own <br />
            <span className="text-[#2ecc71]">Clean Energy</span> Powerhouse?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            Join elite Indian enterprises and smart homeowners. Let our engineering team draft a custom 3D layout for your roof.
          </p>
          <Link href="/#contact" className="bg-[#2ecc71] hover:bg-[#27ae60] text-black px-10 py-4 rounded text-lg font-bold transition-all shadow-[0_0_25px_rgba(46,204,113,0.4)] inline-block">
            Initiate Free Site Survey
          </Link>
        </div>
      </section>
    </main>
  );
}
