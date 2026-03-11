"use client"

import { Package, ExternalLink } from "lucide-react"
import Image from "next/image"

const Products = () => {
  const products = [
    {
      name: "Analytics Dashboard",
      description:
        "A powerful analytics platform that helps businesses visualize and understand their data.",
      image: "/images/product1.jpg",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      name: "E-Commerce Platform",
      description:
        "A complete online store solution with payment integration and inventory management.",
      image: "/images/product2.jpg",
      gradient: "from-pink-500 to-orange-500",
    },
    {
      name: "Project Manager",
      description:
        "A collaborative tool designed to help teams manage projects efficiently.",
      image: "/images/product3.jpg",
      gradient: "from-green-500 to-teal-500",
    },
  ]

  return (
    <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto text-white">

      {/* Header */}
      <div className="text-center mb-20">

        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-medium text-white mb-6">
          <Package className="w-4 h-4" />
          Our Products
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Products We{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Built
          </span>
        </h2>

        <p className="text-gray-300 max-w-3xl mx-auto">
          Explore some of the innovative solutions we have developed to help
          businesses grow and scale in the digital world.
        </p>

      </div>


      {/* Product Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {products.map((product, index) => (
          <div
            key={index}
            className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:bg-white/10"
          >

            {/* Glow */}
            <div
            />

            <div className="relative z-10">

              <div className="relative h-52 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">

                <h3 className="text-xl font-bold mb-2">{product.name}</h3>

                <p className="text-gray-300 mb-4">
                  {product.description}
                </p>

                <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300">
                  View Product <ExternalLink size={16}/>
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Products