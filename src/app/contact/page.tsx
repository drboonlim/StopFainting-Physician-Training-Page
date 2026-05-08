"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertTriangle } from "lucide-react";

const referralCriteria = [
  "Refractory POTS not improving with 3–6 months of optimised first-line management",
  "Diagnostic uncertainty following active stand testing",
  "Suspected hyperadrenergic POTS (standing catecholamines measurement required)",
  "Coexistent complex arrhythmia or structural heart disease",
  "Post-COVID POTS with severe functional impairment",
  "Autoimmune POTS requiring immunotherapy assessment",
  "Complex comorbidities: hEDS, MCAS, significant psychological comorbidity",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    referrerName: "",
    referrerRole: "",
    referrerEmail: "",
    referrerHospital: "",
    patientInitials: "",
    patientDOB: "",
    patientGender: "",
    clinicalSummary: "",
    investigations: "",
    currentMedication: "",
    reasonForReferral: "",
    urgency: "routine",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-oxford py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-cambridge/20 text-cambridge border border-cambridge/30 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Referrals & Contact
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Refer a Patient
            </h1>
            <p className="mt-4 text-gray-300 text-lg leading-relaxed">
              Dr Boon Lim accepts specialist referrals for complex POTS and
              dysautonomia at Imperial College Healthcare NHS Trust. Complete
              the form below or send a referral letter.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Details */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="section-heading text-2xl mb-4">Contact Details</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-cambridge flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-oxford text-sm">Clinic Location</p>
                      <p className="text-gray-600 text-sm">
                        Imperial College Healthcare NHS Trust<br />
                        Hammersmith Hospital<br />
                        Du Cane Road, London W12 0HS
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-cambridge flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-oxford text-sm">Email</p>
                      <a
                        href="mailto:contact@stopfainting.com"
                        className="text-cambridge text-sm hover:text-cambridge-dark transition-colors"
                      >
                        contact@stopfainting.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-cambridge flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-oxford text-sm">Clinic Hours</p>
                      <p className="text-gray-600 text-sm">
                        Monday – Friday<br />
                        NHS & Private appointments available
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Referral Criteria */}
              <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
                <h3 className="font-bold text-oxford mb-3">
                  When to Refer to Dr Lim
                </h3>
                <ul className="space-y-2">
                  {referralCriteria.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-cambridge flex-shrink-0 mt-0.5" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              {/* NHS note */}
              <div className="bg-cambridge-pale border border-cambridge/20 rounded-2xl p-4">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-cambridge flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    <strong>NHS Referrals:</strong> Please use the electronic
                    referral system (ERS/eReferral) for NHS referrals. Select
                    &ldquo;Cardiology — Syncope/Dysautonomia&rdquo; at Imperial
                    College Healthcare NHS Trust.
                  </p>
                </div>
              </div>
            </div>

            {/* Referral Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-oxford mb-2">
                    Referral Received
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Thank you for your referral. Our team will review the
                    details and contact you within 3 working days to arrange
                    an appointment.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-bold text-oxford">
                    Online Referral Form
                  </h2>

                  {/* Referrer details */}
                  <div className="card border border-gray-200">
                    <h3 className="font-semibold text-oxford mb-4 text-sm uppercase tracking-wider text-gray-500">
                      Referring Clinician
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="referrerName"
                          required
                          value={form.referrerName}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cambridge focus:border-cambridge"
                          placeholder="Dr Jane Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Role / Specialty *
                        </label>
                        <input
                          type="text"
                          name="referrerRole"
                          required
                          value={form.referrerRole}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cambridge focus:border-cambridge"
                          placeholder="GP / SpR Cardiology / etc."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="referrerEmail"
                          required
                          value={form.referrerEmail}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cambridge focus:border-cambridge"
                          placeholder="jane.smith@nhs.net"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Hospital / Practice
                        </label>
                        <input
                          type="text"
                          name="referrerHospital"
                          value={form.referrerHospital}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cambridge focus:border-cambridge"
                          placeholder="St Mary's Hospital"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Patient details */}
                  <div className="card border border-gray-200">
                    <h3 className="font-semibold text-oxford mb-4 text-sm uppercase tracking-wider text-gray-500">
                      Patient Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Initials *
                        </label>
                        <input
                          type="text"
                          name="patientInitials"
                          required
                          value={form.patientInitials}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cambridge focus:border-cambridge"
                          placeholder="J.S."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Date of Birth *
                        </label>
                        <input
                          type="date"
                          name="patientDOB"
                          required
                          value={form.patientDOB}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cambridge focus:border-cambridge"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Gender
                        </label>
                        <select
                          name="patientGender"
                          value={form.patientGender}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cambridge focus:border-cambridge"
                        >
                          <option value="">Select</option>
                          <option value="female">Female</option>
                          <option value="male">Male</option>
                          <option value="non-binary">Non-binary</option>
                          <option value="prefer-not-to-say">Prefer not to say</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Clinical details */}
                  <div className="card border border-gray-200">
                    <h3 className="font-semibold text-oxford mb-4 text-sm uppercase tracking-wider text-gray-500">
                      Clinical Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Clinical Summary *
                        </label>
                        <textarea
                          name="clinicalSummary"
                          required
                          value={form.clinicalSummary}
                          onChange={handleChange}
                          rows={4}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cambridge focus:border-cambridge resize-none"
                          placeholder="Brief history, symptom duration, active stand test result (HR supine/standing), BP findings..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Investigations Completed
                        </label>
                        <textarea
                          name="investigations"
                          value={form.investigations}
                          onChange={handleChange}
                          rows={3}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cambridge focus:border-cambridge resize-none"
                          placeholder="ECG, bloods, echo, Holter results..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Current Medication
                        </label>
                        <textarea
                          name="currentMedication"
                          value={form.currentMedication}
                          onChange={handleChange}
                          rows={2}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cambridge focus:border-cambridge resize-none"
                          placeholder="Fludrocortisone 0.1mg OD, propranolol 10mg TDS..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Reason for Specialist Referral *
                        </label>
                        <textarea
                          name="reasonForReferral"
                          required
                          value={form.reasonForReferral}
                          onChange={handleChange}
                          rows={3}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cambridge focus:border-cambridge resize-none"
                          placeholder="Refractory to 6 months of first-line treatment, diagnostic uncertainty..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Urgency
                        </label>
                        <select
                          name="urgency"
                          value={form.urgency}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cambridge focus:border-cambridge"
                        >
                          <option value="routine">Routine (6–8 weeks)</option>
                          <option value="soon">Soon (2–4 weeks)</option>
                          <option value="urgent">Urgent (within 2 weeks)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 text-sm text-gray-600">
                    <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <p>
                      This form is for <strong>non-urgent referrals only</strong>.
                      For urgent clinical concerns or emergencies, please contact
                      the appropriate NHS pathway or call 999.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-cambridge text-white py-3 rounded-lg font-semibold hover:bg-cambridge-dark transition-colors text-sm"
                  >
                    Submit Referral
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
