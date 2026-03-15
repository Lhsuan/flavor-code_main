export enum Emotion {
  SWEET = "甜",
  SALTY = "鹹",
  BITTER = "苦",
  SPICY = "辣",
}

export interface Story {
  id: string;
  nickname: string;
  content: string;
  emotion: Emotion;
  timestamp: number;
  votes: {
    egg: number;
    radish: number;
    coriander: number;
  };
}
