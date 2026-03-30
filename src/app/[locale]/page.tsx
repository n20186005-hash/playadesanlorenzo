import Hero from '@/components/Hero';
import About from '@/components/About';
import Explore from '@/components/Explore';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Comparison from '@/components/Comparison';
import Practical from '@/components/Practical';
import MapEmbed from '@/components/MapEmbed';
import References from '@/components/References';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Explore />
      <Gallery />
      <Reviews />
      <Comparison />
      <Practical />
      <MapEmbed />
      <References />
    </>
  );
}