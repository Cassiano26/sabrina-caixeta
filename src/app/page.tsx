import Hero from '../components/Hero';
import Sticky from '../components/Sticky';

export default function Home() {
  return (
    <main className="container">
      <Hero />
      <Sticky />
      <Hero />
      <Hero />
    </main>
  );
}
