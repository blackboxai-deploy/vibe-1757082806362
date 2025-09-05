'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { hiraganaData, vocabularyData } from '@/lib/japanese-data';

export default function FlashcardsPage() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [sessionStats, setSessionStats] = useState({
    correct: 0,
    incorrect: 0,
    total: 0
  });
  const [studyMode, setStudyMode] = useState<'hiragana' | 'vocabulary'>('hiragana');
  const [sessionStarted, setSessionStarted] = useState(false);

  const currentDataSet = studyMode === 'hiragana' ? hiraganaData : vocabularyData;
  const currentCard = currentDataSet[currentCardIndex];
  
  const progress = sessionStats.total > 0 ? Math.round((currentCardIndex / currentDataSet.length) * 100) : 0;
  const accuracy = sessionStats.total > 0 ? Math.round((sessionStats.correct / sessionStats.total) * 100) : 0;

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleAnswer = (isCorrect: boolean) => {
    setSessionStats(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      incorrect: prev.incorrect + (isCorrect ? 0 : 1),
      total: prev.total + 1
    }));

    // Move to next card
    setTimeout(() => {
      if (currentCardIndex < currentDataSet.length - 1) {
        setCurrentCardIndex(prev => prev + 1);
        setIsFlipped(false);
      } else {
        // Session completed
        alert(`Session completed! Accuracy: ${Math.round(((sessionStats.correct + (isCorrect ? 1 : 0)) / (sessionStats.total + 1)) * 100)}%`);
      }
    }, 500);
  };

  const startNewSession = () => {
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setSessionStats({ correct: 0, incorrect: 0, total: 0 });
    setSessionStarted(true);
  };

  const resetSession = () => {
    setSessionStarted(false);
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setSessionStats({ correct: 0, incorrect: 0, total: 0 });
  };

  if (!sessionStarted) {
    return (
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            フラッシュカード (Flashcards)
          </h1>
          <p className="text-lg text-gray-600">Practice with spaced repetition flashcards</p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Choose Study Mode</CardTitle>
              <CardDescription>Select what you want to practice</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button
                  variant={studyMode === 'hiragana' ? 'default' : 'outline'}
                  className="h-20 flex-col space-y-2"
                  onClick={() => setStudyMode('hiragana')}
                >
                  <span className="text-2xl">あ</span>
                  <span>Hiragana ({hiraganaData.length} cards)</span>
                </Button>
                <Button
                  variant={studyMode === 'vocabulary' ? 'default' : 'outline'}
                  className="h-20 flex-col space-y-2"
                  onClick={() => setStudyMode('vocabulary')}
                >
                  <span className="text-2xl">📚</span>
                  <span>Vocabulary ({vocabularyData.length} cards)</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Session Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">
                  {studyMode === 'hiragana' ? 'Hiragana Practice' : 'Vocabulary Practice'}
                </h4>
                <p className="text-blue-800 text-sm">
                  {studyMode === 'hiragana' 
                    ? 'Practice recognizing hiragana characters and their romanization'
                    : 'Learn vocabulary words with their meanings and pronunciation'
                  }
                </p>
              </div>
              
              <Button onClick={startNewSession} className="w-full h-12 text-lg">
                Start Flashcard Session
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Flashcard Practice
        </h1>
        <div className="flex justify-center items-center space-x-6 text-sm">
          <Badge variant="outline">
            {currentCardIndex + 1} / {currentDataSet.length}
          </Badge>
          <Badge variant="outline" className="bg-green-50">
            {sessionStats.correct} correct
          </Badge>
          <Badge variant="outline" className="bg-red-50">
            {sessionStats.incorrect} incorrect
          </Badge>
          <Badge variant="outline" className="bg-blue-50">
            {accuracy}% accuracy
          </Badge>
        </div>
      </div>

      {/* Progress */}
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Session Progress</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Flashcard */}
      <div className="max-w-lg mx-auto">
        <div 
          className={`relative h-80 cursor-pointer transition-transform duration-500 ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
          onClick={handleCardFlip}
        >
          <Card className="absolute inset-0 backface-hidden">
            <CardContent className="h-full flex items-center justify-center text-center p-8">
              {studyMode === 'hiragana' ? (
                <div className="space-y-4">
                  <div className="text-8xl font-bold text-red-600">
                    {'character' in currentCard ? currentCard.character : ''}
                  </div>
                  <p className="text-gray-600">Tap to see romanization</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="text-4xl font-bold text-red-600">
                    {'japanese' in currentCard ? currentCard.japanese : ''}
                  </div>
                  <div className="text-xl text-gray-600">
                    {'hiragana' in currentCard ? currentCard.hiragana : ''}
                  </div>
                  <p className="text-gray-600">Tap to see meaning</p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="absolute inset-0 backface-hidden rotate-y-180">
            <CardContent className="h-full flex items-center justify-center text-center p-8">
              {studyMode === 'hiragana' ? (
                <div className="space-y-4">
                  <div className="text-6xl font-bold text-blue-600">
                    {currentCard.romanji}
                  </div>
                  <p className="text-gray-600">Did you get it right?</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="text-4xl font-bold text-blue-600">
                    {'english' in currentCard ? currentCard.english : ''}
                  </div>
                  <div className="text-xl text-gray-600">
                    /{currentCard.romanji}/
                  </div>
                  <p className="text-gray-600">Did you get it right?</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Answer Buttons */}
        {isFlipped && (
          <div className="flex space-x-4 mt-6">
            <Button 
              variant="outline" 
              className="flex-1 h-12 border-red-200 text-red-700 hover:bg-red-50"
              onClick={() => handleAnswer(false)}
            >
              ❌ Incorrect
            </Button>
            <Button 
              className="flex-1 h-12 bg-green-600 hover:bg-green-700"
              onClick={() => handleAnswer(true)}
            >
              ✅ Correct
            </Button>
          </div>
        )}

        {/* Session Controls */}
        <div className="flex justify-center mt-6">
          <Button variant="outline" onClick={resetSession}>
            End Session
          </Button>
        </div>
      </div>
    </div>
  );
}