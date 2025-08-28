import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandShowcase from "@/components/BrandShowcase";
import ProductCategories from "@/components/ProductCategories";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EndOfSeasonSale from "@/components/EndOfSeasonSale";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <BrandShowcase />
        <ProductCategories />
        <EndOfSeasonSale />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
