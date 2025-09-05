'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface SidebarItem {
  label: string;
  href: string;
  icon: string;
  progress?: number;
  isNew?: boolean;
}

export function Sidebar() {
  const pathname = usePathname();

  const learningItems: SidebarItem[] = [
    { label: 'Dashboard', href: '/', icon: '🏠' },
    { label: 'Hiragana', href: '/learn/hiragana', icon: 'あ', progress: 68 },
    { label: 'Katakana', href: '/learn/katakana', icon: 'ア', progress: 34 },
    { label: 'Kanji', href: '/learn/kanji', icon: '漢', progress: 12 },
    { label: 'Vocabulary', href: '/learn/vocabulary', icon: '📚', progress: 23 },
    { label: 'Grammar', href: '/learn/grammar', icon: '📝', progress: 15 },
  ];

  const practiceItems: SidebarItem[] = [
    { label: 'Flashcards', href: '/practice/flashcards', icon: '🃏' },
    { label: 'Quiz', href: '/practice/quiz', icon: '✏️' },
    { label: 'Writing Practice', href: '/practice/writing', icon: '✍️', isNew: true },
  ];

  const aiItems: SidebarItem[] = [
    { label: 'Chat Partner', href: '/chat', icon: '💬', isNew: true },
    { label: 'Translator', href: '/translate', icon: '🔤' },
  ];

  const profileItems: SidebarItem[] = [
    { label: 'My Progress', href: '/profile', icon: '📊' },
    { label: 'Achievements', href: '/achievements', icon: '🏆' },
    { label: 'Settings', href: '/settings', icon: '⚙️' },
  ];

  function SidebarSection({ 
    title, 
    items 
  }: { 
    title: string; 
    items: SidebarItem[] 
  }) {
    return (
      <div className="mb-8">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
          {title}
        </h3>
        <div className="space-y-1">
          {items.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors
                  ${isActive 
                    ? 'bg-red-100 text-red-900 border-r-2 border-red-600' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }
                `}
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                <span className="flex-1">{item.label}</span>
                
                {item.isNew && (
                  <Badge variant="secondary" className="ml-2 text-xs bg-green-100 text-green-800">
                    New
                  </Badge>
                )}
                
                {typeof item.progress === 'number' && (
                  <Badge variant="outline" className="ml-2 text-xs">
                    {item.progress}%
                  </Badge>
                )}
              </Link>
            );
          })}
        </div>
        
        {/* Progress bars for learning items */}
        {title === 'Learning' && (
          <div className="mt-4 space-y-2">
            {items.filter(item => typeof item.progress === 'number').map((item) => (
              <div key={item.href} className="px-3">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                  <span>{item.label}</span>
                  <span>{item.progress}%</span>
                </div>
                <Progress value={item.progress} className="h-1" />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="fixed left-0 top-16 h-full w-64 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="p-4">
        {/* Daily Streak */}
        <div className="mb-6 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">Daily Streak</p>
              <p className="text-2xl font-bold text-orange-600">7 🔥</p>
            </div>
            <div className="text-3xl">📅</div>
          </div>
          <div className="mt-2">
            <div className="flex justify-between text-xs text-gray-600 mb-1">
              <span>Today's Goal</span>
              <span>45%</span>
            </div>
            <Progress value={45} className="h-1" />
          </div>
        </div>

        {/* Navigation Sections */}
        <SidebarSection title="Learning" items={learningItems} />
        <SidebarSection title="Practice" items={practiceItems} />
        <SidebarSection title="AI Tools" items={aiItems} />
        <SidebarSection title="Profile" items={profileItems} />
      </div>
    </div>
  );
}