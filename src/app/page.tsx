import Hero from '../components/Hero';
import Services from '../components/Services';
import Sticky from '../components/Sticky';

export default function Home() {
  return (
    <main className="container">
      <Hero />
      <Sticky />
      <Services />
      <Hero />
    </main>
  );
}
