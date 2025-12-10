// src/app/page.tsx
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Contact from '@/components/sections/Contact';
import CoverageBanner from '@/components/sections/CoverageBanner';

export default function Home() {
  return (
    <main>
      <Hero />
      <CoverageBanner />
      <Services />
      <Contact />
    </main>
  );
}