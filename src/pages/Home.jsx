import Hero from "../components/Hero";
import LoveStory from "../components/LoveStory";
import EventDetails from "../components/EventDetails";
import Schedule from "../components/Schedule";
import Gallery from "../components/Gallery";
import DressCode from "../components/DressCode";
import RSVP from "../components/RSVP";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-rose-50 overflow-x-hidden ">
      <Hero />
      <LoveStory />
      <EventDetails />
      <Schedule />
      <Gallery />
      <DressCode />
      <RSVP />
      <Footer />
    </div>
  );
}
