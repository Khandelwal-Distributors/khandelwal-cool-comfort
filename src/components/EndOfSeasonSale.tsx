import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import cleanSaleBanner from "@/assets/clean-sale-banner.jpg";

const EndOfSeasonSale = () => {
  return (
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
              src={cleanSaleBanner} 
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
  );
};

export default EndOfSeasonSale;