'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Navbar() {
  const [user] = useState({
    username: 'Guest User',
    level: 1,
    xp: 0,
    isLoggedIn: false
  });

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl">🇯🇵</div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">日本語学習</h1>
                <p className="text-xs text-gray-500">Japanese Learning</p>
              </div>
            </Link>
          </div>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/learn" 
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Learn
            </Link>
            <Link 
              href="/practice" 
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Practice
            </Link>
            <Link 
              href="/chat" 
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              AI Chat
            </Link>
            <Link 
              href="/profile" 
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Profile
            </Link>
          </div>

          {/* Right Side - User Info and Auth */}
          <div className="flex items-center space-x-4">
            {user.isLoggedIn ? (
              <>
                {/* User Stats */}
                <div className="hidden sm:flex items-center space-x-3">
                  <Badge variant="outline" className="bg-blue-50">
                    Level {user.level}
                  </Badge>
                  <Badge variant="outline" className="bg-green-50">
                    {user.xp} XP
                  </Badge>
                </div>
                
                {/* User Menu */}
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-blue-400 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    {user.username.charAt(0).toUpperCase()}
                  </div>
                  <span className="hidden sm:block text-sm font-medium text-gray-700">
                    {user.username}
                  </span>
                </div>
              </>
            ) : (
              <>
                <Link href="/auth/login">
                  <Button variant="ghost" className="text-gray-700">
                    Login
                  </Button>
                </Link>
                <Link href="/auth/signup">
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}