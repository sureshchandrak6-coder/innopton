import Link from "next/link";
import { Droplet, UserCircle, Wrench, BarChart3, ShieldCheck, Activity, Cpu } from "lucide-react";
import CausticPool from "@/components/ui/caustic-pool";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <main className="flex-1 relative flex flex-col items-center justify-center overflow-hidden min-h-[90vh]">
        <div className="absolute inset-0 z-0 bg-slate-950">
          <CausticPool />
        </div>
        
        {/* Overlay gradient to ensure text readability against the animation */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/60 to-slate-950/90 z-0" />

        <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-sky-500/20 p-3 rounded-2xl backdrop-blur-sm mr-4 border border-sky-400/20">
              <Droplet className="w-10 h-10 text-sky-400 drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-xl">
              INNOPTON
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-sky-100/90 mb-16 font-medium tracking-wide drop-shadow-md max-w-2xl">
            Sense. Analyze. Purify. Predict.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mt-4">
            {/* Customer Card */}
            <Link href="/customer" className="group h-full">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-sky-500/20 text-left h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <UserCircle size={100} />
                </div>
                <div className="w-14 h-14 bg-sky-500/20 rounded-2xl flex items-center justify-center mb-6 text-sky-400 group-hover:text-sky-300 group-hover:scale-110 transition-transform relative z-10">
                  <UserCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Customer Portal</h3>
                <p className="text-slate-300 text-sm flex-1 leading-relaxed relative z-10">
                  Monitor your water quality in real-time, view filter health, and get predictive maintenance alerts before issues arise.
                </p>
                <div className="mt-8 text-sky-400 text-sm font-semibold flex items-center group-hover:text-sky-300 relative z-10">
                  Access Portal <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            </Link>

            {/* Service Manager Card */}
            <Link href="/service" className="group h-full">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-indigo-500/20 text-left h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <BarChart3 size={100} />
                </div>
                <div className="w-14 h-14 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 text-indigo-400 group-hover:text-indigo-300 group-hover:scale-110 transition-transform relative z-10">
                  <BarChart3 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Service Manager</h3>
                <p className="text-slate-300 text-sm flex-1 leading-relaxed relative z-10">
                  Oversee fleet health, manage technician dispatches intelligently, and analyze fleet-wide predictive maintenance trends.
                </p>
                <div className="mt-8 text-indigo-400 text-sm font-semibold flex items-center group-hover:text-indigo-300 relative z-10">
                  Go to Dashboard <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            </Link>

            {/* Technician Card */}
            <Link href="/technician" className="group h-full">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-emerald-500/20 text-left h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Wrench size={100} />
                </div>
                <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 text-emerald-400 group-hover:text-emerald-300 group-hover:scale-110 transition-transform relative z-10">
                  <Wrench size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Technician Hub</h3>
                <p className="text-slate-300 text-sm flex-1 leading-relaxed relative z-10">
                  View assigned tasks, access deep device diagnostics, and update maintenance logs efficiently on the go.
                </p>
                <div className="mt-8 text-emerald-400 text-sm font-semibold flex items-center group-hover:text-emerald-300 relative z-10">
                  Open Task List <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>

      <section className="bg-white py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Next-Generation Water Purification</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              INNOPTON combines advanced portable water purification hardware with an intelligent AI-powered platform. 
              By predicting filter life and diagnosing potential issues before they happen, we ensure you always have access to clean, safe water.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Activity className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Predictive AI</h3>
              <p className="text-slate-600">Advanced machine learning models analyze usage patterns to predict maintenance needs accurately.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-sky-50 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-sky-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Guaranteed Safety</h3>
              <p className="text-slate-600">Continuous monitoring of water quality metrics ensures every drop you drink meets rigorous safety standards.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-6">
                <Cpu className="w-8 h-8 text-indigo-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Smart Edge Hardware</h3>
              <p className="text-slate-600">Our portable purifiers pack immense processing power to filter and analyze water in real-time, anywhere.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
