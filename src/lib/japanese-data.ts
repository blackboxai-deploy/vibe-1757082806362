// Japanese learning data
import { Character, VocabularyWord, GrammarPoint } from './types';

export const hiraganaData: Character[] = [
  { id: 'h_a', character: 'あ', romanji: 'a', type: 'hiragana' },
  { id: 'h_i', character: 'い', romanji: 'i', type: 'hiragana' },
  { id: 'h_u', character: 'う', romanji: 'u', type: 'hiragana' },
  { id: 'h_e', character: 'え', romanji: 'e', type: 'hiragana' },
  { id: 'h_o', character: 'お', romanji: 'o', type: 'hiragana' },
  { id: 'h_ka', character: 'か', romanji: 'ka', type: 'hiragana' },
  { id: 'h_ki', character: 'き', romanji: 'ki', type: 'hiragana' },
  { id: 'h_ku', character: 'く', romanji: 'ku', type: 'hiragana' },
  { id: 'h_ke', character: 'け', romanji: 'ke', type: 'hiragana' },
  { id: 'h_ko', character: 'こ', romanji: 'ko', type: 'hiragana' },
  { id: 'h_sa', character: 'さ', romanji: 'sa', type: 'hiragana' },
  { id: 'h_shi', character: 'し', romanji: 'shi', type: 'hiragana' },
  { id: 'h_su', character: 'す', romanji: 'su', type: 'hiragana' },
  { id: 'h_se', character: 'せ', romanji: 'se', type: 'hiragana' },
  { id: 'h_so', character: 'そ', romanji: 'so', type: 'hiragana' },
  { id: 'h_ta', character: 'た', romanji: 'ta', type: 'hiragana' },
  { id: 'h_chi', character: 'ち', romanji: 'chi', type: 'hiragana' },
  { id: 'h_tsu', character: 'つ', romanji: 'tsu', type: 'hiragana' },
  { id: 'h_te', character: 'て', romanji: 'te', type: 'hiragana' },
  { id: 'h_to', character: 'と', romanji: 'to', type: 'hiragana' },
  { id: 'h_na', character: 'な', romanji: 'na', type: 'hiragana' },
  { id: 'h_ni', character: 'に', romanji: 'ni', type: 'hiragana' },
  { id: 'h_nu', character: 'ぬ', romanji: 'nu', type: 'hiragana' },
  { id: 'h_ne', character: 'ね', romanji: 'ne', type: 'hiragana' },
  { id: 'h_no', character: 'の', romanji: 'no', type: 'hiragana' },
];

export const katakanaData: Character[] = [
  { id: 'k_a', character: 'ア', romanji: 'a', type: 'katakana' },
  { id: 'k_i', character: 'イ', romanji: 'i', type: 'katakana' },
  { id: 'k_u', character: 'ウ', romanji: 'u', type: 'katakana' },
  { id: 'k_e', character: 'エ', romanji: 'e', type: 'katakana' },
  { id: 'k_o', character: 'オ', romanji: 'o', type: 'katakana' },
  { id: 'k_ka', character: 'カ', romanji: 'ka', type: 'katakana' },
  { id: 'k_ki', character: 'キ', romanji: 'ki', type: 'katakana' },
  { id: 'k_ku', character: 'ク', romanji: 'ku', type: 'katakana' },
  { id: 'k_ke', character: 'ケ', romanji: 'ke', type: 'katakana' },
  { id: 'k_ko', character: 'コ', romanji: 'ko', type: 'katakana' },
];

export const basicKanjiData: Character[] = [
  {
    id: 'kanji_hito',
    character: '人',
    romanji: 'hito',
    type: 'kanji',
    meaning: 'person, people',
    readings: {
      kunyomi: ['hito'],
      onyomi: ['jin', 'nin']
    }
  },
  {
    id: 'kanji_hon',
    character: '本',
    romanji: 'hon',
    type: 'kanji',
    meaning: 'book, origin',
    readings: {
      kunyomi: ['moto'],
      onyomi: ['hon']
    }
  },
  {
    id: 'kanji_nichi',
    character: '日',
    romanji: 'nichi',
    type: 'kanji',
    meaning: 'day, sun',
    readings: {
      kunyomi: ['hi', 'ka'],
      onyomi: ['nichi', 'jitsu']
    }
  }
];

export const vocabularyData: VocabularyWord[] = [
  {
    id: 'vocab_konnichiwa',
    japanese: 'こんにちは',
    hiragana: 'こんにちは',
    romanji: 'konnichiwa',
    english: 'hello',
    category: 'greetings',
    difficulty: 'beginner'
  },
  {
    id: 'vocab_arigatou',
    japanese: 'ありがとう',
    hiragana: 'ありがとう',
    romanji: 'arigatou',
    english: 'thank you',
    category: 'greetings',
    difficulty: 'beginner'
  },
  {
    id: 'vocab_sumimasen',
    japanese: 'すみません',
    hiragana: 'すみません',
    romanji: 'sumimasen',
    english: 'excuse me, sorry',
    category: 'greetings',
    difficulty: 'beginner'
  },
  {
    id: 'vocab_ohayou',
    japanese: 'おはよう',
    hiragana: 'おはよう',
    romanji: 'ohayou',
    english: 'good morning',
    category: 'greetings',
    difficulty: 'beginner'
  }
];

export const grammarData: GrammarPoint[] = [
  {
    id: 'grammar_wa',
    title: 'は (wa) - Topic Particle',
    structure: '[Topic] は [Comment]',
    meaning: 'Marks the topic of a sentence',
    difficulty: 'N5',
    examples: [
      {
        japanese: 'わたしは がくせい です。',
        english: 'I am a student.',
        romanji: 'Watashi wa gakusei desu.'
      },
      {
        japanese: 'これは ほん です。',
        english: 'This is a book.',
        romanji: 'Kore wa hon desu.'
      }
    ]
  },
  {
    id: 'grammar_desu',
    title: 'です (desu) - Polite Copula',
    structure: '[Noun/Adjective] です',
    meaning: 'Polite form of "to be"',
    difficulty: 'N5',
    examples: [
      {
        japanese: 'がくせい です。',
        english: 'I am a student.',
        romanji: 'Gakusei desu.'
      },
      {
        japanese: 'きれい です。',
        english: 'It is beautiful.',
        romanji: 'Kirei desu.'
      }
    ]
  }
];

export const achievementsData = [
  {
    id: 'first_steps',
    title: 'First Steps',
    description: 'Complete your first lesson',
    icon: '🎯',
    xpReward: 50,
    condition: { type: 'characters_learned' as const, target: 1 }
  },
  {
    id: 'hiragana_master',
    title: 'Hiragana Master',
    description: 'Learn all basic hiragana characters',
    icon: '🈴',
    xpReward: 200,
    condition: { type: 'characters_learned' as const, target: 46 }
  },
  {
    id: 'streak_week',
    title: 'Week Warrior',
    description: 'Study for 7 days in a row',
    icon: '🔥',
    xpReward: 150,
    condition: { type: 'streak' as const, target: 7 }
  }
];