"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, RotateCcw, CheckCircle, AlertTriangle, XCircle, Info, Printer } from "lucide-react";

type Reading = { hr: string; sbp: string; dbp: string; symptoms: string };

const emptyReading = (): Reading => ({ hr: "", sbp: "", dbp: "", symptoms: "" });

const TIMEPOINTS = ["Supine (baseline)", "1 min standing", "3 min standing", "5 min standing", "10 min standing"];

function calcResult(readings: Reading[], patientAge: string) {
  const supine = readings[0];
  const supineHR = parseFloat(supine.hr);
  if (isNaN(supineHR)) return null;

  // Use 60 as baseline if resting HR <60
  const baselineHR = supineHR < 60 ? 60 : supineHR;
  const isAdolescent = patientAge === "adolescent";
  const hrThreshold = isAdolescent ? 40 : 30;

  // Find max HR rise across all standing readings
  let maxHR = 0;
  let maxHRTime = "";
  let sustainedRise = false;

  const standingReadings = readings.slice(1).filter((r) => r.hr !== "");
  standingReadings.forEach((r, i) => {
    const hr = parseFloat(r.hr);
    if (!isNaN(hr) && hr > maxHR) {
      maxHR = hr;
      maxHRTime = TIMEPOINTS[i + 1];
    }
  });

  const hrRise = maxHR - baselineHR;

  // Check if rise is sustained at 10 min
  const tenMin = readings[4];
  if (tenMin.hr !== "") {
    const tenMinHR = parseFloat(tenMin.hr);
    if (!isNaN(tenMinHR)) {
      sustainedRise = tenMinHR - baselineHR >= hrThreshold;
    }
  }

  // Check orthostatic hypotension (any standing reading)
  let maxSBPDrop = 0;
  let maxDBPDrop = 0;
  const supiSBP = parseFloat(supine.sbp);
  const supiDBP = parseFloat(supine.dbp);

  standingReadings.forEach((r) => {
    const sbp = parseFloat(r.sbp);
    const dbp = parseFloat(r.dbp);
    if (!isNaN(sbp) && !isNaN(supiSBP)) {
      maxSBPDrop = Math.max(maxSBPDrop, supiSBP - sbp);
    }
    if (!isNaN(dbp) && !isNaN(supiDBP)) {
      maxDBPDrop = Math.max(maxDBPDrop, supiDBP - dbp);
    }
  });

  const hasOH = maxSBPDrop >= 20 || maxDBPDrop >= 10;
  const meetsHRCriteria = hrRise >= hrThreshold;

  return {
    supineHR,
    baselineHR,
    maxHR,
    maxHRTime,
    hrRise,
    hrThreshold,
    sustainedRise,
    hasOH,
    maxSBPDrop,
    maxDBPDrop,
    meetsHRCriteria,
    isAdolescent,
  };
}

type Result = NonNullable<ReturnType<typeof calcResult>>;

function ResultPanel({ result, hasSymptoms }: { result: Result; hasSymptoms: boolean }) {
  const potsDiagnosis = result.meetsHRCriteria && result.sustainedRise && !result.hasOH && hasSymptoms;
  const probablePots = result.meetsHRCriteria && !result.hasOH && hasSymptoms && !result.sustainedRise;
  const orthostatic = result.hasOH;

  return (
    <div className="space-y-4">
      {/* Main result */}
      <div
        className={`rounded-2xl p-6 border-2 ${
          potsDiagnosis
            ? "bg-green-50 border-green-400"
            : probablePots
            ? "bg-amber-50 border-amber-400"
            : orthostatic
            ? "bg-orange-50 border-orange-400"
            : "bg-gray-50 border-gray-300"
        }`}
      >
        <div className="flex items-center gap-3 mb-3">
          {potsDiagnosis ? (
            <CheckCircle className="w-7 h-7 text-green-600" />
          ) : probablePots ? (
            <AlertTriangle className="w-7 h-7 text-amber-500" />
          ) : orthostatic ? (
            <AlertTriangle className="w-7 h-7 text-orange-500" />
          ) : (
            <XCircle className="w-7 h-7 text-gray-400" />
          )}
          <h3 className="font-bold text-xl text-oxford">
            {potsDiagnosis
              ? "POTS — Diagnostic Criteria Met"
              : probablePots
              ? "Probable POTS — Incomplete Data"
              : orthostatic
              ? "Orthostatic Hypotension Detected"
              : "POTS Criteria NOT Met"}
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
          <div className="bg-white rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-cambridge">
              {result.hrRise > 0 ? `+${Math.round(result.hrRise)}` : "—"}
            </p>
            <p className="text-xs text-gray-500 mt-1">bpm rise</p>
            <p className="text-xs font-semibold text-gray-400">threshold ≥{result.hrThreshold}</p>
          </div>
          <div className="bg-white rounded-xl p-3 text-center">
            <p className={`text-2xl font-bold ${result.meetsHRCriteria ? "text-green-600" : "text-red-500"}`}>
              {result.meetsHRCriteria ? "✓" : "✗"}
            </p>
            <p className="text-xs text-gray-500 mt-1">HR criterion</p>
            <p className="text-xs font-semibold text-gray-400">≥{result.hrThreshold} bpm</p>
          </div>
          <div className="bg-white rounded-xl p-3 text-center">
            <p className={`text-2xl font-bold ${result.sustainedRise ? "text-green-600" : "text-amber-500"}`}>
              {result.sustainedRise ? "✓" : "?"}
            </p>
            <p className="text-xs text-gray-500 mt-1">Sustained 10 min</p>
            <p className="text-xs font-semibold text-gray-400">
              {result.sustainedRise ? "Yes" : "Not confirmed"}
            </p>
          </div>
          <div className="bg-white rounded-xl p-3 text-center">
            <p className={`text-2xl font-bold ${result.hasOH ? "text-red-500" : "text-green-600"}`}>
              {result.hasOH ? "✗" : "✓"}
            </p>
            <p className="text-xs text-gray-500 mt-1">No ortho. hypotension</p>
            <p className="text-xs font-semibold text-gray-400">
              {result.hasOH
                ? `SBP ↓${Math.round(result.maxSBPDrop)} / DBP ↓${Math.round(result.maxDBPDrop)}`
                : "BP stable"}
            </p>
          </div>
        </div>
      </div>

      {/* Interpretation */}
      <div className="card border border-gray-200">
        <h4 className="font-bold text-oxford mb-3">Interpretation</h4>
        <ul className="space-y-2 text-sm text-gray-700">
          {result.supineHR < 60 && (
            <li className="flex items-start gap-2">
              <Info className="w-4 h-4 text-cambridge flex-shrink-0 mt-0.5" />
              Resting HR {Math.round(result.supineHR)} bpm — baseline set to 60 bpm (per POTS UK/diagnostic protocol).
            </li>
          )}
          <li className="flex items-start gap-2">
            <div className={`w-2 h-2 rounded-full flex-shrink-0 mt-1.5 ${result.meetsHRCriteria ? "bg-green-500" : "bg-red-400"}`} />
            HR rose from {Math.round(result.baselineHR)} bpm (baseline) to {Math.round(result.maxHR)} bpm at {result.maxHRTime} — a rise of {Math.round(result.hrRise)} bpm ({result.meetsHRCriteria ? "meets" : "does not meet"} ≥{result.hrThreshold} bpm threshold for {result.isAdolescent ? "adolescents" : "adults"}).
          </li>
          {result.hasOH && (
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-orange-400 flex-shrink-0 mt-1.5" />
              Orthostatic hypotension present: max SBP drop {Math.round(result.maxSBPDrop)} mmHg, max DBP drop {Math.round(result.maxDBPDrop)} mmHg. This excludes POTS as the primary diagnosis, but OH and POTS can coexist.
            </li>
          )}
          {!hasSymptoms && result.meetsHRCriteria && (
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0 mt-1.5" />
              No symptoms reported during the test. HR criterion met but POTS requires orthostatic symptoms — consider repeating on a symptomatic day.
            </li>
          )}
          {potsDiagnosis && (
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <strong>All POTS diagnostic criteria met.</strong> Proceed to subtype assessment and commence management.
            </li>
          )}
        </ul>
      </div>

      {/* Next steps */}
      <div className="bg-oxford rounded-2xl p-5 text-white">
        <h4 className="font-bold text-cambridge mb-3">Recommended Next Steps</h4>
        <ul className="space-y-2 text-sm text-gray-300">
          {potsDiagnosis && (
            <>
              <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cambridge flex-shrink-0 mt-1.5" />Inform patient — reassure POTS is not life-threatening and highly treatable.</li>
              <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cambridge flex-shrink-0 mt-1.5" />Request: FBC, U&E, TFTs, ferritin, fasting glucose, ECG, coeliac antibodies.</li>
              <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cambridge flex-shrink-0 mt-1.5" />Commence salt/fluid loading + compression + physical counter-manoeuvres.</li>
              <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cambridge flex-shrink-0 mt-1.5" />Refer to POTS UK 13-module educational programme (co-created with Dr Boon Lim).</li>
              <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cambridge flex-shrink-0 mt-1.5" />Review in 6–8 weeks. Consider Levine exercise protocol referral to physiotherapy.</li>
            </>
          )}
          {probablePots && (
            <>
              <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0 mt-1.5" />HR criterion met but 10-minute reading absent — repeat test with full duration.</li>
              <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0 mt-1.5" />Clinical suspicion remains high — consider provisional POTS management while awaiting confirmation.</li>
            </>
          )}
          {orthostatic && (
            <>
              <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0 mt-1.5" />Orthostatic hypotension confirmed — assess for neurogenic vs hypovolaemic cause.</li>
              <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0 mt-1.5" />Review medications (antihypertensives, diuretics, alpha-blockers).</li>
              <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0 mt-1.5" />If HR also rises ≥{result.hrThreshold} bpm: OH + POTS overlap — manage both.</li>
            </>
          )}
          {!potsDiagnosis && !probablePots && !orthostatic && (
            <>
              <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0 mt-1.5" />POTS criteria not met on this occasion — note: thresholds need not be met at every visit.</li>
              <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0 mt-1.5" />If clinical suspicion persists, repeat on a symptomatic day or refer for formal tilt table testing.</li>
              <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0 mt-1.5" />Consider alternative diagnoses: vasovagal syncope, inappropriate sinus tachycardia, anxiety disorder.</li>
            </>
          )}
        </ul>
      </div>

      {/* Print note */}
      <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 rounded-xl p-3">
        <Printer className="w-4 h-4" />
        Use your browser&apos;s print function (Ctrl+P / Cmd+P) to save or print this result for the patient record.
      </div>
    </div>
  );
}

