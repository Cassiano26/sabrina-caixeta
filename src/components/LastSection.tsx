'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LastSection() {
  const scope = useRef(null);
  const leftImageRef = useRef(null);
  const rightContentRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scope.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.fromTo(
        leftImageRef.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power3.out',
        },
      );

      tl.fromTo(
        rightContentRef.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power3.out',
        },
        0,
      );
    },
    { scope: scope },
  );

  return (
    <section
      ref={scope}
      className="relative container flex w-full items-center overflow-x-clip bg-[#FAEFE6] py-25 xl:overflow-visible"
    >
      <div className="z-10 grid h-full w-full grid-cols-1 items-center justify-center gap-6 px-4 lg:grid-cols-2 lg:px-80">
        {/* Left Image */}
        <div
          ref={leftImageRef}
          className="relative flex h-109.5 items-center justify-center lg:h-118.25"
        >
          <Image
            src="/images/lastSectionImage.png"
            alt="Sabrina cuidando da sua melhor versão"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Right Content */}
        <div
          ref={rightContentRef}
          className="mx-auto flex max-w-90 flex-col justify-center text-[#313131]"
        >
          {/* Icon and Title */}
          <div className="relative">
            <h2 className="text-[24px] leading-tight font-semibold">
              Pronta para cuidar da sua melhor versão?
            </h2>
          </div>

          {/* Description */}
          <p className="mt-2.5 text-[16px] leading-tight">
            Sem compromisso, sem pressão. Vamos conversar honestamente sobre
            como posso te ajudar!
          </p>

          {/* CTA Button */}
          <a
            href="https://wa.me/41774547051?text=Ol%C3%A1%21%20Vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20falar%20contigo%20sobre%20seus%20servi%C3%A7os."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 w-fit rounded-full border border-[#1C6B70] bg-[#57CC98] px-8 py-3 text-[16px] font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg lg:text-[18px]"
          >
            Fale comigo no WhatsApp
          </a>
        </div>
      </div>

      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-[#A8E6D3] opacity-30 blur-3xl" />
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#F5C89A] opacity-20 blur-3xl" />
      </div>
    </section>
  );
}
