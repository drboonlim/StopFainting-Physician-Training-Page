import Link from "next/link";
import { ArrowRight, CheckCircle, AlertTriangle, Info, Pill } from "lucide-react";

const nonPharmSteps = [
  {
    title: "Education & Explanation",
    priority: "First Line",
    color: "border-cambridge",
    items: [
      "Explain POTS mechanism to patient — often very reassuring",
      "Reassure: POTS is not life-threatening; most improve significantly",
      "Empower patient with self-management strategies",
      "Provide written resources (POTS UK, StopFainting)",
      "Explain the postural component — why lying flat provides relief",
    ],
  },
  {
    title: "Salt & Fluid Loading",
    priority: "First Line",
    color: "border-cambridge",
    items: [
      "Target fluid intake: 2–3 litres per day",
      "Salt intake: 8–10g/day (liaise with dietitian)",
      "Salt tablets (1–2g TDS with meals) if dietary increase insufficient",
      "Electrolyte drinks (ORS/sports drinks) during activity",
      "Avoid diuretics, alcohol, and excess caffeine",
      "Contraindicated in hypertension or heart failure — check BP",
    ],
  },
  {
    title: "Physical Counter-Manoeuvres",
    priority: "First Line",
    color: "border-cambridge",
    items: [
      "Leg crossing & tensing (reduces venous pooling acutely)",
      "Squatting (immediate HR reduction)",
      "Toe raises / calf pumping before standing",
      "Bending forward from the waist",
      "Teach patient to use these at symptom onset",
    ],
  },
  {
    title: "Compression Garments",
    priority: "First Line",
    color: "border-cambridge",
    items: [
      "Full-length compression tights preferred over stockings alone",
      "At least 30–40 mmHg compression",
      "Abdominal binders helpful for abdominal pooling",
      "Worn during waking hours",
      "Stockings alone (knee-high) less effective",
    ],
  },
  {
    title: "Exercise Rehabilitation",
    priority: "Key Intervention",
    color: "border-oxford",
    items: [
      "Deconditioning worsens POTS — exercise is cornerstone of recovery",
      "Start with recumbent/horizontal exercise: rowing, swimming, cycling",
      "Avoid upright exercise initially (worsens symptoms)",
      "Levine Protocol: structured 3-month recumbent reconditioning programme",
      "Progress to upright exercise as tolerated",
      "Target 30 min aerobic + 20 min resistance training, 3–5×/week",
      "Enlist physiotherapist with POTS/dysautonomia experience",
    ],
  },
  {
    title: "Sleep & Positional Strategies",
    priority: "Adjunctive",
    color: "border-gray-300",
    items: [
      "Elevate head of bed 10–15 cm (not just pillow — whole bed)",
      "Reduces overnight diuresis and maintains volume",
      "Avoid prolonged lying flat during the day",
      "Regular sleep schedule; avoid sleep deprivation",
    ],
  },
  {
    title: "Dietary Modifications",
    priority: "Adjunctive",
    color: "border-gray-300",
    items: [
      "Eat small, frequent meals rather than large ones",
      "Avoid high-carbohydrate meals (splanchnic pooling)",
      "Consider low-FODMAP if GI symptoms prominent",
      "Gluten-free trial if coeliac antibodies positive",
      "Limit alcohol — vasodilatory effect worsens POTS",
    ],
  },
];

