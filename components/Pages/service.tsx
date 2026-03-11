"use client"
import {
  Code2,
  Briefcase,
  CreditCard,
  Palette,
  Smartphone,
  Globe,
  Cloud,
  GitPullRequest,
  TrendingUp,
  BarChart3,
  Users,
  Search,
  ShoppingCart,
  Layers,
} from "lucide-react"

const Service = () => {
  const services = [
    {
      title: "Technology",
      description: "Building robust, scalable solutions with cutting-edge technologies that power your growth.",
      icon: Code2,
      gradient: "from-blue-500 to-cyan-500",
      features: [
        { icon: Globe, text: "Web Development", color: "text-blue-400" },
        { icon: BarChart3, text: "Data Analytics", color: "text-green-400" },
        { icon: Cloud, text: "Cloud Infrastructure", color: "text-cyan-400" },
        { icon: GitPullRequest, text: "API Development", color: "text-indigo-400" },
      ],
    },
    {
      title: "Digital Marketing",
      description: "Grow your brand and customer base through strategic online marketing and analytics.",
      icon: TrendingUp,
      gradient: "from-pink-500 to-rose-500",
      features: [
        { icon: Users, text: "Social Media Marketing", color: "text-purple-400" },
        { icon: Search, text: "SEO & Content", color: "text-orange-400" },
        { icon: CreditCard, text: "Paid Advertising", color: "text-red-400" },
        { icon: BarChart3, text: "Analytics & Insights", color: "text-blue-400" },
      ],
    },
    {
      title: "Design",
      description: "Crafting memorable experiences with beautiful interfaces and consistent branding.",
      icon: Palette,
      gradient: "from-emerald-500 to-teal-500",
      features: [
        { icon: Smartphone, text: "UI & UX Design", color: "text-pink-400" },
        { icon: Palette, text: "Brand Identity", color: "text-teal-400" },
        { icon: ShoppingCart, text: "Product Design", color: "text-yellow-400" },
        { icon: Layers, text: "Design Systems", color: "text-lime-400" },
      ],
    },
  ]

  return (
    <section className="relative py-24 px-6 md:px-10 max-w-7xl mx-auto">

      {/* HEADER */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-medium text-white mb-6">
          <Briefcase className="w-4 h-4" />
          Our Services
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Services That{" "}
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Drive Success
          </span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
          We combine cutting-edge technology, strategic marketing, and exceptional design
          to transform your vision into reality and accelerate your business growth.
        </p>
      </div>


      {/* SERVICE CARDS */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

        {services.map((service, index) => {
          const IconComponent = service.icon

          return (
            <article
              key={index}
              className="group relative rounded-3xl p-8 border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-white/20 hover:bg-white/10"
            >

            

              <div className="relative z-10">

                {/* ICON */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6 group-hover:scale-110 transition-transform`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* TITLE */}
                <h2 className="text-2xl font-bold mb-4 text-white">
                  {service.title}
                </h2>

                {/* DESC */}
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>

                {/* FEATURES */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => {
                    const FeatureIcon = feature.icon

                    return (
                      <li key={featureIndex} className="flex items-center gap-3 text-gray-200">
                        <FeatureIcon className={`w-5 h-5 ${feature.color}`} />
                        <span>{feature.text}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Service