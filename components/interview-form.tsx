"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FormEvent } from "react"


type InterviewFormProps = {
    setFormData: any;
    setIsFormSubmitted: any;

}

export function InterviewForm({setFormData , setIsFormSubmitted} : InterviewFormProps) {
  const handleFormChange = (e :any) => {
    setFormData((prevData : any) => ({...prevData , [e.target.id] : e.target.value}))
  }

  const handleFormSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFormSubmitted(true)
  }

  return (
    <form onSubmit={handleFormSubmit} className="h-screen grid place-content-center">
      <Card className="w-full max-w-md mx-auto">
    <CardHeader className="space-y-2">
      <CardTitle className="text-2xl font-bold">AI Mock Interview</CardTitle>
      <CardDescription>
        Let&apos;s get started with your mock interview. Please provide some basic information.
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="first-name">First Name</Label>
          <Input id="first_name" placeholder="Enter your first name" onChange={handleFormChange} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="last-name">Last Name</Label>
          <Input id="last_name" placeholder="Enter your last name" onChange={handleFormChange} />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="job-role">Job Role</Label>
        <Input id="job_role" placeholder="Enter your job role" onChange={handleFormChange}/>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="position">Position</Label>
        <Input id="position" placeholder="Enter the position" onChange={handleFormChange}/>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="company">Company (optional)</Label>
        <Input id="company" placeholder="Enter the company name" onChange={handleFormChange} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="cv">CV/Resume (optional)</Label>
        <Input id="cv" type="file" onChange={handleFormChange}/>
      </div>
    </CardContent>
    <CardFooter>
      <Button type="submit" className="w-full">Start Mock Interview</Button>
    </CardFooter>
  </Card></form>
    
  )
}
