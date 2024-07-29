// app/chat.tsx

'use client'

import { useChat } from 'ai/react';
import { ArrowUpIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { BubblesUser } from './BubblesUser';
import BubblesAI from './BubblesAI';

export default function Chat({FormData} : any) {
  
    const {first_name , last_name , job_role , position , company , cv} = FormData;
    const initialText = `Hello! ${first_name} ${last_name} My name is Ben Your AI Interviewer. I am here to help you with your interview for the role of ${job_role}. Before we start can you please tell me more about your experience and why you are interested in the role of ${job_role}.`
   const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat', 
    initialMessages: [{id: Date.now().toString() , role: 'assistant', content: initialText }]
  })

  return (
    <div>
        <div className='w-[60vw] m-auto py-12'>
        {messages.map((m, index) => (
          <div key={index} className='py-5'>
            {m.role === 'user' ? <BubblesUser text={m.content}/> : <BubblesAI text={m.content} />}
          </div>
        ))}
        </div>   
      <form onSubmit={handleSubmit} className='fixed w-[60%] left-1/2 -translate-x-1/2 bottom-4'>
      <div className="bg-card p-4">
        <div className="relative">
          <Textarea
            placeholder="Message ChatGPT..."
            name="message"
            id="message"
            rows={1}
            value={input} 
            onChange={handleInputChange}
            className="min-h-[48px] max-h-[30vh] rounded-[10px] resize-none p-4 border border-neutral-400 shadow-sm pr-16"
          />
          <Button type="submit" size="icon" className="absolute w-8 h-8 top-3 right-3">
            <ArrowUpIcon className="w-4 h-4" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </div>
      </form>
    </div>
  )
}
