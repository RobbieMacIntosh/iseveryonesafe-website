"use server"

import { createClient } from "@/lib/supabase/server"

export type LeadSource = "contact" | "assessment" | "demo" | "early_adopter" | "newsletter"

export interface CreateLeadData {
  email: string
  name?: string
  company?: string
  phone?: string
  source: LeadSource
  message?: string
  metadata?: Record<string, any>
}

export async function createLead(data: CreateLeadData) {
  try {
    const supabase = await createClient()

    const { data: lead, error } = await supabase
      .from("leads")
      .insert({
        email: data.email,
        name: data.name,
        company: data.company,
        phone: data.phone,
        source: data.source,
        message: data.message,
        metadata: data.metadata || {},
        status: "new",
      })
      .select()
      .single()

    if (error) {
      console.error("[v0] Error creating lead:", error)
      return { success: false, error: error.message }
    }

    return { success: true, data: lead }
  } catch (error) {
    console.error("[v0] Error in createLead:", error)
    return { success: false, error: "Failed to create lead" }
  }
}

export async function createAssessmentResult(
  leadId: string,
  answers: Record<string, number>,
  totalScore: number,
  maturityLevel: string,
) {
  try {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from("assessment_results")
      .insert({
        lead_id: leadId,
        answers,
        total_score: totalScore,
        maturity_level: maturityLevel,
      })
      .select()
      .single()

    if (error) {
      console.error("[v0] Error creating assessment result:", error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error("[v0] Error in createAssessmentResult:", error)
    return { success: false, error: "Failed to create assessment result" }
  }
}

export async function getLeads(filters?: {
  source?: LeadSource
  status?: string
  search?: string
}) {
  try {
    const supabase = await createClient()

    let query = supabase.from("leads").select("*").order("created_at", { ascending: false })

    if (filters?.source) {
      query = query.eq("source", filters.source)
    }

    if (filters?.status) {
      query = query.eq("status", filters.status)
    }

    if (filters?.search) {
      query = query.or(
        `email.ilike.%${filters.search}%,name.ilike.%${filters.search}%,company.ilike.%${filters.search}%`,
      )
    }

    const { data, error } = await query

    if (error) {
      console.error("[v0] Error fetching leads:", error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error("[v0] Error in getLeads:", error)
    return { success: false, error: "Failed to fetch leads" }
  }
}

export async function updateLeadStatus(leadId: string, status: string, notes?: string) {
  try {
    const supabase = await createClient()

    const updateData: any = { status }
    if (notes) {
      updateData.notes = notes
    }

    const { data, error } = await supabase.from("leads").update(updateData).eq("id", leadId).select().single()

    if (error) {
      console.error("[v0] Error updating lead status:", error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error("[v0] Error in updateLeadStatus:", error)
    return { success: false, error: "Failed to update lead status" }
  }
}
