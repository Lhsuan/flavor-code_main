import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ShoppingCart, Info, Wind, Zap, Heart, Gift } from "lucide-react";
import { useState, useEffect } from "react";

interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  longDescription?: string;
  features?: string[];
  specs?: { label: string; value: string }[];
}

const products: Product[] = [
  { 
    id: "1", 
    name: "鹹酥雞", 
    category: "night-market", 
    image: "https://lh3.googleusercontent.com/d/1CXPl4GXw9W7TzvEXkVBkqLuAw8ymNqLX", 
    description: "Flavor Code 鹹酥雞風味精華 — 透過嗅覺與味覺的雙重解碼，重現夜市最經典的誘人香氣。",
    longDescription: "這不僅是一瓶調味料，更是對台灣夜市靈魂的數位解碼。我們利用『味碼 (Flavor Code)』專利技術，精確捕捉了鹹酥雞在熱油中翻滾時散發出的梅納反應分子，並結合了九層塔的清香與特製中藥胡椒鹽的辛香層次。每一滴精華都經過分子級別的調配，旨在喚醒您大腦深處最溫暖、最滿足的美味記憶。",
    features: [
      "分子級風味還原技術",
      "九層塔與胡椒鹽的黃金比例",
      "低鈉、無添加人工防腐劑",
      "專為健康飲食者設計的感官補償"
    ],
    specs: [
      { label: "容量", value: "30ml" },
      { label: "產地", value: "台灣" },
      { label: "保存期限", value: "24個月" },
      { label: "適用場景", value: "水煮餐、健身餐、沙拉、日常調味" }
    ]
  },
  { 
    id: "2", 
    name: "滷肉飯", 
    category: "taiwanese", 
    image: "https://lh3.googleusercontent.com/d/1e5C9_RJyZ8l38aoS9iUSXjzJush1xF6c", 
    description: "Flavor Code 滷肉飯風味精華 — 數位還原慢火細燉的膠質鹹香，每一口都是家鄉的記憶。",
    longDescription: "滷肉飯是台灣飲食文化的縮影。我們的『味碼』團隊深入研究了北中南各地的經典滷汁，最終解碼出這款融合了紅蔥頭油炸後的焦香、豬皮慢熬出的膠質甜感，以及五香粉與陳年醬油交織出的深邃層次。這款精華能讓您在享受清淡飲食的同時，瞬間獲得如同品嚐一碗熬煮十二小時滷肉飯般的感官滿足。",
    features: [
      "紅蔥頭焦香分子還原",
      "膠質甜感數位模擬",
      "零脂肪、低鈉配方",
      "生酮與低碳飲食的最佳拍檔"
    ],
    specs: [
      { label: "容量", value: "30ml" },
      { label: "產地", value: "台灣" },
      { label: "保存期限", value: "24個月" },
      { label: "適用場景", value: "健身餐、低碳餐、白飯替代品調味" }
    ]
  },
  { 
    id: "9", 
    name: "珍珠奶茶", 
    category: "dessert-drink", 
    image: "https://lh3.googleusercontent.com/d/1XNuhLeylppMpLIGeFc-JfwZqo6rinULW", 
    description: "Flavor Code 珍珠奶茶風味精華 — 濃郁奶香與黑糖珍珠的甜蜜感，數位重現台灣國民飲品。",
    longDescription: "珍珠奶茶不僅是一杯飲料，更是一種生活態度。我們的團隊成功解構了高品質阿薩姆紅茶的單寧澀感、全脂奶粉的醇厚乳香，以及黑糖慢火熬煮珍珠時產生的獨特焦糖化香氣。這款精華讓您隨時隨地都能感受到那一抹熟悉的香甜，卻完全無需擔心熱量與糖分的負擔。",
    features: [
      "阿薩姆紅茶基底分子還原",
      "黑糖焦香層次模擬",
      "零熱量、零糖分感官體驗",
      "適合加入各種飲品或甜點中調味"
    ],
    specs: [
      { label: "容量", value: "30ml" },
      { label: "產地", value: "台灣" },
      { label: "保存期限", value: "24個月" },
      { label: "適用場景", value: "無糖茶飲、咖啡、優格、烘焙調味" }
    ]
  }
];

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-beige-pale">
        <div className="text-center">
          <h2 className="text-2xl font-serif mb-4">找不到該商品</h2>
          <Link to="/products" className="text-ink underline">返回商品列表</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-beige-pale text-ink">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-8 flex justify-between items-center bg-beige-pale/80 backdrop-blur-md">
        <Link to="/products" className="flex items-center gap-2 group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">返回商品列表</span>
        </Link>
        <div className="text-2xl font-serif tracking-tighter">味碼</div>
        <div className="flex items-center gap-6">
          <ShoppingCart className="w-5 h-5 cursor-pointer" />
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Product Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative aspect-square rounded-[40px] overflow-hidden bg-white border border-gray-100 p-8 shadow-sm"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-8">
              <span className="text-xs uppercase tracking-widest text-gray-400 mb-4 block">
                {product.category === 'night-market' ? '夜市小吃系列' : 
                 product.category === 'taiwanese' ? '台灣經典系列' : 
                 product.category === 'dessert-drink' ? '點心飲品系列' : '風味系列'}
              </span>
              <h1 className="text-5xl font-serif mb-6 leading-tight">{product.name} 風味精華</h1>
              <p className="text-xl text-gray-500 font-light leading-relaxed mb-8">
                {product.description}
              </p>
              <div className="flex items-center gap-4 mb-12">
                <span className="text-3xl font-medium">$880</span>
                <span className="text-sm text-gray-400 line-through">$1,200</span>
                <span className="bg-emerald-50 text-emerald-600 text-xs px-3 py-1 rounded-full font-medium">新品優惠</span>
              </div>
              
              <div className="flex gap-4 mb-12">
                <button className="flex-1 bg-ink text-white py-5 rounded-2xl font-medium hover:bg-opacity-90 transition-all flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  加入購物車
                </button>
                <button className="w-16 h-16 border border-gray-200 rounded-2xl flex items-center justify-center hover:bg-gray-50 transition-all">
                  <Heart className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="space-y-12">
              <section>
                <h2 className="text-sm uppercase tracking-widest font-semibold mb-6 flex items-center gap-2">
                  <Info className="w-4 h-4" /> 產品故事
                </h2>
                <p className="text-gray-600 leading-relaxed font-light">
                  {product.longDescription}
                </p>
              </section>

              <section>
                <h2 className="text-sm uppercase tracking-widest font-semibold mb-6 flex items-center gap-2">
                  <Gift className="w-4 h-4" /> 特別贈禮
                </h2>
                <p className="text-gray-600 leading-relaxed font-light">
                  每份產品均隨附一張相對應味道的隨機「風味回憶小卡」，帶您透過文字與視覺，重溫那段專屬的感官記憶。
                </p>
              </section>

              <section>
                <h2 className="text-sm uppercase tracking-widest font-semibold mb-6 flex items-center gap-2">
                  <Wind className="w-4 h-4" /> 風味特點
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features?.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-sm uppercase tracking-widest font-semibold mb-6 flex items-center gap-2">
                  <Zap className="w-4 h-4" /> 產品規格
                </h2>
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  {product.specs?.map((spec, i) => (
                    <div key={i} className="text-sm">
                      <span className="text-gray-400 block mb-1">{spec.label}</span>
                      <span className="text-gray-700 font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-ink text-white py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-3xl font-serif tracking-tighter mb-8">味碼</div>
          <p className="text-gray-400 font-light max-w-md mx-auto leading-relaxed mb-12">
            我們相信，健康的飲食不應該是對慾望的壓抑，而是對感官的重新啟發。
          </p>
          <div className="flex justify-center gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">隱私權政策</a>
            <a href="#" className="hover:text-white transition-colors">服務條款</a>
            <a href="#" className="hover:text-white transition-colors">聯繫我們</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
