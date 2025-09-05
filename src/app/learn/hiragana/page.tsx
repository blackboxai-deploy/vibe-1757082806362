'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { hiraganaData } from '@/lib/japanese-data';

export default function HiraganaPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showRomanji, setShowRomanji] = useState(false);
  const [learnedCharacters, setLearnedCharacters] = useState(new Set<string>());
  
  const currentCharacter = hiraganaData[currentIndex];
  const progress = Math.round((learnedCharacters.size / hiraganaData.length) * 100);

  const handleNext = () => {
    if (currentIndex < hiraganaData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowRomanji(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowRomanji(false);
    }
  };

  const handleMarkLearned = () => {
    setLearnedCharacters(prev => new Set([...prev, currentCharacter.id]));
  };

  const handleRevealRomanji = () => {
    setShowRomanji(true);
  };

  const handleCharacterSelect = (index: number) => {
    setCurrentIndex(index);
    setShowRomanji(false);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          ひらがな (Hiragana) Learning
        </h1>
        <p className="text-lg text-gray-600">Master the basic Japanese syllabary</p>
        <div className="mt-4 max-w-md mx-auto">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span>{learnedCharacters.size}/{hiraganaData.length} characters</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Character Display */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-sm text-gray-600">
                Character {currentIndex + 1} of {hiraganaData.length}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Large Character Display */}
              <div className="py-12">
                <div className="text-8xl md:text-9xl font-bold text-red-600 mb-4">
                  {currentCharacter.character}
                </div>
                {showRomanji ? (
                  <div className="text-3xl font-semibold text-gray-700">
                    {currentCharacter.romanji}
                  </div>
                ) : (
                  <Button 
                    variant="outline" 
                    onClick={handleRevealRomanji}
                    className="text-lg px-8 py-3"
                  >
                    Reveal Romanji
                  </Button>
                )}
              </div>

              {/* Controls */}
              <div className="flex justify-center items-center space-x-4">
                <Button 
                  variant="outline" 
                  onClick={handlePrevious}
                  disabled={currentIndex === 0}
                >
                  Previous
                </Button>
                
                {!learnedCharacters.has(currentCharacter.id) && (
                  <Button 
                    onClick={handleMarkLearned}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Mark as Learned ✓
                  </Button>
                )}
                
                {learnedCharacters.has(currentCharacter.id) && (
                  <Badge variant="secondary" className="bg-green-100 text-green-800 px-4 py-2">
                    Learned ✓
                  </Badge>
                )}
                
                <Button 
                  variant="outline" 
                  onClick={handleNext}
                  disabled={currentIndex === hiraganaData.length - 1}
                >
                  Next
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Study Tips */}
          <Card>
            <CardHeader>
              <CardTitle>Study Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">🖊️ Writing Practice</h4>
                  <p className="text-blue-800">Practice writing each character multiple times to build muscle memory.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">🔄 Spaced Repetition</h4>
                  <p className="text-green-800">Review characters at increasing intervals for better retention.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">🎵 Mnemonics</h4>
                  <p className="text-purple-800">Create memorable associations or stories for each character.</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">📱 Daily Practice</h4>
                  <p className="text-orange-800">Consistent daily practice is more effective than long study sessions.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Character Grid */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Hiragana Chart</CardTitle>
              <CardDescription>Click any character to study it</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-5 gap-2">
                {hiraganaData.map((char, index) => (
                  <button
                    key={char.id}
                    onClick={() => handleCharacterSelect(index)}
                    className={`
                      aspect-square p-2 rounded-lg border-2 transition-all
                      ${index === currentIndex 
                        ? 'border-red-600 bg-red-50' 
                        : 'border-gray-200 hover:border-gray-300'
                      }
                      ${learnedCharacters.has(char.id) 
                        ? 'bg-green-100 border-green-400' 
                        : ''
                      }
                    `}
                  >
                    <div className="text-lg font-semibold">{char.character}</div>
                    <div className="text-xs text-gray-600">{char.romanji}</div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" variant="outline">
                📚 Practice Flashcards
              </Button>
              <Button className="w-full" variant="outline">
                ✏️ Writing Quiz
              </Button>
              <Button className="w-full" variant="outline">
                🎯 Recognition Test
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}