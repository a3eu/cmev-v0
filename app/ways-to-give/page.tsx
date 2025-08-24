"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Music, Gift, CreditCard, Building } from "lucide-react"
import PageHeader from "@/components/page-header"
import PageFooter from "@/components/page-footer"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"

const initialOptions = {
  "client-id": "BAA5dv8UNz_H8rEZwPXdwLB6ZHB6LCKk-PaJTK5geTmQ35UL1v8yf0qifqR6-mVOh8LiKtFbuGfQAdmJUA",
  currency: "USD",
  intent: "capture",
  "enable-funding": "venmo"
};

export default function WaysToGivePage() {
  return (
    <PayPalScriptProvider options={initialOptions}>
      <div className="min-h-screen bg-[#b0c4c4]">
        <PageHeader title="Ways to Give" />
      
      {/* Introduction */}
      <section className="py-20 px-4 bg-[#f0f8f8]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Support Live Music in Our Community</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Your generosity helps us continue bringing the beauty of Argentine Tango and Chamber Music to audiences 
            throughout the San Francisco Bay Area. Every contribution, no matter the size, makes a meaningful difference 
            in supporting our musicians and educational programs.
          </p>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="py-20 px-4 bg-[#f0f8f8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Choose Your Way to Give</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* PayPal Donation */}
            <Card className="p-6 border-2 border-primary">
              <CardHeader className="text-center">
                <CreditCard className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-serif text-2xl mb-2">Donate with PayPal</CardTitle>
                <CardDescription className="text-base">
                  Quick and secure online donations
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  Support our mission with a secure PayPal donation. Choose your amount and contribute directly to our live music programs.
                </p>
                <PayPalButtons
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: "25.00", // Default donation amount
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                      const name = details.payer.name.given_name;
                      alert(`Transaction completed by ${name}`);
                    });
                  }}
                  style={{
                    layout: "vertical",
                    color: "gold",
                    shape: "rect",
                    label: "donate"
                  }}
                />
                <p className="text-sm text-muted-foreground mt-4">
                  Secure payment processing by PayPal
                </p>
              </CardContent>
            </Card>
            {/* One-Time Donation */}
            <Card className="p-6">
              <CardHeader className="text-center">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-serif text-2xl mb-2">One-Time Gift</CardTitle>
                <CardDescription className="text-base">
                  Make an immediate impact with a single donation
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  Support our mission with a one-time contribution. Your gift directly funds live performances, 
                  educational workshops, and community outreach programs.
                </p>
                <Button className="w-full mb-4">Give Now</Button>
                <p className="text-sm text-muted-foreground">
                  Secure online donation processing
                </p>
              </CardContent>
            </Card>

            {/* Monthly Giving */}
            <Card className="p-6 border-primary">
              <CardHeader className="text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-serif text-2xl mb-2">Monthly Sustainer</CardTitle>
                <CardDescription className="text-base">
                  Join our community of monthly supporters
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  Become a monthly sustainer and help us plan ahead. Regular giving provides stable funding 
                  for our ongoing programs and allows us to expand our reach.
                </p>
                <Button className="w-full mb-4">Become a Sustainer</Button>
                <p className="text-sm text-muted-foreground">
                  Cancel or modify anytime
                </p>
              </CardContent>
            </Card>

            {/* Honor/Memorial Gifts */}
            <Card className="p-6">
              <CardHeader className="text-center">
                <Music className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-serif text-2xl mb-2">Honor & Memorial Gifts</CardTitle>
                <CardDescription className="text-base">
                  Celebrate or remember someone special through music
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  Make a gift in honor or memory of someone who loved music. We'll send a personalized 
                  acknowledgment to you and the honoree or family.
                </p>
                <Button variant="outline" className="w-full mb-4">Give in Honor</Button>
                <p className="text-sm text-muted-foreground">
                  Personalized acknowledgment cards available
                </p>
              </CardContent>
            </Card>

            {/* Corporate Sponsorship */}
            <Card className="p-6">
              <CardHeader className="text-center">
                <Building className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-serif text-2xl mb-2">Corporate Sponsorship</CardTitle>
                <CardDescription className="text-base">
                  Partner with us to support the arts in your community
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  Corporate sponsors receive recognition at events, in programs, and on our website. 
                  Multiple sponsorship levels available to fit your budget and goals.
                </p>
                <Button variant="outline" className="w-full mb-4">Learn More</Button>
                <p className="text-sm text-muted-foreground">
                  Contact us for sponsorship opportunities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-20 px-4 bg-[#f0f8f8]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Other Ways to Help</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardHeader>
                <Gift className="w-10 h-10 text-primary mx-auto mb-4" />
                <CardTitle className="font-serif text-xl">In-Kind Donations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Donate instruments, equipment, or professional services to support our programs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <Users className="w-10 h-10 text-primary mx-auto mb-4" />
                <CardTitle className="font-serif text-xl">Volunteer</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Share your time and talents to help with events, administration, or outreach.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
                <CardTitle className="font-serif text-xl">Host an Event</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Open your home for a house concert and help us reach new audiences.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-[#f0f8f8]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Questions About Giving?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're here to help you find the best way to support our mission. 
            Contact us to discuss donation options or learn more about our programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Contact Us</Button>
            <Button variant="outline" size="lg">Email: info@conmusicaenvivo.org</Button>
          </div>
        </div>
      </section>
      
        <PageFooter />
      </div>
    </PayPalScriptProvider>
  )
}