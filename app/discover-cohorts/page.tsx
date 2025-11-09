import type { Metadata } from 'next'
import { DiscoverCohorts } from '@/components/cohorts/discover-cohorts'

export const metadata: Metadata = {
  title: 'Discover Public Cohorts | Is Everyone Safe',
  description:
    'Explore the Is Everyone Safe public cohort directory. Search by keyword, postcode, or map radius to find support networks near you.',
}

export default function DiscoverCohortsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-background/95 pb-16 pt-24">
      <DiscoverCohorts />
    </main>
  )
}
