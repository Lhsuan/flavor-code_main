import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Heart, ShieldCheck, Sparkles, Target, Leaf, Coffee } from "lucide-react";

export default function Philosophy() {
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
          <li><Link to="/philosophy" className="text-sage font-medium">我們的理念</Link></li>
          <li><Link to="/products" className="hover:text-sage transition-colors">商品</Link></li>
          <li><Link to="/memory-gallery" className="hover:text-sage transition-colors">味覺記憶長廊</Link></li>
          <li><Link to="/blog" className="hover:text-sage transition-colors">健康知識</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sage text-xs font-bold uppercase tracking-widest mb-4"
        >
          Our Philosophy
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl lg:text-7xl font-light leading-tight mb-8"
        >
          讓健康，<span className="italic text-sage">不再與美味對立</span>
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto space-y-6 text-gray-500 font-light text-lg leading-relaxed"
        >
          <p>
            隨著生活節奏加快，人們越來越重視飲食控制與身體管理。
            低油、低鹽、低熱量的餐點成為日常，但同時也帶來另一個困擾——吃得健康，卻失去了吃飯的滿足感。
          </p>
          <p>
            許多飲食計畫之所以難以長期維持，並不是因為不夠自律，而是感官缺少了「被滿足」感覺。
          </p>
          <p className="text-sage font-medium">
            味碼相信，真正可持續的健康生活，不該依靠意志力對抗，而應該透過更聰明的方法，讓健康與美味同時存在。
          </p>
        </motion.div>
      </header>

      {/* Core Concept */}
      <section className="py-24 bg-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-sage text-xs font-bold uppercase tracking-widest mb-6">Sensory First</div>
            <h2 className="font-serif text-4xl font-light mb-8">從感官出發，而不是從限制開始</h2>
            <div className="space-y-6 text-gray-600 font-light leading-relaxed">
              <p>
                研究指出，食物帶來的滿足感，很大一部分來自嗅覺。
                當香氣不足，大腦無法獲得完整的感官回饋，即使已經吃飽，仍容易產生渴望與補償心理。
              </p>
              <p>
                味碼以<strong>「鼻後嗅覺」</strong>原理為基礎，透過食品級天然萃取技術，將風味轉化為零熱量的香氣噴霧。
              </p>
              <p>
                不增加糖分、油脂與鈉含量，卻能重建大腦對美味的記憶與滿足。
              </p>
              <p className="italic text-sage">
                我們不是改變食物本身，而是改變你感受味道的方式。
              </p>
              <p className="text-gray-600 font-light leading-relaxed">
                我們相信，風味可以成為健康飲食的助力，而不是阻力。
              </p>
              <div className="pt-4">
                <button 
                  onClick={() => document.getElementById('retronasal-science')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 text-sage font-medium hover:gap-3 transition-all cursor-pointer"
                >
                  了解更多鼻後嗅覺原理 <Sparkles size={16} />
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-[3rem] overflow-hidden bg-beige-pale shadow-inner"
          >
            <img 
              src="https://lh3.googleusercontent.com/d/1ATvTemwxuQ-rmLSfLB5Fh1brDR5Q0V0H" 
              alt="Person savoring delicious food" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
            </div>
          </motion.div>
        </div>
      </section>

      {/* Retronasal Science Section */}
      <section id="retronasal-science" className="py-24 bg-sage-pale/30 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[3rem] shadow-sm border border-sage/10"
          >
            <h2 className="font-serif text-3xl font-light mb-8 text-center text-ink">
              鼻後嗅覺 (Retronasal Olfaction)：<br/>
              <span className="text-sage italic">大腦感知美味的真正路徑</span>
            </h2>
            <div className="space-y-6 text-gray-600 font-light leading-relaxed">
              <p>
                你是否曾發現，感冒鼻塞時，吃什麼都索然無味？這是因為我們感受到的「味道」，其實有 80% 來自嗅覺。
              </p>
              <p>
                嗅覺分為兩種路徑：
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                <div className="p-6 bg-paper rounded-2xl border border-gray-100">
                  <h4 className="font-serif text-lg mb-3 text-sage">1. 鼻前嗅覺 (Orthonasal)</h4>
                  <p className="text-sm">從鼻孔吸入的香氣。讓你「聞到」咖啡的濃郁或麵包的焦香。</p>
                </div>
                <div className="p-6 bg-sage-pale/50 rounded-2xl border border-sage/20">
                  <h4 className="font-serif text-lg mb-3 text-sage">2. 鼻後嗅覺 (Retronasal)</h4>
                  <p className="text-sm">當食物在口中咀嚼，香氣分子從口腔後方（鼻後路徑）上升至鼻腔。這是大腦判斷「美味」的關鍵。</p>
                </div>
              </div>
              <p>
                味碼的噴霧技術，正是利用這個<strong>「鼻後路徑」</strong>。當你將香氣噴灑在餐點上，隨著咀嚼，香氣分子會精準地觸發鼻後嗅覺，讓大腦接收到強烈的「滿足訊號」。
              </p>
              <p>
                即使餐點本身極低油、低鹽，大腦依然會因為豐富的香氣回饋，而感到極大的心理滿足，從而減少對高熱量食物的渴望。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-sage text-xs font-bold uppercase tracking-widest mb-4">Real Life Scenarios</div>
          <h2 className="font-serif text-4xl font-light">為真實生活場景而設計</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Coffee />, title: "忙碌上班族", desc: "需要在外食與健康之間取得平衡" },
            { icon: <Leaf />, title: "租屋族群", desc: "缺乏廚房設備，仍希望餐點更有層次" },
            { icon: <Heart />, title: "長輩照護", desc: "需要低負擔卻能提升食慾的飲食方式" },
            { icon: <Target />, title: "健身飲控", desc: "希望在自律中保有享受" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-sage-pale text-sage flex items-center justify-center mx-auto mb-6">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl mb-3">{item.title}</h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-gray-500 font-light italic">
            只需簡單一噴，清淡餐點也能擁有熟悉的香氣與風味，讓健康選擇變得更容易堅持。
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 bg-ink text-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-video rounded-[2rem] overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/d/1zcsd2GAwiHKUlNvsJT_FWDi9M_Vspi33" 
                alt="Flavor Code Principles" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="text-sage text-xs font-bold uppercase tracking-widest mb-6">Our Principles</div>
              <h2 className="font-serif text-4xl font-light mb-8">我們堅持的原則</h2>
              <p className="text-gray-400 font-light mb-10 leading-relaxed">
                味碼的設計始終圍繞三件事：安全、專業、有效。
              </p>
              <ul className="space-y-6">
                {[
                  "採用食品級天然來源萃取",
                  "零熱量、零脂肪、低負擔",
                  "不影響斷食、生酮或飲食控制計畫",
                  "並與營養專業合作，從科學角度設計風味應用"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-300 font-light">
                    <ShieldCheck className="text-sage flex-shrink-0" size={20} />
                    {text}
                  </li>
                ))}
              </ul>
              <p className="mt-12 text-sage font-medium text-lg">
                我們相信，風味可以成為健康飲食的助力，而不是阻力。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-32 px-6 md:px-12 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-sage text-xs font-bold uppercase tracking-widest mb-6">Conclusion</div>
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-10">味覺自由，是一種新的自律方式</h2>
          <div className="space-y-6 text-gray-500 font-light text-lg leading-relaxed mb-12">
            <p>自律不應該是壓抑與犧牲，而是更理性的選擇。</p>
            <p>
              味碼希望成為你日常飲食中的小小工具，
              在維持健康的同時，也保留對食物的期待與愉悅。
            </p>
            <div className="py-6 border-y border-sage/10 my-8">
              <p className="text-sage font-medium">
                我們承諾：每收集 1,000 則故事，透過合作醫院捐出 100 瓶給弱勢族群及行動不便的長者
              </p>
            </div>
            <p className="text-ink font-medium">讓每一餐，都同時兼顧理智與美味。</p>
          </div>
          <div className="font-serif text-2xl italic text-sage">這就是我們存在的理由。</div>
        </motion.div>
      </section>

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
