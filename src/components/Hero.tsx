import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hvac-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional HVAC Installation" 
          className="w-full h-full object-cover animate-fade-in"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Professional HVAC Solutions & 
            <span className="text-accent-warm"> Air Conditioning </span>
            Services
          </h2>
          
          <p className="text-xl mb-8 text-white/90">
            Authorized dealer for Daikin, Mitsubishi Heavy, Carrier & more. 
            Expert installation, servicing & commercial HVAC projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button variant="cta" size="lg" className="text-lg px-8 hover:scale-105 transition-transform duration-300">
              <Phone className="h-5 w-5" />
              Call Now - Free Consultation
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300">
              <Link to="/products">View Products</Link>
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 text-sm">
            <div className="flex items-center gap-2 hover:text-accent-warm transition-colors duration-300">
              <CheckCircle className="h-5 w-5 text-accent-warm" />
              <span>Free Site Visit & Consultation</span>
            </div>
            <div className="flex items-center gap-2 hover:text-accent-warm transition-colors duration-300">
              <CheckCircle className="h-5 w-5 text-accent-warm" />
              <span>Expert Installation Team</span>
            </div>
            <div className="flex items-center gap-2 hover:text-accent-warm transition-colors duration-300">
              <MapPin className="h-5 w-5 text-accent-warm" />
              <span>Local Service Area</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;