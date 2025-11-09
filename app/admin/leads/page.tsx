import { Suspense } from "react"
import { LeadsTable } from "@/components/admin/leads-table"
import { LeadsTableSkeleton } from "@/components/admin/leads-table-skeleton"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { AdminHeader } from "@/components/admin/admin-header"

export default function AdminLeadsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <AdminHeader />

          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Lead Management</h1>
            <p className="text-muted-foreground">
              View and manage all leads from contact forms, assessments, and more.
            </p>
          </div>

          <Suspense fallback={<LeadsTableSkeleton />}>
            <LeadsTable />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  )
}
