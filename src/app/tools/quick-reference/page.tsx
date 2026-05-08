"use client";
import Link from "next/link";
import { ArrowRight, Printer } from "lucide-react";

export default function QuickReferencePage() {
  return (
    <>
      {/* HERO — hidden on print */}
      <section className="bg-oxford py-10 print:hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <span className="inline-block bg-cambridge/20 text-cambridge border border-cambridge/30 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                Quick Reference
              </span>
              <h1 className="text-3xl font-bold text-white">POTS Clinical Quick Reference</h1>
              <p className="text-gray-300 mt-2 text-sm">
                Print-ready summary card. Use Ctrl+P / Cmd+P to print or save as PDF.
              </p>
            </div>
            <button
              onClick={() => typeof window !== "undefined" && window.print()}
              className="flex items-center gap-2 bg-cambridge text-white px-5 py-3 rounded-lg font-semibold hover:bg-cambridge-dark transition-colors print:hidden"
            >
              <Printer className="w-4 h-4" />
              Print / Save PDF
            </button>
          </div>
        </div>
      </section>

      {/* PRINTABLE CARD */}
      <section className="py-10 bg-gray-50 print:py-0 print:bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 print:px-0 print:max-w-full">
          {/* Card header */}
          <div className="bg-oxford rounded-t-2xl px-8 py-5 print:rounded-none flex items-center justify-between">
            <div>
              <h2 className="text-white font-bold text-xl">
                POTS — Physician Quick Reference Card
              </h2>
              <p className="text-cambridge text-sm mt-0.5">
                Dr Boon Lim · Imperial College Healthcare NHS Trust · stopfainting.com
              </p>
            </div>
            <div className="text-right text-xs text-gray-400">
              <p>StopFainting.com</p>
              <p>POTS UK Educational Partner</p>
            </div>
          </div>

          <div className="bg-white rounded-b-2xl print:rounded-none shadow-lg border border-gray-200 border-t-0 p-8 print:shadow-none print:border-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Column 1: Definition + Criteria */}
              <div className="space-y-5">
                <div>
                  <h3 className="font-bold text-oxford text-sm uppercase tracking-wider border-b-2 border-cambridge pb-1 mb-3">
                    Definition
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Postural Tachycardia Syndrome — abnormality of the autonomic nervous
                    system causing excessive HR rise on standing, with orthostatic symptoms.
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• Affects ~1% of the UK population</li>
                    <li>• 80–85% female, onset age 15–50</li>
                    <li>• Average diagnostic delay: <strong>7 years</strong></li>
                    <li>• &gt;50% initially misdiagnosed as anxiety</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-oxford text-sm uppercase tracking-wider border-b-2 border-cambridge pb-1 mb-3">
                    Diagnostic Criteria (all required)
                  </h3>
                  <ol className="space-y-1.5 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="bg-cambridge text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                      HR rise <strong>≥30 bpm</strong> (adults) / <strong>≥40 bpm</strong> (12–19 yrs) within 10 min of standing
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-cambridge text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                      No orthostatic hypotension (SBP drop &lt;20, DBP drop &lt;10 mmHg)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-cambridge text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                      Orthostatic symptoms present (palpitations, dizziness, presyncope)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-cambridge text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
                      Symptoms for ≥3 months
                    </li>
                  </ol>
                  <div className="mt-2 bg-amber-50 border border-amber-200 rounded-lg p-2 text-xs text-amber-800">
                    ⚠ If resting HR &lt;60 bpm, use 60 as baseline. Thresholds need not be met at every visit.
                  </div>
                </div>
              </div>

              {/* Column 2: Active Stand Test */}
              <div className="space-y-5">
                <div>
                  <h3 className="font-bold text-oxford text-sm uppercase tracking-wider border-b-2 border-cambridge pb-1 mb-3">
                    Active Stand Test Protocol
                  </h3>
                  {[
                    { step: "Prep", text: "Supine ≥10 min. No caffeine/vasoactive meds. Record baseline HR + BP." },
                    { step: "Stand", text: "Patient stands unaided. Record HR at 1 min; BP at 1 min." },
                    { step: "3 min", text: "Record HR + BP at 3 minutes standing." },
                    { step: "5 min", text: "Record HR + BP at 5 minutes standing." },
                    { step: "10 min", text: "Record HR + BP. Calculate MALMO Score. Stop if presyncope." },
                    { step: "Result", text: "HR rise ≥30 bpm sustained ≥10 min + symptoms + no OH = POTS." },
                  ].map((s) => (
                    <div key={s.step} className="flex items-start gap-2 mb-2">
                      <span className="bg-oxford text-cambridge text-xs font-bold px-1.5 py-0.5 rounded flex-shrink-0 mt-0.5 min-w-[42px] text-center">
                        {s.step}
                      </span>
                      <p className="text-xs text-gray-600 leading-snug">{s.text}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="font-bold text-oxford text-sm uppercase tracking-wider border-b-2 border-cambridge pb-1 mb-3">
                    Key Symptoms
                  </h3>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-0.5 text-xs text-gray-600">
                    {[
                      "Palpitations on standing", "Brain fog", "Dizziness / presyncope",
                      "Orthostatic headaches (~30%)", "Syncope (30–60%)", "Sleep disturbance",
                      "Chest pain (upright)", "Gut problems", "Shortness of breath",
                      "'PoTS feet' (purple, ~50%)", "Exercise intolerance", "Fatigue / PEM",
                    ].map((s) => (
                      <div key={s} className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-cambridge flex-shrink-0" />
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Column 3: Management */}
              <div className="space-y-5">
                <div>
                  <h3 className="font-bold text-oxford text-sm uppercase tracking-wider border-b-2 border-cambridge pb-1 mb-3">
                    Stepwise Management
                  </h3>
                  {[
                    { step: "1st", color: "bg-cambridge", items: ["Explain & reassure", "Salt 8–10g/day + fluids 2–3L/day", "Head-of-bed elevation 10–15cm", "Compression garments (30–40 mmHg)"] },
                    { step: "2nd", color: "bg-cambridge/70", items: ["Counter-manoeuvres (leg cross, squat, toe raise)", "Structured exercise — Levine Protocol", "Small frequent meals, avoid alcohol"] },
                    { step: "3rd", color: "bg-oxford", items: ["Fludrocortisone 0.05–0.2mg (hypovolaemic)", "Propranolol 10–40mg TDS (hyperadrenergic)", "Ivabradine 2.5–7.5mg BD (HR-dominant)", "Midodrine 2.5–10mg TDS (neuropathic)"] },
                  ].map((tier) => (
                    <div key={tier.step} className="flex items-start gap-2 mb-3">
                      <span className={`${tier.color} text-white text-xs font-bold px-1.5 py-0.5 rounded flex-shrink-0 mt-0.5 min-w-[30px] text-center`}>
                        {tier.step}
                      </span>
                      <ul className="text-xs text-gray-600 space-y-0.5">
                        {tier.items.map((i) => <li key={i}>• {i}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="font-bold text-oxford text-sm uppercase tracking-wider border-b-2 border-cambridge pb-1 mb-3">
                    When to Refer
                  </h3>
                  <ul className="space-y-1 text-xs text-gray-600">
                    {[
                      "Refractory after 3–6 months optimised treatment",
                      "Suspected hyperadrenergic POTS",
                      "Complex comorbidities (hEDS, MCAS, autoimmune)",
                      "Post-COVID POTS with severe impairment",
                      "Diagnostic uncertainty after active stand test",
                    ].map((c) => (
                      <li key={c} className="flex items-start gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-oxford flex-shrink-0 mt-1" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-oxford text-sm uppercase tracking-wider border-b-2 border-cambridge pb-1 mb-3">
                    Key Resources
                  </h3>
                  <ul className="space-y-1 text-xs text-gray-600">
                    <li>🌐 stopfainting.com — Dr Boon Lim</li>
                    <li>🌐 potsuk.org — Patient charity (No. 1159813)</li>
                    <li>📱 POTS UK 13-module education programme (co-created with Dr Boon Lim)</li>
                    <li>🔗 Interactive Active Stand Test Calculator: stopfainting.com/tools/active-stand-test</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-gray-200 flex flex-col md:flex-row justify-between items-start gap-2 text-xs text-gray-400">
              <p>© {new Date().getFullYear()} Dr Boon Lim · Imperial College Healthcare NHS Trust · For clinical education only. Not a substitute for individual patient assessment.</p>
              <p className="flex-shrink-0">v1.0 · stopfainting.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Actions — hidden on print */}
      <section className="py-10 bg-white print:hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/tools/active-stand-test" className="btn-primary">
              Active Stand Test Calculator <ArrowRight className="w-4 h-4 inline ml-2" />
            </Link>
            <Link href="/tools/medication-guide" className="btn-secondary">
              Medication Guide
            </Link>
            <Link href="/diagnosis" className="btn-secondary">
              Full Diagnosis Protocol
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
