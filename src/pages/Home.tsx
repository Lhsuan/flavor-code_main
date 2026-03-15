import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronRight, 
  Play, 
  UtensilsCrossed, 
  BookOpen, 
  Sparkles,
  Quote,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Target,
  HeartPulse,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-paper/80 backdrop-blur-md border-b border-gray-100 px-6 md:px-12 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-serif text-xl font-medium">
          <div className="w-2 h-2 rounded-full bg-sage" />
          味碼
        </Link>
        <ul className="hidden md:flex items-center gap-10 text-sm font-light text-gray-600">
          <li><Link to="/philosophy" className="hover:text-sage transition-colors">我們的理念</Link></li>
          <li><Link to="/products" className="hover:text-sage transition-colors">商品</Link></li>
          <li><Link to="/memory-gallery" className="hover:text-sage transition-colors">味覺記憶長廊</Link></li>
          <li><Link to="/blog" className="hover:text-sage transition-colors">健康知識</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 bg-white overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full relative"
        >
          <img 
            src="https://lh3.googleusercontent.com/d/1cFBM5Jk5KkOrDoTVf4wL_pckGarSESmK" 
            alt="Flavor Code - 讓自律也有味道" 
            className="w-full h-auto block"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* Pain Point Section */}
      <section className="py-20 px-8 md:px-16 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-400 text-xs font-light tracking-[0.2em] mb-4"
            >
              減脂這條路，不該只有白開水與雞胸肉
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-serif text-3xl md:text-5xl text-ink leading-tight"
            >
              為了自律，你打算<br className="md:hidden" />
              <span className="relative inline-block px-2">
                <span className="text-sage line-through decoration-sage/40 decoration-2">戒掉</span>
              </span>
              美味多久？
            </motion.h2>
          </div>

          {/* Pain Point Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {[
              {
                title: "自律後的索然無味",
                en: "The dullness of discipline",
                desc: "清淡飲食吃到懷疑人生？意志力在每一口乾澀中消磨殆盡。",
                img: "https://lh3.googleusercontent.com/d/1w2ZQTKCidxyp3wihwwB5lmZCIh4EBV9x",
                tag: "生理"
              },
              {
                title: "報復性進食的循環",
                en: "The cycle of binge eating",
                desc: "因為白天的過度壓抑...導致夜晚情緒潰堤，報復性大吃宵夜。",
                img: "https://lh3.googleusercontent.com/d/1VyxuyNi7jnNxjpM2KfKVzjknBgPbnIr6",
                tag: "心理"
              },
              {
                title: "侷限在空間的味道",
                en: "Flavor limited by space",
                desc: "租屋處沒廚房、不便開伙？想念熱騰騰的家鄉味卻困難重重。",
                img: "https://lh3.googleusercontent.com/d/1WjvsOu1SdJHrFqceAzrQCuYmVe5rMwhA",
                tag: "環境"
              },
              {
                title: "無法被療癒的身心",
                en: "Unhealed body and mind",
                desc: "下班後極需美食慰藉？卻在熱量表與幸福感之間糾結難平。",
                img: "https://lh3.googleusercontent.com/d/1Yf9hn4r9Ni58LxQ8fqliH-SGLtZmdF6n",
                tag: "壓力"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-paper rounded-[1.5rem] overflow-hidden border border-gray-100/50 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-[9px] font-bold tracking-widest text-ink/60 uppercase">
                    {item.tag}
                  </div>
                </div>
                <div className="p-8 md:p-10">
                  <div className="mb-4">
                    <h3 className="font-serif text-xl md:text-2xl text-ink mb-1">
                      {item.title}
                    </h3>
                    <div className="text-[9px] text-gray-400 uppercase tracking-widest font-light">
                      {item.en}
                    </div>
                  </div>
                  <p className="text-gray-600 font-sans leading-relaxed text-sm md:text-base opacity-80 group-hover:opacity-100 transition-opacity">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutritionist's Flavor Decoding Room */}
      <section className="py-24 bg-[#FAFAF8] overflow-hidden">
        <div className="max-w-5xl mx-auto px-8 md:px-16 lg:px-20">
          {/* 1. Statistical Hook */}
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sage text-xs font-bold tracking-[0.2em] mb-4 uppercase"
            >
              風味是身體最深層的渴望
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-serif text-3xl md:text-4xl text-ink leading-tight mb-8"
            >
              超過 90% 的飲食控制計畫，<br className="hidden md:block" />
              最終都敗給了「味覺的匱乏感」。
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-sm md:text-base"
            >
              減脂期間，我們往往只關注卡路里，卻忽略了大腦對食物記憶的渴求。<br className="hidden md:block" />
              當意志力因壓力而乾涸，這份缺憾往往引發報復性進食。
            </motion.p>
          </div>

          {/* 2. Professional Endorsement */}
          <div className="relative mb-24">
            <div className="absolute inset-0 bg-[#D4C4A8]/10 rounded-[3rem] -rotate-1 scale-105" />
            <div className="relative bg-white rounded-[3rem] overflow-hidden shadow-xl border border-gray-100 flex flex-col md:flex-row items-stretch">
              {/* Image Side */}
              <div className="md:w-2/5 relative min-h-[400px]">
                <img
                  src="https://lh3.googleusercontent.com/d/1T6uRYKTAbaGtIEHVWip44Z8ofdrfRW1q"
                  alt="Febi 營養師"
                  className="absolute inset-0 w-full h-full object-cover grayscale-[0.2]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:hidden" />
                <div className="absolute bottom-8 left-8 text-white md:hidden">
                  <div className="font-serif text-2xl mb-1">Febi 營養師</div>
                  <div className="text-xs opacity-80">國家高考合格營養師</div>
                </div>
              </div>

              {/* Content Side */}
              <div className="md:w-3/5 p-10 md:p-16 flex flex-col justify-center">
                <div className="hidden md:block mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-[1px] bg-sage" />
                    <span className="text-sage text-xs font-bold tracking-widest uppercase">專家證言</span>
                  </div>
                  <h3 className="font-serif text-3xl text-ink mb-2">Febi 營養師</h3>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-400 font-light">國家高考合格營養師</p>
                    <p className="text-xs text-gray-400 font-light">國立台灣師範大學營養學系畢業</p>
                    <p className="text-xs text-gray-400 font-light">17 萬粉絲社群影響力</p>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="absolute -top-6 -left-6 text-sage/10 w-12 h-12" />
                  <p className="font-serif text-lg md:text-xl text-ink leading-relaxed italic relative z-10 mb-8">
                    「在與數千位學員合作減脂菜單時，我發現最大的阻礙不是飢餓，而是『單調』。對於忙碌的上班族或租屋族來說，清淡飲食久了，雞胸肉和沙拉也會吃到懷疑人生。」
                  </p>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    我推薦『味碼』，是因為它從分子層級還原了我們記憶中的經典風味。透過鼻後嗅覺原理，讓大腦獲得美味補償，卻不增加熱量負擔。它成功解決了自律與滿足感之間的衝突，讓健康飲食變成一種享受，而非折磨。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Key Selling Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-6 h-6 text-sage" />,
                title: "精準風味還原",
                desc: "滿足對滷肉飯、牛肉麵等經典台灣味的心理慰藉。"
              },
              {
                icon: <HeartPulse className="w-6 h-6 text-sage" />,
                title: "0 負擔的愉悅",
                desc: "協助穩定血糖波動，避免因匱乏感造成的深夜暴食。"
              },
              {
                icon: <Zap className="w-6 h-6 text-sage" />,
                title: "生活型態適配",
                desc: "專為居住空間受限、依賴外送的族群設計，噴一下，平淡的便當瞬間煥發靈魂。"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-sage/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="font-serif text-lg text-ink mb-3">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-24 px-8 md:px-16 lg:px-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <div className="text-sage text-xs font-bold uppercase tracking-widest mb-4">深入探索</div>
              <h2 className="font-serif text-4xl font-light leading-tight">
                從記憶到知識，<br />
                <span className="italic text-sage">一起好好生活</span>
              </h2>
            </div>
            <Link to="/products" className="border border-gray-300 px-6 py-3 rounded-full text-sm hover:border-sage hover:text-sage transition-all inline-block">
              瀏覽全部內容
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Sparkles className="text-sage" />, tag: "飲食記憶", title: "味覺記憶長廊", desc: "每一道料理都藏著一段故事。聽我們的顧客述說食物如何串起記憶、療癒身心。", color: "bg-sage-pale", link: "/memory-gallery" },
              { icon: <BookOpen className="text-beige" />, tag: "營養師撰寫", title: "健康知識", desc: "由我們的營養師團隊撰寫，涵蓋低鈉料理技巧、長者營養需求等實用指南。", color: "bg-beige-pale", link: "/blog" },
              { icon: <UtensilsCrossed className="text-gray-400" />, tag: "個人化設計", title: "商品", desc: "依照您的健康目標、口味偏好與生活型態，精選每週菜單——可訂購配送。", color: "bg-gray-100", link: "/products" }
            ].map((card, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white p-10 rounded-[2rem] border border-gray-100 flex flex-col gap-5 hover:border-sage hover:shadow-2xl transition-all group relative"
              >
                {card.link.startsWith('http') ? (
                  <a href={card.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" />
                ) : (
                  <Link to={card.link} className="absolute inset-0 z-10" />
                )}
                <div className={`w-14 h-14 rounded-2xl ${card.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  {card.icon}
                </div>
                <div className="text-[10px] text-sage font-bold uppercase tracking-widest flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-sage" />
                  {card.tag}
                </div>
                <h3 className="font-serif text-2xl font-light">{card.title}</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">{card.desc}</p>
                <ChevronRight className="absolute bottom-10 right-10 text-gray-300 group-hover:text-sage group-hover:translate-x-1 transition-all" size={20} />
              </motion.div>
            ))}
          </div>
        </div>
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
            <a href="#" className="hover:text-white transition-colors">隱私權政策</a>
            <a href="#" className="hover:text-white transition-colors">服務條款</a>
            <a href="#" className="hover:text-white transition-colors">聯絡我們</a>
            <a href="#" className="hover:text-white transition-colors">加入團隊</a>
          </div>

          <div className="text-[10px] text-gray-600 uppercase tracking-widest">
            © 2024 味碼股份有限公司
          </div>
        </div>
      </footer>
    </div>
  );
}
