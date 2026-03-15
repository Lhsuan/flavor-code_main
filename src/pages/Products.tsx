import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  ChevronRight, 
  UtensilsCrossed, 
  Coffee, 
  Flame,
  ShoppingBag
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
  description: string;
}

const categories = [
  { 
    id: "night-market", 
    name: "夜市小吃", 
    icon: <Flame size={24} />, 
    description: "經典台灣夜市風味，零負擔重現。",
    image: "https://lh3.googleusercontent.com/d/1KlDy-axSFOWEzPXXiA-242uqjF0AcZYN",
    color: "bg-sage-pale"
  },
  { 
    id: "taiwanese", 
    name: "台灣菜", 
    icon: <UtensilsCrossed size={24} />, 
    description: "家常與經典台式料理，香氣飽滿。",
    image: "https://lh3.googleusercontent.com/d/1jFgoGoXpH3k5p4GZ8cQZC8TCWGnzbjoy",
    color: "bg-beige-pale"
  },
  { 
    id: "dessert-drink", 
    name: "點心/飲料", 
    icon: <Coffee size={24} />, 
    description: "甜蜜與清爽的完美平衡。",
    image: "https://lh3.googleusercontent.com/d/1BjFsynXyHNTEuPqOxTkzwxuMabD0SZmp",
    color: "bg-gray-100"
  },
];

const products: Product[] = [
  // 夜市小吃
  { id: "1", name: "鹹酥雞", category: "night-market", image: "https://lh3.googleusercontent.com/d/1CXPl4GXw9W7TzvEXkVBkqLuAw8ymNqLX", description: "Flavor Code 鹹酥雞風味精華 — 透過嗅覺與味覺的雙重解碼，重現夜市最經典的誘人香氣。" },
  
  // 台灣菜
  { id: "2", name: "滷肉飯", category: "taiwanese", image: "https://lh3.googleusercontent.com/d/1e5C9_RJyZ8l38aoS9iUSXjzJush1xF6c", description: "Flavor Code 滷肉飯風味精華 — 數位還原慢火細燉的膠質鹹香，每一口都是家鄉的記憶。" },
  
  // 點心/飲料
  { id: "9", name: "珍珠奶茶", category: "dessert-drink", image: "https://lh3.googleusercontent.com/d/1XNuhLeylppMpLIGeFc-JfwZqo6rinULW", description: "濃郁奶香與黑糖珍珠的甜蜜感。" },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory 
    ? products.filter(p => p.category === selectedCategory)
    : [];

  const currentCategory = categories.find(c => c.id === selectedCategory);

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-md z-50 px-6 md:px-12 flex items-center justify-between border-b border-gray-50">
        <Link to="/" className="text-2xl font-serif tracking-tighter text-sage flex items-center gap-2">
          味碼
        </Link>
        <div className="flex items-center gap-10">
          <ul className="hidden md:flex items-center gap-10 text-sm font-light text-gray-600">
            <li><Link to="/philosophy" className="hover:text-sage transition-colors">我們的理念</Link></li>
            <li><Link to="/products" className="text-sage font-medium">商品</Link></li>
            <li><Link to="/memory-gallery" className="hover:text-sage transition-colors">味覺記憶長廊</Link></li>
            <li><Link to="/blog" className="hover:text-sage transition-colors">健康知識</Link></li>
          </ul>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-50 rounded-full transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-sage rounded-full" />
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {!selectedCategory ? (
            <motion.div
              key="categories"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-16">
                <h1 className="font-serif text-5xl font-light mb-6">探索風味</h1>
                <p className="text-gray-500 font-light max-w-xl mx-auto">
                  選擇您喜愛的類別，開啟零負擔的味覺旅程。
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    whileHover={{ y: -10 }}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`group relative h-[450px] rounded-[2.5rem] overflow-hidden ${category.color} text-left p-10 flex flex-col justify-end`}
                  >
                    {category.image && (
                      <>
                        <img 
                          src={category.image} 
                          alt={category.name}
                          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000 grayscale-[0.2]"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      </>
                    )}
                    <div className="absolute top-10 left-10 w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-sage shadow-sm group-hover:scale-110 transition-transform z-20">
                      {category.icon}
                    </div>
                    <div className="relative z-10">
                      <h3 className={`font-serif text-3xl mb-4 ${category.image ? 'text-white' : 'text-ink'}`}>{category.name}</h3>
                      <p className={`font-light text-sm mb-6 leading-relaxed ${category.image ? 'text-white/80' : 'text-gray-500'}`}>
                        {category.description}
                      </p>
                      <div className={`flex items-center gap-2 text-sm font-medium ${category.image ? 'text-white' : 'text-sage'}`}>
                        查看商品 <ChevronRight size={16} />
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="products"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <button 
                onClick={() => setSelectedCategory(null)}
                className="flex items-center gap-2 text-gray-400 hover:text-sage transition-colors mb-12 group"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                返回分類
              </button>

              <div className="flex items-end justify-between mb-16">
                <div>
                  <div className="text-sage text-xs font-bold uppercase tracking-widest mb-4">Category</div>
                  <h2 className="font-serif text-5xl font-light">{currentCategory?.name}</h2>
                </div>
                <div className="text-gray-400 font-light text-sm">
                  共 {filteredProducts.length} 款商品
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                {filteredProducts.map((product, index) => (
                  <Link key={product.id} to={`/products/${product.id}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group cursor-pointer"
                    >
                      <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-white mb-6 border border-gray-100 p-4">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                      </div>
                      <h3 className="text-xl font-medium mb-2">{product.name}</h3>
                      <p className="text-gray-400 font-light text-sm leading-relaxed">
                        {product.description}
                      </p>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-ink text-white py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-serif tracking-tighter mb-8">味碼</div>
            <p className="text-gray-400 font-light max-w-sm leading-relaxed">
              透過嗅覺黑科技，重建大腦對美味的記憶。讓健康飲食不再是苦行，而是一場感官的盛宴。
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">快速連結</h4>
            <ul className="space-y-4 text-gray-400 font-light text-sm">
              <li><Link to="/" className="hover:text-sage transition-colors">首頁</Link></li>
              <li><Link to="/philosophy" className="hover:text-sage transition-colors">我們的理念</Link></li>
              <li><Link to="/products" className="hover:text-sage transition-colors">商品</Link></li>
              <li><Link to="/blog" className="hover:text-sage transition-colors">健康知識</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">聯絡我們</h4>
            <ul className="space-y-4 text-gray-400 font-light text-sm">
              <li>hello@weima.com</li>
              <li>台北市信義區風味路 88 號</li>
              <li>02-2345-6789</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 text-gray-500 text-xs font-light flex justify-between">
          <div>© 2024 味碼 WEIMA. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">隱私權政策</a>
            <a href="#" className="hover:text-white transition-colors">服務條款</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
