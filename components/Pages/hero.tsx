import { ArrowRight } from 'lucide-react';
import { Header } from './header';
import BlurText from "../Design/textStyle";

export function Hero() {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <section className="relative overflow-hidden">
      <Header />

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 py-24 sm:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-block mb-6 px-5 py-2 bg-primary/80 backdrop-blur-lg rounded-full animate-pulse">
            <span className="text-sm font-medium text-primary text-purple-600">Launch your productivity today</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-snug">
            The complete platform to{" "}
            <span className="text-primary inline-block animate-blurShow">
              build Your Dream
            </span>
          </h1>


          {/* Description */}
          <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Your team's toolkit to stop configuring and start innovating. Securely build, deploy, and scale the best web experiences with our powerful platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button type='button' className="inline-flex text-white items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-black font-semibold rounded-lg transition">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
            <button type='button' className="px-6 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition">
              View Demo
            </button>
          </div>

        </div>
      </div>

      {/* Optional subtle floating shapes */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
    </section>
  );
  
}