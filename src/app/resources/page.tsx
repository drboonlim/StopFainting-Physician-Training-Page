import Link from "next/link";
import { ExternalLink, Download, BookOpen, Users, Heart, Smartphone, ArrowRight } from "lucide-react";

// 13-module educational programme co-created by POTS UK & Dr Boon Lim
const educationalProgrammeModules = [
  "Introduction to the programme",
  "What is PoTS? — diagnostic criteria explained",
  "Managing your GP appointment",
  "Active Stand Test and MALMO Scores",
  "Salt, fluids and diet",
  "Temperature regulation, brain fog and sleep",
  "Compression clothing",
  "Posture and postural counter-manoeuvres",
  "PoTS and exercise",
  "Pacing — energy management strategies",
  "PoTS and mental health",
  "Techniques for calming your nervous system",
  "About PoTS UK",
];

const potsukResources = [
  {
    title: "POTS UK Educational Programme — Co-created with Dr Boon Lim",
    description:
      "A 13-module video series developed collaboratively by POTS UK and Dr Boon Lim. Designed to provide 'knowledge, support and guidance whilst awaiting your first appointment.' Recommended pacing: no more than two modules at a time. Includes downloadable resources with each module.",
    url: "https://www.potsuk.org/managingpots/educational-programme-for-people-with-pots/",
    type: "Educational Programme",
    recommended: true,
    drBoonLim: true,
  },
  {
    title: "What is PoTS? — POTS UK",
    description:
      "Patient-friendly explanation of PoTS as 'an abnormality of the functioning of the autonomic (involuntary) nervous system.' Covers how the sympathetic nervous system produces excessive norepinephrine release on standing, and why normal blood vessel narrowing mechanisms malfunction in PoTS.",
    url: "https://www.potsuk.org/about-pots/what-is-pots/",
    type: "Patient Information",
    recommended: true,
    drBoonLim: false,
  },
  {
    title: "Managing PoTS — POTS UK",
    description:
      "Practical guidance covering diet, fluids, exercise, temperature regulation, sleep, compression, fatigue management, cognitive support, and mental health. Also covers pharmacological options: midodrine, ivabradine, beta-blockers, pyridostigmine, fludrocortisone, and IV fluid therapy.",
    url: "https://www.potsuk.org/managingpots/",
    type: "Self-Management",
    recommended: false,
    drBoonLim: false,
  },
  {
    title: "POTS UK Support Network",
    description:
      "Peer support forums, online groups, and community connections for people living with PoTS. POTS UK is a registered charity (No. 1159813). Also offers the PoTS Passport — a portable medical information tool for healthcare interactions.",
    url: "https://www.potsuk.org/support/",
    type: "Support",
    recommended: false,
    drBoonLim: false,
  },
];

const clinicianResources = [
  {
    title: "Sheldon RS et al — 2015 Heart Rhythm Society Expert Consensus",
    description:
      "The landmark expert consensus statement on diagnosis and treatment of POTS, including diagnostic criteria and management algorithm.",
    url: "https://www.heartrhythmjournal.com/article/S1547-5271(15)00392-X/fulltext",
    type: "Guideline",
  },
  {
    title: "Raj SR et al — POTS Review (Circulation, 2013)",
    description:
      "Comprehensive review covering pathophysiology, subtypes, diagnosis, and treatment. Essential reading for any clinician managing POTS.",
    url: "https://www.ahajournals.org/doi/10.1161/CIRCULATIONAHA.111.012229",
    type: "Review Article",
  },
  {
    title: "Fu Q & Levine BD — Exercise and POTS",
    description:
      "The Levine exercise protocol — the most evidence-based physical reconditioning programme for POTS. Published results show 72% no longer meet POTS criteria at 3 months.",
    url: "https://pubmed.ncbi.nlm.nih.gov/23083790/",
    type: "Clinical Trial",
  },
  {
    title: "Post-COVID POTS — Blitshteyn & Whitelaw (2021)",
    description:
      "Characterisation of POTS as a post-COVID sequela. Pathophysiology, prevalence estimates, and management recommendations.",
    url: "https://pubmed.ncbi.nlm.nih.gov/34090488/",
    type: "Research",
  },
  {
    title: "Low PA — Composite Autonomic Scoring Scale",
    description:
      "Methodology behind the COMPASS-31 questionnaire used to quantify autonomic symptom burden in POTS.",
    url: "https://pubmed.ncbi.nlm.nih.gov/7572249/",
    type: "Assessment Tool",
  },
];

