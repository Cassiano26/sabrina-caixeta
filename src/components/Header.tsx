'use client';

import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { GreenShape } from './svg/GreenShape';
import { LogoHeader } from './svg/LogoHeader';
import { GreenShapeMobile } from './svg/GreenShapeMobile';
import { MenuIcon } from './svg/MenuIcon';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useGSAP(
    () => {
      let isHidden = false;

      scrollTriggerRef.current = ScrollTrigger.create({
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

  // --- Mobile menu accessibility + scroll lock ---
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      scrollTriggerRef.current?.disable();
    } else {
      document.body.style.overflow = '';
      scrollTriggerRef.current?.enable();
    }
  }, [isMenuOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 z-50 h-40 w-full bg-transparent"
      >
        <div className="relative mx-auto flex max-w-7xl justify-between px-7.75 py-2.5 lg:px-26.5">
          {/* Logo */}
          <a href="/">
            <LogoHeader className="z-50 h-11.75 w-29.75 md:h-15 md:w-38" />
          </a>

          {/* Mobile Menu Icon */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen(v => !v)}
              className="relative z-50 p-2"
            >
              <MenuIcon width={28} height={18} isOpen={isMenuOpen} />
            </button>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#services"
              data-text="Atendimentos"
              className="nav-link text-[12px] text-white lg:text-[20px]"
            >
              Atendimentos
            </a>
            <a
              href="#how-it-works"
              data-text="Como funciona?"
              className="nav-link text-[12px] text-white lg:text-[20px]"
            >
              Como funciona?
            </a>
            <a
              href="#about-me"
              data-text="Sobre mim"
              className="nav-link text-[12px] text-white lg:text-[20px]"
            >
              Sobre mim
            </a>
            <a
              href="#contacts"
              data-text="Contato"
              className="nav-link text-[12px] text-white lg:text-[20px]"
            >
              Contato
            </a>
            <button className="group flex items-center gap-1 text-[12px] text-white lg:text-[20px]">
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

          {/* Wave SVG Desktop */}
          <div className="absolute top-0 left-0 -z-10 hidden w-full md:block">
            <GreenShape width="100%" height="auto" />
          </div>

          {/* Wave SVG Mobile */}
          <div className="absolute top-0 left-0 -z-10 w-full md:hidden">
            <GreenShapeMobile width="100%" height="auto" />
          </div>
        </div>
      </header>

      {/* Mobile menu overlay - OUTSIDE header to avoid transform stacking context */}
      <div
        id="mobile-menu"
        aria-hidden={!isMenuOpen}
        role="dialog"
        aria-modal="true"
        className={`fixed inset-0 z-40 transition-opacity duration-300 md:hidden ${isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
      >
        <div
          className={`absolute inset-0 flex flex-col items-start justify-center bg-[#529E93] px-8 transition-transform duration-300 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
        >
          <nav className="flex w-full flex-col gap-6 text-white">
            <a
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className="nav-link text-2xl font-semibold transition-all duration-300"
              style={{
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(12px)',
              }}
            >
              Atendimentos
            </a>
            <a
              href="#how-it-works"
              onClick={() => setIsMenuOpen(false)}
              className="nav-link text-2xl font-semibold transition-all duration-300"
              style={{
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(12px)',
                transitionDelay: isMenuOpen ? '60ms' : '0ms',
              }}
            >
              Como funciona?
            </a>
            <a
              href="#about-me"
              onClick={() => setIsMenuOpen(false)}
              className="nav-link text-2xl font-semibold transition-all duration-300"
              style={{
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(12px)',
                transitionDelay: isMenuOpen ? '120ms' : '0ms',
              }}
            >
              Sobre mim
            </a>
            <a
              href="#contacts"
              onClick={() => setIsMenuOpen(false)}
              className="nav-link text-2xl font-semibold transition-all duration-300"
              style={{
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(12px)',
                transitionDelay: isMenuOpen ? '180ms' : '0ms',
              }}
            >
              Contato
            </a>

            <button
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 text-xl text-white transition-all duration-300"
              style={{
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(12px)',
                transitionDelay: isMenuOpen ? '240ms' : '0ms',
              }}
            >
              <span data-text="PT">PT</span>
              <svg
                className="transition-transform"
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
        </div>
      </div>
    </>
  );
}
