'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function LearnPage() {
  const learningPaths = [
    {
      id: 'beginner',
      title: 'Beginner Path',
      description: 'Start from the basics with hiragana and essential vocabulary',
      modules: [
        { name: 'Hiragana', progress: 68, isActive: true },
        { name: 'Basic Vocabulary', progress: 23, isActive: false },
        { name: 'Numbers', progress: 0, isActive: false },
        { name: 'Greetings', progress: 45, isActive: false }
      ],
      color: 'from-green-400 to-blue-500'
    },
    {
      id: 'intermediate',
      title: 'Intermediate Path',
      description: 'Build on your foundation with katakana and more complex grammar',
      modules: [
        { name: 'Katakana', progress: 34, isActive: true },
        { name: 'Kanji Basics', progress: 12, isActive: false },
        { name: 'Grammar Patterns', progress: 15, isActive: false },
        { name: 'Conversations', progress: 8, isActive: false }
      ],
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 'advanced',
      title: 'Advanced Path',
      description: 'Master complex kanji, advanced grammar, and fluent conversation',
      modules: [
        { name: 'Advanced Kanji', progress: 5, isActive: false },
        { name: 'Keigo (Honorifics)', progress: 0, isActive: false },
        { name: 'Business Japanese', progress: 0, isActive: false },
        { name: 'Literature', progress: 0, isActive: false }
      ],
      color: 'from-red-400 to-yellow-500'
    }
  ];

  const quickLessons = [
    {
      title: 'Character of the Day',
      content: '今 (ima) - now',
      description: 'Learn this essential time expression',
      icon: '📅',
      href: '/learn/kanji/今'
    },
    {
      title: 'Grammar Point',
      content: 'です/だ - Copula',
      description: 'Master the basic "to be" forms',
      icon: '📝',
      href: '/learn/grammar/desu'
    },
    {
      title: 'Daily Vocabulary',
      content: '食べ物 (tabemono)',
      description: 'Food-related vocabulary',
      icon: '🍱',
      href: '/learn/vocabulary/food'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          学習 (がくしゅう) - Learning Hub
        </h1>
        <p className="text-lg text-gray-600">Choose your learning path and master Japanese</p>
      </div>

      {/* Learning Paths */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Learning Paths</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {learningPaths.map((path) => (
            <Card key={path.id} className="overflow-hidden">
              <CardHeader>
                <div className={`h-2 w-full bg-gradient-to-r ${path.color} rounded-full mb-4`} />
                <CardTitle>{path.title}</CardTitle>
                <CardDescription>{path.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {path.modules.map((module, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{module.name}</span>
                      <div className="flex items-center space-x-2">
                        <Badge variant={module.isActive ? 'default' : 'secondary'}>
                          {module.progress}%
                        </Badge>
                        {module.isActive && <span className="text-xs text-green-600">●</span>}
                      </div>
                    </div>
                    <Progress value={module.progress} className="h-1" />
                  </div>
                ))}
                <Button className="w-full mt-4">
                  Continue Path
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Lessons */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Quick Lessons</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickLessons.map((lesson, index) => (
            <Link key={index} href={lesson.href}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{lesson.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{lesson.title}</h3>
                      <p className="text-lg font-bold text-red-600 mb-2">{lesson.content}</p>
                      <p className="text-sm text-gray-600">{lesson.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Study Statistics */}
      <Card>
        <CardHeader>
          <CardTitle>This Week's Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">47</div>
              <div className="text-sm text-gray-600">Characters Learned</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">156</div>
              <div className="text-sm text-gray-600">Vocabulary Words</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">23</div>
              <div className="text-sm text-gray-600">Grammar Points</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">5.2h</div>
              <div className="text-sm text-gray-600">Study Time</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}