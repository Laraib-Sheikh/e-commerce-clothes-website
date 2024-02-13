import Hero from "@/components/Hero";
import MovNavbar from "@/components/MovNavbar";
import NewProducts from "@/components/NewProducts";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <NewProducts />
      <Testimonials />
      <MovNavbar />
    </main>
  );
}
