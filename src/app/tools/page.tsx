import Link from "next/link";
import { ArrowRight, Calculator, FileText, Pill } from "lucide-react";

const tools = [
  {
    icon: Calculator,
    title: "Active Stand Test Calculator",
    description:
      "Enter HR and BP readings from the active stand test. Applies POTS diagnostic criteria, checks for orthostatic hypotension, and generates a clinical interpretation with next steps.",
    href: "/tools/active-stand-test",
    tag: "Interactive · Real-time",
    highlight: true,
  },
  {
    icon: FileText,
    title: "POTS Quick Reference Card",
    description:
      "Printable one-page clinical summary — diagnostic criteria, active stand test protocol, symptom list, stepwise management, and referral criteria. Print for your desk or save as PDF.",
    href: "/tools/quick-reference",
    tag: "Printable · PDF",
    highlight: false,
  },
  {
    icon: Pill,
    title: "Medication Guide",
    description:
      "Filter POTS medications by subtype (neuropathic, hyperadrenergic, hypovolaemic, autoimmune) and treatment line. Includes mechanism, dosing, evidence grade, and key cautions.",
    href: "/tools/medication-guide",
    tag: "Interactive · Filterable",
    highlight: false,
  },
];

export default function ToolsPage() {
  return (
    <>
      <section className="bg-oxford py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block bg-cambridge/20 text-cambridge border border-cambridge/30 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Clinical Tools
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              POTS Clinical Tools
            </h1>
            <p className="mt-4 text-gray-300 text-lg leading-relaxed">
              Interactive tools and reference materials to support POTS diagnosis
              and management in your clinic. All tools are free and run entirely
              in your browser — no data is transmitted or stored.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Link key={tool.title} href={tool.href} className="group">
                <div className={`card h-full group-hover:shadow-lg transition-all border-2 ${
                  tool.highlight ? "border-cambridge" : "border-transparent hover:border-cambridge/40"
                }`}>
                  <div className={`rounded-xl p-3 inline-flex mb-4 ${
                    tool.highlight ? "bg-cambridge/20" : "bg-gray-100 group-hover:bg-cambridge/10"
                  } transition-colors`}>
                    <tool.icon className={`w-6 h-6 ${tool.highlight ? "text-cambridge" : "text-gray-600 group-hover:text-cambridge"} transition-colors`} />
                  </div>
                  {tool.highlight && (
                    <span className="badge mb-2 block w-fit">Most used</span>
                  )}
                  <h2 className="font-bold text-oxford text-lg mb-2 group-hover:text-cambridge transition-colors">
                    {tool.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {tool.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-400 font-medium">{tool.tag}</span>
                    <span className="text-cambridge font-semibold text-sm flex items-center gap-1">
                      Open tool <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
