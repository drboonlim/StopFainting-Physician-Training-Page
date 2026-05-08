import Link from "next/link";
import { ArrowRight, CheckCircle, AlertCircle, Info } from "lucide-react";

const subtypes = [
  {
    name: "Neuropathic POTS",
    prevalence: "~50%",
    mechanism:
      "Partial sympathetic denervation of the lower limbs causing impaired vasoconstriction on standing and compensatory tachycardia.",
    features: [
      "Dependent limb pooling",
      "Impaired sudomotor function in legs",
      "Normal plasma noradrenaline",
      "Often responds to fludrocortisone",
    ],
    color: "border-blue-400",
    bg: "bg-blue-50",
  },
  {
    name: "Hyperadrenergic POTS",
    prevalence: "~10%",
    mechanism:
      "Elevated sympathetic activity with excessive noradrenaline release, causing tachycardia, hypertension, and tremor on standing.",
    features: [
      "Upright plasma noradrenaline >600 pg/mL",
      "Palpitations, tremor, anxiety on standing",
      "May have paradoxical hypertension",
      "Often responds to beta-blockers or clonidine",
    ],
    color: "border-orange-400",
    bg: "bg-orange-50",
  },
  {
    name: "Hypovolaemic POTS",
    prevalence: "~30%",
    mechanism:
      "Low circulating blood volume triggering reflex tachycardia to maintain cardiac output on standing.",
    features: [
      "Low plasma renin & aldosterone",
      "Reduced red cell mass",
      "Often responds to sodium/fluid loading",
      "High salt diet effective",
    ],
    color: "border-green-400",
    bg: "bg-green-50",
  },
  {
    name: "Autoimmune POTS",
    prevalence: "~15–20%",
    mechanism:
      "Autoantibodies against adrenergic and/or muscarinic receptors altering autonomic tone; often post-infectious or following COVID-19.",
    features: [
      "Post-viral onset common",
      "Anti-α1 or anti-β1 adrenergic antibodies",
      "Post-COVID POTS increasingly recognised",
      "IVIG may benefit selected patients",
    ],
    color: "border-purple-400",
    bg: "bg-purple-50",
  },
];

const symptoms = {
  orthostatic: [
    "Palpitations — 'sensation of your heart pounding in your chest'",
    "Lightheadedness / presyncope",
    "Syncope (affects ~30–60% of POTS patients)",
    "Chest pain — common, often worse when upright",
    "Shortness of breath on standing or minimal exertion",
    "Visual disturbance — blurred, tunnel vision, or excessive glare",
    "Nausea on standing",
    "Shakiness / tremulousness",
    "Excessive sweating",
    "'PoTS feet' — purple discolouration of hands and feet (~50% of patients)",
  ],
  non_orthostatic: [
    "Fatigue & post-exertional malaise",
    "Brain fog — 'forgetful, difficulty thinking, difficulty focusing, cloudy'",
    "Orthostatic headaches (~30% of POTS patients)",
    "Sleep disturbance / insomnia",
    "Gut problems — nausea, diarrhoea, constipation, bloating, abdominal pain",
    "Bladder dysfunction",
    "Exercise intolerance — severe worsening of symptoms after physical activity",
    "Thermoregulatory abnormalities",
  ],
};

const commonMisdiagnoses = [
  { diagnosis: "Anxiety disorder / panic attacks", clue: "Symptoms are consistently postural" },
  { diagnosis: "Chronic fatigue syndrome", clue: "Orthostatic component often overlooked" },
  { diagnosis: "Inappropriate sinus tachycardia", clue: "POTS HR rise is positional, not continuous" },
  { diagnosis: "Vasovagal syncope", clue: "POTS shows sustained HR rise, not vagal slowing" },
  { diagnosis: "Anaemia", clue: "Check active stand test even in anaemia" },
  { diagnosis: "Deconditioning", clue: "May coexist but does not explain full picture" },
];

export default function AboutPotsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-oxford py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-cambridge/20 text-cambridge border border-cambridge/30 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Foundation Module
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Understanding POTS
            </h1>
            <p className="mt-4 text-gray-300 text-lg leading-relaxed">
              Postural Orthostatic Tachycardia Syndrome (POTS) is a form of
              dysautonomia characterised by an excessive increase in heart rate
              on standing. It is more common than previously recognised and
              highly treatable with the right approach.
            </p>
          </div>
        </div>
      </section>

      {/* DEFINITION */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <span className="badge mb-4">Definition</span>
              <h2 className="section-heading">What is POTS?</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                POTS is defined as a sustained heart rate increase of{" "}
                <strong className="text-oxford">≥30 beats per minute (bpm)</strong> within
                10 minutes of standing (or head-up tilt) in adults, or{" "}
                <strong className="text-oxford">≥40 bpm</strong> in adolescents,
                in the absence of orthostatic hypotension, and accompanied by
                symptoms of orthostatic intolerance.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                The condition predominantly affects{" "}
                <strong className="text-oxford">women of childbearing age</strong>{" "}
                (80–85% female), with onset most commonly between 15–50 years.
                It affects an estimated{" "}
                <strong className="text-cambridge">1 in 100 people</strong> in
                the United Kingdom — making it more common than multiple
                sclerosis or Parkinson&apos;s disease.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Despite its prevalence, the average diagnostic delay remains{" "}
                <strong className="text-oxford">7 years</strong> (POTS UK), largely due to
                unfamiliarity among clinicians outside specialist centres, and because
                over 50% of patients are initially misdiagnosed — most frequently with
                anxiety or a mental health condition. This resource aims to change that.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-oxford rounded-2xl p-6 text-white">
                <h3 className="font-bold text-cambridge text-lg mb-3">Diagnostic Criterion</h3>
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-sm text-gray-300 mb-2">HR rise on standing:</p>
                  <p className="text-2xl font-bold text-cambridge">≥ 30 bpm</p>
                  <p className="text-xs text-gray-400">Adults (≥30 bpm) · Adolescents (≥40 bpm)</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 mt-3">
                  <p className="text-sm text-gray-300 mb-2">Sustained for:</p>
                  <p className="text-2xl font-bold text-cambridge">≥ 10 min</p>
                  <p className="text-xs text-gray-400">Without orthostatic hypotension</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 mt-3">
                  <p className="text-sm text-gray-300 mb-2">Plus:</p>
                  <p className="text-sm font-semibold">Symptoms of orthostatic intolerance</p>
                  <p className="text-xs text-gray-400">Palpitations, dizziness, presyncope</p>
                </div>
              </div>
              <div className="bg-cambridge-pale rounded-2xl p-4 border border-cambridge/20">
                <div className="flex items-start gap-2">
                  <Info className="w-5 h-5 text-cambridge flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    HR criterion alone is insufficient. Symptoms must accompany
                    the haemodynamic changes to meet diagnostic criteria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EPIDEMIOLOGY */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="badge mb-4">Epidemiology</span>
          <h2 className="section-heading mb-8">Who gets POTS?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "~1%", label: "UK Prevalence", sub: "~670,000 people affected" },
              { value: "80–85%", label: "Female", sub: "Women of childbearing age" },
              { value: "15–50", label: "Typical Age", sub: "Years at onset" },
              { value: "7 years", label: "Diagnostic Delay", sub: "Average wait for diagnosis (POTS UK)" },
            ].map((s) => (
              <div key={s.label} className="card text-center">
                <p className="text-3xl font-bold text-cambridge">{s.value}</p>
                <p className="font-semibold text-oxford mt-1">{s.label}</p>
                <p className="text-gray-500 text-xs mt-1">{s.sub}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="font-bold text-oxford mb-3">Common Precipitants</h3>
              <ul className="space-y-2">
                {[
                  "Viral illness (including COVID-19)",
                  "Pregnancy or postpartum period",
                  "Physical trauma or surgery",
                  "Prolonged bed rest / deconditioning",
                  "Puberty (adolescent onset)",
                  "Vaccination (rare; temporary)",
                ].map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-cambridge flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3 className="font-bold text-oxford mb-3">Associated Conditions</h3>
              <ul className="space-y-2">
                {[
                  "Hypermobile Ehlers-Danlos Syndrome (hEDS)",
                  "Autoimmune disorders (lupus, Sjögren's)",
                  "Mast Cell Activation Syndrome (MCAS)",
                  "Coeliac disease",
                  "Fibromyalgia",
                  "ME/CFS overlap",
                ].map((c) => (
                  <li key={c} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-oxford flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SUBTYPES */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="badge mb-4">Pathophysiology</span>
            <h2 className="section-heading">POTS Subtypes</h2>
            <p className="section-subheading">
              POTS is a syndrome, not a single disease. Identifying the subtype
              guides targeted treatment selection.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subtypes.map((sub) => (
              <div
                key={sub.name}
                className={`card border-l-4 ${sub.color} ${sub.bg}`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-oxford">{sub.name}</h3>
                  <span className="text-xs font-semibold text-gray-500 bg-white px-2 py-1 rounded-full border">
                    ~{sub.prevalence}
                  </span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  {sub.mechanism}
                </p>
                <ul className="space-y-1">
                  {sub.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="badge mb-4">Clinical Presentation</span>
          <h2 className="section-heading mb-8">Symptoms of POTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="font-bold text-oxford mb-4 text-lg">
                Orthostatic Symptoms
                <span className="text-sm font-normal text-gray-500 ml-2">(worse on standing)</span>
              </h3>
              <ul className="space-y-2">
                {symptoms.orthostatic.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-cambridge flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3 className="font-bold text-oxford mb-4 text-lg">
                Non-Orthostatic Symptoms
                <span className="text-sm font-normal text-gray-500 ml-2">(present at rest too)</span>
              </h3>
              <ul className="space-y-2">
                {symptoms.non_orthostatic.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-oxford flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MISDIAGNOSIS */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="badge mb-4">Clinical Awareness</span>
          <h2 className="section-heading mb-2">Common Misdiagnoses</h2>
          <p className="text-gray-600 mb-8">
            These are the conditions most frequently applied to POTS patients
            before correct diagnosis.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {commonMisdiagnoses.map((m) => (
              <div
                key={m.diagnosis}
                className="card border border-red-100 bg-red-50/30"
              >
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-oxford text-sm">{m.diagnosis}</p>
                    <p className="text-gray-600 text-xs mt-1">
                      <span className="font-semibold text-cambridge">Clue: </span>
                      {m.clue}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-oxford">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to diagnose POTS?
          </h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Move on to the Diagnosis module — learn how to perform the active
            stand test and apply diagnostic criteria in your clinic.
          </p>
          <Link href="/diagnosis" className="btn-primary">
            Diagnosis Module <ArrowRight className="w-4 h-4 inline ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
