'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SliderDecorativeShape from './svg/SliderDecorativeShape';

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    id: 1,
    number: '1.',
    title: 'Agendamento rápido',
    description:
      'Escolha um horário que funcione para você. Nossa agenda é flexível e pensada para se encaixar na sua rotina, onde quer que você esteja.',
    image: '/images/slider/image1.png',
  },
  {
    id: 2,
    number: '2.',
    title: 'Avaliação personalizada',
    description:
      'Vamos conversar sobre o que você está sentindo e como posso te ajudar. Um papo leve, sem compromisso, só para você entender se faz sentido para seu momento.',
    image: '/images/slider/image2.png',
  },
  {
    id: 3,
    number: '3.',
    title: 'Tratamento contínuo',
    description:
      'Juntas, construímos um plano de cuidado adaptado às suas necessidades, com acompanhamento constante e suporte em cada etapa da sua jornada.',
    image: '/images/slider/image3.png',
  },
];

export default function Slider() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const scrollTlRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !horizontalRef.current) {
        return;
      }

      if (scrollTlRef.current) {
        scrollTlRef.current.kill();
      }

      ScrollTrigger.refresh();

      const getContainerWidth = () => window.innerWidth;

      scrollTlRef.current = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${getContainerWidth() * (slides.length - 1)}`,
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      const getScrollDistance = () => getContainerWidth() * (slides.length - 1);

      scrollTlRef.current.to(
        horizontalRef.current,
        {
          x: () => -getScrollDistance(),
          ease: 'none',
          duration: Math.max(1, slides.length - 1),
        },
        0,
      );

      slides.forEach((_, index) => {
        const segmentStart = Math.max(0, index - 0.9);
        const isLastElement = index === slides.length - 1;
        const animationDuration = isLastElement ? 1 : 2;

        scrollTlRef.current?.fromTo(
          `.slide-${index} .slide-image img`,
          { scale: 1 },
          { scale: 1.1, ease: 'none', duration: animationDuration },
          segmentStart,
        );
      });

      return () => {
        scrollTlRef.current?.scrollTrigger?.kill(true);
        scrollTlRef.current?.kill();
      };
    },
    {
      scope: sectionRef,
      dependencies: [],
    },
  );

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-[#FAEFE6]"
    >
      {/* Section Title - Fixed position */}
      <h2 className="absolute top-6 left-6 z-20 text-[24px] leading-tight font-semibold text-[#313131] lg:top-22 lg:left-26 lg:text-[36px]">
        Como viveremos
        <br />
        essa jornada juntas?
      </h2>

      <div
        ref={horizontalRef}
        className="flex h-full"
        style={{ width: `calc(${slides.length} * 100vw)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide-${index} relative flex h-full w-screen shrink-0 items-center`}
          >
            {/* Decorative peach shape - background */}
            <SliderDecorativeShape className="absolute top-0 left-0 z-0 hidden h-auto w-90 -translate-x-1/4 lg:block lg:w-175" />

            <div className="relative z-10 grid h-full w-full grid-cols-1 items-center px-6 lg:grid-cols-2 lg:px-26">
              {/* Left Content */}
              <div className="left-content order-2 flex h-full flex-col text-[#313131] lg:order-1 lg:justify-end lg:py-22">
                <div>
                  {/* Step Number */}
                  <span className="mb-4 text-[64px] font-light text-[#313131] lg:mb-6">
                    {slide.number}
                  </span>

                  {/* Step Title */}
                  <h3 className="mb-4 text-[32px] lg:mb-6 lg:text-[40px]">
                    {slide.title}
                  </h3>

                  {/* Step Description */}
                  <p className="max-w-4/5 text-[16px] leading-tight lg:max-w-md lg:text-[20px]">
                    {slide.description}
                  </p>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative order-1 mt-12 flex h-75 items-center justify-center lg:order-2 lg:mt-50 lg:h-125">
                {/* Main Image */}
                <div className="slide-image relative z-10 h-full w-full overflow-hidden">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
