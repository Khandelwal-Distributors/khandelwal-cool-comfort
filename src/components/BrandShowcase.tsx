import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Star, Award } from "lucide-react";

const brands = [
  { name: "Daikin", specialty: "Premium VRV Systems", featured: true },
  { name: "Mitsubishi Heavy", specialty: "Heavy Duty Commercial" },
  { name: "Carrier", specialty: "Reliable Cooling" },
  { name: "Amstrad", specialty: "Budget Friendly" },
  { name: "Midea", specialty: "Energy Efficient" },
  { name: "Godrej", specialty: "Indian Excellence" },
  { name: "Cruise", specialty: "Compact Solutions" },
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
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-[var(--shadow-card)] transition-all duration-300 ${
                brand.featured ? 'ring-2 ring-primary/20 bg-gradient-to-br from-primary/5 to-primary/10' : ''
              }`}
            >
              <CardContent className="p-6 text-center">
                {brand.featured && (
                  <div className="flex justify-center mb-2">
                    <Award className="h-5 w-5 text-accent-warm" />
                  </div>
                )}
                <h3 className="font-bold text-lg mb-2 text-primary">{brand.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{brand.specialty}</p>
                {brand.featured && (
                  <div className="flex items-center justify-center gap-1 text-xs text-accent-warm mb-2">
                    <Star className="h-3 w-3 fill-current" />
                    <span>Exclusive Dealer</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="cta" size="lg">
            <Phone className="h-4 w-4" />
            Get Brand-Specific Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;