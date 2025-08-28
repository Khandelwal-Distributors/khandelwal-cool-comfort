import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import cleanSaleBanner from "@/assets/clean-sale-banner.jpg";

const EndOfSeasonSale = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-8 py-3 mb-6">
            <span className="text-sm font-semibold uppercase tracking-wider">Limited Time Offer</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
            🔥 END OF SEASON SALE 🔥
          </h2>
          <p className="text-2xl md:text-3xl font-semibold mb-4">
            MASSIVE SAVINGS ON PREMIUM ACs
          </p>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Get the best deals on top-rated air conditioners from leading brands. 
            Hurry, stocks are limited!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="mb-6">
              <img 
                src={cleanSaleBanner} 
                alt="Sale Banner"
                className="w-full h-40 object-cover rounded-xl mb-4 shadow-lg"
              />
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold text-3xl py-3 px-6 rounded-xl shadow-lg">
                Starting at ₹26,000/-
              </div>
            </div>
            <div className="space-y-3 text-sm mb-6">
              <div className="bg-white/10 rounded-lg p-3">
                <p className="font-semibold">Premium Brands Available</p>
                <p className="text-yellow-200">AUX • Sharp • Panasonic • Lloyd • White Westinghouse</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white/10 rounded p-2">
                  <p className="font-semibold">Capacity</p>
                  <p className="text-xs">1, 1.5, 2 Ton</p>
                </div>
                <div className="bg-white/10 rounded p-2">
                  <p className="font-semibold">Rating</p>
                  <p className="text-xs">3, 4, 5 Star</p>
                </div>
                <div className="bg-white/10 rounded p-2">
                  <p className="font-semibold">Type</p>
                  <p className="text-xs">Inverter/Non-Inverter</p>
                </div>
                <div className="bg-white/10 rounded p-2">
                  <p className="font-semibold">Function</p>
                  <p className="text-xs">Cooling/Heating</p>
                </div>
              </div>
            </div>
            <Button variant="cta" className="w-full text-lg py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold hover:from-yellow-300 hover:to-orange-300 shadow-lg">
              <Phone className="h-5 w-5" />
              Get Instant Quote
            </Button>
          </div>

          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h4 className="text-2xl font-bold mb-6 text-center">🏆 Featured Sale Models</h4>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-xl p-4 border border-green-300/30">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-bold text-lg">AUX Inverter 1.5 Ton</h5>
                  <div className="bg-green-400 text-black px-2 py-1 rounded text-xs font-bold">5⭐</div>
                </div>
                <p className="text-sm text-green-200 mb-2">Cooling + Heating Mode</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs line-through text-white/60">₹45,000</span>
                  <span className="font-bold text-xl text-yellow-300">₹28,000/-</span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-xl p-4 border border-blue-300/30">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-bold text-lg">Sharp 1 Ton Non-Inverter</h5>
                  <div className="bg-blue-400 text-black px-2 py-1 rounded text-xs font-bold">3⭐</div>
                </div>
                <p className="text-sm text-blue-200 mb-2">Cooling Only</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs line-through text-white/60">₹35,000</span>
                  <span className="font-bold text-xl text-yellow-300">₹26,000/-</span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-xl p-4 border border-purple-300/30">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-bold text-lg">Panasonic 2 Ton Inverter</h5>
                  <div className="bg-purple-400 text-black px-2 py-1 rounded text-xs font-bold">4⭐</div>
                </div>
                <p className="text-sm text-purple-200 mb-2">Dual Function</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs line-through text-white/60">₹65,000</span>
                  <span className="font-bold text-xl text-yellow-300">₹42,000/-</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h4 className="text-2xl font-bold mb-6 text-center">🎁 Exclusive Benefits</h4>
            <div className="space-y-4">
              <div className="flex items-center bg-white/10 rounded-lg p-3">
                <div className="bg-green-400 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-3">30%</div>
                <span className="font-semibold">Up to 30% Off MRP</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-lg p-3">
                <div className="bg-yellow-400 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-xs mr-3">FREE</div>
                <span className="font-semibold">Free Installation & Site Visit</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-lg p-3">
                <div className="bg-blue-400 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-xs mr-3">1YR</div>
                <span className="font-semibold">1 Year Service Warranty</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-lg p-3">
                <div className="bg-purple-400 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-xs mr-3">EMI</div>
                <span className="font-semibold">0% EMI Available</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-lg p-3">
                <div className="bg-orange-400 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-xs mr-3">⚡</div>
                <span className="font-semibold">Exchange Offers Available</span>
              </div>
            </div>
            <Button variant="outline" className="mt-6 w-full bg-gradient-to-r from-white/20 to-white/30 border-white text-white hover:bg-white hover:text-black font-bold py-3 shadow-lg">
              View All Sale Items
            </Button>
          </div>
        </div>
        
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block border border-white/20">
            <p className="text-lg font-semibold mb-2">⏰ Limited Time Offer - Don't Miss Out!</p>
            <p className="text-sm text-white/80">Call now for best deals and immediate delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndOfSeasonSale;