'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import HeroDecorativeShape from './svg/HeroDecorativeShape';

export default function Hero() {
  const scope = useRef(null);
  const leftContentRef = useRef(null);
  const rightImageRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.fromTo(
        leftContentRef.current,
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: 'power3.out',
        },
      );

      tl.fromTo(
        rightImageRef.current,
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
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
      className="relative container flex min-h-screen w-full items-center overflow-x-clip bg-[#FAEFE6] xl:overflow-visible"
    >
      <div className="z-10 mt-28 grid h-full grid-cols-1 items-center gap-12 px-4 lg:mt-0 lg:grid-cols-2 lg:px-26">
        {/* Left Content */}
        <div
          ref={leftContentRef}
          className="flex flex-col justify-center text-[#313131]"
        >
          {/* Icon and Title */}
          <div className="flex items-start gap-3">
            <h1 className="text-[32px] leading-tight font-normal lg:text-[42px]">
              Saúde íntima com acolhimento e propósito,
              <br />
              <span className="font-bold">no conforto da sua casa,</span> e em
              Português.
            </h1>
          </div>

          {/* Description */}
          <p className="mt-2.5 text-[16px] lg:text-[20px]">
            Fisioterapia pélvica e obstétrica{' '}
            <span className="font-semibold">100% online</span>, com acolhimento
            cultural e suporte em português: para brasileiras que querem se
            sentir seguras e cuidadas, em qualquer lugar.
          </p>

          {/* CTA Button */}
          <a
            href="https://wa.me/41774547051?text=Ol%C3%A1%21%20Vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20agendar%20uma%20conversa."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 w-fit rounded-full border border-[#1C6B70] bg-[#57CC98] px-8 py-3 text-[16px] text-white transition-all duration-300 hover:scale-105 hover:shadow-lg lg:text-[20px]"
          >
            Agende uma conversa
          </a>
        </div>

        {/* Right Image */}
        <div
          ref={rightImageRef}
          className="relative z-10 flex h-65.75 items-center justify-center lg:h-118.25"
        >
          <Image
            src="/images/heroImage.png"
            alt="Mulher em consulta de fisioterapia online"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <HeroDecorativeShape
        width={600}
        height={'auto'}
        className="pointer-events-none absolute top-0 right-0 z-0 -mr-30"
      />
    </section>
  );
}
