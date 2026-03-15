import React from "react";
import { motion } from "motion/react";
import { Heart, MessageSquare, Share2 } from "lucide-react";
import confetti from "canvas-confetti";
import { Story } from "../../types/flavor-code";

interface Props {
  stories: Story[];
  onVote: (id: string, type: "egg" | "radish" | "coriander") => void;
}

const StoryFeed: React.FC<Props> = ({ stories, onVote }) => {
  const handleVote = (id: string, type: "egg" | "radish" | "coriander", e: React.MouseEvent) => {
    const colors = {
      egg: ["#F59E0B", "#FCD34D"],
      radish: ["#FDE68A", "#FFFBEB"],
      coriander: ["#10B981", "#34D399"],
    };

    confetti({
      particleCount: 40,
      spread: 60,
      origin: { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight },
      colors: colors[type],
    });

    onVote(id, type);
  };

  return (
    <div className="space-y-6">
      {stories.map((story, index) => (
        <motion.div
          key={story.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white/50 backdrop-blur-sm border border-soy/10 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="text-xs font-mono text-soy/40 block mb-1">
                #{story.id.slice(0, 6)}
              </span>
              <h4 className="font-serif text-lg text-soy">{story.nickname}</h4>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
              story.emotion === "甜" ? "bg-pink-100 text-pink-600" :
              story.emotion === "鹹" ? "bg-blue-100 text-blue-600" :
              story.emotion === "苦" ? "bg-gray-100 text-gray-600" :
              "bg-red-100 text-red-600"
            }`}>
              {story.emotion}
            </span>
          </div>

          <p className="text-soy/80 leading-relaxed mb-6 font-serif italic">
            「{story.content}」
          </p>

          <div className="flex flex-wrap gap-4 items-center pt-4 border-t border-soy/5">
            <button
              onClick={(e) => handleVote(story.id, "egg", e)}
              className="flex items-center gap-2 text-xs hover:text-amber transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-amber/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                🥚
              </div>
              <div className="flex flex-col items-start">
                <span className="font-medium">加顆滷蛋 ({story.votes.egg})</span>
                <span className="text-[10px] text-soy/40">這故事很感人</span>
              </div>
            </button>

            <button
              onClick={(e) => handleVote(story.id, "radish", e)}
              className="flex items-center gap-2 text-xs hover:text-yellow-600 transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                🥕
              </div>
              <div className="flex flex-col items-start">
                <span className="font-medium">配點醃蘿蔔 ({story.votes.radish})</span>
                <span className="text-[10px] text-soy/40">這故事很清爽</span>
              </div>
            </button>

            <button
              onClick={(e) => handleVote(story.id, "coriander", e)}
              className="flex items-center gap-2 text-xs hover:text-emerald-600 transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                🌿
              </div>
              <div className="flex flex-col items-start">
                <span className="font-medium">灑點香菜 ({story.votes.coriander})</span>
                <span className="text-[10px] text-soy/40">這故事很奇葩</span>
              </div>
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default StoryFeed;
