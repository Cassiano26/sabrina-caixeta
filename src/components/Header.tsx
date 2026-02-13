'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { GreenShape } from './svg/GreenShape';
import { LogoHeader } from './svg/LogoHeader';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      let isHidden = false;

      ScrollTrigger.create({
        start: 'top -100',
        end: 'max',
        onUpdate: self => {
          const shouldHide = self.direction === 1;

          if (shouldHide !== isHidden) {
            isHidden = shouldHide;
            gsap.to(headerRef.current, {
              y: shouldHide ? '-100%' : 0,
              duration: 0.4,
              ease: 'power2.out',
            });
          }
        },
      });
    },
    { scope: headerRef },
  );

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 z-50 h-40 w-full bg-transparent"
    >
      <div className="relative container flex justify-between px-26.5 py-2.5">
        {/* Logo */}
        <LogoHeader />

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <a
            href="#"
            data-text="Atendimentos"
            className="nav-link text-[20px] text-white"
          >
            Atendimentos
          </a>
          <a
            href="#"
            data-text="Como funciona?"
            className="nav-link text-[20px] text-white"
          >
            Como funciona?
          </a>
          <a
            href="#"
            data-text="Sobre mim"
            className="nav-link text-[20px] text-white"
          >
            Sobre mim
          </a>
          <a
            href="#"
            data-text="Contato"
            className="nav-link text-[20px] text-white"
          >
            Contato
          </a>
          <button className="group flex items-center gap-1 text-[20px] text-white">
            <span className="nav-link" data-text="PT">
              PT
            </span>
            <svg
              className="transition-transform duration-200 ease-in-out group-hover:rotate-180"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.5L6 6.5L11 1.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </nav>

        {/* Wave SVG */}
        <div className="absolute top-0 left-0 -z-10 w-full">
          <GreenShape width="100%" height="auto" />
        </div>
      </div>
    </header>
  );
}
