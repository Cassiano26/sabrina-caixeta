'use client';

import FooterWave from './svg/FooterWave';
import FooterLogo from './svg/FooterLogo';
import InstagramIcon from './svg/InstagramIcon';
import EmailIcon from './svg/EmailIcon';
import WhatsAppIcon from './svg/WhatsAppIcon';
import DiretoLogo from './svg/DiretoLogo';

export default function Footer() {
  return (
    <footer className="relative w-full">
      {/* Main Footer Content */}
      <div className="relative container bg-[#529E93] lg:bg-[#FAEFE6]">
        {/* Wave Background */}
        <FooterWave className="absolute top-0 h-auto w-full lg:top-auto lg:bottom-0" />

        {/* Footer Content */}
        <div className="relative z-10 px-4 pt-40 pb-8 lg:px-26 lg:pt-60">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Logo Section */}
            <div className="flex flex-col items-center lg:items-start">
              <FooterLogo className="h-auto w-40 lg:w-49" />
            </div>

            {/* Contact Section */}
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="mb-6 text-[20px] font-semibold text-white">
                Contato:
              </h3>
              <div className="flex flex-col gap-4">
                <a
                  href="https://instagram.com/sabrinacaixeta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white transition-opacity hover:opacity-80"
                >
                  <InstagramIcon className="h-7.5 w-7.5" />
                  <span className="text-[16px]">@sabrinacaixeta</span>
                </a>
                <a
                  href="mailto:sabrinafisio@gmail.com"
                  className="flex items-center gap-3 text-white transition-opacity hover:opacity-80"
                >
                  <EmailIcon className="h-5.25 w-8" />
                  <span className="text-[16px]">sabrinafisio@gmail.com</span>
                </a>
                <a
                  href="https://wa.me/41774547051"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white transition-opacity hover:opacity-80"
                >
                  <WhatsAppIcon className="h-8 w-8" />
                  <span className="text-[16px]">+41 77 454 70 51</span>
                </a>
              </div>
            </div>

            {/* Certifications Section */}
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="mb-6 text-[20px] font-semibold text-white">
                Certificações:
              </h3>
              <div className="flex items-center gap-4">
                {/* Certification badges - placeholder shapes */}
                {[1, 2, 3, 4].map(i => (
                  <div
                    key={i}
                    className="h-12 w-10 rounded-full bg-[#1C6B70] lg:h-16 lg:w-14"
                    style={{
                      borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container flex flex-col items-center justify-between gap-4 bg-white px-4 py-4 lg:flex-row lg:px-26">
        <p className="text-[20px] font-semibold text-[#313131]">
          ©Sabrina Caixeta | 2026
        </p>
        <div className="flex items-center gap-2 text-[20px] text-[#313131]">
          <span className="mt-1">Desenvolvido por</span>
          <DiretoLogo className="h-auto w-28" />
        </div>
      </div>
    </footer>
  );
}
