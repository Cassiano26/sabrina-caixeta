import AboutMe from '../components/AboutMe';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Slider from '../components/Slider';
import Sticky from '../components/Sticky';
import LastSection from '../components/LastSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <Sticky />
      <Services />
      <Slider />
      <AboutMe />
      <LastSection />
    </main>
  );
}
