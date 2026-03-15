import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Plus, Info, ChevronDown, Utensils, ShoppingBag } from "lucide-react";
import RiceBowlCanvas, { RiceBowlCanvasHandle } from "../components/flavor-code/RiceBowlCanvas";
import StoryModal from "../components/flavor-code/StoryModal";
import StoryFeed from "../components/flavor-code/StoryFeed";
import { Story, Emotion } from "../types/flavor-code";

const INITIAL_STORIES: Story[] = [
  {
    id: "1",
    nickname: "阿嬤的孫子",
    content: "小時候阿嬤總會在滷肉飯裡多放一顆滷蛋，說多吃點才會長高。現在滷蛋的味道還在，阿嬤卻不在了。",
    emotion: Emotion.SWEET,
    timestamp: Date.now() - 86400000,
    votes: { egg: 42, radish: 12, coriander: 5 },
  },
  {
    id: "2",
    nickname: "加班族",
    content: "深夜十一點的巷口攤位，一碗滷肉飯是唯一的慰藉。鹹香的醬汁拌著熱騰騰的米飯，疲憊似乎也消散了些。",
    emotion: Emotion.SALTY,
    timestamp: Date.now() - 3600000,
    votes: { egg: 15, radish: 28, coriander: 10 },
  },
];

const MemoryGallery: React.FC = () => {
  const [stories, setStories] = useState<Story[]>(INITIAL_STORIES);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [sortBy, setSortBy] = useState<"latest" | "egg" | "radish" | "coriander">("latest");
  const canvasRef = useRef<RiceBowlCanvasHandle>(null);

  const sortedStories = [...stories].sort((a, b) => {
    if (sortBy === "latest") return b.timestamp - a.timestamp;
    return b.votes[sortBy] - a.votes[sortBy];
  });

  const fullness = Math.min((stories.length / 100) * 100, 100);

  const handleAddStory = (newStory: Omit<Story, "id" | "timestamp" | "votes">) => {
    const story: Story = {
      ...newStory,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: Date.now(),
      votes: { egg: 0, radish: 0, coriander: 0 },
    };

    setStories([story, ...stories]);
    canvasRef.current?.addRice(20);
  };

  const handleVote = (id: string, type: "egg" | "radish" | "coriander") => {
    setStories(prev => prev.map(s => 
      s.id === id ? { ...s, votes: { ...s.votes, [type]: s.votes[type] + 1 } } : s
    ));
  };

  return (
    <div className="min-h-screen bg-paper text-soy selection:bg-amber/30">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-paper/80 backdrop-blur-md border-b border-soy/5">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Utensils className="text-amber" size={24} />
            <h1 className="font-serif text-2xl font-bold tracking-tight">味碼 <span className="text-soy/40 font-sans text-sm font-normal">Flavor Code</span></h1>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              to="/products"
              className="flex items-center gap-2 px-4 py-2 bg-amber text-soy rounded-full text-sm font-bold hover:bg-amber/90 transition-all shadow-sm"
            >
              <ShoppingBag size={16} />
              <span>探索商品</span>
            </Link>
            <button 
              onClick={() => setShowIntro(true)}
              className="p-2 hover:bg-soy/5 rounded-full transition-colors text-soy/60"
            >
              <Info size={20} />
            </button>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-32 max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Left Column: Visualizer */}
        <div className="md:sticky md:top-24 h-fit space-y-8">
          <div className="text-center space-y-4">
            <h2 className="font-serif text-4xl leading-tight">
              每一粒米，<br />
              都是一段記憶。
            </h2>
            <p className="text-soy/60 font-serif italic">
              目前已有 {stories.length} 則記憶填滿這碗飯
            </p>
          </div>

          <RiceBowlCanvas ref={canvasRef} fullness={fullness} />

          <div className="bg-soy/5 p-6 rounded-2xl border border-soy/5">
            <h3 className="font-serif text-lg mb-2">關於這個計畫</h3>
            <p className="text-sm text-soy/70 leading-relaxed mb-4">
              滷肉飯是台灣人的靈魂美食。我們邀請你分享與這碗飯相關的故事，
              你的每一次投稿都會轉化為碗中的米粒，讓我們一起用情感填滿這份滋味。
            </p>
            <div className="bg-amber/10 border-l-4 border-amber p-4 rounded-r-lg">
              <p className="text-sm font-medium text-soy leading-relaxed">
                <span className="text-amber font-bold block mb-1">公益承諾：</span>
                每收集 1,000 則故事，透過合作醫院捐出 100 瓶給弱勢族群及行動不便的長者
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Feed */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="font-serif text-2xl">記憶長廊</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { id: "latest", label: "最新投稿" },
                { id: "egg", label: "🥚 最感人 (滷蛋)" },
                { id: "radish", label: "🥕 最清爽 (醃蘿蔔)" },
                { id: "coriander", label: "🌿 最奇葩 (香菜)" },
              ].map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSortBy(option.id as any)}
                  className={`px-3 py-1.5 rounded-full text-xs transition-all border ${
                    sortBy === option.id
                      ? "bg-soy text-paper border-soy"
                      : "bg-transparent text-soy/60 border-soy/10 hover:border-soy/30"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <StoryFeed stories={sortedStories} onVote={handleVote} />
        </div>
      </main>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 z-40 bg-soy text-paper p-4 rounded-full shadow-2xl flex items-center gap-2 pr-6"
      >
        <div className="bg-amber text-soy p-2 rounded-full">
          <Plus size={24} />
        </div>
        <span className="font-serif font-bold">添加我的記憶</span>
      </motion.button>

      {/* Intro Overlay */}
      {showIntro && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-paper">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl text-center space-y-8"
          >
            <div className="w-24 h-24 bg-amber/20 rounded-full flex items-center justify-center mx-auto">
              <Utensils size={48} className="text-amber" />
            </div>
            <div className="space-y-4">
              <h2 className="font-serif text-5xl">味碼：滷肉飯記憶</h2>
              <p className="text-soy/60 leading-relaxed">
                這是一場關於味覺與情感的集體創作。<br />
                你的故事將化作米粒，填滿這碗跨越時空的滷肉飯。
              </p>
              <div className="pt-4">
                <p className="text-amber font-medium text-sm">
                  ✨ 每收集 1,000 則故事，透過合作醫院捐出 100 瓶給弱勢族群及行動不便的長者
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowIntro(false)}
              className="bg-soy text-paper px-12 py-4 rounded-full font-serif text-xl hover:bg-soy/90 transition-all"
            >
              進入長廊
            </button>
          </motion.div>
        </div>
      )}

      <StoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddStory}
      />
    </div>
  );
};

export default MemoryGallery;
