import React from 'react'
import { Bot } from 'lucide-react'
type BubblesAIProps = {
    text: string

}
const BubblesAI = ({text} : BubblesAIProps) => {
  return (
    <div className="flex items-start gap-4 justify-end">
            <div className="bg-primary rounded-lg p-3 max-w-[80%] text-primary-foreground">
              <p className="text-sm">
                {text}
              </p>
            </div>
            <Bot />
          </div>
  )
}

export default BubblesAI