import Link from "next/link";
import { ArrowRight, AlertTriangle, CheckCircle, Clock, Activity } from "lucide-react";

const activeStandSteps = [
  {
    step: "Preparation",
    duration: "10 min",
    instructions: [
      "Patient should have fasted or eaten lightly (avoid large meal 2 hours prior)",
      "No caffeine, beta-blockers, or vasoactive medication on day of test",
      "Patient lies supine in a calm environment for a minimum of 10 minutes",
      "Record resting HR and BP (supine baseline)",
      "Note symptoms in the supine position",
    ],
    color: "bg-gray-100",
  },
  {
    step: "Active Stand",
    duration: "0–1 min",
    instructions: [
      "Patient stands — do not support with chair; free-standing",
      "Record HR at 30 seconds and 1 minute",
      "Record BP at 1 minute",
      "Observe for pallor, sweating, or distress",
      "Ask patient to rate symptoms on a 0–10 scale",
    ],
    color: "bg-blue-50",
  },
  {
    step: "Sustained Stand",
    duration: "1–10 min",
    instructions: [
      "Continue standing with arms by the side",
      "Record HR & BP at 3 minutes and 5 minutes",
      "Record HR & BP at 10 minutes",
      "Document symptom progression throughout",
      "Stop early if patient becomes pre-syncopal or syncopal",
    ],
    color: "bg-cambridge-pale",
  },
  {
    step: "Recovery",
    duration: "Post-stand",
    instructions: [
      "Patient returns to supine position",
      "Record HR & BP at 1 minute post-return",
      "Document time to symptom resolution",
      "Calculate maximum HR rise (peak standing HR − mean supine HR)",
      "Calculate MALMO Score — composite symptom severity score recorded alongside active stand test",
      "Document whether HR criteria and symptoms were met",
    ],
    color: "bg-green-50",
  },
];

const diagnosticCriteria = [
  {
    criterion: "HR rise ≥30 bpm",
    detail: "From supine to standing, sustained over 10 minutes. If resting HR <60 bpm, use 60 bpm as the baseline reference.",
    applies: "Adults",
  },
  {
    criterion: "HR rise ≥40 bpm",
    detail: "From supine to standing, sustained over 10 minutes.",
    applies: "Adolescents (12–19 yrs)",
  },
  {
    criterion: "No orthostatic hypotension",
    detail: "BP drop <20 mmHg systolic / <10 mmHg diastolic. Note: brief initial drops on standing are normal.",
    applies: "All",
  },
  {
    criterion: "Symptoms present",
    detail: "Palpitations, dizziness, presyncope, fatigue — primarily when upright, relieved by lying down.",
    applies: "All",
  },
  {
    criterion: "Chronic duration",
    detail: "Symptoms present for ≥3 months. Note: diagnostic thresholds need not be met at every visit.",
    applies: "All",
  },
];

const investigations = [
  {
    category: "Mandatory",
    tests: [
      { name: "Active Stand Test / NASA Lean Test + MALMO Score", purpose: "Confirm orthostatic HR rise and calculate symptom composite score" },
      { name: "12-lead ECG", purpose: "Exclude arrhythmia, pre-excitation, QTc" },
      { name: "FBC, U&E, TFTs, CRP/ESR", purpose: "Exclude secondary causes" },
      { name: "Blood glucose (fasting)", purpose: "Exclude hypoglycaemia" },
      { name: "Ferritin & iron studies", purpose: "Iron deficiency lowers threshold" },
    ],
  },
  {
    category: "Recommended",
    tests: [
      { name: "24-hour ECG (Holter)", purpose: "Document HR pattern over 24 hours" },
      { name: "Echocardiogram", purpose: "Exclude structural cardiac disease" },
      { name: "Lying & standing plasma catecholamines", purpose: "Identify hyperadrenergic subtype" },
      { name: "Urine catecholamines", purpose: "Exclude phaeochromocytoma" },
      { name: "Coeliac antibodies", purpose: "Frequently associated" },
    ],
  },
  {
    category: "Selected Cases",
    tests: [
      { name: "Head-up tilt table test", purpose: "Formal autonomic assessment in complex cases" },
      { name: "Skin biopsy (epidermal nerve fibre density)", purpose: "Confirm small fibre neuropathy" },
      { name: "Quantitative sudomotor axon reflex test (QSART)", purpose: "Sweat gland innervation" },
      { name: "Adrenergic receptor antibodies", purpose: "Autoimmune POTS workup" },
      { name: "Genetic testing (COL5A1, COL3A1)", purpose: "If hEDS/vascular EDS suspected" },
    ],
  },
];