const medications = [
  {
    drug: "Fludrocortisone",
    dose: "0.05–0.2 mg daily",
    mechanism: "Mineralocorticoid — increases sodium & water retention",
    indications: "Hypovolaemic POTS; inadequate response to salt/fluid",
    cautions: "Monitor BP, potassium. Avoid in hypertension. Not in hyperadrenergic POTS.",
    evidence: "Moderate",
  },
  {
    drug: "Propranolol (low dose)",
    dose: "10–40 mg TDS/QDS",
    mechanism: "Non-selective beta-blocker — reduces HR on standing",
    indications: "Hyperadrenergic POTS; HR-dominant symptoms",
    cautions: "Avoid in asthma. May worsen fatigue. Low dose only — high doses worsen symptoms.",
    evidence: "Moderate",
  },
  {
    drug: "Ivabradine",
    dose: "2.5–7.5 mg BD",
    mechanism: "If-channel blocker — selective sinus rate reduction",
    indications: "Tachycardia-dominant POTS; intolerance to beta-blockers",
    cautions: "Contraindicated in acute HF, sick sinus, severe hepatic impairment. Off-label use.",
    evidence: "Moderate (growing evidence base)",
  },
  {
    drug: "Midodrine",
    dose: "2.5–10 mg TDS",
    mechanism: "Alpha-1 agonist — peripheral vasoconstriction, reduces venous pooling",
    indications: "Neuropathic POTS; orthostatic symptoms despite first-line treatment",
    cautions: "Supine hypertension — do not take within 4 hours of lying down. Last dose before 6pm.",
    evidence: "Good",
  },
  {
    drug: "Pyridostigmine",
    dose: "30–60 mg BD–TDS",
    mechanism: "Acetylcholinesterase inhibitor — enhances autonomic ganglionic transmission",
    indications: "Neuropathic POTS; autoimmune POTS",
    cautions: "GI side effects (nausea, diarrhoea). Avoid in asthma, bowel obstruction.",
    evidence: "Moderate",
  },
  {
    drug: "Clonidine",
    dose: "0.05–0.2 mg BD",
    mechanism: "Central alpha-2 agonist — reduces sympathetic outflow",
    indications: "Hyperadrenergic POTS specifically",
    cautions: "Sedation, dry mouth. Rebound hypertension on abrupt withdrawal.",
    evidence: "Limited (specialist use)",
  },
  {
    drug: "SSRIs / SNRIs",
    dose: "Various",
    mechanism: "Serotonergic modulation of sympathetic tone; treat comorbid anxiety/depression",
    indications: "POTS with anxiety comorbidity; post-viral POTS",
    cautions: "Monitor BP. Some SSRIs may worsen tachycardia initially.",
    evidence: "Limited",
  },
  {
    drug: "Low-dose Naltrexone",
    dose: "1.5–4.5 mg at night",
    mechanism: "Immunomodulatory; emerging evidence in autoimmune POTS",
    indications: "Post-COVID POTS; autoimmune POTS; specialist centre use",
    cautions: "Off-label. Limited evidence. Avoid in opioid dependence.",
    evidence: "Emerging",
  },
];

const specialConditions = [
  {
    title: "Post-COVID POTS",
    content:
      "A distinct phenotype of POTS increasingly seen following COVID-19 infection. Onset typically 1–3 months post-infection. May involve autoimmune mechanisms (mast cell activation, autoantibodies). Standard POTS management applies; low-dose naltrexone or LDN being investigated. Most improve over 12–18 months.",
    color: "bg-purple-50 border-purple-200",
  },
  {
    title: "POTS in hEDS",
    content:
      "Hypermobile Ehlers-Danlos Syndrome co-occurs in 25–50% of POTS patients. Connective tissue laxity promotes venous pooling. Physiotherapy for joint stabilisation is paramount. Compression particularly important. Avoid high-impact exercise. Consider mast cell activation syndrome overlap.",
    color: "bg-blue-50 border-blue-200",
  },
  {
    title: "POTS in Pregnancy",
    content:
      "POTS often worsens in first trimester (vasodilation, increased HR) then may improve by third trimester. Avoid pharmacological treatment where possible. Increase salt and fluid intake. Compression safe. Midodrine and fludrocortisone should be used with caution — discuss with maternal medicine team.",
    color: "bg-pink-50 border-pink-200",
  },
  {
    title: "Adolescent POTS",
    content:
      "HR criterion is ≥40 bpm in under-18s. Puberty is a common trigger. Exercise reconditioning is highly effective. School accommodations often needed. Avoid medicalising normal adolescent variation. Most resolve by early adulthood. Parental involvement in education essential.",
    color: "bg-green-50 border-green-200",
  },
];

