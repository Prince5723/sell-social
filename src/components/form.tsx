"use client"

import React, { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { GooeyTextDemo } from "./gooey-text"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectDescription: "",
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok) {
        setMessage("Thank you! We will get in touch shortly.")
        setFormData({ name: "", email: "", phone: "", projectDescription: "" })
      } else {
        setMessage(data.message || "Something went wrong.")
      }
    } catch (err) {
      setMessage("Something went wrong.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full bg-black border border-slate-700 rounded-2xl shadow-[0px_0px_1px_1px_#262626]" id="contact">
      <GooeyTextDemo />
      <div className="mx-auto w-full max-w-md rounded-2xl bg-black p-8 shadow-[0px_0px_1px_1px_#262626] mb-8">
        <h2 className="text-xl font-bold text-neutral-200">Turn your vision into reality</h2>
        <p className="mt-2 max-w-sm text-sm text-neutral-300">
          Get your Ideas to market and beyond
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Tyler Durden" type="text" value={formData.name} onChange={handleChange} />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="myemail@gmail.com" type="email" value={formData.email} onChange={handleChange} />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" placeholder="+91 8539053554" type="tel" value={formData.phone} onChange={handleChange} />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="projectDescription">Project Description</Label>
            <textarea
              id="projectDescription"
              placeholder="Tell us about your project..."
              className="flex w-full rounded-md border-none bg-zinc-800 px-3 py-2 text-sm text-white shadow-[0px_0px_1px_1px_#404040] placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600 min-h-[100px]"
              value={formData.projectDescription}
              onChange={handleChange}
            />
          </LabelInputContainer>

          <button
            className="group/btn relative block h-10 w-full rounded-md bg-zinc-900 font-medium text-white shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
            type="submit"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit →"}
            <BottomGradient />
          </button>

          {message && (
            <p className="mt-4 text-sm text-center text-neutral-400">{message}</p>
          )}
        </form>
      </div>
    </div>
  )
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  )
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>
}
