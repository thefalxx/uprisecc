'use client';
  

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden min-h-screen flex items-center pt-[120px] pb-[60px] md:pt-[130px] md:pb-[80px] lg:pt-[160px] lg:pb-[100px]"
      >
        {/* Full-bleed background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-2.png"
            alt="hero background"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Blue-tinted overlay to keep brand color and improve legibility */}
          <div className="absolute inset-0 bg-[#a1c5ff]/50" />
        </div>

        {/* Content */}
        <div className="container relative z-10">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Glassmorphism text card */}
            <div className="w-full px-4">
              <div
                className="hero-content wow fadeInUp mx-auto max-w-[780px] rounded-2xl border border-white/30 bg-white/20 p-8 text-center shadow-2xl backdrop-blur-md lg:p-12"
                data-wow-delay=".2s"
              >
                <h1 className="mb-6 text-3xl font-bold leading-snug text-blue-950 sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  Optimising Your Lifting Operations with the Right Crew & Equipment
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-blue-950 sm:text-lg sm:leading-[1.44]">
                  Our expert team doesn&apos;t just show up—we strategise, optimise, and execute lifting operations that save you money and prevent costly mistakes.
                </p>
                <ul className="flex flex-wrap items-center justify-center gap-5">
                  <li>
                    <Link
                      href="/client"
                      className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2"
                    >
                      Hire a Crew
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/workers"
                      className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2"
                    >
                      Join Our Team
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;