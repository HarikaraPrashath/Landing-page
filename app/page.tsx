import About from "@/components/Pages/about";
import { Hero } from "@/components/Pages/hero";
import AutoScroller from "@/components/Pages/tool";
import LightPillar from "@/components/Design/bg";
import Service from "@/components/Pages/service";
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
          pillarWidth={5}
          pillarHeight={0.6}
          noiseIntensity={0.8}
          pillarRotation={36}
          interactive={false}
          mixBlendMode="screen"
          quality="high"
        />
         <div className="relative z-10">
        <Hero />
        <AutoScroller />
        <Service/>
        <About />
      </div>

      </div>
      {/* Content */}
     
    </main>
  );
}