import Link from "next/link";
import { Heart, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-oxford text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-cambridge rounded-lg p-1.5">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-lg">StopFainting</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              The definitive POTS training platform for physicians and
              healthcare professionals, led by Dr Boon Lim, Consultant
              Cardiologist & Electrophysiologist.
            </p>
          </div>

          {/* Clinical */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Clinical
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about-pots" className="hover:text-cambridge transition-colors">About POTS</Link></li>
              <li><Link href="/diagnosis" className="hover:text-cambridge transition-colors">Diagnosis</Link></li>
              <li><Link href="/management" className="hover:text-cambridge transition-colors">Management</Link></li>
              <li><Link href="/training" className="hover:text-cambridge transition-colors">Physician Training</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/tools" className="hover:text-cambridge transition-colors">Clinical Tools</Link></li>
              <li><Link href="/resources" className="hover:text-cambridge transition-colors">Patient Resources</Link></li>
              <li>
                <a
                  href="https://www.potsuk.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cambridge transition-colors flex items-center gap-1"
                >
                  POTS UK <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.potsuk.org/managingpots/educational-programme-for-people-with-pots/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cambridge transition-colors flex items-center gap-1"
                >
                  POTS Education Programme <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li><Link href="/contact" className="hover:text-cambridge transition-colors">Refer a Patient</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:contact@stopfainting.com"
                  className="hover:text-cambridge transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  contact@stopfainting.com
                </a>
              </li>
              <li className="text-gray-400 text-xs mt-3">
                Dr Boon Lim MBBS MD FRCP<br />
                Consultant Cardiologist &<br />
                Electrophysiologist<br />
                Imperial College Healthcare NHS Trust
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-oxford-light mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} StopFainting / Dr Boon Lim. All rights reserved.</p>
          <p className="text-center">
            This site is for healthcare professional education only. Clinical decisions must be based on individual patient assessment.
          </p>
        </div>
      </div>
    </footer>
  );
}
