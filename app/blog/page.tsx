import Link from "next/link";

export const metadata = {
  title: "Green Energy Blog - Wise Green Energy",
  description: "Read our latest articles on solar panels, green energy savings, and government subsidies in India.",
};

export default async function BlogList() {
  // cPanel API se real-time data fetch karna
  let blogs = [];
  try {
    const res = await fetch("https://wisegreenenergy.in/get_blogs.php", { cache: "no-store" });
    if (res.ok) {
      blogs = await res.json();
    }
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] pb-12">
      <div className="max-w-7xl mx-auto px-6 mt-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-white mb-4">Visibility <span className="text-[#2ecc71]">Booster</span> Hub</h1>
          <p className="text-xl text-gray-400">Everything you need to know about switching to smart solar energy.</p>
        </div>

        {blogs.length === 0 ? (
          <p className="text-center text-gray-500">New premium articles are coming soon!</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog: any) => (
              <div key={blog.id} className="bg-[#111] border border-gray-800 rounded-xl overflow-hidden hover:border-[#2ecc71] transition-all group">
                <div className="p-8">
                  <p className="text-[#2ecc71] text-sm font-semibold mb-3">
                    {new Date(blog.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </p>
                  <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#2ecc71] transition-colors">
                    {blog.title}
                  </h2>
                  <p className="text-gray-400 mb-6 line-clamp-3">
                    {blog.meta_description}
                  </p>
                  <Link href={`/blog/${blog.slug}`} className="inline-block text-[#2ecc71] font-bold border-b-2 border-transparent hover:border-[#2ecc71] transition-all">
                    Read Full Article →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
