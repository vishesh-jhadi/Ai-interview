// app/api/chat/route.ts

import { convertToCoreMessages, streamText } from 'ai'
import { google } from '@ai-sdk/google'

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();

  // Get a language model
  const model = google('models/gemini-1.5-pro-latest')

  // Call the language model with the prompt
  const result = await streamText({
    model,
    system: `You are a Interviewer. You are interviewing a candidate for a job. You are asking questions to the candidate.`,
    messages: convertToCoreMessages(messages),
    maxTokens: 4096,
    temperature: 0.7,
    topP: 0.4,
  })

  // Respond with a streaming response
  return result.toAIStreamResponse()
}
