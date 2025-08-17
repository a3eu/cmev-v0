import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Home, Users, Music, Calendar } from "lucide-react"

export default function HouseConcertsPage() {
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
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">House Concerts</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Intimate musical experiences in the comfort of your home
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              House concerts offer a unique and intimate way to experience live music. In the comfort of a private home,
              audiences can connect with performers and music in a way that's impossible in traditional concert halls.
              Our house concerts feature world-class musicians performing Argentine tango and chamber music in settings
              that foster genuine musical connection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <Home className="w-8 h-8 text-primary mb-4" />
                <CardTitle className="font-serif text-xl">Intimate Setting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Experience music up close in a cozy, personal environment where every note resonates with clarity and
                  emotion
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-8 h-8 text-primary mb-4" />
                <CardTitle className="font-serif text-xl">Community Connection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Meet fellow music lovers and build lasting connections through shared musical experiences
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Music className="w-8 h-8 text-primary mb-4" />
                <CardTitle className="font-serif text-xl">Professional Musicians</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our carefully curated roster of artists brings decades of experience and passion to every performance
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Calendar className="w-8 h-8 text-primary mb-4" />
                <CardTitle className="font-serif text-xl">Flexible Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We work with your schedule to create memorable musical evenings that fit your lifestyle
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <Card className="p-8">
            <CardHeader className="text-center">
              <CardTitle className="font-serif text-2xl mb-4">Ready to Host a House Concert?</CardTitle>
              <CardDescription className="text-lg">
                Contact us to discuss bringing live music to your home
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button size="lg" className="mt-4">
                Get Started
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
