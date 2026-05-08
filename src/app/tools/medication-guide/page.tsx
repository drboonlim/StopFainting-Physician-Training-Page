"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, AlertTriangle, CheckCircle, Info, Pill } from "lucide-react";

type Subtype = "all" | "neuropathic" | "hyperadrenergic" | "hypovolaemic" | "autoimmune";
type Line = "first" | "second" | "specialist";

interface Drug {
  name: string;
  dose: string;
  mechanism: string;
  subtypes: Subtype[];
  line: Line;
  evidence: "Good" | "Moderate" | "Limited" | "Emerging";
  keyPoints: string[];
  cautions: string[];
  offLabel: boolean;
}

const drugs: Drug[] = [
  {
    name: "Salt & Fluid Loading",
    dose: "8–10g salt/day + 2–3L fluid/day",
    mechanism: "Increases plasma volume — addresses hypovolaemia underlying most POTS subtypes",
    subtypes: ["all"],
    line: "first",
    evidence: "Good",
    keyPoints: [
      "Always first-line before any medication",
      "Electrolyte drinks helpful during activity",
      "Salt tablets (1–2g TDS) if dietary increase insufficient",
      "Review with dietitian for sustained adherence",
    ],
    cautions: ["Contraindicated in hypertension, heart failure, renal impairment — check BP and U&E first"],
    offLabel: false,
  },
  {
    name: "Fludrocortisone",
    dose: "0.05–0.2 mg daily (morning)",
    mechanism: "Mineralocorticoid — increases renal sodium and water retention, expanding plasma volume",
    subtypes: ["hypovolaemic", "neuropathic"],
    line: "first",
    evidence: "Moderate",
    keyPoints: [
      "Start at 0.05mg daily, titrate slowly",
      "Takes 2–4 weeks for full effect",
      "Monitor BP and serum potassium",
      "Most effective in hypovolaemic and neuropathic subtypes",
    ],
    cautions: [
      "Avoid in hyperadrenergic POTS — worsens hypertension",
      "Monitor for ankle oedema, supine hypertension, hypokalaemia",
      "Avoid in pregnancy (category C)",
    ],
    offLabel: false,
  },
  {
    name: "Propranolol (low dose)",
    dose: "10–40 mg TDS/QDS (NOT high dose)",
    mechanism: "Non-selective beta-blocker — blunts tachycardia response; most effective in hyperadrenergic subtype",
    subtypes: ["hyperadrenergic", "all"],
    line: "first",
    evidence: "Moderate",
    keyPoints: [
      "Low dose ONLY — high doses paradoxically worsen POTS via reduced cardiac output",
      "Take 30–60 min before anticipated activity",
      "Particularly effective when palpitations are the dominant symptom",
      "IV propranolol superior to oral in trials but oral widely used",
    ],
    cautions: [
      "Contraindicated in asthma and reactive airways disease",
      "May worsen fatigue and exercise tolerance",
      "Do not stop abruptly — taper over 2 weeks",
    ],
    offLabel: false,
  },
  {
    name: "Ivabradine",
    dose: "2.5–7.5 mg BD (with meals)",
    mechanism: "Selective If-channel blocker — reduces sinus rate without affecting contractility or BP",
    subtypes: ["all", "hyperadrenergic"],
    line: "first",
    evidence: "Moderate",
    keyPoints: [
      "Preferred over beta-blockers when fatigue or BP effects are a concern",
      "Does not reduce cardiac output — better tolerated in exercise",
      "Growing evidence base in POTS specifically",
      "Useful when beta-blockers not tolerated",
    ],
    cautions: [
      "Off-label use for POTS — document and obtain consent",
      "Contraindicated in acute/decompensated heart failure, sick sinus, severe hepatic impairment",
      "Bradycardia risk — monitor resting HR",
      "Not in pregnancy",
    ],
    offLabel: true,
  },
  {
    name: "Midodrine",
    dose: "2.5–10 mg TDS (last dose by 6 pm)",
    mechanism: "Alpha-1 adrenergic agonist — peripheral vasoconstriction, reduces venous pooling in lower limbs",
    subtypes: ["neuropathic", "hypovolaemic"],
    line: "second",
    evidence: "Good",
    keyPoints: [
      "Take 30–45 min before standing/activity",
      "Three times daily during waking hours — final dose before 6 pm to avoid supine hypertension",
      "Most effective for neuropathic POTS with prominent pooling",
      "Combination with fludrocortisone often synergistic",
    ],
    cautions: [
      "NEVER take within 4 hours of lying down — risk of supine hypertension",
      "Contraindicated in supine hypertension, severe heart disease, urinary retention, thyrotoxicosis",
      "Side effects: piloerection, scalp tingling, urinary hesitancy",
    ],
    offLabel: false,
  },
  {
    name: "Pyridostigmine",
    dose: "30–60 mg BD–TDS",
    mechanism: "Acetylcholinesterase inhibitor — enhances ganglionic autonomic transmission, improves peripheral vasoconstriction",
    subtypes: ["neuropathic", "autoimmune"],
    line: "second",
    evidence: "Moderate",
    keyPoints: [
      "One of few drugs with RCT evidence specifically in POTS (Singer et al.)",
      "Particularly useful in neuropathic and autoimmune subtypes",
      "Enhances parasympathetic and sympathetic tone",
      "Can be combined with other agents",
    ],
    cautions: [
      "GI side effects common (nausea, diarrhoea, abdominal cramps) — take with food",
      "Avoid in asthma, bowel obstruction, urinary obstruction",
      "Not in pregnancy",
    ],
    offLabel: true,
  },
  {
    name: "Clonidine",
    dose: "0.05–0.2 mg BD",
    mechanism: "Central alpha-2 agonist — reduces sympathetic outflow, specifically useful in hyperadrenergic subtype",
    subtypes: ["hyperadrenergic"],
    line: "second",
    evidence: "Limited",
    keyPoints: [
      "Consider specifically when standing noradrenaline is elevated (>600 pg/mL)",
      "Reduces sympathetic tone centrally",
      "Use with caution alongside other antihypertensives",
    ],
    cautions: [
      "Sedation (often significant), dry mouth, constipation",
      "Rebound hypertension on abrupt withdrawal — always taper",
      "Not first choice unless hyperadrenergic subtype confirmed",
    ],
    offLabel: true,
  },
  {
    name: "SSRIs / SNRIs",
    dose: "Various (standard antidepressant doses)",
    mechanism: "Serotonergic modulation of autonomic tone; treats comorbid anxiety and depression",
    subtypes: ["all", "autoimmune"],
    line: "second",
    evidence: "Limited",
    keyPoints: [
      "Consider when anxiety or depression is a prominent comorbidity",
      "Some evidence in post-COVID / autoimmune POTS",
      "May initially worsen tachycardia — start low",
      "Fluoxetine used in some pilot studies",
    ],
    cautions: [
      "Monitor HR and BP closely on initiation",
      "QTc prolongation risk — check ECG if combining with other QT-affecting drugs",
    ],
    offLabel: true,
  },
  {
    name: "Low-Dose Naltrexone (LDN)",
    dose: "1.5–4.5 mg at night",
    mechanism: "Immunomodulatory at low doses — emerging evidence in autoimmune and post-COVID POTS",
    subtypes: ["autoimmune"],
    line: "specialist",
    evidence: "Emerging",
    keyPoints: [
      "Specialist / research centre use only",
      "Most relevant for autoimmune POTS and post-COVID phenotype",
      "Off-label — limited but growing evidence base",
      "Anecdotal reports of significant improvement in long COVID POTS",
    ],
    cautions: [
      "Strictly off-label — document informed consent",
      "Avoid in opioid dependence or concurrent opioid analgesia",
      "Limited safety data in POTS specifically",
    ],
    offLabel: true,
  },
  {
    name: "Intravenous (IV) Saline",
    dose: "1–2L normal saline infusion",
    mechanism: "Acute plasma volume expansion — rapid symptom relief in severe/refractory episodes",
    subtypes: ["hypovolaemic", "all"],
    line: "specialist",
    evidence: "Limited",
    keyPoints: [
      "For acute severe flares or pre/post-procedure",
      "Not sustainable as long-term management",
      "PICC line home infusion used in selected severe cases in specialist centres",
    ],
    cautions: [
      "Risk of fluid overload, electrolyte disturbance",
      "Home infusion requires specialist supervision",
      "Not a substitute for oral hydration strategies",
    ],
    offLabel: false,
  },
];

