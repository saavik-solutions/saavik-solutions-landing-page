'use client'

import React, { useEffect, useRef, useState } from "react";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import Image from "next/image";

// Define your image imports
import heroBgLg from '../public/home-hero-bg-lg.png'; // Import only the largest, Next.js will handle the rest

export default function Hero() {
  const carouselRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const isDesktop = windowWidth >= 1280;

  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);

    // Update window width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Animation for continuous carousel
    const carousel = carouselRef.current;
    if (!carousel) return;

    let position = 0;
    const speed = 0.5;
    const totalWidth = (carousel as HTMLElement).scrollWidth / 2; // We have duplicate items for seamless loop

    const animate = () => {
      position -= speed;

      // Reset position when first set of logos has scrolled out of view
      if (Math.abs(position) >= totalWidth) {
        position = 0;
      }

      (carousel as HTMLElement).style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const slideIn = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
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
      <div className="relative w-full min-h-screen bg-cover bg-center overflow-hidden">
        {/* Background Image - Using Next.js Image for responsiveness */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBgLg} // Import and use the largest image, Next.js will optimize
            alt="Hero Background"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* NAVBAR */}
        <Navbar />

        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/70 z-10" />

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-white px-6 text-center mt-[-80px]">
          <motion.div
            initial="hidden"
            animate="visible"
            className={`max-w-5xl mx-auto ${isDesktop ? 'text-left' : 'text-center'}`}
          >
            <motion.h1
              variants={fadeIn}
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight sm:leading-snug mb-6 ${isDesktop ? 'text-left' : ''}`}
            >
              Empowering{" "}
              <span className="bg-gradient-to-r from-[#FF0000] to-[#FF4D4D] bg-clip-text text-transparent">
                Businesses
              </span>{" "}
              {!isDesktop && <br />}
              with{" "}
              <span className="bg-gradient-to-r from-[#FF0000] to-[#FF4D4D] bg-clip-text text-transparent">
                Cutting-Edge IT Solutions
              </span>
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
              <button className="px-8 py-4 bg-gradient-to-r from-[#FF0000] to-[#FF4D4D] text-white font-semibold rounded-md hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 transform hover:scale-105">
                Explore Our Solutions
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements - Only visible on larger screens but not desktop */}
        {windowWidth >= 768 && windowWidth < 1280 && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: 25 }}
              animate={{ opacity: 0.4, y: 0, rotate: 25 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute top-1/4 right-10 lg:right-32 w-16 h-16 lg:w-24 lg:h-24 bg-red-500/20 rounded-full blur-lg z-10"
            />
            <motion.div
              initial={{ opacity: 0, y: -50, rotate: -15 }}
              animate={{ opacity: 0.3, y: 0, rotate: -15 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="absolute bottom-1/3 left-16 lg:left-40 w-12 h-12 lg:w-20 lg:h-20 bg-red-600/20 rounded-full blur-lg z-10"
            />
          </>
        )}

        {/* Trusted By Section */}
        <div className="absolute bottom-0 left-0 w-full bg-gray-950/70 backdrop-blur-md z-20">
          <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideIn}
                className="mb-6 md:mb-0 relative bg-gradient-to-r from-gray-900 to-black px-6 py-3 rounded-lg border-l-4 border-red-500"
              >
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  TRUSTED <span className="text-red-500">BY</span>
                </h2>

                {/* Accent elements */}
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-red-500 rounded-full"></div>
              </motion.div>

              <div className="overflow-hidden w-full md:w-2/3">
                <div
                  ref={carouselRef}
                  className="flex items-center space-x-12 md:space-x-16"
                  style={{ width: "fit-content" }}
                >
                  {/* First set of logos */}
                  <div className="flex items-center space-x-8 sm:space-x-12 mx-6 sm:mx-8">
                    <div className="relative w-20 h-8 md:w-28 md:h-10">
                      <Image
                        src="/logosipsum-1.png"
                        alt="Client Logo 1"
                        width={getLogoSize() * 5}
                        height={getLogoSize()}
                        className="object-contain"
                      />
                    </div>
                    <div className="relative w-20 h-8 md:w-28 md:h-10">
                      <Image
                        src="/logosipsum-2.png"
                        alt="Client Logo 2"
                        width={getLogoSize() * 5}
                        height={getLogoSize()}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Second set of logos */}
                  <div className="flex items-center space-x-8 sm:space-x-12 mx-6 sm:mx-8">
                    <div className="relative w-20 h-8 md:w-28 md:h-10">
                      <Image
                        src="/logosipsum-3.png"
                        alt="Client Logo 3"
                        width={getLogoSize() * 5}
                        height={getLogoSize()}
                        className="object-contain"
                      />
                    </div>
                    <div className="relative w-20 h-8 md:w-28 md:h-10">
                      <Image
                        src="/logosipsum-4.png"
                        alt="Client Logo 4"
                        width={getLogoSize() * 5}
                        height={getLogoSize()}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Third set of logos for extra buffer */}
                  <div className="flex items-center space-x-8 sm:space-x-12 mx-6 sm:mx-8">
                    <div className="relative w-20 h-8 md:w-28 md:h-10">
                      <Image
                        src="/logosipsum-1.png"
                        alt="Client Logo 5"
                        width={getLogoSize() * 5}
                        height={getLogoSize()}
                        className="object-contain"
                      />
                    </div>
                    <div className="relative w-20 h-8 md:w-28 md:h-10">
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
        </div>
      </div>
    </>
  );
}