import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Stethoscope,
  Activity,
  Users,
  Award,
  ChevronRight,
  CheckCircle,
  ExternalLink,
  GraduationCap,
  Microscope,
} from "lucide-react";

const stats = [
  { value: "1 in 100", label: "Affected by POTS", sub: "Predominantly young women" },
  { value: "~5 yrs", label: "Average diagnosis delay", sub: "We can change this" },
  { value: "90%", label: "Undiagnosed or misdiagnosed", sub: "At time of first presentation" },
  { value: "97%", label: "Improved with treatment", sub: "With correct management" },
];

const keyModules = [
  {
    icon: Microscope,
    title: "Pathophysiology of POTS",
    description:
      "Understand the underlying mechanisms — hyperadrenergic, neuropathic, hypovolaemic and autoimmune subtypes — and how each informs treatment strategy.",
    href: "/about-pots",
    tag: "Foundation",
  },
  {
    icon: Stethoscope,
    title: "Diagnosis & Assessment",
    description:
      "Diagnostic criteria, active stand test protocol, tilt table testing, and differentiating POTS from other forms of orthostatic intolerance.",
    href: "/diagnosis",
    tag: "Clinical Skills",
  },
  {
    icon: Activity,
    title: "Evidence-Based Management",
    description:
      "Stepwise treatment algorithms covering lifestyle, physical reconditioning, dietary measures, and pharmacological options with supporting evidence.",
    href: "/management",
    tag: "Treatment",
  },
  {
    icon: Users,
    title: "Multidisciplinary Approach",
    description:
      "How to build an effective MDT — involving cardiology, neurology, physiotherapy, psychology, and dietetics for holistic POTS care.",
    href: "/training",
    tag: "Team Care",
  },
];

const testimonials = [
  {
    quote:
      "Dr Lim's training transformed how our cardiology team approaches POTS. We now diagnose in clinic the same day rather than months of inconclusive workup.",
    name: "Dr Sarah Mitchell",
    role: "Consultant Physician, Manchester",
  },
  {
    quote:
      "The active stand test protocol taught here is now standard practice across our CCU. Simple to implement, highly informative.",
    name: "Dr James Okafor",
    role: "GP with Special Interest in Cardiology, London",
  },
  {
    quote:
      "A comprehensive, evidence-based resource. I now feel confident diagnosing and managing POTS without defaulting to unnecessary specialist referrals.",
    name: "Dr Priya Mehta",
    role: "SpR Cardiology, Birmingham",
  },
];

