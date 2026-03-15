import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Clock, User, ChevronRight, Search, Filter } from "lucide-react";
import { articles } from "../data/articles";

export default function Blog() {
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

      {/* Header */}
      <header className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sage text-xs font-bold uppercase tracking-widest mb-4"
        >
          健康知識庫
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6"
        >
          探索飲食的<span className="italic text-sage">科學與藝術</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 font-light text-lg max-w-2xl mx-auto"
        >
          由專業營養師團隊撰寫，為您提供最前瞻的健康飲食指南、心理學洞察與生活實踐。
        </motion.p>
      </header>

      {/* Search & Filter Bar */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="搜尋文章關鍵字..." 
              className="w-full pl-12 pr-4 py-2 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-sage/30 transition-all"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {["全部", "飲食心理", "外食指南", "生活美學", "銀髮營養"].map((cat, i) => (
              <button 
                key={cat}
                className={`px-4 py-2 rounded-full text-xs whitespace-nowrap transition-all ${i === 0 ? 'bg-sage text-white' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <main className="px-6 md:px-12 max-w-7xl mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.article 
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full"
            >
              <Link to={`/blog/${article.id}`} className="block aspect-[16/10] overflow-hidden relative">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-sage uppercase tracking-widest">
                  {article.category}
                </div>
              </Link>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-[10px] text-gray-400 uppercase tracking-widest mb-4">
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    {article.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={12} />
                    營養師審稿
                  </div>
                </div>
                
                <h3 className="font-serif text-2xl font-light mb-4 leading-tight group-hover:text-sage transition-colors">
                  <Link to={`/blog/${article.id}`}>{article.title}</Link>
                </h3>
                
                <p className="text-sm text-gray-400 font-light leading-relaxed mb-6 line-clamp-3">
                  {article.summary}
                </p>
                
                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-[10px] text-gray-300 font-medium">{article.date}</span>
                  <Link 
                    to={`/blog/${article.id}`} 
                    className="text-sage text-sm font-medium flex items-center gap-1 group/link"
                  >
                    閱讀全文
                    <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
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
