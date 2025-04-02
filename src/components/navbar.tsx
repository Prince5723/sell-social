"use client"
import { FloatingNav } from "@/components/ui/floating-navbar"
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react"

export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4 text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-white" />,
    },
    {
      name: "Services",
      link: "#services",
      icon: <IconMessage className="h-4 w-4 text-white" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <IconMessage className="h-4 w-4 text-white" />,
    }
  ]

  return (
    <div className="bg-black">
      <FloatingNav navItems={navItems} />
    </div>
  )
}

