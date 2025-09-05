'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Link from 'next/link';

export default function Home() {
  const [user] = useState({
    username: 'Guest',
    level: 1,
    totalXP: 0,
    streak: 0
  });

  const [dailyProgress] = useState(45);

  const learningModules = [
    {
      id: 'hiragana',
      title: 'Hiragana',
      description: 'Learn the basic Japanese syllabary',
      progress: 68,
      color: 'bg-pink-500',
      href: '/learn/hiragana'
    },
    {
      id: 'katakana',
      title: 'Katakana',
      description: 'Master foreign word characters',
      progress: 34,
      color: 'bg-blue-500',
      href: '/learn/katakana'
    },
    {
      id: 'kanji',
      title: 'Kanji',
      description: 'Essential Chinese characters',
      progress: 12,
      color: 'bg-purple-500',
      href: '/learn/kanji'
    },
    {
      id: 'vocabulary',
      title: 'Vocabulary',
      description: 'Build your word knowledge',
      progress: 23,
      color: 'bg-green-500',
      href: '/learn/vocabulary'
    }
  ];

  const quickActions = [
    { title: 'Practice Flashcards', href: '/practice/flashcards', icon: '📚' },
    { title: 'Take Quiz', href: '/practice/quiz', icon: '✏️' },
    { title: 'Chat with AI', href: '/chat', icon: '💬' },
    { title: 'View Progress', href: '/profile', icon: '📊' }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          おかえりなさい！ <span className="text-2xl text-gray-600">({user.username})</span>
        </h1>
        <p className="text-lg text-gray-600">Welcome back to your Japanese learning journey</p>
      </div>

      {/* User Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="text-center">
            <div className="text-3xl font-bold text-blue-600">{user.level}</div>
            <CardTitle className="text-sm">Level</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="text-center">
            <div className="text-3xl font-bold text-green-600">{user.totalXP}</div>
            <CardTitle className="text-sm">Total XP</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="text-center">
            <div className="text-3xl font-bold text-orange-600">{user.streak}</div>
            <CardTitle className="text-sm">Day Streak 🔥</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="text-center">
            <div className="text-3xl font-bold text-purple-600">{dailyProgress}%</div>
            <CardTitle className="text-sm">Daily Goal</CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Daily Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Today's Progress</CardTitle>
          <CardDescription>Keep up the great work!</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Daily Learning Goal</span>
              <span>{dailyProgress}% Complete</span>
            </div>
            <Progress value={dailyProgress} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Learning Modules */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Learning Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {learningModules.map((module) => (
            <Card key={module.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {module.title}
                  <Badge variant="secondary">{module.progress}%</Badge>
                </CardTitle>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Progress value={module.progress} className="h-2" />
                  <Link href={module.href}>
                    <Button className="w-full">
                      Continue Learning
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <Link key={index} href={action.href}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2">{action.icon}</div>
                  <div className="font-semibold">{action.title}</div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Fun Japanese Fact */}
      <Card className="bg-gradient-to-r from-red-50 to-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🎌 Daily Japanese Fact
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">
            The Japanese writing system uses three different scripts: Hiragana (ひらがな), 
            Katakana (カタカナ), and Kanji (漢字). Each serves a different purpose in 
            written Japanese!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}