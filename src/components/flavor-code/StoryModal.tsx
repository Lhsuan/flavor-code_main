import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send } from "lucide-react";
import { Emotion, Story } from "../../types/flavor-code";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (story: Omit<Story, "id" | "timestamp" | "votes">) => void;
}

const StoryModal: React.FC<Props> = ({ isOpen, onClose, onSubmit }) => {
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [emotion, setEmotion] = useState<Emotion>(Emotion.SALTY);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nickname || !content) return;
    onSubmit({ nickname, content, emotion });
    setNickname("");
    setContent("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-paper border-2 border-soy w-full max-w-md overflow-hidden rounded-2xl shadow-2xl"
          >
            <div className="bg-soy p-4 flex justify-between items-center text-paper">
              <h3 className="font-serif text-xl">添加你的故事米粒</h3>
              <button onClick={onClose} className="hover:rotate-90 transition-transform">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <label className="block text-soy font-serif mb-2">你的稱呼</label>
                <input
                  type="text"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-soy/20 focus:border-soy outline-none py-2 transition-colors"
                  placeholder="例如：巷口的老饕"
                  required
                />
              </div>

              <div>
                <label className="block text-soy font-serif mb-2">這碗飯的滋味</label>
                <div className="grid grid-cols-4 gap-2">
                  {Object.values(Emotion).map((e) => (
                    <button
                      key={e}
                      type="button"
                      onClick={() => setEmotion(e)}
                      className={`py-2 rounded-lg border-2 transition-all ${
                        emotion === e
                          ? "bg-soy text-paper border-soy"
                          : "border-soy/20 text-soy hover:border-soy/50"
                      }`}
                    >
                      {e}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-soy font-serif mb-2">故事內容</label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full bg-transparent border-2 border-soy/10 focus:border-soy outline-none p-3 rounded-xl h-32 resize-none transition-colors"
                  placeholder="寫下你與滷肉飯的那段記憶..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber hover:bg-amber/90 text-soy font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all group"
              >
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                投遞記憶
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default StoryModal;