const subtypeInfo: Record<Subtype, { label: string; color: string; bg: string; description: string }> = {
  all: { label: "All subtypes", color: "text-oxford", bg: "bg-oxford/10", description: "" },
  neuropathic: {
    label: "Neuropathic",
    color: "text-blue-700",
    bg: "bg-blue-50",
    description: "Partial sympathetic denervation of lower limbs. Normal plasma noradrenaline. Dependent pooling, impaired sudomotor function in legs.",
  },
  hyperadrenergic: {
    label: "Hyperadrenergic",
    color: "text-orange-700",
    bg: "bg-orange-50",
    description: "Standing plasma noradrenaline >600 pg/mL. Palpitations, tremor, hypertension on standing. Worse with high doses of beta-blockers.",
  },
  hypovolaemic: {
    label: "Hypovolaemic",
    color: "text-green-700",
    bg: "bg-green-50",
    description: "Low circulating blood volume. Low renin/aldosterone. Responds well to salt loading and fludrocortisone.",
  },
  autoimmune: {
    label: "Autoimmune",
    color: "text-purple-700",
    bg: "bg-purple-50",
    description: "Autoantibodies against adrenergic/muscarinic receptors. Often post-infectious or post-COVID. IVIG may benefit selected cases.",
  },
};

const lineLabels: Record<Line, { label: string; color: string }> = {
  first: { label: "First Line", color: "bg-cambridge/20 text-cambridge-dark" },
  second: { label: "Second Line", color: "bg-oxford/10 text-oxford" },
  specialist: { label: "Specialist", color: "bg-purple-100 text-purple-700" },
};

