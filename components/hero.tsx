'use client'

import React, { useEffect, useRef, useState } from "react";
import Navbar from "./navbar";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import heroBgLg from '../public/home-hero-bg-lg.png'; // Import only the largest, Next.js will handle the rest

// Reusable AnimatedDiv component (assuming you have it)
import { AnimatedDiv } from "@/components/ui/animated-div";

export default function Hero() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const isDesktop = windowWidth >= 1280;
  const isMobileOrTablet = windowWidth < 1280;

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationFrameId: number;
    let position = 0;
    const speed = 0.5;

    const animate = () => {
      const totalWidth = carousel.scrollWidth / 2;

      position -= speed;

      if (Math.abs(position) >= totalWidth) {
        position = 0;
      }

      carousel.style.transform = `translateX(${position}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Animation variants
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0, 0, 0.58, 1] }
    }
  };

  const slideIn: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0, 0, 0.58, 1] }
    }
  };

  // Function to get appropriate logo size based on screen size
  const getLogoSize = () => {
    if (windowWidth >= 1024) {
      return 40;
    } else if (windowWidth >= 768) {
      return 32;
    } else {
      return 24;
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <div className="relative w-full min-h-screen bg-cover bg-center overflow-hidden flex flex-col">
        {/* Background Image - Using Next.js Image for responsiveness */}
 <video
    className="absolute inset-0 w-full h-full object-cover z-0"
    src="/Saavik_hero.mp4"
    autoPlay
    loop
    muted
    playsInline
  />

  {/* <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/70 z-10" /> */}
        {/* NAVBAR */}
        <Navbar />

        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/70 z-10" />

        {/* Hero Content - Adjusted for spacing */}
        <div className="relative z-20 flex-grow flex flex-col items-center justify-center text-white px-6 text-center pt-5 pb-10 sm:pt-24 sm:pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20">
          <motion.div
            initial="hidden"
            animate="visible"
            className={`mx-auto ${isDesktop ? 'max-w-5xl text-left' : 'max-w-full text-center'}`}
          >
            <motion.h1
              variants={fadeIn}
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight sm:leading-snug mb-6 ${isDesktop ? 'text-left' : ''}`}
            >
              <span className=" sm:inline">Pioneering  </span>
              <span className=" sm:inline bg-gradient-to-r from-[#6A43E7] via-[#7F38E8] to-[#E879F9] bg-clip-text text-transparent">
                Future
              </span>
              <span className=" block sm:inline"> with Intelligent </span>
              <span className=" sm:inline bg-gradient-to-r from-[#6A43E7] via-[#7F38E8] to-[#E879F9] bg-clip-text text-transparent">
                AI
              </span>
              <span className=" sm:inline">  Solutions</span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              custom={1}
              transition={{ delay: 0.2 }}
              className={`text-sm sm:text-base md:text-lg text-gray-200 ${isDesktop ? 'max-w-xl' : 'max-w-2xl mx-auto'} leading-relaxed mb-8`}
            >
              From software to staffing, we deliver tailored solutions that drive growth and innovation.
            </motion.p>

            <motion.div
              variants={fadeIn}
              custom={2}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/about"
                className="inline-block px-8 py-4 bg-gradient-to-r from-[#6A43E7] via-[#7F38E8] to-[#E879F9] text-white font-semibold rounded-md hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Solutions
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements - Only visible on tablet screens (md to lg) */}
        {windowWidth >= 768 && windowWidth < 1280 && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: 25 }}
              animate={{ opacity: 0.4, y: 0, rotate: 25 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute top-1/4 right-10 lg:right-32 w-16 h-16 lg:w-24 lg:h-24 bg-purple-500/20 rounded-full blur-lg z-10"
            />
            <motion.div
              initial={{ opacity: 0, y: -50, rotate: -15 }}
              animate={{ opacity: 0.3, y: 0, rotate: -15 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="absolute bottom-1/3 left-16 lg:left-40 w-12 h-12 lg:w-20 lg:h-20 bg-purple-600/20 rounded-full blur-lg z-10"
            />
          </>
        )}

        {/* Trusted By Section */}
        {/* <div className="relative w-full bg-gray-950/70 backdrop-blur-md z-20">
          <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
            <div className="flex flex-row items-center justify-between">
              <AnimatedDiv
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideIn}
                className="mb-0 relative bg-gradient-to-r from-gray-900 to-black px-6 py-3 rounded-lg border-l-4 border-[#6A43E7]"
              >
                <h2 className="text-lg md:text-2xl font-bold text-white whitespace-nowrap">
                  TRUSTED <span className="text-[#E879F9]">BY</span>
                </h2>

                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#E879F9] rounded-full animate-blink"></div>
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#6A43E7] rounded-full animate-blink"></div>
              </AnimatedDiv>

              <div className="overflow-hidden w-2/3">
                <div
                  ref={carouselRef}
                  className="flex items-center space-x-12"
                  style={{ width: "fit-content" }}
                >
                  <div className="flex items-center space-x-12 mx-6">
                    <div className="relative w-28 h-10">
                      <Image
                        src="/logosipsum-1.png"
                        alt="Client Logo 1"
                        width={getLogoSize() * 5}
                        height={getLogoSize()}
                        className="object-contain"
                      />
                    </div>
                    <div className="relative w-28 h-10">
                      <Image
                        src="/logosipsum-2.png"
                        alt="Client Logo 2"
                        width={getLogoSize() * 5}
                        height={getLogoSize()}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-12 mx-6">
                    <div className="relative w-28 h-10">
                      <Image
                        src="/logosipsum-3.png"
                        alt="Client Logo 3"
                        width={getLogoSize() * 5}
                        height={getLogoSize()}
                        className="object-contain"
                      />
                    </div>
                    <div className="relative w-28 h-10">
                      <Image
                        src="/logosipsum-4.png"
                        alt="Client Logo 4"
                        width={getLogoSize() * 5}
                        height={getLogoSize()}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-12 mx-6">
                    <div className="relative w-28 h-10">
                      <Image
                        src="/logosipsum-1.png"
                        alt="Client Logo 5"
                        width={getLogoSize() * 5}
                        height={getLogoSize()}
                        className="object-contain"
                      />
                    </div>
                    <div className="relative w-28 h-10">
                      <Image
                        src="/logosipsum-2.png"
                        alt="Client Logo 6"
                        width={getLogoSize() * 5}
                        height={getLogoSize()}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}