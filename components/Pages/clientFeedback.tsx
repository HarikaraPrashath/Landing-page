"use client"

import { MessageSquare, Star } from "lucide-react"

const Feedback = () => {

  const feedbacks = [
    {
      name: "Michael Brown",
      role: "Startup Founder",
      message:
        "Working with this team was an amazing experience. They delivered beyond our expectations and helped scale our platform.",
    },
    {
      name: "Sarah Wilson",
      role: "Marketing Director",
      message:
        "Their creativity and technical skills are unmatched. Our brand visibility increased dramatically.",
    },
    {
      name: "David Lee",
      role: "Product Manager",
      message:
        "Highly professional team with excellent communication. The final product exceeded our expectations.",
    },
  ]

  return (
    <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto text-white">

      {/* Header */}
      <div className="text-center mb-20">

        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-medium text-white mb-6">
          <MessageSquare className="w-4 h-4"/>
          Client Feedback
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          What Our Clients{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Say
          </span>
        </h2>

        <p className="text-gray-300 max-w-3xl mx-auto">
          Hear from our satisfied clients who trusted us to bring their ideas to life.
        </p>

      </div>


      {/* Feedback Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {feedbacks.map((item, index) => (
          <div
            key={index}
            className="group relative rounded-3xl p-8 border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:bg-white/10"
          >

            {/* Glow */}
            <div className=""/>

            <div className="relative z-10">

              <div className="flex mb-4 text-yellow-400">
                <Star size={18}/>
                <Star size={18}/>
                <Star size={18}/>
                <Star size={18}/>
                <Star size={18}/>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                "{item.message}"
              </p>

              <div>

                <h4 className="font-semibold">
                  {item.name}
                </h4>

                <p className="text-gray-400 text-sm">
                  {item.role}
                </p>

              </div>

            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Feedback