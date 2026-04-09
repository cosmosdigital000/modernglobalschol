import Link from 'next/link';
import Image from 'next/image';
import { footerQuickLinks, footerAcademics, footerContact, socials } from '../data/schoolData';

export default function Footer() {
  return (
    <footer className="bg-[#0F1F4A] text-white">
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/20">
              <Image src="/latestimage/logo_modern_global_school_dalmiyanagar_dehri.jpeg" alt="Logo" width={48} height={48} className="object-cover w-full h-full" />
            </div>
            <div>
              <div className="font-bold text-white text-sm leading-tight">Modern Global School</div>
              <div className="text-[11px] text-blue-300">CBSE Affiliated</div>
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-5">
            Nurturing young minds with quality education, strong values, and holistic development since 2005. Dalmiyanagar, Rohtas, Bihar.
          </p>
          <div className="flex gap-3">
            {socials.map(({ i, l }) => (
              <a key={i} href={l} target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F97316] flex items-center justify-center transition-colors text-sm">
                <i className={i} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-base mb-4 pb-2 border-b border-white/10">Quick Links</h4>
          <ul className="space-y-2">
            {footerQuickLinks.map(({ l, h }) => (
              <li key={l}>
                <Link href={h} className="text-gray-400 hover:text-[#F97316] text-sm transition-colors flex items-center gap-1.5">
                  <i className="fas fa-chevron-right text-[10px] text-[#F97316]" />{l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Academics */}
        <div>
          <h4 className="text-white font-bold text-base mb-4 pb-2 border-b border-white/10">Academics</h4>
          <ul className="space-y-2">
            {footerAcademics.map(({ l }) => (
              <li key={l} className="text-gray-400 text-sm flex items-center gap-1.5">
                <i className="fas fa-chevron-right text-[10px] text-[#F97316]" />{l}
              </li>
            ))}
          </ul>
          <div className="mt-5 p-3 bg-[#F97316]/10 rounded-xl border border-[#F97316]/20">
            <p className="text-xs text-[#FED7AA] font-semibold mb-1">Admissions Open 2026–27</p>
            <p className="text-xs text-gray-400">Playgroup to Class VIII • CBSE Curriculum</p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold text-base mb-4 pb-2 border-b border-white/10">Contact Us</h4>
          <ul className="space-y-3">
            {footerContact.map(({ icon, text }) => (
              <li key={text} className="flex items-start gap-3 text-sm text-gray-400">
                <i className={`${icon} text-[#F97316] mt-0.5 w-4 shrink-0`} />
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer"
            className="mt-5 flex items-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-colors w-fit">
            <i className="fab fa-whatsapp text-lg" /> WhatsApp Us
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>© 2025 Modern Global School, Dalmiyanagar. All rights reserved.</p>
          <p>CBSE Affiliated | Rohtas, Bihar 821305</p>
        </div>
      </div>
    </footer>
  );
}
