"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Download, Search } from "lucide-react"

interface Lead {
  id: string
  email: string
  name: string | null
  company: string | null
  phone: string | null
  source: string
  message: string | null
  status: string
  created_at: string
}

interface LeadsTableClientProps {
  initialLeads: Lead[]
}

export function LeadsTableClient({ initialLeads }: LeadsTableClientProps) {
  const [leads] = useState<Lead[]>(initialLeads)
  const [search, setSearch] = useState("")
  const [sourceFilter, setSourceFilter] = useState<string>("all")
  const [statusFilter, setStatusFilter] = useState<string>("all")

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchesSearch =
        search === "" ||
        lead.email.toLowerCase().includes(search.toLowerCase()) ||
        lead.name?.toLowerCase().includes(search.toLowerCase()) ||
        lead.company?.toLowerCase().includes(search.toLowerCase())

      const matchesSource = sourceFilter === "all" || lead.source === sourceFilter
      const matchesStatus = statusFilter === "all" || lead.status === statusFilter

      return matchesSearch && matchesSource && matchesStatus
    })
  }, [leads, search, sourceFilter, statusFilter])

  const exportToCSV = () => {
    const headers = ["Date", "Name", "Email", "Company", "Phone", "Source", "Status", "Message"]
    const rows = filteredLeads.map((lead) => [
      new Date(lead.created_at).toLocaleDateString(),
      lead.name || "",
      lead.email,
      lead.company || "",
      lead.phone || "",
      lead.source,
      lead.status,
      lead.message || "",
    ])

    const csvContent = [headers.join(","), ...rows.map((row) => row.map((cell) => `"${cell}"`).join(","))].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `leads-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
  }

  const getSourceBadgeColor = (source: string) => {
    const colors: Record<string, string> = {
      contact: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      assessment: "bg-purple-500/10 text-purple-500 border-purple-500/20",
      demo: "bg-green-500/10 text-green-500 border-green-500/20",
      early_adopter: "bg-orange-500/10 text-orange-500 border-orange-500/20",
      newsletter: "bg-pink-500/10 text-pink-500 border-pink-500/20",
    }
    return colors[source] || ""
  }

  const getStatusBadgeColor = (status: string) => {
    const colors: Record<string, string> = {
      new: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      contacted: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
      qualified: "bg-green-500/10 text-green-500 border-green-500/20",
      converted: "bg-purple-500/10 text-purple-500 border-purple-500/20",
      archived: "bg-gray-500/10 text-gray-500 border-gray-500/20",
    }
    return colors[status] || ""
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name, email, or company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={sourceFilter} onValueChange={setSourceFilter}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="All Sources" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Sources</SelectItem>
            <SelectItem value="contact">Contact</SelectItem>
            <SelectItem value="assessment">Assessment</SelectItem>
            <SelectItem value="demo">Demo</SelectItem>
            <SelectItem value="early_adopter">Early Adopter</SelectItem>
            <SelectItem value="newsletter">Newsletter</SelectItem>
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="All Statuses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="contacted">Contacted</SelectItem>
            <SelectItem value="qualified">Qualified</SelectItem>
            <SelectItem value="converted">Converted</SelectItem>
            <SelectItem value="archived">Archived</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={exportToCSV} variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export CSV
        </Button>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Message</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredLeads.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                  No leads found
                </TableCell>
              </TableRow>
            ) : (
              filteredLeads.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell className="whitespace-nowrap">{new Date(lead.created_at).toLocaleDateString()}</TableCell>
                  <TableCell>{lead.name || "-"}</TableCell>
                  <TableCell>{lead.email}</TableCell>
                  <TableCell>{lead.company || "-"}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getSourceBadgeColor(lead.source)}>
                      {lead.source}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getStatusBadgeColor(lead.status)}>
                      {lead.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="max-w-xs truncate">{lead.message || "-"}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className="text-sm text-muted-foreground">
        Showing {filteredLeads.length} of {leads.length} leads
      </div>
    </div>
  )
}
