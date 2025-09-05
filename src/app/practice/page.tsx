'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Link from 'next/link';

export default function PracticePage() {
  const practiceTypes = [
    {
      id: 'flashcards',
      title: 'Flashcards',
      description: 'Review characters and vocabulary with spaced repetition',
      icon: '🃏',
      difficulty: 'All Levels',
      duration: '5-15 min',
      href: '/practice/flashcards',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'quiz',
      title: 'Knowledge Quiz',
      description: 'Test your understanding with multiple choice questions',
      icon: '✏️',
      difficulty: 'Beginner-Intermediate',
      duration: '10-20 min',
      href: '/practice/quiz',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'writing',
      title: 'Writing Practice',
      description: 'Practice writing Japanese characters with stroke order',
      icon: '✍️',
      difficulty: 'All Levels',
      duration: '15-30 min',
      href: '/practice/writing',
      color: 'from-purple-500 to-violet-500'
    },
    {
      id: 'listening',
      title: 'Listening Practice',
      description: 'Improve pronunciation recognition and listening skills',
      icon: '👂',
      difficulty: 'Intermediate-Advanced',
      duration: '10-25 min',
      href: '/practice/listening',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const todayStats = {
    studied: 47,
    correct: 38,
    accuracy: 81,
    streak: 12
  };

  const upcomingReviews = [
    { type: 'Hiragana', count: 15, dueIn: '2 hours' },
    { type: 'Vocabulary', count: 28, dueIn: '4 hours' },
    { type: 'Kanji', count: 8, dueIn: '1 day' },
    { type: 'Grammar', count: 12, dueIn: '2 days' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          練習 (れんしゅう) - Practice Hub
        </h1>
        <p className="text-lg text-gray-600">Strengthen your Japanese skills with focused practice</p>
      </div>

      {/* Today's Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="text-center pb-2">
            <div className="text-2xl font-bold text-blue-600">{todayStats.studied}</div>
            <CardTitle className="text-sm">Items Studied</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="text-center pb-2">
            <div className="text-2xl font-bold text-green-600">{todayStats.correct}</div>
            <CardTitle className="text-sm">Correct Answers</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="text-center pb-2">
            <div className="text-2xl font-bold text-purple-600">{todayStats.accuracy}%</div>
            <CardTitle className="text-sm">Accuracy</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="text-center pb-2">
            <div className="text-2xl font-bold text-orange-600">{todayStats.streak}</div>
            <CardTitle className="text-sm">Day Streak 🔥</CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Practice Types */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Practice Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {practiceTypes.map((practice) => (
            <Card key={practice.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`h-2 w-full bg-gradient-to-r ${practice.color} rounded-full mb-4`} />
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-3">
                      <span className="text-2xl">{practice.icon}</span>
                      {practice.title}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {practice.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <Badge variant="outline">{practice.difficulty}</Badge>
                    <span className="text-gray-500">{practice.duration}</span>
                  </div>
                </div>
                <Link href={practice.href}>
                  <Button className="w-full">
                    Start Practice Session
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Upcoming Reviews */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Reviews</CardTitle>
            <CardDescription>Items scheduled for review based on spaced repetition</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingReviews.map((review, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">{review.type}</div>
                  <div className="text-sm text-gray-600">{review.count} items</div>
                </div>
                <Badge variant="outline" className="bg-blue-50">
                  Due in {review.dueIn}
                </Badge>
              </div>
            ))}
            <Button className="w-full mt-4" variant="outline">
              Review All Due Items
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Weekly Progress</CardTitle>
            <CardDescription>Your learning progress this week</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Hiragana Mastery</span>
                <span className="text-sm text-gray-600">68%</span>
              </div>
              <Progress value={68} className="h-2" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Vocabulary Growth</span>
                <span className="text-sm text-gray-600">43%</span>
              </div>
              <Progress value={43} className="h-2" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Kanji Recognition</span>
                <span className="text-sm text-gray-600">22%</span>
              </div>
              <Progress value={22} className="h-2" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Grammar Understanding</span>
                <span className="text-sm text-gray-600">35%</span>
              </div>
              <Progress value={35} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Study Tips */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            💡 Practice Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Consistent Daily Practice:</strong> Even 10-15 minutes daily is more effective than long, infrequent sessions.
            </div>
            <div>
              <strong>Focus on Weak Areas:</strong> Spend more time on characters and concepts you struggle with.
            </div>
            <div>
              <strong>Use Multiple Senses:</strong> Combine visual, auditory, and kinesthetic learning for better retention.
            </div>
            <div>
              <strong>Review Regularly:</strong> Follow the spaced repetition schedule for optimal memory retention.
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}