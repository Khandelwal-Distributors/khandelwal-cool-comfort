import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Star, Zap, Shield, CreditCard, Home, Gift } from "lucide-react";
import cleanSaleBanner from "@/assets/clean-sale-banner.jpg";

const EndOfSeasonSale = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent-warm/10 text-accent-warm rounded-full px-6 py-2 mb-6">
            <Gift className="h-4 w-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">Limited Time Offer</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            End of Season <span className="text-primary">AC Sale</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium air conditioners from leading brands at unbeatable prices. 
            Professional installation and warranty included.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Sale Card */}
          <Card className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 lg:col-span-1">
            <CardHeader className="text-center pb-4">
              <img 
                src={cleanSaleBanner} 
                alt="Air Conditioner Sale"
                className="w-full h-40 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="bg-accent-warm text-accent-warm-foreground font-bold text-2xl py-3 px-6 rounded-lg shadow-[var(--shadow-cta)]">
                Starting at ₹26,000/-
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                <div className="bg-muted rounded-lg p-4">
                  <p className="font-semibold text-sm mb-2">Premium Brands Available</p>
                  <p className="text-xs text-muted-foreground">AUX • Sharp • Panasonic • Lloyd • White Westinghouse</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-muted rounded-lg p-3 text-center">
                    <p className="font-semibold text-sm">Capacity</p>
                    <p className="text-xs text-muted-foreground">1, 1.5, 2 Ton</p>
                  </div>
                  <div className="bg-muted rounded-lg p-3 text-center">
                    <p className="font-semibold text-sm">Rating</p>
                    <p className="text-xs text-muted-foreground">3, 4, 5 Star</p>
                  </div>
                  <div className="bg-muted rounded-lg p-3 text-center">
                    <p className="font-semibold text-sm">Type</p>
                    <p className="text-xs text-muted-foreground">Inverter/Non-Inverter</p>
                  </div>
                  <div className="bg-muted rounded-lg p-3 text-center">
                    <p className="font-semibold text-sm">Function</p>
                    <p className="text-xs text-muted-foreground">Cooling/Heating</p>
                  </div>
                </div>
              </div>
              <Button variant="cta" className="w-full">
                <Phone className="h-4 w-4" />
                Get Instant Quote
              </Button>
            </CardContent>
          </Card>

          {/* Featured Models Card */}
          <Card className="hover:shadow-[var(--shadow-card)] transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-accent-warm" />
                Featured Sale Models
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-semibold">AUX 1.6 Ton Hot & Cold</h5>
                    <div className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                      <Star className="h-3 w-3" />4⭐
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Cooling + Heating Mode • 6 Units Available</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm line-through text-muted-foreground">₹42,000</span>
                    <span className="font-bold text-xl text-accent-warm">₹30,000/-</span>
                  </div>
                </div>
                
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-semibold">Sharp 1 Ton</h5>
                    <div className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                      <Star className="h-3 w-3" />4⭐
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Cooling Only</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm line-through text-muted-foreground">₹38,000</span>
                    <span className="font-bold text-xl text-accent-warm">₹28,000/-</span>
                  </div>
                </div>
                
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-semibold">Lloyd 1.5 Ton Inverter</h5>
                    <div className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                      <Star className="h-3 w-3" />3⭐
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Inverter Technology • 16 Units Available</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm line-through text-muted-foreground">₹42,000</span>
                    <span className="font-bold text-xl text-accent-warm">₹31,000/-</span>
                  </div>
                </div>
                
                <div className="bg-muted rounded-lg p-3">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="text-center">
                      <p className="font-semibold">AUX 2T Inverter</p>
                      <p className="text-accent-warm font-bold">₹33,000/-</p>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold">WW 2T Inverter</p>
                      <p className="text-accent-warm font-bold">₹35,000/-</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted rounded-lg p-3 text-center">
                  <p className="font-semibold">Panasonic 2 Ton Inverter</p>
                  <p className="text-accent-warm font-bold text-lg">₹35,500/-</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Benefits Card */}
          <Card className="hover:shadow-[var(--shadow-card)] transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gift className="h-5 w-5 text-accent-warm" />
                Exclusive Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-muted rounded-lg p-3">
                  <div className="bg-accent-warm text-accent-warm-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">30%</div>
                  <span className="font-medium">Up to 30% Off MRP</span>
                </div>
                <div className="flex items-center gap-3 bg-muted rounded-lg p-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center">
                    <Zap className="h-4 w-4" />
                  </div>
                  <span className="font-medium">Free Installation & Site Visit</span>
                </div>
                <div className="flex items-center gap-3 bg-muted rounded-lg p-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center">
                    <Shield className="h-4 w-4" />
                  </div>
                  <span className="font-medium">1 Year Service Warranty</span>
                </div>
                <div className="flex items-center gap-3 bg-muted rounded-lg p-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center">
                    <CreditCard className="h-4 w-4" />
                  </div>
                  <span className="font-medium">0% EMI Available</span>
                </div>
                <div className="flex items-center gap-3 bg-muted rounded-lg p-3">
                  <div className="bg-accent-warm text-accent-warm-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">⚡</div>
                  <span className="font-medium">Exchange Offers Available</span>
                </div>
                <div className="flex items-center gap-3 bg-muted rounded-lg p-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center">
                    <Home className="h-4 w-4" />
                  </div>
                  <span className="font-medium">ACs on Rent</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Card className="inline-block">
            <CardContent className="p-6">
              <p className="font-semibold mb-2 flex items-center justify-center gap-2">
                <Zap className="h-5 w-5 text-accent-warm" />
                Limited Time Offer - Don't Miss Out!
              </p>
              <p className="text-sm text-muted-foreground">Call now for best deals and immediate delivery</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EndOfSeasonSale;