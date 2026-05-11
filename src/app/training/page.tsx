import Link from "next/link";
import { ArrowRight, BookOpen, Video, FileText, Award, ChevronRight, Clock, GraduationCap, Users } from "lucide-react";
import VideoEmbed from "@/components/VideoEmbed";

const modules = [
  {
    number: "01",
    title: "POTS Fundamentals",
    subtitle: "What every clinician must know",
    duration: "20 min",
    level: "Foundation",
    topics: [
      "Definition and diagnostic criteria",
      "Epidemiology and burden of disease",
      "Pathophysiology overview",
      "POTS subtypes and mechanisms",
      "Common comorbidities",
    ],
    href: "/about-pots",
    icon: BookOpen,
    color: "border-cambridge",
  },
  {
    number: "02",
    title: "Clinical Diagnosis",
    subtitle: "Active stand test and investigations",
    duration: "25 min",
    level: "Clinical Skills",
    topics: [
      "Active stand test protocol (step-by-step)",
      "Diagnostic criteria application",
      "Head-up tilt table testing",
      "Recommended investigation panel",
      "Differentiating POTS from mimics",
    ],
    href: "/diagnosis",
    icon: Video,
    color: "border-oxford",
  },
  {
    number: "03",
    title: "Evidence-Based Management",
    subtitle: "From lifestyle to pharmacology",
    duration: "35 min",
    level: "Treatment",
    topics: [
      "Stepwise treatment algorithm",
      "Salt, fluid and dietary measures",
      "Exercise rehabilitation (Levine Protocol)",
      "Pharmacological options by subtype",
      "Special populations: post-COVID, hEDS, pregnancy",
    ],
    href: "/management",
    icon: FileText,
    color: "border-green-400",
  },
  {
    number: "04",
    title: "Clinical Cases",
    subtitle: "Real-world diagnostic challenges",
    duration: "30 min",
    level: "Advanced",
    topics: [
      "Case 1: Young woman with 'anxiety' and palpitations",
      "Case 2: Post-COVID fatigue and tachycardia",
      "Case 3: Adolescent with exercise intolerance",
      "Case 4: Syncope vs POTS vs vasovagal",
      "Case 5: Refractory POTS — when to refer",
    ],
    href: "#cases",
    icon: Users,
    color: "border-purple-400",
  },
  {
    number: "05",
    title: "BP & HR Tracking Protocols",
    subtitle: "Postural vitals in practice",
    duration: "15 min",
    level: "Clinical Skills",
    topics: [
      "Lying and standing BP monitoring",
      "HR variability in POTS",
      "Peak-to-trough HR oscillation on standing",
      "Patient-facing monitoring tools",
      "When to escalate findings",
    ],
    href: "#tracking",
    icon: Award,
    color: "border-orange-400",
  },
  {
    number: "06",
    title: "Multidisciplinary Management",
    subtitle: "Building a POTS team",
    duration: "20 min",
    level: "Team Care",
    topics: [
      "Roles of cardiology, neurology, physiotherapy",
      "Psychology and cognitive symptom management",
      "Dietitian involvement",
      "School/workplace accommodations",
      "Patient advocacy and support organisations",
    ],
    href: "#mdt",
    icon: GraduationCap,
    color: "border-teal-400",
  },
];

const clinicalCases = [
  {
    caseNo: "Case 1",
    title: "The 'Anxious' 22-Year-Old",
    presentation:
      "A 22-year-old woman referred by her GP with a 2-year history of palpitations, breathlessness, and dizziness. Has been told she has panic disorder and started on an SSRI with no improvement. Active stand test in clinic: HR 72 supine → 118 bpm at 10 minutes standing. BP stable. Significant symptom reproduction.",
    question: "What is the diagnosis? What are the next steps?",
    answer:
      "POTS (HR rise 46 bpm, sustained, with symptoms). Active stand test is diagnostic. Reassure: not anxiety. Commence salt/fluid loading, compression, exercise programme. Review in 8 weeks.",
    tags: ["Misdiagnosis", "Foundation"],
  },
  {
    caseNo: "Case 2",
    title: "Post-COVID Fatigue",
    presentation:
      "A 38-year-old man, 8 months post-COVID-19 infection (mild acute illness). Now with profound fatigue, brain fog, and palpitations on standing. Cannot return to work. HR 68 supine → 104 bpm standing at 5 min. BP stable.",
    question: "How do you manage post-COVID POTS differently?",
    answer:
      "Post-COVID POTS — same criteria apply. Start with standard management. Low-dose propranolol or ivabradine if HR-dominant. Low-dose naltrexone being investigated. Prognosis: most improve significantly over 12–18 months. MDT including occupational therapy, psychology.",
    tags: ["Post-COVID", "Long COVID"],
  },
  {
    caseNo: "Case 3",
    title: "Adolescent Exercise Intolerance",
    presentation:
      "A 16-year-old girl unable to attend school due to dizziness and fatigue. Was a competitive swimmer before onset at age 14. Active stand test: HR 70 → 116 bpm (rise of 46 bpm, criterion ≥40 bpm for adolescents). Mother concerned about 'heart condition'.",
    question: "How does adolescent POTS differ in management?",
    answer:
      "Adolescent POTS — HR criterion is ≥40 bpm. Excellent prognosis; most resolve by early adulthood. Prioritise exercise rehabilitation over medication. School accommodations letter needed. Reassure family — not a structural heart condition. Avoid medicalising the normal puberty transition.",
    tags: ["Adolescent", "Paediatric"],
  },
];

