import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Star, Zap, Shield, CreditCard, Home, Gift } from "lucide-react";
import cleanSaleBanner from "@/assets/clean-sale-banner.jpg";
import auxLogo from "@/assets/brands/aux-logo.jpg";
import sharpLogo from "@/assets/brands/sharp-logo.jpg";
import panasonicLogo from "@/assets/brands/panasonic-logo.jpg";
import lloydLogo from "@/assets/brands/lloyd-logo.jpg";
import whiteWestinghouseLogo from "@/assets/brands/white-westinghouse-logo.jpg";

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

          {/* Premium Brands Card */}
          <Card className="hover:shadow-[var(--shadow-card)] transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-accent-warm" />
                Premium Brands on Sale
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card border rounded-lg p-4 hover:shadow-lg transition-all duration-300 group">
                    <img 
                      src={auxLogo} 
                      alt="AUX Brand" 
                      className="w-full h-12 object-contain mb-3 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="text-center">
                      <p className="text-sm font-semibold">AUX</p>
                      <p className="text-xs text-muted-foreground">From ₹30,000</p>
                    </div>
                  </div>
                  <div className="bg-card border rounded-lg p-4 hover:shadow-lg transition-all duration-300 group">
                    <img 
                      src={sharpLogo} 
                      alt="Sharp Brand" 
                      className="w-full h-12 object-contain mb-3 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="text-center">
                      <p className="text-sm font-semibold">Sharp</p>
                      <p className="text-xs text-muted-foreground">From ₹28,000</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card border rounded-lg p-4 hover:shadow-lg transition-all duration-300 group">
                    <img 
                      src={lloydLogo} 
                      alt="Lloyd Brand" 
                      className="w-full h-12 object-contain mb-3 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="text-center">
                      <p className="text-sm font-semibold">Lloyd</p>
                      <p className="text-xs text-muted-foreground">From ₹31,000</p>
                    </div>
                  </div>
                  <div className="bg-card border rounded-lg p-4 hover:shadow-lg transition-all duration-300 group">
                    <img 
                      src={panasonicLogo} 
                      alt="Panasonic Brand" 
                      className="w-full h-12 object-contain mb-3 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="text-center">
                      <p className="text-sm font-semibold">Panasonic</p>
                      <p className="text-xs text-muted-foreground">From ₹35,500</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card border rounded-lg p-4 hover:shadow-lg transition-all duration-300 group">
                  <img 
                    src={whiteWestinghouseLogo} 
                    alt="White Westinghouse Brand" 
                    className="w-full h-12 object-contain mb-3 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="text-center">
                    <p className="text-sm font-semibold">White Westinghouse</p>
                    <p className="text-xs text-muted-foreground">From ₹35,000</p>
                  </div>
                </div>
                
                <div className="bg-muted rounded-lg p-4 text-center">
                  <p className="font-semibold text-sm mb-2">All models available with</p>
                  <div className="flex items-center justify-center gap-4 text-xs">
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-accent-warm" />
                      3-5 Star Rating
                    </span>
                    <span>1-2 Ton Capacity</span>
                    <span>Inverter & Non-Inverter</span>
                  </div>
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
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">30%</div>
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
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">⚡</div>
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
      </div>
    </section>
  );
};

export default EndOfSeasonSale;