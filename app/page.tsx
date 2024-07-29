"use client"
import Chat from "@/components/chat"
import { InterviewForm } from "@/components/interview-form";
import { useState } from "react"


export default function Page() {

  const [FormData , setFormData] = useState({});
  const [isFormSubmitted , setIsFormSubmitted] = useState(false);
  return (
  <main>
    {!isFormSubmitted && <InterviewForm setFormData={setFormData} setIsFormSubmitted={setIsFormSubmitted}/>}
   {isFormSubmitted && <Chat FormData={FormData}/>}
  </main>
  
  )
}

