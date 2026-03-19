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
      title: 'Atendimento em Português, com acolhimento cultural',
      description:
        'Mais do que falar o mesmo idioma, é sobre compreender sua história, seus sentimentos e o que você espera deste momento da vida, em um espaço onde você não precisa traduzir suas emoções.',
    },
    {
      title: 'Experiência pessoal de Expatriação',
      description:
        'Sou brasileira vivendo no exterior e conheço os desafios de morar fora. Essa vivência contribui para uma escuta mais sensível e próxima da sua realidade.',
    },
    {
      title: 'Modelo Online Validado',
      description:
        'Durante a pandemia, adaptei meus atendimentos para o formato online e os resultados foram surpreendentes. As pacientes apresentaram melhora significativa em sua evolução e relataram sentir-se acolhidas e bem acompanhadas, mesmo à distância. Desde então, a fisioterapia online passou a ser amplamente reconhecida e regulamentada pelo Conselho de Fisioterapia. Por isso, considero importante destacar que essas práticas seguem normas profissionais e são devidamente reguladas, garantindo segurança, ética e qualidade no atendimento.',
    },
    {
      title: 'Padrão de Excelência Internacional',
      description:
        'Vivendo no exterior, na Suíça, uno a experiência com padrões internacionais de saúde a um atendimento humano e acolher, com a sensibilidade de quem compartilha a mesma língua e cultura.',
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
              O Cuidado e a atenção
              <br />
              que você precisa
            </h2>
          </div>

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