const differentials = [
  {
    condition: "Orthostatic Hypotension",
    distinguish: "BP drops ≥20/10 mmHg. HR may rise but BP criterion met.",
    key: "BP measurement is key",
  },
  {
    condition: "Vasovagal Syncope",
    distinguish: "HR slows before syncope (vagal). POTS shows sustained tachycardia.",
    key: "HR pattern on standing",
  },
  {
    condition: "Inappropriate Sinus Tachycardia",
    distinguish: "Elevated HR at rest, not just on standing. No postural component.",
    key: "Resting HR elevated",
  },
  {
    condition: "Phaeochromocytoma",
    distinguish: "Episodic hypertension, headache, sweating. Elevated urine catecholamines.",
    key: "Urine catecholamines",
  },
  {
    condition: "Dehydration / Anaemia",
    distinguish: "May co-exist or precipitate POTS. Correct and re-test.",
    key: "FBC, U&E",
  },
  {
    condition: "Thyrotoxicosis",
    distinguish: "Resting tachycardia, weight loss, tremor. TFTs abnormal.",
    key: "TFTs",
  },
];

export default function DiagnosisPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-oxford py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-cambridge/20 text-cambridge border border-cambridge/30 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Clinical Skills Module
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Diagnosing POTS
            </h1>
            <p className="mt-4 text-gray-300 text-lg leading-relaxed">
              POTS can be diagnosed in a standard clinic room with a blood
              pressure cuff and pulse oximeter. This module covers the active
              stand test, diagnostic criteria, investigations, and differential
              diagnosis.
            </p>
          </div>
        </div>
      </section>

      {/* DIAGNOSTIC CRITERIA */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="badge mb-4">Diagnostic Criteria</span>
          <h2 className="section-heading mb-2">When is it POTS?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            All five criteria below must be met. Note: HR is typically measured
            by pulse oximeter or ECG — not palpation.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="min-w-full">
              <thead>
                <tr className="bg-oxford text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Criterion</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Detail</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Applies to</th>
                </tr>
              </thead>
              <tbody>
                {diagnosticCriteria.map((c, i) => (
                  <tr key={c.criterion} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-cambridge flex-shrink-0" />
                        <span className="font-semibold text-oxford text-sm">
                          {c.criterion}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{c.detail}</td>
                    <td className="px-6 py-4">
                      <span className="badge text-xs">{c.applies}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
            <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700">
              <strong>Important:</strong> Heart rate criteria alone is insufficient.
              The patient must have symptoms of orthostatic intolerance that
              impair daily function. A resting sinus tachycardia must be excluded
              as the primary cause of elevated HR.
            </p>
          </div>
        </div>
      </section>

      {/* ACTIVE STAND TEST */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="badge mb-4">Core Clinical Skill</span>
            <h2 className="section-heading">The Active Stand Test</h2>
            <p className="section-subheading">
              Also called the NASA Lean Test. No specialist equipment required.
              Can be performed in any clinic, GP surgery, or even at the
              patient&apos;s bedside.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeStandSteps.map((phase, index) => (
              <div key={phase.step} className={`rounded-2xl p-6 ${phase.color} border border-gray-200`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-oxford text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-oxford">{phase.step}</h3>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      {phase.duration}
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {phase.instructions.map((inst) => (
                    <li key={inst} className="flex items-start gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-cambridge flex-shrink-0 mt-1.5" />
                      {inst}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Result interpretation */}
          <div className="mt-8 bg-oxford rounded-2xl p-6 text-white">
            <h3 className="font-bold text-cambridge text-lg mb-4">Interpreting Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-5 h-5 text-green-400" />
                  <span className="font-semibold text-green-400">POTS Positive</span>
                </div>
                <p className="text-sm text-gray-300">
                  HR rise ≥30 bpm (adults) or ≥40 bpm (teens), sustained ≥10 min,
                  with orthostatic symptoms, no BP drop.
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-orange-400" />
                  <span className="font-semibold text-orange-400">Orthostatic Hypotension</span>
                </div>
                <p className="text-sm text-gray-300">
                  BP drop ≥20 mmHg systolic or ≥10 mmHg diastolic within 3 min
                  of standing. May coexist with POTS.
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-gray-400" />
                  <span className="font-semibold text-gray-300">Normal Response</span>
                </div>
                <p className="text-sm text-gray-300">
                  HR rise &lt;30 bpm (adults), no significant BP drop, no or
                  minimal orthostatic symptoms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INVESTIGATIONS */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="badge mb-4">Investigations</span>
          <h2 className="section-heading mb-8">Recommended Investigations</h2>
          <div className="space-y-6">
            {investigations.map((inv) => (
              <div key={inv.category} className="card">
                <h3 className="font-bold text-oxford mb-4 text-lg flex items-center gap-2">
                  <span
                    className={`w-2 h-6 rounded-full ${
                      inv.category === "Mandatory"
                        ? "bg-red-400"
                        : inv.category === "Recommended"
                        ? "bg-cambridge"
                        : "bg-gray-400"
                    }`}
                  />
                  {inv.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {inv.tests.map((test) => (
                    <div
                      key={test.name}
                      className="flex items-start gap-3 bg-gray-50 rounded-lg p-3"
                    >
                      <CheckCircle className="w-4 h-4 text-cambridge flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-oxford text-sm">{test.name}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{test.purpose}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TILT TABLE */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="badge mb-4">Specialist Assessment</span>
              <h2 className="section-heading">Head-Up Tilt Table Test</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                The head-up tilt table test (HUT) is the gold standard for
                autonomic assessment but is not required to diagnose POTS in
                most cases. Reserve for:
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Diagnostic uncertainty after active stand test",
                  "Concurrent vasovagal syncope assessment",
                  "Complex autonomic phenotype",
                  "Pre-procedural autonomic characterisation",
                  "Research and specialist centre assessment",
                ].map((ind) => (
                  <li key={ind} className="flex items-start gap-2 text-sm text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-cambridge flex-shrink-0 mt-1.5" />
                    {ind}
                  </li>
                ))}
              </ul>
              <div className="mt-6 bg-cambridge-pale border border-cambridge/20 rounded-xl p-4">
                <p className="text-sm text-oxford font-semibold mb-1">
                  Protocol (Westminster/King&apos;s College)
                </p>
                <p className="text-sm text-gray-700">
                  60° passive tilt for 20–45 minutes. POTS diagnosed if sustained
                  HR rise ≥30 bpm (≥40 bpm adolescents) with symptoms. If negative
                  at 20 min, pharmacological provocation (GTN 400 μg sublingual or
                  isoprenaline infusion) may be used for vasovagal assessment.
                </p>
              </div>
            </div>
            <div>
              <span className="badge mb-4">Differential Diagnosis</span>
              <h2 className="section-heading mb-6">Excluding Other Causes</h2>
              <div className="space-y-3">
                {differentials.map((d) => (
                  <div key={d.condition} className="card border border-gray-200 py-3 px-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-oxford text-sm">{d.condition}</p>
                        <p className="text-gray-600 text-xs mt-1">{d.distinguish}</p>
                      </div>
                      <span className="text-xs bg-cambridge/10 text-cambridge-dark px-2 py-0.5 rounded-full font-medium flex-shrink-0 ml-2">
                        {d.key}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-oxford">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Confirmed POTS — now what?
          </h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Move on to the Management module — stepwise treatment algorithms
            covering lifestyle, physical reconditioning, and pharmacological options.
          </p>
          <Link href="/management" className="btn-primary">
            Management Module <ArrowRight className="w-4 h-4 inline ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
