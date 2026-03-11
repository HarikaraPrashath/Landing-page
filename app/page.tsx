import About from "@/components/Pages/about";
import { Hero } from "@/components/Pages/hero";
import AutoScroller from "@/components/Pages/tool";
import LightPillar from "@/components/Design/bg";
import Service from "@/components/Pages/service";
import Team from "@/components/Pages/team";
import Products from "@/components/Pages/product";
import Feedback from "@/components/Pages/clientFeedback";
import Footer from "@/components/Pages/footer";
export default function Home() {
  return (
    <main className="relative flex flex-col w-full">

      {/* Background */}
      <div style={{ width: '100%', minHeight: "100vh", position: 'relative' }}>
        <LightPillar
          topColor="#5227FF"
          bottomColor="#FF9FFC"
          intensity={1}
          rotationSpeed={0.7}
          glowAmount={0.001}
          pillarWidth={3}
          pillarHeight={0.6}
          noiseIntensity={0.1}
          pillarRotation={25}
          interactive={false}
          mixBlendMode="screen"
          quality="high"
        />
         <div className="relative z-10">
        <Hero />
        <AutoScroller />
        <Service/>
        <Products/>
        <Feedback/>
        <About />
        <Team/>
        <Footer/>
      </div>

      </div>
      {/* Content */}
     
    </main>
  );
}