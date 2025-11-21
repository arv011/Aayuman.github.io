import Hero from "@/components/Hero";
import EventsSection from "@/components/EventsSection";
import RSVPForm from "@/components/RSVPForm";
import Gallery from "@/components/Gallery";
import TravelSection from "@/components/TravelSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <EventsSection />
      <Gallery />
      <TravelSection venueName={"Radha Palace, Aggarwal Fun City Mall, CBD Ground, near Karkardooma Court, Shahdara, New Delhi, Delhi 110032"} eventVenueName={" DDA Comunity Center,J6R8+R3P, Ratan Lal Market, Kaseru Walan, Paharganj, New Delhi, Delhi 110055"} />
      <Footer />
    </div>
  );
};

export default Index;
