import Navbar from "@/components/Navbar/navbar"
import DailyRoutine from "@/components/DailyRoutine"
import SmartTaskBreakdown from "@/components/SmartTaskBreakdown/SmartTaskBreakdown"
import ADHDCompanion from '@/components/ADHDCompanion/ADHDCompanion'
import MoodTracker from '@/components/MoodTracker/MoodTracker'
import FocusTools from "@/components/FocusTools/FocusTools"
export default function Home() {
  return (
    <div className="min-h-screen bg-slate-200">
      {/* Navbar stays outside main */}
      <Navbar />

      {/* Main content */}
      <main className="p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-black">
          Welcome
        </h1>

        {/* Grid only for feature components */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <DailyRoutine />
          <SmartTaskBreakdown />
          <ADHDCompanion />
          <MoodTracker />
          <FocusTools />
        </section>
      </main>
    </div>
  )
}