const whyThisMatters = [
  "POTS affects approximately 1% of the UK population",
  "Average diagnostic delay is 4–6 years",
  "Most patients present first to primary care",
  "Misdiagnosis leads to unnecessary tests and anxiety disorder labels",
  "Correct diagnosis and treatment can be life-changing",
  "GPs and non-specialists can diagnose POTS in clinic today",
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-oxford relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-cambridge via-transparent to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge bg-cambridge/20 text-cambridge border border-cambridge/30 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-6">
                Physician Training Resource
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Master POTS.<br />
                <span className="text-cambridge">Transform</span> Lives.
              </h1>
              <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-lg">
                Postural Orthostatic Tachycardia Syndrome affects 1 in 100 people,
                yet most go undiagnosed for years. This platform equips physicians
                with the knowledge and skills to diagnose and manage POTS
                with confidence — starting today.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/training" className="btn-primary">
                  Start Training <ArrowRight className="w-4 h-4 inline ml-2" />
                </Link>
                <Link href="/diagnosis" className="btn-outline-white">
                  Diagnostic Protocol
                </Link>
              </div>

              {/* Credentials banner */}
              <div className="mt-10 flex items-center gap-4 bg-white/10 rounded-xl px-5 py-4 backdrop-blur-sm">
                <div className="bg-cambridge rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                  BL
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Dr Boon Lim MBBS MD FRCP</p>
                  <p className="text-gray-400 text-xs">
                    Consultant Cardiologist & Electrophysiologist · Imperial College Healthcare NHS Trust<br />
                    Honorary Senior Lecturer · Imperial College London
                  </p>
                </div>
              </div>
            </div>

            {/* Hero stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.value}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cambridge/40 transition-colors"
                >
                  <p className="text-3xl font-bold text-cambridge">{stat.value}</p>
                  <p className="text-white font-semibold mt-1 text-sm">{stat.label}</p>
                  <p className="text-gray-400 text-xs mt-1">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-cambridge/10 border-y border-cambridge/20 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 text-sm text-gray-600 font-medium">
            <span className="flex items-center gap-2">
              <Award className="w-4 h-4 text-cambridge" />
              Imperial College Healthcare NHS Trust
            </span>
            <span className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-cambridge" />
              Honorary Senior Lecturer, Imperial College London
            </span>
            <span className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cambridge" />
              Evidence-based clinical guidelines
            </span>
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4 text-cambridge" />
              Trusted by NHS clinicians nationwide
            </span>
          </div>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge mb-4">The Problem</span>
              <h2 className="section-heading">
                POTS is common, yet<br />
                <span className="text-cambridge">widely missed</span>
              </h2>
              <p className="section-subheading">
                Most patients with POTS wait years for a correct diagnosis.
                They are frequently labelled with anxiety, deconditioning, or
                functional disorders. The knowledge to diagnose POTS exists —
                it simply needs to be more widely taught.
              </p>
              <ul className="mt-6 space-y-3">
                {whyThisMatters.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-cambridge flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about-pots" className="btn-primary mt-8">
                Learn About POTS <ArrowRight className="w-4 h-4 inline ml-2" />
              </Link>
            </div>
            <div className="bg-oxford rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6 text-cambridge">
                The Diagnostic Journey
              </h3>
              {[
                {
                  step: "1",
                  label: "Symptoms Begin",
                  desc: "Palpitations, lightheadedness, fatigue, brain fog on standing",
                  color: "bg-gray-600",
                },
                {
                  step: "2",
                  label: "GP Consultations",
                  desc: "Multiple visits — often dismissed or labelled anxiety",
                  color: "bg-red-500/70",
                },
                {
                  step: "3",
                  label: "Specialist Referrals",
                  desc: "Cardiology, neurology, psychiatry — often inconclusive",
                  color: "bg-yellow-500/70",
                },
                {
                  step: "4",
                  label: "~5 Year Delay",
                  desc: "Average time to correct POTS diagnosis",
                  color: "bg-orange-500/70",
                },
                {
                  step: "✓",
                  label: "Correct Diagnosis",
                  desc: "With this training: achievable in a single consultation",
                  color: "bg-cambridge",
                },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4 mb-4">
                  <div
                    className={`${item.color} rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                  >
                    {item.step}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{item.label}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING MODULES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge mb-4">Training Modules</span>
            <h2 className="section-heading">
              Everything you need to know about POTS
            </h2>
            <p className="section-subheading">
              Comprehensive, evidence-based modules designed for time-pressed
              clinicians. From first principles to complex management.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyModules.map((module) => (
              <Link key={module.title} href={module.href} className="group">
                <div className="card h-full group-hover:border-cambridge border border-transparent transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-cambridge/10 rounded-xl p-3 flex-shrink-0 group-hover:bg-cambridge/20 transition-colors">
                      <module.icon className="w-6 h-6 text-cambridge" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-semibold text-cambridge uppercase tracking-wider">
                        {module.tag}
                      </span>
                      <h3 className="font-bold text-oxford mt-1 mb-2">
                        {module.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {module.description}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-cambridge flex-shrink-0 mt-1 transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/training" className="btn-primary">
              View All Training Modules <ArrowRight className="w-4 h-4 inline ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* ACTIVE STAND TEST QUICK REFERENCE */}
      <section className="py-16 bg-oxford">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-cambridge/20 text-cambridge border border-cambridge/30 text-sm font-semibold px-3 py-1 rounded-full mb-6">
                Quick Reference
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Diagnose POTS Today<br />
                <span className="text-cambridge">in Your Clinic</span>
              </h2>
              <p className="mt-4 text-gray-300 leading-relaxed">
                The NASA Lean Test / Active Stand Test is the cornerstone of POTS
                diagnosis. It requires no specialist equipment — just a couch,
                a pulse oximeter, and 10 minutes.
              </p>
              <Link href="/diagnosis" className="btn-primary mt-6">
                Full Diagnostic Protocol <ArrowRight className="w-4 h-4 inline ml-2" />
              </Link>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-cambridge font-bold text-lg mb-4">
                Active Stand Test — At a Glance
              </h3>
              {[
                { step: "1", text: "Patient supine for ≥10 minutes. Record HR & BP." },
                { step: "2", text: "Patient stands. Record HR & BP at 1, 3, 5, 10 minutes." },
                { step: "3", text: "POTS: sustained HR rise ≥30 bpm (adults) or ≥40 bpm (adolescents)." },
                { step: "4", text: "HR rise sustained for ≥10 minutes without orthostatic hypotension." },
                { step: "5", text: "Note: HR criteria alone is not sufficient — symptoms must be present." },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3 mb-3">
                  <div className="bg-cambridge rounded-full w-7 h-7 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {item.step}
                  </div>
                  <p className="text-gray-200 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
              <div className="mt-4 bg-cambridge/20 border border-cambridge/30 rounded-xl p-3">
                <p className="text-cambridge text-sm font-semibold">
                  ⚠️ Always exclude orthostatic hypotension first (BP drop ≥20/10 mmHg)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge mb-4">From Clinicians</span>
            <h2 className="section-heading">What physicians are saying</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card border border-gray-100">
                <div className="text-cambridge text-4xl font-serif leading-none mb-3">&ldquo;</div>
                <p className="text-gray-700 italic leading-relaxed text-sm">{t.quote}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="font-semibold text-oxford text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POTSUK PARTNERSHIP */}
      <section className="py-12 bg-cambridge/10 border-y border-cambridge/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-oxford">
                Patient resources in partnership with POTS UK
              </h3>
              <p className="text-gray-600 mt-1 text-sm">
                Share evidence-based educational materials directly with your
                patients — signposting to the POTS UK educational programme.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Link href="/resources" className="btn-primary">
                Patient Resources
              </Link>
              <a
                href="https://www.potsuk.org"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
              >
                Visit POTS UK <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge mb-4">Get Started</span>
          <h2 className="section-heading">
            Ready to become a POTS expert?
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Whether you&apos;re a GP, cardiologist, neurologist, or allied health
            professional — this free training resource gives you everything you
            need to identify and help POTS patients in your practice.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/training" className="btn-primary">
              Start Free Training <ArrowRight className="w-4 h-4 inline ml-2" />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Refer a Patient
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
