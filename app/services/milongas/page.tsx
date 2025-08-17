import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Music2, Heart, Users, Clock } from "lucide-react"

export default function MilongasPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <Button variant="ghost" asChild className="mb-6">
            <a href="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </Button>
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Milongas</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Traditional Argentine tango social dancing with live music
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A milonga is more than just a dance event—it's a cultural experience that captures the essence of
              Argentine tango. These social gatherings bring together dancers of all levels to share in the passion and
              connection that defines tango. With live music from our talented musicians, each milonga becomes a
              celebration of this beautiful art form.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <Music2 className="w-8 h-8 text-primary mb-4" />
                <CardTitle className="font-serif text-xl">Live Tango Music</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Dance to authentic Argentine tango performed by our professional musicians, creating an unmatched
                  atmosphere
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="w-8 h-8 text-primary mb-4" />
                <CardTitle className="font-serif text-xl">Authentic Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Experience the true spirit of Buenos Aires tango culture in the heart of the Bay Area
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-8 h-8 text-primary mb-4" />
                <CardTitle className="font-serif text-xl">All Levels Welcome</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Whether you're a beginner or experienced dancer, our milongas provide a welcoming environment for all
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="w-8 h-8 text-primary mb-4" />
                <CardTitle className="font-serif text-xl">Regular Events</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Join us for monthly milongas and special themed events throughout the year
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <Card className="p-8">
            <CardHeader className="text-center">
              <CardTitle className="font-serif text-2xl mb-4">Join Our Next Milonga</CardTitle>
              <CardDescription className="text-lg">
                Experience the magic of tango with live music and passionate dancers
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button size="lg" className="mt-4">
                View Upcoming Events
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
