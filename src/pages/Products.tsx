import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, ArrowLeft, Star, Thermometer, Wind, Zap } from "lucide-react";
import { Link } from "react-router-dom";

// Import product images
import splitAc from "@/assets/split-ac.jpg";
import inverterSplitAc from "@/assets/inverter-split-ac.jpg";
import cassetteAc from "@/assets/cassette-ac.jpg";
import windowAc from "@/assets/window-ac.jpg";
import portableAc from "@/assets/portable-ac.jpg";
import waterCooler from "@/assets/water-cooler.jpg";
import airPurifier from "@/assets/air-purifier.jpg";
import coldRoom from "@/assets/cold-room.jpg";
import ahuSystem from "@/assets/ahu-system.jpg";
import alkalineRo from "@/assets/alkaline-ro.jpg";
import solarWaterHeater from "@/assets/solar-water-heater.jpg";
import saleBanner from "@/assets/sale-banner.jpg";

const Products = () => {
  const productCategories = [
    {
      id: "inverter-split-ac",
      title: "Inverter Split Air Conditioners",
      description: "Energy-efficient inverter technology split ACs with variable speed",
      image: inverterSplitAc,
      icon: <Thermometer className="h-6 w-6" />,
      brands: ["Daikin", "Mitsubishi Heavy", "Carrier", "Amstrad", "Midea", "Godrej"],
      products: [
        { name: "Daikin FTXS35K Inverter", capacity: "1.5 Ton", rating: "5 Star", price: "₹38,000" },
        { name: "Carrier Inverter Neo", capacity: "1 Ton", rating: "5 Star", price: "₹32,000" },
        { name: "Mitsubishi Heavy Inverter", capacity: "1 Ton", rating: "5 Star", price: "₹35,000" }
      ]
    },
    {
      id: "non-inverter-split-ac",
      title: "Non-Inverter Split Air Conditioners",
      description: "Fixed speed split ACs for consistent cooling performance",
      image: splitAc,
      icon: <Thermometer className="h-6 w-6" />,
      brands: ["Daikin", "Mitsubishi Heavy", "Carrier", "Amstrad", "Midea", "Godrej"],
      products: [
        { name: "Carrier Estrella", capacity: "1.5 Ton", rating: "3 Star", price: "₹25,000" },
        { name: "Godrej Fixed Speed", capacity: "1 Ton", rating: "3 Star", price: "₹22,000" },
        { name: "Amstrad Non-Inverter", capacity: "1.5 Ton", rating: "2 Star", price: "₹20,000" }
      ]
    },
    {
      id: "cassette-ac",
      title: "Cassette Air Conditioners",
      description: "Ceiling-mounted cassette ACs for uniform cooling",
      image: cassetteAc,
      icon: <Wind className="h-6 w-6" />,
      brands: ["Daikin", "Carrier", "Mitsubishi Heavy", "Cruise"],
      products: [
        { name: "Daikin FCVF50ARV16", capacity: "2 Ton", rating: "5 Star", price: "₹85,000" },
        { name: "Carrier Cassette 42KCC036", capacity: "3 Ton", rating: "3 Star", price: "₹95,000" },
        { name: "Mitsubishi Heavy Cassette", capacity: "2.5 Ton", rating: "4 Star", price: "₹90,000" }
      ]
    },
    {
      id: "window-ac",
      title: "Window Air Conditioners",
      description: "Compact window ACs perfect for smaller spaces",
      image: windowAc,
      icon: <Zap className="h-6 w-6" />,
      brands: ["Carrier", "Godrej", "Amstrad", "Cruise"],
      products: [
        { name: "Carrier Estrella", capacity: "1.5 Ton", rating: "3 Star", price: "₹25,000" },
        { name: "Godrej GWC 12UTC5", capacity: "1 Ton", rating: "5 Star", price: "₹22,000" },
        { name: "Amstrad Window AC", capacity: "1.5 Ton", rating: "2 Star", price: "₹20,000" }
      ]
    },
    {
      id: "portable-ac",
      title: "Portable Air Conditioners",
      description: "Mobile ACs that can be moved anywhere",
      image: portableAc,
      icon: <Wind className="h-6 w-6" />,
      brands: ["Cruise"],
      products: [
        { name: "Cruise Mobile Pro", capacity: "1 Ton", rating: "3 Star", price: "₹28,000" },
        { name: "Cruise Portable Deluxe", capacity: "1.5 Ton", rating: "3 Star", price: "₹32,000" },
        { name: "Cruise Compact AC", capacity: "0.75 Ton", rating: "2 Star", price: "₹25,000" }
      ]
    },
    {
      id: "water-solutions",
      title: "Water Coolers & Dispensers",
      description: "Premium water cooling and dispensing solutions",
      image: waterCooler,
      icon: <Thermometer className="h-6 w-6" />,
      brands: ["Usha", "Voltas"],
      products: [
        { name: "Usha Water Cooler", capacity: "20L", rating: "4 Star", price: "₹12,000" },
        { name: "Voltas Water Dispenser", capacity: "Hot & Cold", rating: "3 Star", price: "₹8,000" },
        { name: "Usha Premium Cooler", capacity: "40L", rating: "5 Star", price: "₹15,000" }
      ]
    },
    {
      id: "cold-rooms",
      title: "Cold Rooms & Storage",
      description: "Commercial refrigeration and cold storage solutions",
      image: coldRoom,
      icon: <Thermometer className="h-6 w-6" />,
      brands: ["Daikin", "Carrier", "Blue Star"],
      products: [
        { name: "Daikin Cold Room", capacity: "10x10 ft", rating: "Commercial", price: "₹2,50,000" },
        { name: "Carrier Storage Unit", capacity: "8x12 ft", rating: "Industrial", price: "₹3,00,000" },
        { name: "Blue Star Freezer Room", capacity: "12x15 ft", rating: "Commercial", price: "₹4,50,000" }
      ]
    },
    {
      id: "ahu-systems",
      title: "Air Handling Units (AHU)",
      description: "Daikin AHU systems for large commercial HVAC applications",
      image: ahuSystem,
      icon: <Wind className="h-6 w-6" />,
      brands: ["Daikin"],
      products: [
        { name: "Daikin AHU-5000", capacity: "5000 CFM", rating: "Commercial", price: "₹1,25,000" },
        { name: "Daikin AHU-8000", capacity: "8000 CFM", rating: "Industrial", price: "₹1,80,000" },
        { name: "Daikin AHU-12000", capacity: "12000 CFM", rating: "Heavy Duty", price: "₹2,50,000" }
      ]
    },
    {
      id: "alkaline-ro",
      title: "Alkaline Water RO Systems",
      description: "Advanced alkaline water purification with RO technology",
      image: alkalineRo,
      icon: <Wind className="h-6 w-6" />,
      brands: ["Zero B"],
      products: [
        { name: "Zero B Alkaline Pro", capacity: "RO+UV+Alkaline", rating: "7 Stage", price: "₹18,000" },
        { name: "Zero B Premium", capacity: "RO+UV+TDS", rating: "6 Stage", price: "₹15,000" },
        { name: "Zero B Elite", capacity: "RO+Alkaline", rating: "8 Stage", price: "₹22,000" }
      ]
    },
    {
      id: "solar-water-heater",
      title: "Solar Water Heaters",
      description: "Eco-friendly solar water heating systems",
      image: solarWaterHeater,
      icon: <Zap className="h-6 w-6" />,
      brands: ["Inter Solar"],
      products: [
        { name: "Inter Solar 100L", capacity: "100 Liters", rating: "Residential", price: "₹25,000" },
        { name: "Inter Solar 200L", capacity: "200 Liters", rating: "Family", price: "₹35,000" },
        { name: "Inter Solar 300L", capacity: "300 Liters", rating: "Commercial", price: "₹45,000" }
      ]
    },
    {
      id: "air-purifiers",
      title: "Air & Water Purifiers",
      description: "Advanced purification systems for clean air and water",
      image: airPurifier,
      icon: <Wind className="h-6 w-6" />,
      brands: ["Daikin", "Carrier", "Blue Star"],
      products: [
        { name: "Daikin Air Purifier", capacity: "HEPA Filter", rating: "5 Star", price: "₹18,000" },
        { name: "Carrier AquaEdge", capacity: "RO+UV", rating: "4 Star", price: "₹15,000" },
        { name: "Blue Star Air Cleaner", capacity: "UV-C Tech", rating: "4 Star", price: "₹12,000" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-6">
              <Link to="/" className="text-white hover:text-accent-warm transition-colors">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Our Products
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-2xl">
              Explore our comprehensive range of HVAC solutions, air conditioners, 
              water systems, and air purification products from leading brands.
            </p>
            <div className="mt-8">
              <Button variant="cta" size="lg">
                <Phone className="h-5 w-5" />
                Get Free Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productCategories.map((category) => (
                <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground p-2 rounded-lg">
                      {category.icon}
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-primary">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {category.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Brands */}
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Available Brands:</h4>
                      <div className="flex flex-wrap gap-1">
                        {category.brands.map((brand) => (
                          <Badge key={brand} variant="secondary" className="text-xs">
                            {brand}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Sample Products */}
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Featured Products:</h4>
                      <div className="space-y-2">
                        {category.products.slice(0, 2).map((product, index) => (
                          <div key={index} className="bg-card border rounded-lg p-3">
                            <div className="flex justify-between items-start mb-1">
                              <h5 className="font-medium text-sm text-primary">
                                {product.name}
                              </h5>
                              <div className="flex items-center gap-1">
                                <Star className="h-3 w-3 fill-accent-warm text-accent-warm" />
                                <span className="text-xs">{product.rating}</span>
                              </div>
                            </div>
                            <div className="flex justify-between items-center text-xs text-muted-foreground">
                              <span>{product.capacity}</span>
                              <span className="font-semibold text-primary">{product.price}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" className="w-full mt-4">
                      <Phone className="h-4 w-4" />
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Commercial HVAC Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Commercial HVAC Solutions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Specialized HVAC systems for commercial spaces including gyms, salons, 
                hospitals, schools, hotels, and more.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "VRV Systems", brand: "Daikin Exclusive", description: "Variable Refrigerant Volume systems" },
                { title: "Chillers", brand: "Multi-Brand", description: "Industrial cooling solutions" },
                { title: "Heat Pumps", brand: "Daikin & Carrier", description: "Energy-efficient heating" },
                { title: "Ductable ACs", brand: "All Major Brands", description: "Central air conditioning" }
              ].map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{item.title}</CardTitle>
                    <Badge variant="outline" className="mx-auto">{item.brand}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <Button variant="ghost" size="sm" className="mt-3">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* End of Season Sale Section */}
        <section className="py-16 bg-gradient-to-r from-red-500/90 to-orange-500/90 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                🔥 End of Season Sale 🔥
              </h2>
              <p className="text-xl mb-6">
                Special discounts on premium AC brands - Limited time offer!
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <img 
                  src={saleBanner} 
                  alt="Sale Banner"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold mb-2">Starting at ₹26,000/-</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Brands:</strong> AUX, Sharp, Panasonic, Lloyd, White Westinghouse</p>
                  <p><strong>Capacity:</strong> 1 Ton, 1.5 Ton, 2 Ton</p>
                  <p><strong>Rating:</strong> 3, 4, 5 Star</p>
                  <p><strong>Type:</strong> Inverter & Non-Inverter</p>
                  <p><strong>Function:</strong> Cooling & Heating+Cooling</p>
                </div>
                <Button variant="cta" className="mt-4 w-full">
                  <Phone className="h-4 w-4" />
                  Get Sale Price
                </Button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-bold mb-4">Featured Sale Models:</h4>
                <div className="space-y-3">
                  <div className="bg-white/20 rounded p-3">
                    <h5 className="font-semibold">AUX Inverter 1.5 Ton</h5>
                    <p className="text-sm">5 Star, Cooling + Heating</p>
                    <p className="font-bold text-lg">₹28,000/-</p>
                  </div>
                  <div className="bg-white/20 rounded p-3">
                    <h5 className="font-semibold">Sharp 1 Ton Non-Inverter</h5>
                    <p className="text-sm">3 Star, Cooling Only</p>
                    <p className="font-bold text-lg">₹26,000/-</p>
                  </div>
                  <div className="bg-white/20 rounded p-3">
                    <h5 className="font-semibold">Panasonic 2 Ton Inverter</h5>
                    <p className="text-sm">4 Star, Dual Function</p>
                    <p className="font-bold text-lg">₹42,000/-</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-bold mb-4">Sale Benefits:</h4>
                <ul className="space-y-2 text-sm">
                  <li>✅ Up to 30% Off MRP</li>
                  <li>✅ Free Installation</li>
                  <li>✅ 1 Year Service Warranty</li>
                  <li>✅ Free Site Visit</li>
                  <li>✅ EMI Options Available</li>
                  <li>✅ Exchange Offers</li>
                </ul>
                <Button variant="outline" className="mt-4 w-full bg-white/20 border-white text-white hover:bg-white hover:text-primary">
                  View All Sale Items
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Find Your Perfect HVAC Solution?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Get expert consultation and competitive pricing on all products
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg">
                <Phone className="h-5 w-5" />
                Call for Free Site Visit
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                Request Quote
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;