import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Home, Building, Droplets, Wind } from "lucide-react";
import acCollection from "@/assets/ac-collection.jpg";
import commercialHvac from "@/assets/commercial-hvac.jpg";

const ProductCategories = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Complete <span className="text-primary">HVAC Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From residential comfort to large commercial projects, we've got you covered.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Residential Products */}
          <Card className="group hover:shadow-[var(--shadow-card)] transition-all duration-300">
            <div className="relative overflow-hidden rounded-t-lg">
              <img 
                src={acCollection} 
                alt="Residential Air Conditioning Units" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <Home className="h-6 w-6 text-primary" />
                </div>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-xl">Residential Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <Wind className="h-4 w-4 text-primary" />
                  <span>Split ACs (1-5 Ton)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Wind className="h-4 w-4 text-primary" />
                  <span>Window ACs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Wind className="h-4 w-4 text-primary" />
                  <span>Portable ACs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Droplets className="h-4 w-4 text-primary" />
                  <span>Water Coolers & Dispensers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Wind className="h-4 w-4 text-primary" />
                  <span>Air & Water Purifiers</span>
                </li>
              </ul>
              <Button variant="cta" className="w-full">
                <Phone className="h-4 w-4" />
                Get Home Quote
              </Button>
            </CardContent>
          </Card>
          
          {/* Commercial Products */}
          <Card className="group hover:shadow-[var(--shadow-card)] transition-all duration-300">
            <div className="relative overflow-hidden rounded-t-lg">
              <img 
                src={commercialHvac} 
                alt="Commercial HVAC Systems" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <Building className="h-6 w-6 text-primary" />
                </div>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-xl">Commercial & VRV Systems</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-primary" />
                  <span>Daikin VRV Systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <Wind className="h-4 w-4 text-primary" />
                  <span>Cassette & Ductable ACs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Wind className="h-4 w-4 text-primary" />
                  <span>Chillers & Heat Pumps</span>
                </li>
                <li className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-primary" />
                  <span>Floor Standing ACs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Wind className="h-4 w-4 text-primary" />
                  <span>Ventilation Systems</span>
                </li>
              </ul>
              <Button variant="cta" className="w-full">
                <Phone className="h-4 w-4" />
                Commercial Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Commercial Applications */}
        <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            Commercial HVAC Applications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Hotels & Restaurants",
              "Hospitals & Clinics", 
              "Schools & Colleges",
              "Gyms & Fitness Centers",
              "Salons & Spas",
              "Offices & IT Parks",
              "Retail Stores",
              "Industrial Buildings"
            ].map((application, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg">
                <Building className="h-6 w-6 text-primary mx-auto mb-2" />
                <span className="text-sm font-medium">{application}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;