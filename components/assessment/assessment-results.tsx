"use client"

import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { questions } from "./assessment-form"
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from "recharts"

const maturityLevels = {
  level1: {
    range: [7, 12],
    title: "Foundation Building Phase",
    color: "text-orange-600",
    bgColor: "bg-orange-50 border-orange-200",
    description:
      "Your organisation is in the early stages of crisis communication readiness. There are important opportunities to strengthen your capabilities and better protect your team.",
    risks: [
      "Response times may not meet the needs of fast-moving incidents",
      "Limited visibility into staff safety, particularly for remote workers and those traveling for business",
      "Potential gaps in meeting duty of care obligations for distributed workforce",
      "Communication challenges during critical situations",
    ],
    recommendations: [
      "Consider implementing a dedicated crisis communication system",
      "Establish clear protocols for reaching remote workers, lone workers, and traveling staff",
      "Create and document emergency communication procedures",
      "Begin regular testing and training sessions",
    ],
    cta: "Let's explore how we can help strengthen your capabilities",
    ctaLink: "/contact",
  },
  level2: {
    range: [13, 18],
    title: "Building Momentum",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50 border-yellow-200",
    description:
      "You've made good progress with basic communication tools. There are valuable opportunities to enhance your capabilities for modern crisis management, especially for distributed teams.",
    risks: [
      "Response times could be faster during critical incidents",
      "Limited visibility into message delivery and acknowledgment",
      "Communication gaps with remote and traveling staff",
      "Opportunities to strengthen compliance with health and safety best practices",
    ],
    recommendations: [
      "Consider upgrading to a purpose-built crisis communication platform",
      "Implement location-aware alerts for distributed workforce",
      "Add delivery tracking and read receipts for accountability",
      "Establish regular testing schedule (quarterly or more frequent)",
      "Create incident-specific communication protocols",
    ],
    cta: "Discover how Is Everyone Safe can enhance your capabilities",
    ctaLink: "/contact",
  },
  level3: {
    range: [19, 24],
    title: "Strong Foundation",
    color: "text-blue-600",
    bgColor: "bg-blue-50 border-blue-200",
    description:
      "You have solid crisis communication capabilities in place. There are some refinements that could enhance speed, reliability, and coverage even further.",
    risks: [
      "Response times could be optimized for the most critical situations",
      "Some staff groups (remote workers, travelers) may benefit from enhanced coverage",
      "Testing frequency could be increased to catch potential issues earlier",
      "Two-way communication could be streamlined",
    ],
    recommendations: [
      "Optimize alert delivery to achieve sub-60-second reach",
      "Enhance location-based targeting for traveling staff",
      "Consider increasing testing frequency to monthly",
      "Implement automated response collection and analysis",
      "Add real-time dashboards for incident management",
    ],
    cta: "Let's discuss how to reach the next level",
    ctaLink: "/contact",
  },
  level4: {
    range: [25, 28],
    title: "Crisis Communication Excellence",
    color: "text-green-600",
    bgColor: "bg-green-50 border-green-200",
    description:
      "Excellent work! Your organisation demonstrates strong crisis communication maturity with comprehensive coverage of all staff.",
    strengths: [
      "Rapid alert delivery to all staff, including remote workers and travelers",
      "Full accountability with delivery tracking and read receipts",
      "Regular testing ensures system reliability",
      "Incident-specific protocols enable appropriate responses",
      "Two-way communication provides real-time situational awareness",
    ],
    recommendations: [
      "Continue monthly testing and refine based on results",
      "Consider sharing your best practices with industry peers",
      "Stay updated on emerging crisis communication technologies",
      "Explore expanding to additional use cases (supply chain, customer communication)",
      "Document lessons learned from drills and real incidents",
    ],
    cta: "We'd love to hear about your success",
    ctaLink: "/contact",
  },
}

