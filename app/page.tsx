import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Calendar, Music, Users, Heart, MapPin, Clock } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 via-accent/10 to-background">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('/chamber-tango-intimate.png')",
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">¡Con música en vivo!</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Life is better with live music!
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Upcoming Events</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <Calendar className="w-6 h-6 text-primary" />
                  <span className="text-sm text-muted-foreground">September 6, 2025</span>
                </div>
                <CardTitle className="font-serif text-xl">Tango Night at Feeling Flow (Palo Alto)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">5:30&ndash;9PM (live music at 7PM)</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">1680 Bryant St, Palo Alto</span>
                </div>
                <CardDescription className="mb-4">
                  Solos, duets, and trios performed by Special guest Yukie (Japan) and the Duo <i>Luz de neón</i>.
                </CardDescription>
                <Button variant="outline" className="w-full bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <Calendar className="w-6 h-6 text-primary" />
                  <span className="text-sm text-muted-foreground">March 22, 2025</span>
                </div>
                <CardTitle className="font-serif text-xl">Tango Milonga Night</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">8:00 PM</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Community Center, San Francisco</span>
                </div>
                <CardDescription className="mb-4">
                  Dance the night away with live music from Orquesta Típica Tarareando
                </CardDescription>
                <Button variant="outline" className="w-full bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">About CMEV</h2>
            <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              CMEV is a SF Bay Area non-profit with a mission to support live performances and training in the genres
              Argentine Tango and Chamber Music, fostering community through the universal language of music.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Music className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-serif text-2xl">Live Performances</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Bringing authentic Argentine Tango and Chamber Music performances to intimate venues across the Bay
                  Area
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-serif text-2xl">Music Education</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Offering lessons in violin, piano, bandoneon, and specialized tango musicality classes
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-serif text-2xl">Community Building</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Creating connections through house concerts, milongas, and collaborative musical experiences
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Our Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our featured ensembles and musical initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/argentine-tango-orchestra.png')",
                }}
              />
              <CardHeader>
                <CardTitle className="font-serif text-xl">Orquesta Típica Tarareando</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Traditional Argentine tango orchestra bringing authentic sounds of Buenos Aires to the Bay Area
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/intimate-violin-piano-duo.png')",
                }}
              />
              <CardHeader>
                <CardTitle className="font-serif text-xl">Duo Luz de neón</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Intimate duo performances blending classical technique with tango passion
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/placeholder-bcfif.png')",
                }}
              />
              <CardHeader>
                <CardTitle className="font-serif text-xl">Cuarteto ¡Ahora, sí!</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Dynamic string quartet specializing in contemporary chamber works and tango arrangements
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/bandoneon-player.png')",
                }}
              />
              <CardHeader>
                <CardTitle className="font-serif text-xl">Solo Bandoneon Series</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Showcasing the soulful voice of the bandoneon through solo performances and masterclasses
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Past Events</h2>
            <p className="text-lg text-muted-foreground">
              Celebrating our recent performances and community gatherings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <Calendar className="w-6 h-6 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">February 18, 2025</span>
                </div>
                <CardTitle className="font-serif text-xl">Valentine's Tango Concert</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Oakland Museum of California</span>
                </div>
                <CardDescription>
                  A romantic evening featuring Duo Luz de neón performing passionate tangos for Valentine's Day
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <Calendar className="w-6 h-6 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">January 28, 2025</span>
                </div>
                <CardTitle className="font-serif text-xl">Chamber Music Workshop</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Berkeley Community Center</span>
                </div>
                <CardDescription>
                  Educational workshop on chamber music techniques with hands-on learning for local musicians
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <Calendar className="w-6 h-6 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">December 15, 2024</span>
                </div>
                <CardTitle className="font-serif text-xl">Holiday Milonga</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">San Francisco Dance Center</span>
                </div>
                <CardDescription>
                  Festive holiday celebration with live tango music and community dancing
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <a href="/blog" className="text-lg px-4">
                Read Our Blog
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Our Services</h2>
            <p className="text-lg text-muted-foreground">Bringing music to your community and home</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "House Concerts", slug: "house-concerts" },
              { name: "Milongas", slug: "milongas" },
              { name: "Music Lessons", slug: "music-lessons" },
              { name: "Tango Musicality Classes", slug: "tango-musicality" },
              { name: "Sound Reinforcement", slug: "sound-reinforcement" },
              { name: "Event Hosting", slug: "event-hosting" },
            ].map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardTitle className="font-serif text-lg mb-4">{service.name}</CardTitle>
                <Button variant="outline" size="sm" asChild>
                  <a href={`/services/${service.slug}`}>Learn More</a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Support Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Help us continue bringing the beauty of Argentine Tango and Chamber Music to our community
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center">
              <CardTitle className="font-serif text-xl mb-4">Come to a Performance</CardTitle>
              <CardDescription className="mb-4">
                Experience the magic of live music at our intimate venues
              </CardDescription>
              <Button variant="outline">View Calendar</Button>
            </Card>

            <Card className="p-6 text-center">
              <CardTitle className="font-serif text-xl mb-4">Donate</CardTitle>
              <CardDescription className="mb-4">Support our musicians and educational programs</CardDescription>
              <Button>Make a Donation</Button>
            </Card>

            <Card className="p-6 text-center">
              <CardTitle className="font-serif text-xl mb-4">Host an Event</CardTitle>
              <CardDescription className="mb-4">Bring live music to your home or venue</CardDescription>
              <Button variant="outline">Learn More</Button>
            </Card>
          </div>

          {/* Newsletter Signup */}
          <Card className="p-8">
            <CardHeader className="text-center">
              <CardTitle className="font-serif text-2xl mb-2">Join Our Mailing List</CardTitle>
              <CardDescription>Stay updated on upcoming performances, workshops, and community events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input type="email" placeholder="Enter your email" className="flex-1" />
                <Button>Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">CMEV</h3>
              <p className="text-sm text-muted-foreground">
                Supporting live performances and training in Argentine Tango and Chamber Music
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/musicians" className="text-muted-foreground hover:text-primary">
                    Musicians
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Get Involved</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Donate
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Volunteer
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Host Event
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Partners
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>SF Bay Area</li>
                <li>info@cmev.org</li>
                <li>(555) 123-4567</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">© 2025 CMEV. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
