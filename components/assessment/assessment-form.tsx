"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useRouter } from "next/navigation"

const questions = [
  {
    id: 1,
    question: "How quickly can you alert all employees, remote workers, and traveling staff during an emergency?",
    shortLabel: "Alert Speed",
    options: [
      { value: 1, label: "We rely on phone trees or manual calling (30+ minutes)" },
      { value: 2, label: "We use email or group messaging (15-30 minutes)" },
      { value: 3, label: "We have a basic alert system but it's not tested regularly (5-15 minutes)" },
      { value: 4, label: "We have a tested, multi-channel system that reaches everyone in under 60 seconds" },
    ],
  },
  {
    id: 2,
    question: "How do you communicate with remote workers, lone workers, and staff traveling for business?",
    shortLabel: "Distributed Staff",
    options: [
      { value: 1, label: "We don't have a specific process for distributed staff" },
      { value: 2, label: "We use personal mobile numbers or email" },
      { value: 3, label: "We have a system but it's not integrated with our main communication tools" },
      {
        value: 4,
        label: "We have location-aware alerts that reach all staff regardless of where they're working",
      },
    ],
  },
  {
    id: 3,
    question: "Can you confirm who has received and read critical safety messages?",
    shortLabel: "Message Tracking",
    options: [
      { value: 1, label: "No, we have no way to track message delivery or receipt" },
      { value: 2, label: "We can see email open rates but nothing more" },
      { value: 3, label: "We have basic read receipts but no accountability system" },
      { value: 4, label: "Yes, we have full delivery tracking, read receipts, and can identify who hasn't responded" },
    ],
  },
  {
    id: 4,
    question: "How often do you test your emergency communication system?",
    shortLabel: "Testing Frequency",
    options: [
      { value: 1, label: "Never or only when required by law" },
      { value: 2, label: "Once a year" },
      { value: 3, label: "Quarterly" },
      { value: 4, label: "Monthly or more, with documented results and improvements" },
    ],
  },
  {
    id: 5,
    question: "Do you have different communication protocols for different types of incidents?",
    shortLabel: "Incident Protocols",
    options: [
      { value: 1, label: "No, we have no formal incident communication plan" },
      { value: 2, label: "We have a basic plan but it's the same for all incidents" },
      { value: 3, label: "We have different plans for major incident types" },
      {
        value: 4,
        label: "We have detailed, tested protocols for various scenarios with clear escalation paths",
      },
    ],
  },
  {
    id: 6,
    question: "How do you handle two-way communication during an emergency?",
    shortLabel: "Two-Way Comms",
    options: [
      { value: 1, label: "We don't - we only send one-way messages" },
      { value: 2, label: "People can reply but responses aren't organized or tracked" },
      { value: 3, label: "We have a system to collect responses but it's manual" },
      {
        value: 4,
        label: "We have automated response collection, real-time dashboards, and can identify who needs help",
      },
    ],
  },
  {
    id: 7,
    question: "What's your biggest concern about your current crisis communication approach?",
    shortLabel: "Main Concern",
    options: [
      { value: 1, label: "We don't have a system and know we're exposed to significant risk" },
      { value: 2, label: "Our current approach is too slow and unreliable" },
      { value: 3, label: "We have a system but it's not comprehensive enough" },
      { value: 4, label: "We're confident in our system and continuously improving it" },
    ],
  },
]

export function AssessmentForm() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleAnswer = async (questionId: number, value: number) => {
    const newAnswers = { ...answers, [questionId]: value }
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setIsSubmitting(true)
      console.log("[v0] Submitting assessment to database...")

      const totalScore = Object.values(newAnswers).reduce((sum, val) => sum + val, 0)

      let maturityLevel = "Foundation Building"
      if (totalScore >= 25) maturityLevel = "Advanced"
      else if (totalScore >= 19) maturityLevel = "Developing"
      else if (totalScore >= 13) maturityLevel = "Emerging"

      try {
        const response = await fetch("/api/assessment/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            answers: newAnswers,
            totalScore,
            maturityLevel,
          }),
        })

        const result = await response.json()
        console.log("[v0] Assessment submission result:", result)

        if (result.success) {
          console.log("[v0] Assessment saved successfully, lead ID:", result.leadId)
        } else {
          console.error("[v0] Failed to save assessment:", result.error)
        }
      } catch (error) {
        console.error("[v0] Error submitting assessment:", error)
      }

      const answersParam = encodeURIComponent(JSON.stringify(newAnswers))
      router.push(`/assessment/results?score=${totalScore}&answers=${answersParam}`)
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const question = questions[currentQuestion]

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-muted-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-sm font-medium text-muted-foreground">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-2xl">{question.question}</CardTitle>
          <CardDescription>Select the option that best describes your current situation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {question.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(question.id, option.value)}
              disabled={isSubmitting}
              className="w-full text-left p-4 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="text-base">{option.label}</span>
            </button>
          ))}

          {isSubmitting && (
            <div className="text-center py-4">
              <p className="text-sm text-muted-foreground">Saving your assessment...</p>
            </div>
          )}
        </CardContent>
      </Card>

      {currentQuestion > 0 && (
        <div className="mt-6 text-center">
          <Button variant="ghost" onClick={handleBack}>
            Back to Previous Question
          </Button>
        </div>
      )}
    </div>
  )
}

export { questions }
