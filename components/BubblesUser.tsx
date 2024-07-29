import { User } from 'lucide-react'
import React from 'react'

type BubblesUserProps = {
    text: string
    
}

export const BubblesUser = ({text} : BubblesUserProps) => {
  return (
    <div className="flex items-start gap-4">
            <User/>
            <div className="rounded-lg p-3 max-w-[80%] bg-secondary">
              <p className="text-sm">{text}</p>
            </div>
          </div>
  )
}
