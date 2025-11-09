import { getLeads } from "@/lib/actions/leads"
import { LeadsTableClient } from "./leads-table-client"

export async function LeadsTable() {
  const result = await getLeads()

  if (!result.success || !result.data) {
    return (
      <div className="bg-destructive/10 border border-destructive rounded-lg p-6">
        <p className="text-destructive">Failed to load leads. Please check your Supabase connection.</p>
      </div>
    )
  }

  return <LeadsTableClient initialLeads={result.data} />
}
