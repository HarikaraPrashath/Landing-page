"use client"

import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Send,
  ArrowRight,
  Heart,
  ExternalLink,
} from "lucide-react"
import { useState } from "react"
import type React from "react"

const Footer = () => {

  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribed(true)
    setEmail("")
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  const socialLinks = [
    { icon: Facebook, color: "hover:text-blue-500" },
    { icon: Twitter, color: "hover:text-sky-400" },
    { icon: Instagram, color: "hover:text-pink-500" },
    { icon: Linkedin, color: "hover:text-blue-600" },
    { icon: Youtube, color: "hover:text-red-500" },
  ]

  return (
    <footer className="relative bg-black text-white overflow-hidden">

      {/* Background glow */}
      <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full"/>
      <div className="absolute -bottom-40 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full"/>


      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20">

        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">

          {/* Logo + About */}
          <div>

            <div className="flex items-center gap-3 mb-6">

              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center"/>

              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                YourCompany
              </span>

            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming ideas into digital reality. We create modern digital
              experiences that help businesses grow and succeed.
            </p>


            {/* Contact */}
            <div className="space-y-3 text-gray-400 text-sm">

              <div className="flex items-center gap-3">
                <Phone size={16} className="text-blue-400"/>
                +1 (555) 123-4567
              </div>

              <div className="flex items-center gap-3">
                <Mail size={16} className="text-purple-400"/>
                hello@company.com
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-pink-400"/>
                New York, USA
              </div>

            </div>

          </div>



          {/* Services */}
          <div>

            <h4 className="font-semibold mb-6 text-lg">Services</h4>

            <ul className="space-y-3 text-gray-400">

              {[
                "Web Development",
                "Mobile Apps",
                "UI/UX Design",
                "Digital Marketing",
                "Brand Identity",
              ].map((item, i) => (
                <li key={i}>
                  <a className="flex items-center gap-2 hover:text-white transition group">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition"/>
                    {item}
                  </a>
                </li>
              ))}

            </ul>

          </div>



          {/* Company */}
          <div>

            <h4 className="font-semibold mb-6 text-lg">Company</h4>

            <ul className="space-y-3 text-gray-400">

              {[
                "About Us",
                "Our Team",
                "Careers",
                "Blog",
                "Case Studies",
              ].map((item, i) => (
                <li key={i}>
                  <a className="flex items-center gap-2 hover:text-white transition group">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition"/>
                    {item}
                  </a>
                </li>
              ))}

            </ul>

          </div>



          {/* Newsletter */}
          <div>

            <h4 className="font-semibold mb-6 text-lg">
              Subscribe Newsletter
            </h4>

            <p className="text-gray-400 text-sm mb-6">
              Get updates about our latest projects and tech insights.
            </p>


            <form onSubmit={handleNewsletterSubmit} className="space-y-4">

              <input
                type="email"
                placeholder="Your email"
                required
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />

              <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-[1.03] transition">

                <Send size={16}/>
                Subscribe

              </button>

            </form>



            {/* Social icons */}
            <div className="flex gap-3 mt-6">

              {socialLinks.map((item,i)=>{

                const Icon = item.icon

                return(
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 ${item.color} hover:scale-110 transition`}
                  >
                    <Icon size={18}/>
                  </div>
                )

              })}

            </div>

          </div>

        </div>
      </div>



      {/* Bottom bar */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

          <div className="flex items-center gap-2">
            © 2026 YourCompany
            <Heart size={14} className="text-red-500 fill-red-500"/>
          </div>

          <div className="flex gap-6 mt-3 md:mt-0">

            {["Privacy Policy","Terms","Cookies"].map((item,i)=>(
              <a key={i} className="hover:text-white transition flex items-center gap-1">
                {item}
                <ExternalLink size={12}/>
              </a>
            ))}

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer