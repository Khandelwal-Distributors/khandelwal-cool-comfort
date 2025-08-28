import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, ArrowLeft, Star, Droplets, Thermometer, Filter, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import waterCooler from "@/assets/water-cooler.jpg";

const WaterCooler = () => {
  const products = [
    { name: "Usha Aqua King", capacity: "20L", type: "Storage", price: "₹12,000", features: ["Stainless Steel", "Hot & Cold", "Energy Efficient"] },
    { name: "Voltas Mini Magic Pure", capacity: "Hot & Cold", type: "Dispenser", price: "₹8,000", features: ["RO Purification", "Compact Design", "Child Lock"] },
    { name: "Usha Premium Cooler", capacity: "40L", type: "Industrial", price: "₹15,000", features: ["Large Capacity", "SS Body", "Fast Cooling"] },
    { name: "Blue Star Water Cooler", capacity: "60L", type: "Commercial", price: "₹18,000", features: ["Heavy Duty", "Food Grade", "Auto Cut-Off"] },
    { name: "Voltas Water Dispenser", capacity: "Hot/Cold/Normal", type: "Dispenser", price: "₹6,500", features: ["3 Temperature", "LED Display", "Bottle Storage"] },
    { name: "Usha Cooler Deluxe", capacity: "80L", type: "Industrial", price: "₹22,000", features: ["High Capacity", "Rust Proof", "Energy Star"] }
  ];

  const benefits = [
    { icon: <Droplets className="h-6 w-6" />, title: "Pure Water", description: "Clean, safe drinking water for homes and offices" },
    { icon: <Thermometer className="h-6 w-6" />, title: "Temperature Control", description: "Hot, cold, and normal water options available" },
    { icon: <Filter className="h-6 w-6" />, title: "Advanced Filtration", description: "RO, UV, and carbon filtration systems" },
    { icon: <Heart className="h-6 w-6" />, title: "Health Benefits", description: "Hygienic water storage and dispensing" }
  ];

  const types = [
    { title: "Storage Water Coolers", description: "Traditional coolers for continuous cold water supply", applications: ["Offices", "Schools", "Factories"] },
    { title: "Water Dispensers", description: "Compact units with hot, cold, and normal water", applications: ["Homes", "Small Offices", "Clinics"] },
    { title: "Industrial Coolers", description: "High-capacity coolers for large establishments", applications: ["Hospitals", "Hotels", "Institutions"] },
    { title: "RO Water Coolers", description: "Integrated purification with cooling systems", applications: ["Premium Offices", "Healthcare", "Schools"] }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Water Cooler Price in Bareilly | RO Water Dispensers | Best Cooling Solutions</title>
        <meta name="description" content="Buy Water Coolers in Bareilly, UP. Best prices on Usha, Voltas, Blue Star water coolers & dispensers. Hot/Cold water solutions for offices, homes. Free installation." />
        <meta name="keywords" content="water cooler price Bareilly, water dispenser Bareilly, RO water cooler UP, office water cooler, Usha water cooler, Voltas dispenser Bareilly" />
        <meta property="og:title" content="Best Water Cooler Dealers in Bareilly | Pure Water Solutions" />
        <meta property="og:description" content="Premium water cooling solutions in Bareilly. Storage coolers, dispensers, RO systems with professional installation and service." />
        <link rel="canonical" href="https://yoursite.com/products/water-cooler" />
      </Helmet>

      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary/90 to-secondary/90 py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-6">
              <Link to="/products" className="text-white hover:text-accent-warm transition-colors">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Water Coolers & Dispensers in Bareilly
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mb-8">
              Premium water cooling solutions for homes and offices in Bareilly, Uttar Pradesh. 
              Storage coolers, dispensers, and RO systems with hot, cold, and normal water options.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="cta" size="lg">
                <Phone className="h-5 w-5" />
                Get Best Price Quote
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
                Free Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">
              Benefits of Water Coolers & Dispensers
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Types Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Types of Water Cooling Solutions
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose the perfect water cooler based on your needs and space requirements
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {types.map((type, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{type.title}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-2 text-sm">Best For:</h4>
                    <div className="space-y-1">
                      {type.applications.map((app, appIndex) => (
                        <div key={appIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                          {app}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Best Water Cooler Models in Bareilly
              </h2>
              <p className="text-xl text-muted-foreground">
                Quality water cooling solutions with professional installation and service support
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img 
                      src={waterCooler} 
                      alt={`${product.name} - Water Cooler`}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 right-4 bg-accent-warm">
                      {product.type}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{product.name}</CardTitle>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{product.capacity}</span>
                      <span className="text-lg font-bold text-accent-warm">{product.price}</span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-2 mb-4">
                      {product.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button className="w-full">
                      <Phone className="h-4 w-4" />
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Local Service Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Water Cooler Installation & Service in Bareilly
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Complete water cooling solutions across Bareilly district. Professional installation, 
                maintenance, and repair services for all types of water coolers and dispensers.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="secondary" size="lg">
                  <Phone className="h-5 w-5" />
                  Call: +91-XXXXX-XXXXX
                </Button>
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
                  Book Service
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default WaterCooler;