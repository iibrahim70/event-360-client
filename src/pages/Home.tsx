import EventItems from "@/components/EventItems";
import Faq from "@/components/Faq";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Pricings from "@/components/Pricings";
import RecentEvents from "@/components/RecentEvents";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <EventItems />
      <Gallery />
      <Pricings />
      <Reviews />
      <RecentEvents />
      <Faq />
    </main>
  );
};

export default Home;
