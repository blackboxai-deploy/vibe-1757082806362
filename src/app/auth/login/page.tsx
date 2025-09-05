'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      alert('Login functionality will be implemented in a future update!');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-blue-50 p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center">
          <div className="text-4xl mb-2">🇯🇵</div>
          <h1 className="text-2xl font-bold text-gray-900">日本語学習</h1>
          <p className="text-gray-600 mt-2">Welcome back to your Japanese learning journey</p>
        </div>

        {/* Login Form */}
        <Card>
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Enter your credentials to access your learning dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your-email@example.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </Button>
            </form>

            <div className="mt-4 text-center">
              <Link 
                href="/auth/signup" 
                className="text-sm text-blue-600 hover:text-blue-500"
              >
                Do not have an account? Sign up
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Demo Notice */}
        <Card className="bg-blue-50">
          <CardContent className="pt-6">
            <div className="text-center text-sm text-blue-800">
              <strong>Demo Notice:</strong> This is a demo application. 
              You can explore all features without logging in by returning to the{' '}
              <Link href="/" className="underline font-semibold">
                homepage
              </Link>
              .
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}