import { motion } from "motion/react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Clock, User, Tag, Share2, Bookmark, ChevronRight } from "lucide-react";
import { articles } from "../data/articles";

export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-paper">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-paper/80 backdrop-blur-md border-b border-gray-100 px-6 md:px-12 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-serif text-xl font-medium">
          <div className="w-2 h-2 rounded-full bg-sage" />
          味碼
        </Link>
        <ul className="hidden md:flex items-center gap-10 text-sm font-light text-gray-600">
          <li><Link to="/" className="hover:text-sage transition-colors">首頁</Link></li>
          <li><Link to="/philosophy" className="hover:text-sage transition-colors">我們的理念</Link></li>
          <li><Link to="/products" className="hover:text-sage transition-colors">商品</Link></li>
          <li><Link to="/memory-gallery" className="hover:text-sage transition-colors">味覺記憶長廊</Link></li>
          <li><Link to="/blog" className="text-sage font-medium">健康知識</Link></li>
        </ul>
      </nav>

      {/* Article Header */}
      <header className="pt-32 pb-16 px-6 md:px-12 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-8"
        >
          <Link to="/blog" className="flex items-center gap-2 text-sm text-gray-400 hover:text-sage transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            返回列表
          </Link>
          <span className="w-1 h-1 rounded-full bg-gray-200" />
          <div className="text-xs font-bold text-sage uppercase tracking-widest">健康知識 / {article.category}</div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8"
        >
          {article.title}
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center gap-6 text-sm text-gray-400 font-light"
        >
          <div className="flex items-center gap-2">
            <User size={16} />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>閱讀時間約 {article.readTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <Tag size={16} />
            <span>{article.date}</span>
          </div>
        </motion.div>
      </header>

      {/* Featured Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="px-6 md:px-12 max-w-6xl mx-auto mb-16"
      >
        <div className="aspect-[21/9] rounded-[2rem] overflow-hidden bg-beige-pale relative">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover mix-blend-multiply opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-paper/40 to-transparent" />
        </div>
      </motion.div>

      {/* Article Content */}
      <main className="px-6 md:px-12 max-w-3xl mx-auto pb-32">
        <article className="prose prose-sage max-w-none">
          <div className="space-y-8 text-gray-600 font-light leading-relaxed text-lg">
            {article.content.map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={i} className="font-serif text-3xl font-light text-ink mt-12 mb-6 border-l-4 border-sage pl-6">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={i} className="font-serif text-2xl font-light text-ink mt-8 mb-4">
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }
              if (paragraph.startsWith("- ")) {
                return (
                  <div key={i} className="flex gap-4 pl-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-sage mt-2.5 flex-shrink-0" />
                    <p className="flex-grow">{paragraph.replace("- ", "")}</p>
                  </div>
                );
              }
              if (/^\d+\. /.test(paragraph)) {
                return (
                  <div key={i} className="flex gap-4 pl-4">
                    <div className="w-6 h-6 rounded-full bg-sage text-white flex items-center justify-center flex-shrink-0 text-xs mt-1">
                      {paragraph.match(/^\d+/)?.[0]}
                    </div>
                    <p className="flex-grow">{paragraph.replace(/^\d+\. /, "")}</p>
                  </div>
                );
              }
              // Check for bold text like **text**
              const parts = paragraph.split(/(\*\*.*?\*\*)/g);
              return (
                <p key={i}>
                  {parts.map((part, j) => {
                    if (part.startsWith("**") && part.endsWith("**")) {
                      return <strong key={j} className="text-ink">{part.slice(2, -2)}</strong>;
                    }
                    return part;
                  })}
                </p>
              );
            })}
          </div>
        </article>

        {/* Article Footer */}
        <div className="mt-20 pt-10 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-sage transition-colors">
              <Share2 size={18} />
              分享文章
            </button>
            <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-sage transition-colors">
              <Bookmark size={18} />
              收藏
            </button>
          </div>
          <div className="flex gap-2">
            {["#健康飲食", "#味碼", `#${article.category}`].map(tag => (
              <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-32">
          <h3 className="font-serif text-2xl font-light mb-8">延伸閱讀</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.filter(a => a.id !== article.id).slice(0, 2).map(related => (
              <Link 
                key={related.id}
                to={`/blog/${related.id}`}
                className="group block"
              >
                <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-4">
                  <img 
                    src={related.image} 
                    alt={related.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="font-serif text-xl font-light group-hover:text-sage transition-colors line-clamp-2">{related.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-ink text-white py-16 px-8 md:px-16 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <div className="flex items-center gap-2 font-serif text-xl font-medium mb-2">
              <div className="w-2 h-2 rounded-full bg-sage" />
              味碼
            </div>
            <p className="text-xs text-gray-500 font-light">診所級健康飲食品牌 · 成立於 2022 年</p>
          </div>
          
          <div className="flex gap-8 text-xs text-gray-400 font-light">
            <Link to="/" className="hover:text-white transition-colors">首頁</Link>
            <a href="#" className="hover:text-white transition-colors">隱私權政策</a>
            <a href="#" className="hover:text-white transition-colors">服務條款</a>
            <a href="#" className="hover:text-white transition-colors">聯絡我們</a>
          </div>

          <div className="text-[10px] text-gray-600 uppercase tracking-widest">
            © 2024 味碼股份有限公司
          </div>
        </div>
      </footer>
    </div>
  );
}
