'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const cards = [
    {
      ref: card1Ref,
      text: 'Fisioterapeuta formada pela Universidade de São Paulo (USP), consultora internacional em lactação (IBCLC), doula e laserterapeuta.',
      hasCheck: true,
    },
    {
      ref: card2Ref,
      text: 'Hoje, vivendo em Lausanne, na Suíça, compreendo ainda mais o quanto é essencial sentir-se amparada por alguém que compartilha de sua língua, sua cultura e seu olhar de mulher.',
      hasCheck: false,
    },
    {
      ref: card3Ref,
      text: 'Meu trabalho une ciência e sensibilidade, oferecendo um espaço seguro e humano para que cada mulher possa se reconectar consigo mesma e viver essa fase com mais leveza e confiança.',
      hasCheck: false,
    },
  ];

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Title animation
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: -30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reset',
          },
        },
      );

      // Cards animation with timeline
      const cardRefs = [card1Ref.current, card2Ref.current, card3Ref.current];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reset',
        },
      });

      cardRefs.forEach((card, index) => {
        tl.fromTo(
          card,
          {
            opacity: 0,
            x: -80,
            y: 20,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          index * 0.3,
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen w-full overflow-hidden bg-[#FAEFE6] px-4 py-13 lg:px-26"
    >
      <div className="relative z-10 grid w-full grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left Content - Cards */}
        <div className="flex flex-col">
          <h2
            ref={titleRef}
            className="mb-22 text-[28px] leading-tight font-semibold text-[#313131] lg:text-[36px]"
          >
            Um pouco sobre mim:
          </h2>

          <div className="flex flex-col items-end gap-9.25">
            {cards.map((card, index) => (
              <div
                key={index}
                ref={card.ref}
                className={`relative max-w-82.25 rounded-2xl p-5 shadow-sm backdrop-blur-sm ${
                  index % 2 === 1
                    ? 'bg-[#BEE3CB]/90 lg:mr-21'
                    : 'bg-[#F5D6C6]/90'
                }`}
              >
                <p className="text-[16px] leading-tight text-[#313131]">
                  {card.text}
                </p>

                {/* Decorative shape for first card - top left */}
                {index === 0 && (
                  <svg
                    className="absolute -top-6 -left-6 h-15 w-15"
                    viewBox="0 0 61 59"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.59066 44.5224C5.84918 42.5158 4.8696 41.246 3.73579 39.5254C2.45966 37.589 1.40816 35.3843 0.743306 33.2512C-0.404343 29.569 -0.216426 25.6189 1.26129 22.3628C2.62004 19.369 4.30005 17.1157 7.17277 14.4345C7.95443 13.705 8.81788 12.9369 9.09166 12.7277C9.36545 12.5184 9.86649 12.1301 10.2051 11.8649C11.2748 11.0269 13.5564 9.47655 14.9087 8.66887C15.2107 8.48846 15.6104 8.24667 15.7968 8.13156C15.9833 8.01645 16.6274 7.64934 17.2282 7.31581C23.1368 4.0358 28.568 1.88594 33.7823 0.76319C35.9082 0.305409 39.1083 -0.048162 40.6432 0.00507819C43.2411 0.0952257 44.5621 0.285125 46.6186 0.86424C48.4839 1.38943 49.9792 2.05978 51.7808 3.17835C52.9384 3.89711 53.6667 4.49266 54.7549 5.61029C56.2788 7.17547 57.5243 8.99684 58.635 11.2848C61.1081 16.3791 61.106 22.2818 58.6294 27.0526C57.8785 28.499 57.2851 29.4628 56.2144 30.9753C54.1811 33.8476 53.5985 34.738 52.4791 36.6837C51.3706 38.6104 50.9285 39.5028 49.4711 42.7558C47.2149 47.7918 45.6074 50.3929 43.1985 52.9057C41.3331 54.8515 39.3844 56.1343 36.8148 57.1079C34.323 58.052 31.4406 58.2872 28.2485 57.8069C23.8858 57.1506 18.997 54.7522 14.2524 50.9406C11.7967 48.9678 9.67285 46.9216 7.59066 44.5224Z"
                      fill="#FBC39E"
                    />
                  </svg>
                )}

                {/* Decorative shape for second card - bottom right */}
                {index === 1 && (
                  <svg
                    className="absolute -right-4 -bottom-6 h-16 w-12.5"
                    viewBox="0 0 50 62"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.07533 58.5945C2.7594 56.8769 1.24596 54.9177 0.509719 52.6842C0.115545 51.4884 -0.0166785 50.6836 0.00165253 49.5918C0.0325796 47.7539 0.429558 46.2032 1.29309 44.547C2.06299 43.0707 2.98178 41.8907 4.60037 40.2999C5.99448 38.9298 7.18808 37.9573 10.7976 35.2509C13.0042 33.5963 14.0083 32.7802 14.8928 31.9227C17.1867 29.6989 18.88 26.799 19.6896 23.7078C20.1662 21.888 20.3421 20.318 20.5221 16.2767C20.7449 11.2725 21.2262 8.89255 22.5328 6.33432C23.1842 5.05875 23.4936 4.5986 24.3582 3.61859C25.4062 2.43074 26.1549 1.83879 27.4487 1.17498C28.4601 0.656116 29.0528 0.43585 29.9625 0.240749C30.9907 0.0202025 31.5901 -0.0282984 32.7643 0.013975C35.1355 0.0993685 37.2424 0.744501 39.2173 1.98987C43.2877 4.55674 46.1292 8.50857 47.8421 13.985C49.2115 18.3634 49.7804 23.0181 49.5267 27.768C49.3872 30.3805 49.1475 32.0549 48.5377 34.6767C47.6996 38.2802 46.7963 40.7677 45.2261 43.7954C43.4605 47.1976 41.4285 49.965 38.7214 52.6481C36.8015 54.551 34.0551 56.5319 31.4191 57.9151C30.2515 58.5278 28.0687 59.428 26.4652 59.9582C23.6125 60.9012 21.1475 61.3724 17.9588 61.5839C14.9665 61.7824 11.5014 61.3981 9.10027 60.6014C8.04033 60.2498 5.80295 59.1341 5.07533 58.5945Z"
                      fill="#49AB9E"
                    />
                  </svg>
                )}

                {/* Decorative shape for third card - bottom, offset from right */}
                {index === 2 && (
                  <svg
                    className="absolute right-8 -bottom-5 h-10 w-19"
                    viewBox="0 0 75 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M34.9241 38.9371C32.6021 38.6931 31.2743 38.2055 26.8313 35.965C24.0259 34.5503 23.5503 34.342 22.3109 33.9844C19.9693 33.309 17.2853 33.3052 14.448 33.9733C10.2954 34.951 9.27397 35.0593 7.66971 34.6922C5.70612 34.2428 4.18591 33.1522 2.94204 31.3005C1.0312 28.4558 -0.261343 22.9095 0.0448954 18.8686C0.155831 17.4048 0.430521 15.6559 0.6876 14.7765C1.61819 11.5934 2.66939 9.60256 4.25459 8.02104C5.57115 6.70758 6.98079 5.92325 8.94918 5.40904C10.0057 5.13305 10.0898 5.12502 11.8732 5.12971C13.6988 5.13443 13.7215 5.13681 15.8142 5.55812C21.0574 6.61336 23.7037 6.27258 27.2973 4.07949C30.8836 1.89083 32.1187 1.24113 33.7784 0.670387C35.0141 0.245452 35.97 0.0741792 37.4453 0.013363C40.0028 -0.0920574 41.9816 0.407775 45.9992 2.17403C50.7072 4.24381 51.4924 4.53799 53.0663 4.82208C53.9747 4.98606 54.3193 5.00307 55.8071 4.95759C57.6941 4.89992 58.4608 4.77592 60.5377 4.19271C63.6556 3.31711 64.6689 3.1453 66.229 3.22766C67.4088 3.28996 68.0418 3.45161 69.0147 3.93905C71.0529 4.96023 72.3454 6.54873 73.4831 9.43079C74.4644 11.9167 74.8975 14.0956 74.9886 17.0054C75.0918 20.2997 74.4951 23.2136 73.1706 25.8829C71.8741 28.496 69.6364 30.4605 67.3161 31.0227C66.4939 31.2219 64.9515 31.3699 64.3163 31.3106C63.2332 31.2094 60.5077 31.122 58.7629 31.1327C56.6981 31.1452 55.4094 31.3207 53.6304 31.8314C51.8839 32.3329 49.3649 33.438 48.0593 34.2757C47.7884 34.4496 47.4861 34.6358 47.3876 34.6896C47.289 34.7434 46.509 35.2033 45.6541 35.7117C43.2327 37.1514 40.7454 38.2807 39.2156 38.6349C37.7316 38.9785 36.2862 39.0802 34.9241 38.9371Z"
                      fill="#F0A482"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="relative h-100 w-75 lg:h-137.5 lg:w-105">
            <Image
              src="/images/aboutMeImage.png"
              alt="Sabrina Caixeta - Fisioterapeuta"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
