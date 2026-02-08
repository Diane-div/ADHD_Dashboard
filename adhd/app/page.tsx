import Navbar from "@/components/Navbar/navbar"

import DailyRoutine from "@/components/DailyRoutine"
import SmartTaskBreakdown from "@/components/SmartTaskBreakdown/SmartTaskBreakdown"
import ADHDCompanion from "@/components/ADHDCompanion/ADHDCompanion"
import MoodTracker from "@/components/MoodTracker/MoodTracker"
import FocusTools from "@/components/FocusTools/FocusTools"
import CommunitySupport from "@/components/CommunitySupport/CommunitySupport"
import SymptomTracker from "@/components/SymptomTracker/SymptomTracker"
import LearningHub from "@/components/LearningHub/LearningHub"
import EmergencyCalmTools from "@/components/EmergencyCalmTools/EmergencyCalmTools"
import HealthTipsTagline from "@/components/HealthTagline/HealthTipsTagline"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="p-6 max-w-7xl mx-auto">
        {/* DASHBOARD GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* COLUMN 1 */}
          <div className="space-y-6">
            <DailyRoutine />
            <MoodTracker />
            <LearningHub />
          </div>

          {/* COLUMN 2 */}
          <div className="space-y-6">
            <SmartTaskBreakdown />
            <FocusTools />
            <EmergencyCalmTools />
          </div>

          {/* COLUMN 3 */}
          <div className="space-y-6">
            <ADHDCompanion />
            <CommunitySupport />
            <SymptomTracker />
            <HealthTipsTagline />
          </div>

        </section>
      </main>
    </div>
  )
}
