"use client"
import {
  Award,
  Users,
  Target,
  Zap,
  Shield,
  Clock,
  Heart,
  Star,
} from "lucide-react"

const About = () => {

  const whyBestFeatures = [
    {
      icon: Award,
      title: "Industry Expertise",
      description:
        "Over 10+ years of combined experience delivering exceptional results across various industries.",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description:
        "A passionate team of experts committed to your success with 24/7 support and guidance.",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description:
        "We focus on measurable outcomes that directly impact your business growth and ROI.",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description:
        "Quick turnaround times without compromising quality, getting you to market faster.",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Rigorous testing and quality control processes ensure flawless execution every time.",
      gradient: "from-red-400 to-rose-500",
    },
    {
      icon: Clock,
      title: "Always Available",
      description:
        "Round-the-clock support and maintenance to keep your business running smoothly.",
      gradient: "from-indigo-400 to-purple-500",
    },
  ]

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Team Members" },
    { number: "24/7", label: "Support Available" },
  ]

  return (
    <div className="text-white">

      {/* HERO */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-medium text-white mb-6">
            <Heart className="w-4 h-4" />
            About Our Company
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            We Turn{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ideas Into Reality
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto mb-12">
            We're a passionate team of innovators, designers, and developers dedicated to helping
            businesses thrive in the digital world. Our mission is to transform your vision into
            powerful solutions that drive growth and success.
          </p>


          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">

                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>

                <div className="text-gray-400">{stat.label}</div>

              </div>
            ))}
          </div>
        </div>
      </section>



      {/* WHY CHOOSE US */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-medium text-white mb-6">
            <Star className="w-4 h-4" />
            Why Choose Us
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why We Are The{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Best Choice
            </span>
          </h2>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            We don't just deliver projects; we build lasting partnerships. Here's what sets us apart
            from the competition and makes us the preferred choice for businesses worldwide.
          </p>
        </div>


        {/* FEATURES GRID */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {whyBestFeatures.map((feature, index) => {
            const IconComponent = feature.icon

            return (
              <div
                key={index}
                className="group relative rounded-3xl p-8 border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:bg-white/10 hover:border-white/20"
              >

                

                <div className="relative z-10">

                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-white">
                    {feature.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>

                </div>
              </div>
            )
          })}
        </div>

      </section>

    </div>
  )
}

export default About