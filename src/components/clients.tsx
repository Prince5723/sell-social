'use client'
import { Sparkles } from "@/components/ui/sparkles"
import { useTheme } from "next-themes"
import Image from "next/image"

export function Clients() {
  const { theme } = useTheme()
  return (
    <div className=" w-full overflow-hidden bg-black">
      <div className="mx-auto mt-32 w-full max-w-2xl">
        <div className="text-center text-3xl text-foreground">
          <span className="text-indigo-200">
            Trusted by experts.
          </span>

          <br />

          <span className="text-white">Used by the leaders.</span>
        </div>

        <div className="mt-14 grid grid-cols-5 text-white">
          <div className="flex items-center justify-center px-2">
            <Image 
              src="/paradise_logo.png" 
              alt="Retool" 
              width={180} 
              height={56} 
              className="w-full" 
            />
          </div>

          <div className="flex items-center justify-center px-2">
            <Image 
              src="/walkby-logo.png" 
              alt="Vercel" 
              width={180} 
              height={56} 
              className="w-full" 
            />
          </div>

          <div className="flex items-center justify-center px-2">
            <Image 
              src="https://develpix.com/wp-content/uploads/2024/08/all-logo-07.png" 
              alt="Remote" 
              width={180} 
              height={56} 
              className="w-full" 
            />
          </div>

          <div className="flex items-center justify-center px-2">
            <Image 
              src="/bricks-and-homes-logo.png" 
              alt="Arc" 
              width={180} 
              height={56} 
              className="w-full" 
              style={{ filter: 'brightness(0) invert(1)' }} // Makes SVG white
            />
          </div>

          <div className="flex items-center justify-center px-2">
            <Image 
              src="/lotlite-logo.png" 
              alt="Raycast" 
              width={180} 
              height={56} 
              className="w-full" 
              style={{ filter: 'brightness(0) invert(1)' }} // Makes SVG white
            />
          </div>
        </div>
      </div>

      <div className="relative -mt-32 h-96 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]">
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_70%)] before:opacity-40" />
        <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-white/20 bg-zinc-900" />
        <Sparkles
          density={1200}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
          color={theme === "dark" ? "#ffffff" : "#000000"}
        />
      </div>
    </div>
  )
}