import { type NextRequest, NextResponse } from "next/server"
import { createLead, createAssessmentResult } from "@/lib/actions/leads"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { answers, totalScore, maturityLevel } = body

    console.log("[v0] API: Received assessment submission", {
      totalScore,
      maturityLevel,
      answerCount: Object.keys(answers).length,
    })

    // Create anonymous lead for assessment
    const leadResult = await createLead({
      email: `anonymous-${Date.now()}@assessment.local`,
      source: "assessment",
      metadata: {
        anonymous: true,
        totalScore,
        maturityLevel,
        completedAt: new Date().toISOString(),
      },
    })

    if (!leadResult.success) {
      console.error("[v0] API: Failed to create lead", leadResult.error)
      return NextResponse.json({ success: false, error: leadResult.error }, { status: 500 })
    }

    console.log("[v0] API: Lead created successfully", leadResult.data.id)

    // Create assessment result linked to lead
    const assessmentResult = await createAssessmentResult(leadResult.data.id, answers, totalScore, maturityLevel)

    if (!assessmentResult.success) {
      console.error("[v0] API: Failed to create assessment result", assessmentResult.error)
      return NextResponse.json({ success: false, error: assessmentResult.error }, { status: 500 })
    }

    console.log("[v0] API: Assessment result saved successfully")

    return NextResponse.json({
      success: true,
      leadId: leadResult.data.id,
      assessmentId: assessmentResult.data.id,
    })
  } catch (error) {
    console.error("[v0] API: Error in assessment submission:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
