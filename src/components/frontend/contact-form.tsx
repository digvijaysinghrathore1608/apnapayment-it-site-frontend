"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { services } from "@/data/services"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { ChevronDown } from "lucide-react"
import { email_send_url, query_reciver_email, site_name } from "@/data/business"


type ErrorsType = {
  name?: string
  email?: string
  phone?: string
  message?: string
}

export default function ContactForm({ className }: { className?: string }) {
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState("")
  const [success, setSuccess] = useState("")
  const [formData, setFormData] = useState({
    site_name: site_name,
    name: "",
    email: "",
    phone: "",
    message: "",
    to: query_reciver_email,
    sender_name: site_name,
    services: [] as string[],
  })

  const [errors, setErrors] = useState<ErrorsType>({})

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: "" })
  }

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const validateForm = () => {
    const newErrors: ErrorsType = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Mobile number is required"
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    // console.log("VALID DATA 👉", formData)
    // API call here

    try {
      setLoading(true)
      setApiError("")
      setSuccess("")

      const res = await fetch(email_send_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        throw new Error("Something went wrong. Please try again.")
      }

      const data = await res.json()

      setSuccess("Message sent successfully ✅")

      // reset form
      setFormData({
        site_name: site_name,
        name: "",
        email: "",
        phone: "",
        message: "",
        to: query_reciver_email,
        sender_name: site_name,
        services: [],
      })

    } catch (error: any) {
      setApiError(error.message || "Server error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={className}>
      <form
        onSubmit={handleSubmit}
        className={`bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5 backdrop-blur`}
      >

        {apiError && (
          <p className="text-red-400 text-sm text-center">
            {apiError}
          </p>
        )}

        {success && (
          <p className="text-green-400 text-sm text-center">
            {success}
          </p>
        )}

        <h3 className="text-2xl font-semibold text-gray-200">
          Send a Message
        </h3>

        {/* Name */}
        <div>
          <label className="block text-gray-300 mb-1">Your Name</label>
          <Input
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="py-6 text-white"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-300 mb-1">Email Address</label>
          <Input
            type="email"
            name="email"
            placeholder="example@mail.com"
            value={formData.email}
            onChange={handleChange}
            className="py-6 text-white"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-300 mb-1">Phone Number</label>
          <Input
            name="phone"
            placeholder="+91 9999999999"
            value={formData.phone}
            onChange={handleChange}
            className="py-6 text-white"
          />
          {errors.phone && (
            <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Multi Select */}
        <div>
          <label className="block text-gray-300 mb-2">
            Select Services
          </label>

          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className="w-full flex items-center justify-between text-white rounded-lg border border-white px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span className="truncate">
                  {formData.services.length > 0
                    ? formData.services.join(", ")
                    : "Select services"}
                </span>
                <ChevronDown className="h-5 w-5 opacity-70" />
              </button>
            </PopoverTrigger>

            <PopoverContent
              align="start"
              className="
        w-[--radix-popover-trigger-width]
        rounded-xl border border-white/10
        bg-black p-2
        max-h-60 overflow-y-auto
      "
            >
              {services.map((service, index) => (
                <label
                  key={index}
                  className="
            flex items-center gap-3
            rounded-lg p-2
            cursor-pointer
            hover:bg-white/5
          "
                >
                  <Checkbox
                    checked={formData.services.includes(service.title)}
                    onCheckedChange={() =>
                      handleServiceToggle(service.title)
                    }
                  />
                  <span className="text-gray-300 text-sm">
                    {service.title}
                  </span>
                </label>
              ))}
            </PopoverContent>
          </Popover>
        </div>

        {/* Message */}
        <div>
          <label className="block text-gray-300 mb-1">Message</label>
          <Textarea
            name="message"
            rows={4}
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            className="text-white"
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  )
}