const patientLeaflets = [
  {
    title: "Understanding Your POTS Diagnosis",
    description:
      "A printable one-page patient information sheet. Covers what POTS is, why symptoms occur, and the basics of self-management.",
    format: "PDF",
    comingSoon: false,
  },
  {
    title: "Active Stand Test — Patient Guide",
    description:
      "Instructions for patients to monitor their own postural heart rate at home. For use between clinic appointments.",
    format: "PDF",
    comingSoon: false,
  },
  {
    title: "Fluid & Salt Loading Guide",
    description:
      "Practical guide for patients on how to implement salt and fluid loading at home, including food sources of sodium.",
    format: "PDF",
    comingSoon: false,
  },
  {
    title: "Exercise Rehabilitation Guide",
    description:
      "A simplified version of the Levine Protocol adapted for patient self-use, with week-by-week progression.",
    format: "PDF",
    comingSoon: true,
  },
  {
    title: "Medication Information Sheets",
    description:
      "Patient information leaflets for the most common POTS medications: fludrocortisone, propranolol, midodrine, ivabradine.",
    format: "PDF",
    comingSoon: true,
  },
];

const apps = [
  {
    name: "StopFainting POTS App",
    platform: "iOS & Android",
    description:
      "Dr Boon Lim's dedicated POTS biofeedback and HRV monitoring app. Features include HRV assessment using the phone camera flash, resonance frequency breathing training, and postural HR/BP tracking.",
    status: "Coming Soon",
    highlight: true,
  },
  {
    name: "POTS UK App",
    platform: "iOS & Android",
    description:
      "Official app from POTS UK for symptom tracking, educational content, and community support.",
    status: "Available",
    highlight: false,
  },
  {
    name: "Kardia (AliveCor)",
    platform: "iOS & Android",
    description:
      "Medical-grade ECG recording on a smartphone. Useful for documenting tachycardia episodes and rhythm assessment.",
    status: "Available",
    highlight: false,
  },
];