function getMaturityLevel(score: number) {
  if (score >= 25) return maturityLevels.level4
  if (score >= 19) return maturityLevels.level3
  if (score >= 13) return maturityLevels.level2
  return maturityLevels.level1
}

function getScoreColor(score: number): string {
  if (score === 4) return "#22c55e" // green-500
  if (score === 3) return "#d97706" // amber-600 (dark amber)
  if (score === 2) return "#fbbf24" // amber-400 (light amber)
  return "#ef4444" // red-500
}

const CustomDot = (props: any) => {
  const { cx, cy, payload, value } = props

  // Try multiple ways to access the score
  const scoreValue = value || payload.score || payload.value || 0
  const color = getScoreColor(scoreValue)

  return <circle cx={cx} cy={cy} r={6} fill={color} stroke="#fff" strokeWidth={2} />
}

export function AssessmentResults() {
  const searchParams = useSearchParams()
  const score = Number.parseInt(searchParams.get("score") || "0")
  const answersParam = searchParams.get("answers")
  const level = getMaturityLevel(score)

  let answers: Record<number, number> = {}
  try {
    if (answersParam) {
      answers = JSON.parse(decodeURIComponent(answersParam))
    }
  } catch (e) {}

  const radarData = questions.map((q) => ({
    category: q.shortLabel,
    score: answers[q.id] || 0,
  }))

  return (
    <section className="py-20 md:py-32 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">Your Assessment Results</h1>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-accent/10 border border-accent">
              <span className="text-sm font-medium text-muted-foreground">Your Score:</span>
              <span className="text-3xl font-bold">{score}</span>
              <span className="text-sm font-medium text-muted-foreground">/ 28</span>
            </div>
          </div>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle>Your Crisis Communication Profile</CardTitle>
              <CardDescription>Visual breakdown of your responses across all seven dimensions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="hsl(var(--border))" />
                    <PolarAngleAxis dataKey="category" tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }} />
                    <Radar
                      name="Your Score"
                      dataKey="score"
                      stroke="hsl(var(--accent))"
                      fill="hsl(var(--accent))"
                      fillOpacity={0.6}
                      dot={<CustomDot />}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 space-y-4">
                {questions.map((q) => {
                  const selectedValue = answers[q.id] || 0
                  const selectedOption = q.options.find((opt) => opt.value === selectedValue)
                  return (
                    <div key={q.id} className="border-l-2 border-accent pl-4">
                      <div className="font-medium text-sm mb-1">{q.shortLabel}</div>
                      <div className="text-xs text-muted-foreground mb-2">{q.question}</div>
                      <div className="text-sm bg-accent/5 p-2 rounded">
                        <span className="font-medium">Your response: </span>
                        {selectedOption ? selectedOption.label : "No response"}
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          <Card className={`border-2 ${level.bgColor} mb-8`}>
            <CardHeader>
              <CardTitle className={`text-3xl ${level.color}`}>{level.title}</CardTitle>
              <CardDescription className="text-base text-foreground mt-2">{level.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {level.risks && (
                <div>
                  <h3 className="font-semibold text-lg mb-3">Areas for Improvement:</h3>
                  <ul className="space-y-2">
                    {level.risks.map((risk, index) => (
                      <li key={index} className="flex gap-2">
                        <span className="text-orange-500 mt-1">→</span>
                        <span className="text-sm leading-relaxed">{risk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {level.strengths && (
                <div>
                  <h3 className="font-semibold text-lg mb-3">Your Strengths:</h3>
                  <ul className="space-y-2">
                    {level.strengths.map((strength, index) => (
                      <li key={index} className="flex gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-sm leading-relaxed">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h3 className="font-semibold text-lg mb-3">Next Steps to Consider:</h3>
                <ul className="space-y-2">
                  {level.recommendations.map((rec, index) => (
                    <li key={index} className="flex gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-sm leading-relaxed">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="text-center space-y-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href={level.ctaLink}>{level.cta}</Link>
            </Button>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline" asChild>
                <Link href="/assessment">Retake Assessment</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
