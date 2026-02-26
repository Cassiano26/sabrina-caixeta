'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StickyDecorativeShape from './svg/StickyDecorativeShape';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: 'Fisioterapia Pélvica',
    image: '/services/pelvisServiceImage.png',
    description:
      'A Fisioterapia Pélvica é um tratamento especializado que fortalece e reequilibra os músculos do assoalho pélvico — região essencial para funções como urinar, evacuar, manter a postura e viver uma vida sexual saudável. Com técnicas modernas e exercícios personalizados, o objetivo é restaurar o bem-estar, reduzir dores e melhorar a qualidade de vida em todas as fases: gravidez, pós-parto, menopausa ou após cirurgias. Seja para prevenção ou reabilitação, a fisioterapia pélvica oferece um cuidado respeitoso, discreto e voltado para o seu conforto e autonomia.',
  },
  {
    id: 2,
    title: 'Fisioterapia Obstétrica',
    image: '/services/obstetricsServiceImage.png',
    description:
      'A Fisioterapia Obstétrica Pré-natal Online oferece um cuidado especializado para acompanhar a mulher durante a gestação, promovendo conforto, equilíbrio e preparo para o parto — tudo isso no aconchego da sua casa, onde quer que você esteja no mundo.\nNos encontros virtuais personalizados, você aprende exercícios seguros, técnicas de respiração, relaxamento e fortalecimento do assoalho pélvico que aliviam dores, melhoram a postura e favorecem um parto mais tranquilo e consciente, em um atendimento que une autonomia, bem-estar e conexão, respeitando seu ritmo e sua realidade — sempre com suporte acolhedor e baseado em evidências.',
  },
  {
    id: 3,
    title: 'Reabilitação Pós-parto',
    image: '/services/rehabilitationServiceImage.png',
    description:
      'O pós-parto é um novo começo — para o corpo e para a mulher.\nA Fisioterapia de Reabilitação Pós-parto Online oferece um acompanhamento cuidadoso e personalizado, ajudando na recuperação da força, da postura e do bem-estar físico e emocional após o nascimento do bebê.\nPor meio de encontros virtuais, são trabalhados exercícios seguros, respiração, fortalecimento do assoalho pélvico e consciência corporal, respeitando o ritmo e a realidade de cada mãe.\nÉ um cuidado que vai além da reabilitação — é sobre reconhecer-se, recuperar-se e redescobrir o próprio corpo com leveza e presença.',
  },
  {
    id: 4,
    title: 'Consultoria de amamentação',
    image: '/services/breastServiceImage.png',
    description:
      'Consultoria de Amamentação Online para Brasileiras no Exterior Amamentar longe do Brasil pode ser desafiador, mas você não precisa passar por isso sozinha. Ofereço consultoria de amamentação online, em português, para brasileiras expatriadas, com acompanhamento em todas as fases — da gestação ao desmame. Com ampla experiência no atendimento a famílias brasileiras no exterior e certificação IBCLC (International Board Certified Lactation Consultant), o suporte é personalizado, baseado em evidências científicas e realizado com acolhimento, respeito e sensibilidade cultural, onde quer que você esteja.',
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.fromTo(
        sectionRef.current,
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="services"
      className="relative container flex min-h-screen w-full flex-col overflow-x-clip overflow-y-clip bg-[#FAEFE6] xl:overflow-visible"
    >
      <StickyDecorativeShape className="pointer-events-none absolute top-0 left-0 z-0 lg:hidden" />
      <div
        ref={sectionRef}
        className="flex flex-1 flex-col justify-center gap-12 px-4 py-4 lg:justify-normal lg:gap-0 lg:px-50 lg:py-11"
      >
        {/* Header */}
        <div className="flex flex-col items-center justify-center gap-5 text-center">
          <h2 className="text-[24px] font-semibold text-[#313131] lg:text-[36px]">
            Atendimentos
          </h2>
          <a
            href="https://wa.me/41774547051?text=Ol%C3%A1%21%20Vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20entender%20melhor%20seus%20atendimentos."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden w-fit rounded-full border border-[#1C6B70] bg-[#57CC98] px-8 py-3 text-[16px] text-white transition-all duration-300 hover:scale-105 hover:shadow-lg lg:block lg:text-[20px]"
          >
            Saiba mais
          </a>
        </div>

        {/* Services Grid */}
        <div className="flex items-center lg:flex-1">
          <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {services.map(service => (
              <div
                key={service.id}
                className="relative flex flex-col items-center justify-center"
              >
                {/* Service Image */}
                <div className="relative hidden h-48 w-full lg:block lg:h-75">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Service Name and Dropdown */}
                <button
                  onClick={() => setSelectedService(service.id)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-full bg-[#FAC196] px-6 py-3 text-[#313131] transition-all duration-300 hover:bg-[#57CC98] hover:text-white lg:w-fit lg:bg-transparent lg:px-8 lg:py-4"
                >
                  <h3 className="text-[24px]">{service.title}</h3>
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
              </div>
            ))}
          </div>
        </div>

        <button className="w-fit self-center rounded-full border border-[#1C6B70] bg-[#57CC98] px-8 py-3 text-[16px] text-white transition-all duration-300 hover:scale-105 hover:shadow-lg lg:hidden lg:text-[20px]">
          Saiba mais sobre os atendimentos
        </button>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-4">
          <div className="relative max-h-4/5 w-full max-w-2xl overflow-y-auto rounded-3xl bg-[#529E93] p-8 text-white lg:max-h-none lg:overflow-y-visible lg:p-12">
            {/* Service Title */}

            <button className="absolute top-0 left-1/2 flex w-full -translate-x-1/2 items-center justify-between gap-4 rounded-full bg-[#57CC98] px-5 py-2.5 text-white transition-all duration-300 lg:w-fit lg:-translate-y-1/2">
              <h3 className="text-[20px] lg:text-[18px]">
                {services.find(s => s.id === selectedService)?.title}
              </h3>
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

            {/* Service Image - Mobile Only */}
            <div className="relative my-10 h-33.75 w-full lg:hidden">
              <Image
                src={services.find(s => s.id === selectedService)?.image || ''}
                alt={services.find(s => s.id === selectedService)?.title || ''}
                fill
                className="object-contain"
              />
            </div>

            {/* Description */}
            <p className="mb-8 text-[16px] leading-tight lg:text-[16px]">
              {services.find(s => s.id === selectedService)?.description}
            </p>

            {/* CTA Button */}
            <div className="flex flex-col items-center gap-6">
              <button className="w-fit rounded-full border border-white bg-[#57CC98] px-5 py-2.5 text-[16px] text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Tenho interesse!
              </button>

              {/* Close Link */}
              <button
                onClick={() => setSelectedService(null)}
                className="text-[16px] text-white underline transition-opacity hover:opacity-80"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
