import Link from "next/link";
import { notFound } from "next/navigation";

export default async function BlogPost({ params }: { params: { slug: string } }) {
  let blog = null;
  
  try {
    const res = await fetch(`https://wisegreenenergy.in/get_blogs.php?slug=${params.slug}`, { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      if (data && data.length > 0) {
        blog = data[0];
      }
    }
  } catch (error) {
    console.error("Error fetching blog:", error);
  }

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-24 pb-20">
      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-wider text-white">
            Wise<span className="text-[#2ecc71]">Green</span> Energy
          </Link>
          <Link href="/blog" className="text-gray-300 hover:text-[#2ecc71] transition-colors font-semibold">
            ← Back to Blogs
          </Link>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-6 mt-10">
        <header className="mb-12 border-b border-gray-800 pb-10">
          <p className="text-[#2ecc71] font-semibold mb-4 tracking-widest uppercase">
            Published on {new Date(blog.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            {blog.title}
          </h1>
          <p className="text-xl text-gray-400 italic">
            {blog.meta_description}
          </p>
        </header>

        {/* 
          Yahan cPanel se aaya hua HTML render hoga. 
          Tailwind Typography style classes for elite formatting.
        */}
        <div 
          className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-[#2ecc71] prose-strong:text-white"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
        
        <div className="mt-20 pt-10 border-t border-gray-800 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Ready to switch to Smart Solar?</h3>
          <Link href="/#contact" className="bg-[#2ecc71] hover:bg-[#27ae60] text-black px-10 py-4 rounded text-lg font-bold transition-all shadow-[0_0_20px_rgba(46,204,113,0.3)] inline-block">
            Get Your Free 4K Site Review
          </Link>
        </div>
      </article>
    </main>
  );
}