export default function ManagementPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-oxford py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-cambridge/20 text-cambridge border border-cambridge/30 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Treatment Module
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Managing POTS
            </h1>
            <p className="mt-4 text-gray-300 text-lg leading-relaxed">
              POTS is highly treatable. A stepwise, evidence-based approach
              addressing lifestyle first, then medication, achieves significant
              improvement in the majority of patients. The aim is functional
              recovery — not just symptom suppression.
            </p>
          </div>
        </div>
      </section>

      {/* TREATMENT PYRAMID */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <span className="badge mb-4">Treatment Approach</span>
              <h2 className="section-heading">Stepwise Treatment Strategy</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Treatment should be personalised and stepwise. Non-pharmacological
                measures are the cornerstone of POTS management — many patients
                achieve significant improvement with lifestyle modification alone.
                Medication is additive, not a substitute for behavioural change.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  {
                    step: "1",
                    label: "Education, salt/fluid loading, sleep positioning",
                    tag: "Always first",
                    color: "bg-cambridge text-white",
                  },
                  {
                    step: "2",
                    label: "Physical counter-manoeuvres + compression garments",
                    tag: "Add early",
                    color: "bg-cambridge/80 text-white",
                  },
                  {
                    step: "3",
                    label: "Structured exercise rehabilitation (Levine Protocol)",
                    tag: "Cornerstone",
                    color: "bg-oxford text-white",
                  },
                  {
                    step: "4",
                    label: "Pharmacological treatment (subtype-guided)",
                    tag: "If needed",
                    color: "bg-oxford/70 text-white",
                  },
                  {
                    step: "5",
                    label: "Specialist referral / MDT management",
                    tag: "Complex cases",
                    color: "bg-gray-500 text-white",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-3">
                    <div
                      className={`${item.color} rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0`}
                    >
                      {item.step}
                    </div>
                    <div className="flex-1 flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
                      <p className="text-oxford font-medium text-sm">{item.label}</p>
                      <span className="text-xs text-gray-500 font-medium ml-3 flex-shrink-0">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-oxford rounded-2xl p-6 text-white">
              <h3 className="font-bold text-cambridge mb-4">Targets of Care</h3>
              {[
                { metric: "HR at 10 min standing", target: "< 120 bpm" },
                { metric: "HR rise on standing", target: "< 30 bpm" },
                { metric: "Symptom burden", target: "COMPASS-31 ↓" },
                { metric: "Daily steps", target: "Progressive increase" },
                { metric: "Quality of life", target: "RAND-36 / SF-36 ↑" },
              ].map((t) => (
                <div
                  key={t.metric}
                  className="flex justify-between items-center py-2 border-b border-white/10 text-sm"
                >
                  <span className="text-gray-300">{t.metric}</span>
                  <span className="text-cambridge font-semibold">{t.target}</span>
                </div>
              ))}
              <div className="mt-4 bg-cambridge/20 rounded-xl p-3">
                <p className="text-xs text-gray-300">
                  Review patients at 6–8 weeks. Most will show improvement with
                  non-pharmacological measures alone. Do not rush to medication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NON-PHARM */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="badge mb-4">Non-Pharmacological</span>
          <h2 className="section-heading mb-8">Lifestyle & Behavioural Measures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {nonPharmSteps.map((step) => (
              <div
                key={step.title}
                className={`card border-l-4 ${step.color}`}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-oxford">{step.title}</h3>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      step.priority === "First Line"
                        ? "bg-cambridge/20 text-cambridge-dark"
                        : step.priority === "Key Intervention"
                        ? "bg-oxford/10 text-oxford"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {step.priority}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {step.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-cambridge flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Levine Protocol */}
          <div className="mt-8 bg-oxford rounded-2xl p-6 text-white">
            <h3 className="font-bold text-cambridge text-lg mb-3">
              The Levine Exercise Protocol
            </h3>
            <p className="text-gray-300 text-sm mb-4 max-w-2xl">
              Developed at UT Southwestern, this 3-month structured reconditioning programme
              is the most evidence-supported intervention for POTS. It begins with horizontal
              exercise (rowing, recumbent cycling) and progressively moves to upright activity
              as tolerance builds.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  phase: "Month 1",
                  label: "Horizontal Phase",
                  content: "Rowing, swimming, recumbent cycling 3×/week. Resistance 2×/week (lower body). 30 min per session.",
                },
                {
                  phase: "Month 2",
                  label: "Transition Phase",
                  content: "Introduce upright cycling with back support. Increase to 4×/week. Add upper body resistance.",
                },
                {
                  phase: "Month 3",
                  label: "Upright Phase",
                  content: "Walking, upright cycling, elliptical. 5×/week aerobic + 3×/week resistance. Build to full activity.",
                },
              ].map((p) => (
                <div key={p.phase} className="bg-white/10 rounded-xl p-4">
                  <p className="text-cambridge font-bold">{p.phase}</p>
                  <p className="text-white font-semibold text-sm mt-1">{p.label}</p>
                  <p className="text-gray-400 text-xs mt-2 leading-relaxed">{p.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PHARMACOLOGICAL */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="badge mb-4">Pharmacological Treatment</span>
          <h2 className="section-heading mb-2">Medication Options</h2>
          <p className="text-gray-600 mb-6 max-w-2xl">
            Medication is additive to non-pharmacological measures. Subtype
            identification guides drug selection. Always start at the lowest dose.
          </p>
          <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
            <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700">
              <strong>Prescribing note:</strong> Several medications used in POTS
              are off-label. Discuss with patient and document consent. Clinical
              decisions must be based on individual patient circumstances.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="min-w-full">
              <thead>
                <tr className="bg-oxford text-white">
                  <th className="px-5 py-4 text-left text-sm font-semibold">Drug</th>
                  <th className="px-5 py-4 text-left text-sm font-semibold">Dose</th>
                  <th className="px-5 py-4 text-left text-sm font-semibold">Mechanism & Indication</th>
                  <th className="px-5 py-4 text-left text-sm font-semibold">Cautions</th>
                  <th className="px-5 py-4 text-left text-sm font-semibold">Evidence</th>
                </tr>
              </thead>
              <tbody>
                {medications.map((med, i) => (
                  <tr key={med.drug} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <Pill className="w-4 h-4 text-cambridge" />
                        <span className="font-bold text-oxford text-sm">{med.drug}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-gray-600 text-sm font-mono">{med.dose}</td>
                    <td className="px-5 py-4 text-gray-600 text-sm max-w-xs">
                      <p className="text-xs text-gray-500 mb-1">{med.mechanism}</p>
                      <p className="font-medium text-oxford text-xs">{med.indications}</p>
                    </td>
                    <td className="px-5 py-4 text-gray-500 text-xs max-w-xs">{med.cautions}</td>
                    <td className="px-5 py-4">
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          med.evidence === "Good"
                            ? "bg-green-100 text-green-700"
                            : med.evidence.includes("Moderate")
                            ? "bg-cambridge/20 text-cambridge-dark"
                            : med.evidence === "Emerging"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {med.evidence}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SPECIAL CONDITIONS */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="badge mb-4">Special Populations</span>
          <h2 className="section-heading mb-8">POTS in Special Contexts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialConditions.map((sc) => (
              <div
                key={sc.title}
                className={`card border ${sc.color}`}
              >
                <h3 className="font-bold text-oxford mb-3">{sc.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{sc.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MONITORING */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="badge mb-4">Follow-Up</span>
          <h2 className="section-heading mb-6">Monitoring & Review</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                timepoint: "6–8 weeks",
                checks: [
                  "Repeat active stand test",
                  "Symptom questionnaire (COMPASS-31)",
                  "Review fluid/salt compliance",
                  "Exercise programme progress",
                  "Assess for medication side effects",
                ],
              },
              {
                timepoint: "3 months",
                checks: [
                  "Formal exercise tolerance assessment",
                  "Review subtype classification",
                  "Adjust medications if indicated",
                  "School/work accommodation review",
                  "Mental health screening",
                ],
              },
              {
                timepoint: "6–12 months",
                checks: [
                  "Assess for comorbidities (hEDS, MCAS)",
                  "Consider specialist referral if refractory",
                  "Long-term exercise maintenance plan",
                  "Driving assessment if applicable",
                  "Review and discharge if stable",
                ],
              },
            ].map((f) => (
              <div key={f.timepoint} className="card">
                <h3 className="font-bold text-oxford mb-3 text-cambridge">{f.timepoint}</h3>
                <ul className="space-y-2">
                  {f.checks.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-cambridge flex-shrink-0 mt-0.5" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-start gap-3 bg-cambridge-pale border border-cambridge/20 rounded-xl p-4">
            <Info className="w-5 h-5 text-cambridge flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700">
              <strong>Prognosis:</strong> With appropriate management, the majority
              of POTS patients achieve meaningful functional improvement within
              12 months. Adolescents have the best prognosis — many enter remission
              by early adulthood. Post-COVID POTS frequently improves over 12–18 months.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-oxford">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to train further?
          </h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Explore the full physician training programme — case-based learning,
            video modules, and clinical pearls from Dr Boon Lim.
          </p>
          <Link href="/training" className="btn-primary">
            Physician Training <ArrowRight className="w-4 h-4 inline ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
