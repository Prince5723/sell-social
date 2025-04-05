import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Image from 'next/image';
import Link from "next/link";


function StackedCircularFooter() {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="">
            <Image
              src="/sell-social-logo.png" // Replace with actual path to your image
              alt="Logo"
              width={100}
              height={100}
            />
          </div>
          <nav className="mb-8 flex flex-wrap justify-center gap-6 text-white">
            <a href="#" className="hover:text-slate-400">Home</a>
            <a href="#" className="hover:text-slate-400">About</a>
            <a href="#" className="hover:text-slate-400">Services</a>
            <a href="#" className="hover:text-slate-400">Projects</a>
            <a href="#" className="hover:text-slate-400">Contact</a>
          </nav>
          <div className="mb-8 flex space-x-4">
      <Link href="https://www.facebook.com/share/1BiRm5VDKC/" target="_blank" rel="noopener noreferrer">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full transition-transform duration-200 hover:scale-110 hover:bg-blue-100 cursor-pointer"
        >
          <Facebook className="h-4 w-4 text-blue-600" />
        </Button>
      </Link>
      <Link href="https://x.com/prince_5723" target="_blank" rel="noopener noreferrer">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full transition-transform duration-200 hover:scale-110 hover:bg-blue-100 cursor-pointer"
        >
          <Twitter className="h-4 w-4 text-blue-500" />
        </Button>
      </Link>
      <Link href="https://www.instagram.com/thesellsocial/" target="_blank" rel="noopener noreferrer">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full transition-transform duration-200 hover:scale-110 hover:bg-pink-100 cursor-pointer"
        >
          <Instagram className="h-4 w-4 text-pink-500" />
        </Button>
      </Link>
      <Link href="https://www.linkedin.com/in/prince5723/" target="_blank" rel="noopener noreferrer">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full transition-transform duration-200 hover:scale-110 hover:bg-blue-100 cursor-pointer"
        >
          <Linkedin className="h-4 w-4 text-blue-700" />
        </Button>
      </Link>
    </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Sell Social. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { StackedCircularFooter }