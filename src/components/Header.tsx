import { Button } from "@/components/ui/button";
import { Phone, Menu, MessageCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/1dac8f77-f78d-438f-9443-81448ee971c1.png" 
                alt="Khandelwal Distributors Logo" 
                className="h-12"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-primary" />
              <span className="font-medium">Call Now:</span>
              <a href="tel:+919876543210" className="text-primary hover:underline">
                +91 98765 43210
              </a>
            </div>
            
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 transition-colors"
            >
              <MessageCircle className="h-6 w-6" />
            </a>
            
            <Button variant="cta" size="sm" className="hidden sm:flex">
              <Phone className="h-4 w-4" />
              Get Quote
            </Button>
            
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;