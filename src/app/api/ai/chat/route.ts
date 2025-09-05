import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages, systemPrompt } = body;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid messages format' }, { status: 400 });
    }

    // Prepare messages for OpenRouter API
    const formattedMessages = [
      {
        role: 'system',
        content: systemPrompt || `You are a friendly Japanese conversation partner helping students practice Japanese. 

Guidelines:
- Always respond in Japanese first, then provide English translation in parentheses
- Use appropriate level language based on the user's proficiency  
- Correct mistakes gently and provide explanations
- Encourage natural conversation flow
- Include cultural context when relevant
- Use romanji when helpful for beginners
- Be patient and supportive

Your role is to help users practice conversational Japanese in a natural, encouraging way.`
      },
      ...messages.map((msg: any) => ({
        role: msg.role,
        content: msg.content
      }))
    ];

    const response = await fetch('https://oi-server.onrender.com/chat/completions', {
      method: 'POST',
      headers: {
        'customerId': 'cus_StZdQohlTIeIFA',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer xxx'
      },
      body: JSON.stringify({
        model: 'openrouter/anthropic/claude-sonnet-4',
        messages: formattedMessages,
        max_tokens: 1000,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenRouter API error:', errorText);
      return NextResponse.json({ 
        error: 'Failed to get AI response',
        details: errorText 
      }, { status: response.status });
    }

    const data = await response.json();
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      console.error('Unexpected API response format:', data);
      return NextResponse.json({ error: 'Invalid response format' }, { status: 500 });
    }

    return NextResponse.json({
      content: data.choices[0].message.content,
      model: data.model,
      usage: data.usage
    });

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}