const supportOrgs = [
  {
    name: "StopFainting.com",
    url: "https://www.stopfainting.com",
    description: "Dr Boon Lim's patient education website for syncope and POTS. Produced by the Imperial Syncope Diagnostic Unit, supported by Imperial Health Charity. Covers conditions including POTS, vasovagal syncope, orthostatic hypotension, long COVID, and hypermobility/dysautonomia.",
  },
  {
    name: "POTS UK",
    url: "https://www.potsuk.org",
    description: "The UK's leading POTS patient charity (Reg. No. 1159813). Education, peer support, and advocacy. Home of the 13-module Educational Programme co-created with Dr Boon Lim.",
  },
  {
    name: "Dysautonomia International",
    url: "https://www.dysautonomiainternational.org",
    description: "International organisation for autonomic disorders. Research funding and patient resources.",
  },
  {
    name: "Ehlers-Danlos Support UK",
    url: "https://www.ehlers-danlos.org",
    description: "Support for hEDS which frequently co-occurs with POTS.",
  },
  {
    name: "STARS (Syncope Trust And Reflex anoxic Seizures)",
    url: "https://www.heartrhythmsuk.org",
    description: "UK charity supporting people with syncope and related conditions.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-oxford py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-cambridge/20 text-cambridge border border-cambridge/30 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Resources
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Patient & Clinician Resources
            </h1>
            <p className="mt-4 text-gray-300 text-lg leading-relaxed">
              Evidence-based resources for patients living with POTS and the
              clinicians who care for them. Share directly with your patients
              at the point of diagnosis.
            </p>
          </div>
        </div>
      </section>

      {/* POTS UK RESOURCES */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-cambridge/10 rounded-xl p-3">
              <Users className="w-6 h-6 text-cambridge" />
            </div>
            <div>
              <span className="badge mb-1">Patient Education</span>
              <h2 className="section-heading text-2xl">
                POTS UK — Patient Resources
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {potsukResources.map((res) => (
              <a
                key={res.title}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card border border-gray-200 hover:border-cambridge transition-all group"
              >
                <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
                  <span className="badge text-xs">{res.type}</span>
                  <div className="flex gap-2">
                    {res.drBoonLim && (
                      <span className="text-xs bg-oxford text-cambridge font-bold px-2 py-1 rounded-full">
                        Co-created by Dr Boon Lim
                      </span>
                    )}
                    {res.recommended && (
                      <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-1 rounded-full">
                        ★ Recommended
                      </span>
                    )}
                  </div>
                </div>
                <h3 className="font-bold text-oxford mt-2 group-hover:text-cambridge transition-colors">
                  {res.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  {res.description}
                </p>
                {res.drBoonLim && (
                  <div className="mt-3 bg-cambridge-pale border border-cambridge/20 rounded-lg p-3">
                    <p className="text-xs font-semibold text-oxford mb-1">13 Modules include:</p>
                    <ul className="grid grid-cols-1 gap-0.5">
                      {educationalProgrammeModules.map((mod, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-center gap-1.5">
                          <span className="text-cambridge font-bold">{i + 1}.</span> {mod}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="mt-3 flex items-center gap-1 text-cambridge text-sm font-semibold">
                  Visit POTS UK <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://www.potsuk.org"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Visit POTS UK Website <ExternalLink className="w-4 h-4 inline ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* PATIENT LEAFLETS */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-oxford/10 rounded-xl p-3">
              <Download className="w-6 h-6 text-oxford" />
            </div>
            <div>
              <span className="badge mb-1">Downloadable</span>
              <h2 className="section-heading text-2xl">Patient Information Leaflets</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {patientLeaflets.map((leaflet) => (
              <div
                key={leaflet.title}
                className={`card border ${
                  leaflet.comingSoon ? "border-gray-200 opacity-75" : "border-cambridge/30"
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="badge text-xs">{leaflet.format}</span>
                  {leaflet.comingSoon && (
                    <span className="text-xs text-gray-400 font-medium">Coming soon</span>
                  )}
                </div>
                <h3 className="font-bold text-oxford mt-2">{leaflet.title}</h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  {leaflet.description}
                </p>
                {!leaflet.comingSoon && (
                  <button className="mt-4 flex items-center gap-2 text-cambridge font-semibold text-sm hover:text-cambridge-dark transition-colors">
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLINICIAN RESOURCES */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-cambridge/10 rounded-xl p-3">
              <BookOpen className="w-6 h-6 text-cambridge" />
            </div>
            <div>
              <span className="badge mb-1">Evidence Base</span>
              <h2 className="section-heading text-2xl">Key Clinical References</h2>
            </div>
          </div>
          <div className="space-y-4">
            {clinicianResources.map((res) => (
              <a
                key={res.title}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card border border-gray-200 hover:border-cambridge transition-all group flex items-start gap-4"
              >
                <div className="bg-oxford/10 rounded-lg p-2 flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-oxford" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="badge text-xs">{res.type}</span>
                  </div>
                  <h3 className="font-bold text-oxford group-hover:text-cambridge transition-colors text-sm">
                    {res.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                    {res.description}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cambridge flex-shrink-0 mt-1 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* APPS */}
      <section className="py-14 bg-oxford">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-cambridge/20 rounded-xl p-3">
              <Smartphone className="w-6 h-6 text-cambridge" />
            </div>
            <div>
              <span className="inline-block bg-cambridge/20 text-cambridge border border-cambridge/30 text-xs font-semibold px-3 py-1 rounded-full mb-1">
                Digital Tools
              </span>
              <h2 className="text-3xl font-bold text-white">Apps & Digital Tools</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {apps.map((app) => (
              <div
                key={app.name}
                className={`rounded-2xl p-6 border ${
                  app.highlight
                    ? "bg-white/10 border-cambridge/40"
                    : "bg-white/5 border-white/10"
                }`}
              >
                {app.highlight && (
                  <span className="inline-block bg-cambridge text-white text-xs font-bold px-2 py-1 rounded-full mb-3">
                    Dr Boon Lim App
                  </span>
                )}
                <h3 className="font-bold text-white">{app.name}</h3>
                <p className="text-cambridge text-sm mt-1">{app.platform}</p>
                <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                  {app.description}
                </p>
                <div className="mt-4">
                  <span
                    className={`text-sm font-semibold px-3 py-1 rounded-full ${
                      app.status === "Available"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-cambridge/20 text-cambridge"
                    }`}
                  >
                    {app.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT ORGANISATIONS */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-cambridge/10 rounded-xl p-3">
              <Heart className="w-6 h-6 text-cambridge" />
            </div>
            <div>
              <span className="badge mb-1">Support</span>
              <h2 className="section-heading text-2xl">Support Organisations</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {supportOrgs.map((org) => (
              <a
                key={org.name}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card border border-gray-200 hover:border-cambridge transition-all group"
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-oxford group-hover:text-cambridge transition-colors">
                    {org.name}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cambridge transition-colors" />
                </div>
                <p className="text-gray-600 text-sm mt-2">{org.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-cambridge/10 border-y border-cambridge/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-oxford mb-3">
            Need to refer a patient with POTS?
          </h2>
          <p className="text-gray-600 mb-5 max-w-xl mx-auto text-sm">
            Dr Boon Lim accepts referrals for complex POTS cases at Imperial
            College Healthcare NHS Trust. Use the form below or send a referral
            letter.
          </p>
          <Link href="/contact" className="btn-primary">
            Refer a Patient <ArrowRight className="w-4 h-4 inline ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