export default function ActiveStandTestPage() {
  const [patientAge, setPatientAge] = useState<"adult" | "adolescent">("adult");
  const [readings, setReadings] = useState<Reading[]>(TIMEPOINTS.map(() => emptyReading()));
  const [hasSymptoms, setHasSymptoms] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState(false);

  const result = showResult ? calcResult(readings, patientAge) : null;

  const updateReading = (idx: number, field: keyof Reading, value: string) => {
    const updated = [...readings];
    updated[idx] = { ...updated[idx], [field]: value };
    setReadings(updated);
    setShowResult(false);
  };

  const reset = () => {
    setReadings(TIMEPOINTS.map(() => emptyReading()));
    setHasSymptoms(null);
    setShowResult(false);
  };

  const canCompute = readings[0].hr !== "" && readings.slice(1).some((r) => r.hr !== "") && hasSymptoms !== null;

  return (
    <>
      {/* HERO */}
      <section className="bg-oxford py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-cambridge/20 text-cambridge border border-cambridge/30 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Interactive Clinical Tool
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Active Stand Test Calculator
            </h1>
            <p className="mt-3 text-gray-300 leading-relaxed">
              Enter HR and BP readings from the active stand test. The calculator
              applies POTS diagnostic criteria and generates a clinical interpretation
              with recommended next steps.
            </p>
            <p className="mt-2 text-xs text-gray-400">
              For educational use. Clinical decisions must be based on individual patient assessment.
              All data entered stays in your browser — nothing is transmitted or stored.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* INPUT PANEL */}
            <div className="lg:col-span-2 space-y-5">
              {/* Patient age */}
              <div className="card border border-gray-200">
                <h3 className="font-bold text-oxford mb-3 text-sm uppercase tracking-wider text-gray-500">
                  Patient Age Group
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {(["adult", "adolescent"] as const).map((a) => (
                    <button
                      key={a}
                      onClick={() => { setPatientAge(a); setShowResult(false); }}
                      className={`py-2 px-3 rounded-xl border-2 text-sm font-semibold transition-all ${
                        patientAge === a
                          ? "border-cambridge bg-cambridge text-white"
                          : "border-gray-200 text-gray-600 hover:border-cambridge/50"
                      }`}
                    >
                      {a === "adult" ? "Adult (≥18)" : "Adolescent (12–17)"}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  HR threshold: {patientAge === "adult" ? "≥30 bpm" : "≥40 bpm"}
                </p>
              </div>

              {/* Readings table */}
              <div className="card border border-gray-200">
                <h3 className="font-bold text-oxford mb-3 text-sm uppercase tracking-wider text-gray-500">
                  HR &amp; BP Readings
                </h3>
                <div className="space-y-3">
                  {TIMEPOINTS.map((tp, i) => (
                    <div key={tp}>
                      <p className={`text-xs font-bold mb-1.5 ${i === 0 ? "text-gray-500" : "text-cambridge"}`}>
                        {tp}
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        <div>
                          <label className="text-xs text-gray-400">HR (bpm)</label>
                          <input
                            type="number"
                            placeholder="e.g. 72"
                            value={readings[i].hr}
                            onChange={(e) => updateReading(i, "hr", e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-cambridge mt-0.5"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-gray-400">SBP (mmHg)</label>
                          <input
                            type="number"
                            placeholder="e.g. 120"
                            value={readings[i].sbp}
                            onChange={(e) => updateReading(i, "sbp", e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-cambridge mt-0.5"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-gray-400">DBP (mmHg)</label>
                          <input
                            type="number"
                            placeholder="e.g. 78"
                            value={readings[i].dbp}
                            onChange={(e) => updateReading(i, "dbp", e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-cambridge mt-0.5"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Symptoms */}
              <div className="card border border-gray-200">
                <h3 className="font-bold text-oxford mb-3 text-sm uppercase tracking-wider text-gray-500">
                  Symptoms on Standing?
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[{ val: true, label: "Yes — symptoms present" }, { val: false, label: "No — asymptomatic" }].map((opt) => (
                    <button
                      key={String(opt.val)}
                      onClick={() => { setHasSymptoms(opt.val); setShowResult(false); }}
                      className={`py-2 px-3 rounded-xl border-2 text-xs font-semibold transition-all ${
                        hasSymptoms === opt.val
                          ? opt.val ? "border-green-500 bg-green-50 text-green-700" : "border-gray-400 bg-gray-100 text-gray-700"
                          : "border-gray-200 text-gray-500 hover:border-cambridge/50"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Symptoms required for POTS diagnosis (palpitations, dizziness, presyncope)
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={() => setShowResult(true)}
                  disabled={!canCompute}
                  className={`flex-1 py-3 rounded-xl font-semibold text-sm transition-all ${
                    canCompute
                      ? "bg-cambridge text-white hover:bg-cambridge-dark"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Calculate Result
                </button>
                <button
                  onClick={reset}
                  className="p-3 rounded-xl border border-gray-300 text-gray-500 hover:border-gray-400 transition-all"
                  title="Reset"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Protocol reminder */}
              <div className="bg-cambridge-pale rounded-xl p-4 border border-cambridge/20 text-xs text-gray-600 space-y-1">
                <p className="font-bold text-oxford text-sm mb-2">Protocol reminder</p>
                <p>• Patient supine ≥10 min before standing</p>
                <p>• Avoid caffeine, large meals, vasoactive meds on test day</p>
                <p>• Record HR at 1, 3, 5 and 10 minutes standing</p>
                <p>• Record BP at 1 and 3 minutes minimum</p>
                <p>• Also calculate MALMO Score alongside</p>
              </div>
            </div>

            {/* RESULT PANEL */}
            <div className="lg:col-span-3">
              {!showResult ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="bg-cambridge/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-cambridge" />
                  </div>
                  <h3 className="text-xl font-bold text-oxford mb-2">
                    Enter readings to get started
                  </h3>
                  <p className="text-gray-500 max-w-sm text-sm">
                    Fill in at least the supine baseline HR and one standing HR reading,
                    then press <strong>Calculate Result</strong>.
                  </p>
                  <div className="mt-6 bg-oxford rounded-2xl p-5 text-white text-left max-w-sm w-full">
                    <p className="text-cambridge font-bold text-sm mb-2">Minimum required</p>
                    <ul className="space-y-1 text-xs text-gray-300">
                      <li>• Supine HR (mandatory)</li>
                      <li>• At least one standing HR reading</li>
                      <li>• Symptoms answer (yes/no)</li>
                    </ul>
                    <p className="text-cambridge font-bold text-sm mt-3 mb-2">Recommended</p>
                    <ul className="space-y-1 text-xs text-gray-300">
                      <li>• BP at supine + 1 min standing (to exclude OH)</li>
                      <li>• 10-min standing HR (to confirm sustained rise)</li>
                    </ul>
                  </div>
                </div>
              ) : result ? (
                <ResultPanel result={result} hasSymptoms={!!hasSymptoms} />
              ) : (
                <div className="card border border-amber-200 bg-amber-50">
                  <p className="text-amber-700">Please enter at least a supine HR and one standing reading.</p>
                </div>
              )}
            </div>
          </div>

          {/* Links */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link href="/diagnosis" className="btn-secondary">
              Full Diagnosis Protocol
            </Link>
            <Link href="/management" className="btn-primary">
              Management Guidelines <ArrowRight className="w-4 h-4 inline ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
