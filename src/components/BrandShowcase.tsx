import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Star, Award } from "lucide-react";

// Import brand logos
import daikinLogo from "@/assets/brands/daikin-logo.jpg";
import mitsubishiLogo from "@/assets/brands/mitsubishi-logo.jpg";
import carrierLogo from "@/assets/brands/carrier-logo.jpg";
import amstradLogo from "@/assets/brands/amstrad-logo.jpg";
import mideaLogo from "@/assets/brands/midea-logo.jpg";
import godrejLogo from "@/assets/brands/godrej-logo.jpg";
import cruiseLogo from "@/assets/brands/cruise-logo.jpg";
import voltasLogo from "@/assets/brands/voltas-logo.jpg";

const brands = [
  { name: "Daikin", specialty: "Premium VRV Systems", featured: true, logo: daikinLogo },
  { name: "Mitsubishi Heavy", specialty: "Heavy Duty Commercial", logo: mitsubishiLogo },
  { name: "Carrier", specialty: "Reliable Cooling", logo: carrierLogo },
  { name: "Voltas", specialty: "India's No.1 AC", logo: voltasLogo },
  { name: "Amstrad", specialty: "Budget Friendly", logo: amstradLogo },
  { name: "Midea", specialty: "Energy Efficient", logo: mideaLogo },
  { name: "Godrej", specialty: "Indian Excellence", logo: godrejLogo },
  { name: "Cruise", specialty: "Compact Solutions", logo: cruiseLogo },
];

const BrandShowcase = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Authorized Dealer for <span className="text-primary">Leading AC Brands</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are proud partners with top air conditioning manufacturers, 
            offering genuine products with full warranty coverage.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer ${
                brand.featured ? 'ring-2 ring-primary/20 bg-gradient-to-br from-primary/5 to-primary/10' : ''
              }`}
              onClick={() => {
                const brandSlug = brand.name.toLowerCase().replace(/\s+/g, '-');
                if (['daikin', 'mitsubishi-heavy', 'carrier', 'voltas'].includes(brandSlug)) {
                  window.location.href = `/brands/${brandSlug}`;
                }
              }}
            >
              <CardContent className="p-0 relative">
                {brand.featured && (
                  <div className="absolute top-2 right-2 z-10">
                    <Award className="h-4 w-4 text-accent-warm" />
                  </div>
                )}
                <div className="h-20 flex items-center justify-center bg-white p-2">
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <Button variant="cta" size="lg">
            <Phone className="h-4 w-4" />
            Get Brand-Specific Quote
          </Button>
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;