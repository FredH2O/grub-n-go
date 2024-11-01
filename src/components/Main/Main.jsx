import AboutUs from "../AboutUs/AboutUs";
import BookATable from "../BookATable/BookATable";
import Chefs from "../Chefs/Chefs";
import Contact from "../Contact/Contact";
import EventsSection from "../EventsSection/EventsSection";
import Hero from "../Hero/Hero";
import Menu from "../Menu/Menu";
import Stats from "../Stats/Stats";
import Testimonials from "../Testimonials/Testimonials";
import WhyUs from "../WhyUs/WhyUs";

function Main() {
  return (
    <main className="main">
      <Hero />
      <AboutUs />
      <WhyUs />
      <Stats />
      <Menu />
      <Testimonials />
      <EventsSection />
      <Chefs />
      <BookATable />
      <Gallery />
      <Contact />
    </main>
  );
}
export default Main;
