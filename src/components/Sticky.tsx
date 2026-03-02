'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StickyBulletIcon from './svg/StickyBulletIcon';
import StickyDecorativeShape from './svg/StickyDecorativeShape';

gsap.registerPlugin(ScrollTrigger);

export default function Sticky() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const items = [
    {
      title:
        'Atendimento em Português, com entendimento e acolhimento cultural',
      description:
        'Não é só sobre falar o mesmo idioma, é sobre entender o que você sente, como você cresceu, o que você espera dessa fase. É sobre criar um espaço onde você não precisa traduzir suas emoções.',
    },
    {
      title: 'Experiência pessoal de Expatriação',
      description:
        'Também sou brasileira morando fora e reconheço em outras pais, durante as sessões online, isso tudo. É importante entender ainda mais o que está passando.',
    },
    {
      title: 'Modelo Online Validado',
      description:
        'Durante a pandemia, adaptei meu atendimento para o formato online e o impacto foi surpreendente. As pacientes melhoraram sua produção e se sentiram acolhidas. Hoje, a fisioterapia online é reconhecida e regulamentada pelo "Conselho de Fisioterapia". Achei importante incluir a informação de que essas práticas estão reguladas pelo Conselho de Fisioterapia.',
    },
    {
      title: 'Padrão de Excelência Internacional',
      description:
        'Com base na Suíça, trago a seriedade dos padrões internacionais de saúde, combinada com o acolhimento que só open compartilha a mesma cultura pode oferecer.',
    },
  ];

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
    <section className="relative container w-full overflow-x-clip bg-[#FAEFE6] px-4 py-16 text-[#313131] lg:px-26 xl:overflow-visible">
      <StickyDecorativeShape className="pointer-events-none absolute top-0 left-0 z-0 -ml-30" />
      <div ref={sectionRef}>
        <div className="relative z-10 mx-auto flex w-full flex-col gap-8 text-center lg:w-2/3">
          {/* Title */}
          <div>
            <h2 className="text-[24px] leading-tight font-semibold lg:text-[36px]">
              O Cuidado e atenção
              <br />
              que você precisa
            </h2>
          </div>

          {/* Introduction */}
          <p className="text-[16px] leading-tight lg:text-[20px]">
            Mesmo longe, você não está sozinha. As{' '}
            <span className="font-semibold">
              sessões online acontecem ao vivo
            </span>
            , de forma dinâmica e presente, para que possamos construir juntas
            uma jornada que integre seu corpo ao seu momento.
          </p>
        </div>

        <div className="relative z-10 mt-15 lg:grid lg:grid-cols-2 lg:gap-28">
          {/* Left - Sticky Image */}
          <div className="hidden lg:block">
            <div className="sticky top-20 flex items-center justify-center">
              <div className="relative h-124.5 w-full">
                <Image
                  src="/images/stickyImageSection.png"
                  alt="Cuidado e atenção"
                  fill
                  className="rounded-lg object-contain"
                />
              </div>
            </div>
          </div>

          {/* Mobile Image */}
          <div className="flex w-full justify-center lg:hidden">
            <div className="relative mb-12 h-76 w-47.25">
              <Image
                src="/images/stickyImageSection.png"
                alt="Cuidado e atenção"
                fill
                className="rounded-lg object-contain"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col gap-18">
            {items.map((item, index) => (
              <div key={index} className="flex w-4/5 gap-4">
                {/* Icon */}
                <div className="shrink-0">
                  <StickyBulletIcon className="mt-1" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="mb-5 text-[20px] leading-tight font-semibold lg:text-[24px]">
                    {item.title}
                  </h3>
                  <p className="text-[16px] leading-tight">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
