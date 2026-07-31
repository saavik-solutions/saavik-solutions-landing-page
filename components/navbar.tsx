"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Linkedin, Twitter, Facebook, Instagram, ChevronDown } from "lucide-react"
import { Sheet, SheetTrigger } from "@/components/ui/sheet"
import { AnimatedDiv } from "@/components/ui/animated-div"
import { AnimatedMobileSidebar } from "./ui/animated-mobile-sidebar"
import { StaggeredMenu } from "./ui/staggered-menu"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState("/")
  const [isLandscapeMobile, setIsLandscapeMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    const handleResize = () => {
      const mobileLandscape = window.innerWidth >= 480 && window.innerWidth < 800
      const isLandscape = window.matchMedia("(orientation: landscape)").matches
      setIsLandscapeMobile(mobileLandscape && isLandscape)
    }
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)
    handleResize()
    setActiveLink(window.location.pathname)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const navLinks = [
    { href: "/", text: "HOME" },
    {
      href: "/about", text: "ABOUT US", hasDropdown: true, dropdownItems: [
        { href: "/about/team", text: "Our Team" },
        { href: "/about/mission", text: "Mission & Vision" },
      ]
    },
    { href: "/services", text: "SERVICES" },
    { href: "/careers", text: "CAREERS", hideOnLandscapeMobile: true },
    { href: "/blogs", text: "BLOG", hideOnLandscapeMobile: true },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 w-full transition-all duration-300 bg-white
        ${scrolled ? "shadow-md" : ""}`}>
      <div
        className={`container mx-auto flex items-center justify-between transition-all duration-300
          ${scrolled ? "py-1 lg:py-1 px-8 lg:px-6" : "py-2 lg:py-2 px-8 lg:px-6"}`}>
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <AnimatedDiv initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div className="block lg:hidden relative overflow-hidden rounded-full">
              <Image
                src="/saavik-logo-lgn.svg"
                alt="Logo"
                width={100}
                height={32}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="hidden lg:block relative overflow-hidden">
              <Image
                src="/saavik-logo-lgn.svg"
                alt="Logo"
                width={120}
                height={32}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </AnimatedDiv>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link, idx) => (
            <AnimatedDiv key={link.href} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: idx * 0.05 }}>
              <Link href={link.href} className="relative text-sm font-medium uppercase text-blue-600 hover:text-purple-600 transition-colors duration-200 group">
                {link.text}
                {link.hasDropdown && <ChevronDown className="inline ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />}
                <div className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-indigo-600 to-purple-500 group-hover:w-full transition-[width] duration-300"></div>
              </Link>
              {link.hasDropdown && (
                <div className="absolute left-0 top-full mt-1 hidden w-40 rounded-md bg-black/90 py-2 shadow-lg group-hover:block">
                  {link.dropdownItems.map(item => (
                    <Link key={item.href} href={item.href}
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-purple-700 hover:text-white transition-colors duration-200">
                      {item.text}
                    </Link>
                  ))}
                </div>
              )}
            </AnimatedDiv>
          ))}
          <AnimatedDiv initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: navLinks.length * 0.05 }}>
            <Link href="/contact-us">
              <Button className="px-6 py-2 text-sm font-semibold uppercase bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-full transition-shadow duration-300 hover:shadow-md hover:scale-105">
                Get a Quote
              </Button>
            </Link>
          </AnimatedDiv>
        </nav>

        {/* Mobile / Tablet */}
        <div className="flex items-center lg:hidden gap-3">
          <AnimatedDiv initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/contact-us" className="hidden md:inline-block">
              <Button className="px-4 py-1 text-xs font-semibold uppercase bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-full">
                Quote
              </Button>
            </Link>
          </AnimatedDiv>
          <StaggeredMenu
            isFixed={true}
            menuButtonColor="#000"
            openMenuButtonColor="#fff"
            colors={["#050505", "#10061e"]}
          >
            <div className="mt-4 flex justify-center bg-white rounded-md px-4 py-2 stagger-item">
              <Image src="/saavik-logo-lgn.svg" alt="Logo" width={100} height={32} />
            </div>
            <nav className="mt-8 flex flex-col space-y-2 px-4">
              {navLinks.map((link) =>
                (!isLandscapeMobile || !link.hideOnLandscapeMobile) && (
                  <div key={link.href} className="stagger-item">
                    <Link href={link.href} onClick={() => { if (!link.hasDropdown) (window as any).closeStaggeredMenu?.() }}
                      className={`flex justify-between items-center p-2 rounded-lg uppercase text-sm font-medium transition-colors duration-200
                        ${activeLink === link.href ? "bg-purple-100 text-purple-700" : "hover:bg-white/10 text-white"}`}>
                      <span>{link.text}</span>
                      {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
                    </Link>
                    {link.hasDropdown && (
                      <div className="pl-4 mt-1 border-l-2 border-blue-500 ml-2 space-y-1">
                        {link.dropdownItems.map(item => (
                          <Link key={item.href} href={item.href} onClick={() => (window as any).closeStaggeredMenu?.()}
                            className="block px-3 py-1 text-sm text-gray-200 hover:text-white transition-colors duration-200">
                            {item.text}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              <div className="stagger-item">
                <Link href="/contact-us" onClick={() => (window as any).closeStaggeredMenu?.()}>
                  <Button className="mt-4 w-full uppercase text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-full py-2">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </nav>
            <div className="mt-auto border-t border-white/10 pt-6 pb-4 stagger-item">
              <p className="text-center text-xs text-gray-400 mb-3">Connect with us</p>
              <div className="flex justify-center space-x-4">
                {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="p-2 rounded-full bg-white/10 text-white hover:bg-purple-700 transition-colors duration-200">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <p className="mt-6 text-center text-[10px] text-gray-500">© 2025 Your Company</p>
            </div>
          </StaggeredMenu>
        </div>
      </div>
    </header>
  )
}