const evidenceColor: Record<Drug["evidence"], string> = {
  Good: "bg-green-100 text-green-700",
  Moderate: "bg-cambridge/20 text-cambridge-dark",
  Limited: "bg-gray-100 text-gray-600",
  Emerging: "bg-purple-100 text-purple-700",
};

export default function MedicationGuidePage() {
  const [selectedSubtype, setSelectedSubtype] = useState<Subtype>("all");
  const [selectedLine, setSelectedLine] = useState<Line | "all">("all");

  const filtered = drugs.filter((d) => {
    const subtypeMatch = selectedSubtype === "all" || d.subtypes.includes(selectedSubtype) || d.subtypes.includes("all");
    const lineMatch = selectedLine === "all" || d.line === selectedLine;
    return subtypeMatch && lineMatch;
  });

  return (
    <>
      {/* HERO */}
      <section className="bg-oxford py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-cambridge/20 text-cambridge border border-cambridge/30 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Clinical Tool
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              POTS Medication Guide
            </h1>
            <p className="mt-3 text-gray-300 leading-relaxed">
              Filter by POTS subtype and treatment line to find the right medication
              for your patient. Includes mechanism, dosing, evidence grade, and key
              cautions for each drug.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Disclaimer */}
          <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
            <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700">
              <strong>Prescribing note:</strong> Several medications used in POTS are off-label.
              Always discuss with the patient, document informed consent, and base clinical decisions
              on individual assessment. Non-pharmacological measures should be optimised before
              adding medication.
            </p>
          </div>

          {/* Filters */}
          <div className="card border border-gray-200 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-bold text-oxford uppercase tracking-wider mb-3">Filter by Subtype</h3>
                <div className="flex flex-wrap gap-2">
                  {(Object.keys(subtypeInfo) as Subtype[]).map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSubtype(s)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold border-2 transition-all ${
                        selectedSubtype === s
                          ? `${subtypeInfo[s].bg} ${subtypeInfo[s].color} border-current`
                          : "border-gray-200 text-gray-500 hover:border-gray-300"
                      }`}
                    >
                      {subtypeInfo[s].label}
                    </button>
                  ))}
                </div>
                {selectedSubtype !== "all" && (
                  <p className="text-xs text-gray-500 mt-2 italic">
                    {subtypeInfo[selectedSubtype].description}
                  </p>
                )}
              </div>
              <div>
                <h3 className="text-sm font-bold text-oxford uppercase tracking-wider mb-3">Filter by Treatment Line</h3>
                <div className="flex flex-wrap gap-2">
                  {(["all", "first", "second", "specialist"] as const).map((l) => (
                    <button
                      key={l}
                      onClick={() => setSelectedLine(l)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold border-2 transition-all ${
                        selectedLine === l
                          ? "bg-oxford text-white border-oxford"
                          : "border-gray-200 text-gray-500 hover:border-gray-300"
                      }`}
                    >
                      {l === "all" ? "All lines" : lineLabels[l].label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500 mb-4">
            Showing <strong>{filtered.length}</strong> of {drugs.length} options
          </p>

          {/* Drug cards */}
          <div className="space-y-4">
            {filtered.map((drug) => (
              <div key={drug.name} className="card border border-gray-200">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-cambridge/10 rounded-xl p-2">
                      <Pill className="w-5 h-5 text-cambridge" />
                    </div>
                    <div>
                      <h3 className="font-bold text-oxford text-lg">{drug.name}</h3>
                      <p className="text-cambridge text-sm font-mono">{drug.dose}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${lineLabels[drug.line].color}`}>
                      {lineLabels[drug.line].label}
                    </span>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${evidenceColor[drug.evidence]}`}>
                      Evidence: {drug.evidence}
                    </span>
                    {drug.offLabel && (
                      <span className="text-xs font-semibold px-2 py-1 rounded-full bg-yellow-100 text-yellow-700">
                        Off-label
                      </span>
                    )}
                    <div className="flex flex-wrap gap-1">
                      {drug.subtypes.map((s) => (
                        <span key={s} className={`text-xs font-medium px-2 py-0.5 rounded-full ${subtypeInfo[s].bg} ${subtypeInfo[s].color}`}>
                          {subtypeInfo[s].label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  <span className="font-semibold text-oxford">Mechanism:</span> {drug.mechanism}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs font-bold text-oxford uppercase tracking-wider mb-2">Key Points</h4>
                    <ul className="space-y-1">
                      {drug.keyPoints.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-3.5 h-3.5 text-cambridge flex-shrink-0 mt-0.5" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-red-500 uppercase tracking-wider mb-2">Cautions</h4>
                    <ul className="space-y-1">
                      {drug.cautions.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm text-gray-600">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Important note */}
          <div className="mt-8 flex items-start gap-3 bg-cambridge-pale border border-cambridge/20 rounded-xl p-5">
            <Info className="w-5 h-5 text-cambridge flex-shrink-0 mt-0.5" />
            <div className="text-sm text-gray-700">
              <p className="font-bold text-oxford mb-1">Before prescribing any medication</p>
              <p>Non-pharmacological measures (salt/fluid loading, compression, exercise rehabilitation)
              must be optimised first. Most patients with POTS will improve significantly with
              lifestyle measures alone. Medication is additive, not a substitute.</p>
              <p className="mt-2">
                For the full management protocol including the Levine Exercise Programme and
                stepwise treatment algorithm, see the{" "}
                <Link href="/management" className="text-cambridge font-semibold hover:underline">
                  Management page
                </Link>.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/tools/active-stand-test" className="btn-primary">
              Active Stand Test Calculator <ArrowRight className="w-4 h-4 inline ml-2" />
            </Link>
            <Link href="/management" className="btn-secondary">
              Full Management Guidelines
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
