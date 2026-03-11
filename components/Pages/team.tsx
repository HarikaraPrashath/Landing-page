import { Users } from "lucide-react"
import Image from "next/image"
import React from "react"

const Team = () => {
  return (
    <section className="py-24 px-6 md:px-10 max-w-6xl mx-auto text-white ">

      {/* HEADER */}
      <div className="text-center mb-20">

        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-medium text-white mb-6">
          <Users className="w-4 h-4" />
          Meet Our Team
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          The People Behind{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Our Success
          </span>
        </h2>

        <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
          Meet the passionate individuals who drive our company forward with
          their expertise, creativity, and dedication to delivering exceptional
          results.
        </p>

      </div>


      {/* TEAM GRID */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3 justify-center max-w-4xl mx-auto">


        {/* FOUNDER */}
        <div className="group relative rounded-3xl p-8 border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:bg-white/10 hover:border-white/20">

          {/* glow */}
          <div className=""/>

          <div className="relative z-10 text-center">

            <div className="relative mb-6">

              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-[2px] group-hover:scale-105 transition">

                <Image
                  src="/images/img2.jpeg"
                  alt="John Doe"
                  className="w-full h-full rounded-full object-cover"
                  width={96}
                  height={96}
                />

              </div>

              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Founder
                </div>
              </div>

            </div>


            <h3 className="text-xl font-bold mb-2">John Doe</h3>

            <p className="text-blue-400 font-semibold mb-4">
              Founder & CEO
            </p>

            <p className="text-gray-300 leading-relaxed mb-4">
              Visionary leader with 15+ years in tech. Passionate about
              innovation and building solutions that make a difference.
            </p>


            <div className="flex flex-wrap gap-2 justify-center">

              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                Leadership
              </span>

              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                Strategy
              </span>

              <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">
                Innovation
              </span>

            </div>

          </div>
        </div>



        {/* Dev */}
        <div className="group relative rounded-3xl p-8 border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:bg-white/10 hover:border-white/20">

          {/* glow */}
          <div className=""/>

          <div className="relative z-10 text-center">

            <div className="relative mb-6">

              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-green-500 to-teal-500 p-[2px] group-hover:scale-105 transition">

                <Image
                  src="/images/img1.jpeg"
                  alt="Jane Smith"
                  className="w-full h-full rounded-full object-cover"
                  width={96}
                  height={96}
                />

              </div>

              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Co-Founder
                </div>
              </div>

            </div>


            <h3 className="text-xl font-bold mb-2">
              Jane Smith
            </h3>

            <p className="text-green-400 font-semibold mb-4">
              Co-Founder & CTO
            </p>

            <p className="text-gray-300 leading-relaxed mb-4">
              Tech enthusiast and problem solver. Leads our technical vision and
              ensures we deliver cutting-edge solutions.
            </p>


            <div className="flex flex-wrap gap-2 justify-center">

              <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">
                Architecture
              </span>

              <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-xs">
                UI/UX
              </span>

              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
               Quality Assurance
              </span>

            </div>

          </div>
        </div>

        <div className="group relative rounded-3xl p-8 border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:bg-white/10 hover:border-white/20">

          {/* glow */}
          <div className=""/>

          <div className="relative z-10 text-center">

            <div className="relative mb-6">

              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-red-500 to-pink-500 p-[2px] group-hover:scale-105 transition">

                <Image
                  src="/images/img1.jpeg"
                  alt="Jane Smith"
                  className="w-full h-full rounded-full object-cover"
                  width={96}
                  height={96}
                />

              </div>

              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Developer
                </div>
              </div>

            </div>


            <h3 className="text-xl font-bold mb-2">
              Jane Smith
            </h3>

            <p className="text-pink-400 font-semibold mb-4">
              Software Engineer
            </p>

            <p className="text-gray-300 leading-relaxed mb-4">
              Tech enthusiast and problem solver. Leads our technical vision and
              ensures we deliver cutting-edge solutions.
            </p>


            <div className="flex flex-wrap gap-2 justify-center">

              <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">
                Architecture
              </span>

              <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-xs">
                DevOps
              </span>

              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                Full Stack
              </span>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Team