const keyPearls = [
  "The active stand test is diagnostic in >90% of cases — no tilt table required routinely",
  "Always measure BP during the active stand test to exclude orthostatic hypotension",
  "HR criterion alone is insufficient — symptoms must be present and orthostatic",
  "Post-COVID POTS is rising rapidly — have a low threshold for testing long COVID patients",
  "Exercise rehabilitation (Levine Protocol) is the single most effective long-term treatment",
  "Hyperadrenergic POTS responds poorly to fludrocortisone — identify subtype before prescribing",
  "Most patients improve significantly — set realistic, positive expectations",
  "Adolescent POTS (≥40 bpm criterion) frequently resolves by early adulthood",
];

const referralCriteria = [
  "Refractory POTS not responding to 3–6 months of optimised first-line management",
  "Diagnostic uncertainty despite active stand test",
  "Suspected hyperadrenergic POTS (standing noradrenaline measurement required)",
  "Coexistent structural heart disease or complex arrhythmia",
  "Autoimmune POTS (IVIG or immunotherapy consideration)",
  "Complex comorbidities: hEDS, MCAS, significant psychological comorbidity",
  "Post-COVID POTS with severe functional impairment",
];

export default function TrainingPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-oxford py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block bg-cambridge/20 text-cambridge border border-cambridge/30 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                Physician Training Programme
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                POTS Physician Training
              </h1>
              <p className="mt-4 text-gray-300 text-lg leading-relaxed">
                A comprehensive free training programme for GPs, cardiologists,
                neurologists, and allied health professionals. Developed by
                Dr Boon Lim from 20+ years of POTS clinical experience at
                Imperial College Healthcare NHS Trust.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cambridge" />
                  ~2.5 hours total
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-cambridge" />
                  6 core modules
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-cambridge" />
                  Free CPD resource
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
              <h3 className="font-bold text-cambridge mb-4">The Imperial Syncope Unit Team</h3>
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-cambridge rounded-full w-14 h-14 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  BL
                </div>
                <div>
                  <p className="text-white font-semibold">Dr Boon Lim MBBS MD FRCP</p>
                  <p className="text-gray-400 text-sm mt-1">
                    Consultant Cardiologist &amp; Clinical Electrophysiologist<br />
                    Specialist interest in syncope &amp; POTS<br />
                    Imperial College Healthcare NHS Trust
                  </p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                {[
                  { initials: "MD", name: "Dr Melanie Dani", role: "Consultant Geriatrician — syncope research" },
                  { initials: "PE", name: "Philip Eardley", role: "Senior Syncope Nurse — 20+ yrs cardiac & emergency nursing" },
                  { initials: "PT", name: "Patricia Taraborrelli", role: "Lead Nurse — Senior Syncope Specialist since 2011" },
                  { initials: "RS", name: "Prof Richard Sutton", role: "Professor of Cardiology — tilt table diagnostics pioneer" },
                  { initials: "AF", name: "Prof Artur Fedorowski", role: "Head of Syncope & Dysautonomia, Karolinska University" },
                  { initials: "MO", name: "Morwenna Opie-Moran", role: "Clinical Psychologist" },
                ].map((member) => (
                  <div key={member.initials} className="flex items-center gap-3">
                    <div className="bg-oxford rounded-full w-7 h-7 flex items-center justify-center text-cambridge font-bold text-xs flex-shrink-0">
                      {member.initials}
                    </div>
                    <div>
                      <p className="text-white text-xs font-semibold">{member.name}</p>
                      <p className="text-gray-400 text-xs">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-gray-500">Imperial Syncope Diagnostic Unit, Hammersmith Hospital. Supported by Imperial Health Charity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO VIDEO */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="badge mb-3">Watch First</span>
            <h2 className="section-heading">Introduction to POTS — Dr Boon Lim</h2>
            <p className="text-gray-600 mt-2 text-sm">
              A short overview of POTS, why it matters, and how to use this training programme.
            </p>
          </div>
          {/* ✏️ Replace YOUR_YOUTUBE_ID with your actual YouTube video ID
               e.g. if your video URL is https://youtu.be/abc123XYZ  →  id="abc123XYZ"
               Once uploaded to YouTube, send the link to Claude and it will update this automatically */}
          <VideoEmbed
            type="youtube"
            id="YOUR_YOUTUBE_ID"
            title="Introduction to POTS — Dr Boon Lim"
            caption="Dr Boon Lim, Consultant Cardiologist, Imperial College Healthcare NHS Trust"
          />
        </div>
      </section>

      {/* MODULES */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="badge mb-4">Training Modules</span>
          <h2 className="section-heading mb-8">Core Curriculum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {modules.map((mod) => (
              <Link key={mod.number} href={mod.href} className="group">
                <div className={`card h-full border-t-4 ${mod.color} group-hover:shadow-lg transition-all`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-gray-400 font-mono">
                      Module {mod.number}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        {mod.duration}
                      </span>
                      <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-cambridge transition-colors" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <mod.icon className="w-5 h-5 text-cambridge" />
                    <h3 className="font-bold text-oxford">{mod.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm mb-3">{mod.subtitle}</p>
                  <span className="badge text-xs mb-3">{mod.level}</span>
                  <ul className="space-y-1 mt-2">
                    {mod.topics.map((t) => (
                      <li key={t} className="text-xs text-gray-600 flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-cambridge flex-shrink-0 mt-1.5" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CLINICAL PEARLS */}
      <section className="py-14 bg-oxford">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-cambridge/20 text-cambridge border border-cambridge/30 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Clinical Pearls
          </span>
          <h2 className="text-3xl font-bold text-white mb-8">
            Key Clinical Pearls
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {keyPearls.map((pearl, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white/10 rounded-xl px-5 py-4 backdrop-blur-sm"
              >
                <div className="bg-cambridge rounded-full w-6 h-6 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                  {i + 1}
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">{pearl}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLINICAL CASES */}
      <section id="cases" className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="badge mb-4">Case-Based Learning</span>
          <h2 className="section-heading mb-8">Clinical Cases</h2>
          <div className="space-y-6">
            {clinicalCases.map((c) => (
              <div key={c.caseNo} className="card border border-gray-200">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs font-bold text-cambridge uppercase tracking-wider">
                      {c.caseNo}
                    </span>
                    <h3 className="font-bold text-oxford mt-1">{c.title}</h3>
                  </div>
                  <div className="flex gap-2">
                    {c.tags.map((tag) => (
                      <span key={tag} className="badge text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 mb-3">
                  <p className="text-sm text-gray-700 leading-relaxed">{c.presentation}</p>
                </div>
                <div className="bg-cambridge/10 rounded-xl p-3 mb-3">
                  <p className="text-sm font-semibold text-oxford">{c.question}</p>
                </div>
                <details className="group">
                  <summary className="cursor-pointer text-cambridge font-semibold text-sm flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 group-open:rotate-90 transition-transform" />
                    Show Answer
                  </summary>
                  <div className="mt-3 bg-green-50 border border-green-200 rounded-xl p-4">
                    <p className="text-sm text-gray-700 leading-relaxed">{c.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REFERRAL CRITERIA */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="badge mb-4">Referral Guidance</span>
              <h2 className="section-heading mb-4">When to Refer to a Specialist</h2>
              <p className="text-gray-600 mb-6">
                Most patients with POTS can be managed in primary or general
                cardiology care. Specialist referral is indicated in the
                following circumstances:
              </p>
              <ul className="space-y-3">
                {referralCriteria.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-cambridge flex-shrink-0 mt-2" />
                    <span className="text-sm">{c}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary mt-6">
                Refer a Patient to Dr Lim{" "}
                <ArrowRight className="w-4 h-4 inline ml-2" />
              </Link>
            </div>
            <div className="bg-cambridge-pale rounded-2xl p-6 border border-cambridge/20">
              <h3 className="font-bold text-oxford mb-4">
                Postural Vitals Quick Reference
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    HR Criteria
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white rounded-xl p-3 text-center">
                      <p className="text-2xl font-bold text-cambridge">≥30</p>
                      <p className="text-xs text-gray-500">bpm rise (Adults)</p>
                    </div>
                    <div className="bg-white rounded-xl p-3 text-center">
                      <p className="text-2xl font-bold text-oxford">≥40</p>
                      <p className="text-xs text-gray-500">bpm rise (Teens)</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Orthostatic Hypotension (exclude first)
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white rounded-xl p-3 text-center">
                      <p className="text-2xl font-bold text-red-500">≥20</p>
                      <p className="text-xs text-gray-500">mmHg systolic drop</p>
                    </div>
                    <div className="bg-white rounded-xl p-3 text-center">
                      <p className="text-2xl font-bold text-red-500">≥10</p>
                      <p className="text-xs text-gray-500">mmHg diastolic drop</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Measurement Timepoints
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Supine (baseline)", "1 min", "3 min", "5 min", "10 min"].map(
                      (t) => (
                        <span
                          key={t}
                          className="bg-oxford text-white text-xs px-3 py-1 rounded-full font-medium"
                        >
                          {t}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-oxford">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Share with your colleagues
          </h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            This free training resource is designed to be shared widely. The
            more clinicians who can recognise POTS, the fewer patients will wait
            years for a diagnosis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/resources" className="btn-primary">
              Patient Resources <ArrowRight className="w-4 h-4 inline ml-2" />
            </Link>
            <Link href="/contact" className="btn-outline-white">
              Contact Dr Lim
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
