"use client"
import { ReactElement, useState } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string
    link: string
    icon?: ReactElement
  }[]
  className?: string
}) => {
  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = useState(true) // Initialize as visible
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!

      // Always show at the top of the page
      if (scrollYProgress.get() < 0.05) {
        setVisible(true)
      } else {
        // Only hide when scrolling down, show when scrolling up
        if (direction < 0) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      }
    }
  })

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // Function to scroll to contact section
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Fallback if id doesn't exist, scroll to a position or use window.location
      window.location.href = '/#contact'
    }
    // Close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false)
    }
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex w-full fixed top-4 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-6 py-3 items-center justify-between max-w-7xl",
          className,
        )}
      >
        {/* Logo on the left */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/sell-social-logo.png"
              alt="Logo"
              width={150}
              height={48}
              className="h-12 w-auto"
            />
          </Link>
        </div>

        {/* Navigation links - hidden on mobile */}
        <div className="hidden md:flex items-center justify-center space-x-6">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn("relative text-white items-center flex space-x-1 hover:text-neutral-300")}
            >
              <span className="text-sm">{navItem.name}</span>
            </Link>
          ))}
        </div>

        {/* Contact Now button on the right */}
        <div className="hidden md:block">
          <button 
            onClick={scrollToContact}
            className="border text-sm font-medium relative border-white/[0.2] text-white px-6 py-2 rounded-full hover:bg-white/10"
          >
            <span>Contact Now</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white p-2">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-28 left-4 right-4 bg-black border border-white/[0.2] rounded-xl z-[4999] p-4 shadow-lg"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((navItem: any, idx: number) => (
                <Link
                  key={`mobile-link=${idx}`}
                  href={navItem.link}
                  className="text-white py-2 px-4 hover:bg-white/10 rounded-lg flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {navItem.icon && <span className="mr-3">{navItem.icon}</span>}
                  <span>{navItem.name}</span>
                </Link>
              ))}
              <button 
                onClick={scrollToContact}
                className="border text-sm font-medium border-white/[0.2] text-white px-6 py-3 rounded-lg hover:bg-white/10 mt-2"
              >
                Contact Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  )
}