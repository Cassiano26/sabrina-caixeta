'use client';

import FooterWave from './svg/FooterWave';
import FooterWaveMobile from './svg/FooterWaveMobile';
import FooterLogo from './svg/FooterLogo';
import InstagramIcon from './svg/InstagramIcon';
import EmailIcon from './svg/EmailIcon';
import WhatsAppIcon from './svg/WhatsAppIcon';
import DiretoLogo from './svg/DiretoLogo';
import UspLogo from './svg/UspLogo';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="contacts" className="relative w-full overflow-hidden">
      {/* Main Footer Content */}
      <div className="relative container overflow-hidden bg-[#FAEFE6]">
        {/* Wave Background */}
        <FooterWave className="pointer-events-none absolute top-0 h-0 w-full lg:top-auto lg:bottom-0 lg:h-auto" />
        <FooterWaveMobile className="pointer-events-none absolute top-0 -mt-30 h-auto w-full sm:-mt-70 lg:h-0" />

        {/* Green background below the wave - mobile only */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[30%] bg-[#529E93] lg:hidden" />

        {/* Footer Content */}
        <div className="relative z-10 px-4 pt-60 pb-8 lg:px-26">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Logo Section */}
            <div className="flex flex-col items-center lg:items-start">
              <FooterLogo className="h-auto w-35 xl:w-49" />
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
                  className="flex items-center gap-3 text-white transition-all hover:scale-105"
                >
                  <InstagramIcon className="h-7.5 w-7.5" />
                  <span className="text-[16px]">@sabrinacaixeta</span>
                </a>
                <a
                  href="mailto:sabrinafisio@gmail.com"
                  className="flex items-center gap-3 text-white transition-all hover:scale-105"
                >
                  <EmailIcon className="h-5.25 w-8" />
                  <span className="text-[16px]">sabrinafisio@gmail.com</span>
                </a>
                <a
                  href="https://wa.me/41774547051?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20saber%20mais%20sobre%20seus%20atendimentos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white transition-all hover:scale-105"
                >
                  <WhatsAppIcon className="h-8 w-8" />
                  <span className="text-[16px]">+41 77 454 70 51</span>
                </a>
              </div>
            </div>

            {/* Certifications Section */}
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="mb-1 text-[20px] font-semibold text-white lg:mb-6">
                Certificações:
              </h3>
              <div className="flex h-full w-full items-start justify-center gap-4 lg:flex-col">
                <UspLogo className="h-[40px] w-[100px]" />
                <div className="relative h-[40px] w-[100px]">
                  <Image
                    src="/images/certifications/international.png"
                    alt="Certificação Internacional"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="relative h-[40px] w-[100px]">
                  <Image
                    src="/images/certifications/ministeriocienciainnovacionuniversidades1.jpg"
                    alt="Ministerio de Ciencia, Innovación y Universidades"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col items-center justify-between bg-white px-4 py-4 lg:flex-row lg:px-26">
        <p className="text-[14px] font-semibold text-[#313131]">
          ©Sabrina Caixeta | 2026
        </p>
        <div className="flex items-center gap-2 text-[14px] text-[#313131]">
          <span className="mt-1">Desenvolvido por</span>
          <DiretoLogo className="h-auto w-16" />
        </div>
      </div>
    </footer>
  );
}
