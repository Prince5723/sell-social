import { Instagram, Facebook } from "lucide-react"
import { Footer } from "@/components/ui/footer"
import Image from "next/image"

export function FooterDemo() {
  return (
    <div className="w-full">
      <Footer
        logo={
          <Image 
            src="/sell-social-logo.png" 
            alt="Company Logo" 
            width={240} 
            height={240}
            className=" w-24 object-contain"
          />
        }
        brandName=""
        socialLinks={[
          {
            icon: <Instagram className="h-5 w-5" />,
            href: "https://instagram.com",
            label: "Instagram",
          },
          {
            icon: <Facebook className="h-5 w-5" />,
            href: "https://facebook.com",
            label: "Facebook",
          },
        ]}
        mainLinks={[
          { href: "#home", label: "Home" },
          { href: "#about", label: "About" },
          { href: "#services", label: "Services" },
          { href: "#projects", label: "Projects" },
          { href: "#contact", label: "Contact" },
        ]}
        legalLinks={[
          { href: "/privacy", label: "Privacy" },
          { href: "/terms", label: "Terms" },
        ]}
        copyright={{
          text: "© 2025 Sell Social | All rights reserved",
          license: "All rights reserved",
        }}
      />
    </div>
  )
}