// Core types for the Japanese Learning App
export interface User {
  id: string;
  username: string;
  email: string;
  level: number;
  totalXP: number;
  streak: number;
  avatar?: string;
  createdAt: Date;
}

export interface Character {
  id: string;
  character: string;
  romanji: string;
  type: 'hiragana' | 'katakana' | 'kanji';
  strokeOrder?: string[];
  meaning?: string;
  readings?: {
    kunyomi?: string[];
    onyomi?: string[];
  };
  examples?: VocabularyWord[];
}

export interface VocabularyWord {
  id: string;
  japanese: string;
  hiragana: string;
  romanji: string;
  english: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  audio?: string;
}

export interface GrammarPoint {
  id: string;
  title: string;
  structure: string;
  meaning: string;
  examples: {
    japanese: string;
    english: string;
    romanji: string;
  }[];
  difficulty: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
}

export interface StudySession {
  id: string;
  userId: string;
  type: 'vocabulary' | 'grammar' | 'kanji' | 'conversation';
  itemsStudied: string[];
  correctAnswers: number;
  totalQuestions: number;
  xpEarned: number;
  duration: number;
  createdAt: Date;
}

export interface UserProgress {
  userId: string;
  characterProgress: {
    [characterId: string]: {
      level: number;
      lastReviewed: Date;
      nextReview: Date;
      correctStreak: number;
    };
  };
  vocabularyProgress: {
    [wordId: string]: {
      level: number;
      lastReviewed: Date;
      nextReview: Date;
      correctStreak: number;
    };
  };
  grammarProgress: {
    [grammarId: string]: {
      level: number;
      lastReviewed: Date;
      nextReview: Date;
      correctStreak: number;
    };
  };
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  xpReward: number;
  condition: {
    type: 'streak' | 'total_xp' | 'characters_learned' | 'vocabulary_size';
    target: number;
  };
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  japanese?: string;
  romanji?: string;
}