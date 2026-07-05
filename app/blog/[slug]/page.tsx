import Link from "next/link";
import { notFound } from "next/navigation";

export default async function BlogPost({ params }: { params: { slug: string } }) {
  let blog = null;
  
  try {
    const res = await fetch(`https://api.wisegreenenergy.in/get_blogs.php?slug=${params.slug}`, { cache: "no-store" });
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
    <main className="min-h-screen bg-[#0a0a0a] pb-20">
      <article className="max-w-4xl mx-auto px-6 mt-10">
        
        <header className="mb-12 border-b border-gray-800 pb-10">
          {/* Back Button added cleanly inside the article space */}
          <Link href="/blog" className="text-gray-400 hover:text-[#2ecc71] transition-colors font-semibold text-sm mb-10 inline-block">
            ← Back to All Articles
          </Link>
          
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

        {/* Yahan cPanel se aaya hua HTML render hoga. 
          Tailwind Typography style classes for clean formatting.
        */}
        <div 
          className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-[#2ecc71] prose-strong:text-white"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
        
        {/* Realistic & Professional Call To Action */}
        <div className="mt-20 pt-10 border-t border-gray-800 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Want to eliminate your electricity bills?</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Connect with our engineering team for a realistic solar estimate and a complete site inspection. No gimmicks, just smart energy.
          </p>
          <Link href="/#contact" className="bg-[#2ecc71] hover:bg-[#27ae60] text-black px-10 py-4 rounded text-lg font-bold transition-all shadow-[0_0_20px_rgba(46,204,113,0.3)] inline-block">
            Book Free Site Inspection
          </Link>
        </div>

      </article>
    </main>
  );
}
