import AboutMe from '../components/AboutMe';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Slider from '../components/Slider';
import Sticky from '../components/Sticky';

export default function Home() {
  return (
    <main className="container">
      <Hero />
      <Sticky />
      <Services />
      <Slider />
      <AboutMe />
      <Hero />
    </main>
  );
}
