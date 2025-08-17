import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, ArrowLeft, Music, Users } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-12 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">CMEV Blog</h1>
          <p className="text-lg text-muted-foreground">Stories, insights, and updates from our musical community</p>
        </div>
      </header>

      {/* Blog Posts */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Concert Recap Post */}
            <article className="border-b border-border pb-12">
              <Card className="border-0 shadow-none p-0">
                <CardHeader className="px-0">
                  <div className="flex items-center gap-4 mb-4">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">February 20, 2025</span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">Concert Recap</span>
                  </div>
                  <CardTitle className="font-serif text-3xl md:text-4xl font-bold mb-4">
                    A Night of Romance: Valentine's Tango Concert Recap
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">
                    Our Valentine's Day concert at the Oakland Museum of California was a magical evening filled with
                    passionate tango melodies and intimate performances.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                  <div
                    className="w-full h-64 bg-cover bg-center rounded-lg mb-6"
                    style={{
                      backgroundImage: "url('/intimate-violin-piano-duo.png')",
                    }}
                  />
                  <div className="prose prose-lg max-w-none">
                    <p className="text-foreground mb-4">
                      On February 18th, Duo Luz de neón transformed the Oakland Museum of California into an intimate
                      tango salon, captivating an audience of over 150 music lovers with their passionate interpretation
                      of classic Argentine tangos.
                    </p>
                    <p className="text-foreground mb-4">
                      The evening opened with Piazzolla's "Libertango," setting the tone for a night that would journey
                      through the golden age of tango music. Violinist María Elena Vásquez and pianist Carlos Mendoza
                      demonstrated their remarkable chemistry, weaving together melodies that spoke directly to the
                      heart.
                    </p>
                    <p className="text-foreground mb-4">
                      Highlights included a stunning rendition of "La Cumparsita" and an emotionally charged performance
                      of "Adiós Nonino." The intimate museum setting allowed for a unique connection between performers
                      and audience, with many guests commenting on the transformative power of live tango music.
                    </p>
                    <p className="text-foreground">
                      We're grateful to the Oakland Museum of California for hosting us and to our community for their
                      continued support. Events like these remind us why we're passionate about bringing authentic tango
                      music to the Bay Area.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-8 pt-6 border-t border-border">
                    <Music className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      Next concert: Chamber Music House Concert on March 15th
                    </span>
                  </div>
                </CardContent>
              </Card>
            </article>

            {/* Tango Music Post */}
            <article>
              <Card className="border-0 shadow-none p-0">
                <CardHeader className="px-0">
                  <div className="flex items-center gap-4 mb-4">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">February 10, 2025</span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">Music Education</span>
                  </div>
                  <CardTitle className="font-serif text-3xl md:text-4xl font-bold mb-4">
                    Understanding Tango Music: Beyond the Dance
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">
                    Exploring the rich musical heritage of Argentine tango and its evolution from the streets of Buenos
                    Aires to concert halls worldwide.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                  <div
                    className="w-full h-64 bg-cover bg-center rounded-lg mb-6"
                    style={{
                      backgroundImage: "url('/argentine-tango-orchestra.png')",
                    }}
                  />
                  <div className="prose prose-lg max-w-none">
                    <p className="text-foreground mb-4">
                      When most people hear "tango," they immediately think of the passionate dance that has captivated
                      audiences worldwide. However, tango music stands as a sophisticated art form in its own right,
                      with a rich history that extends far beyond the dance floor.
                    </p>
                    <p className="text-foreground mb-4">
                      Born in the late 19th century in the working-class neighborhoods of Buenos Aires and Montevideo,
                      tango music emerged from a unique fusion of African rhythms, European harmonies, and indigenous
                      South American melodies. The bandoneon, a German concertina that became the soul of tango, arrived
                      in Argentina around 1870 and quickly became the defining sound of this new musical genre.
                    </p>
                    <p className="text-foreground mb-4">
                      The golden age of tango (1935-1955) saw the rise of legendary orchestras led by Carlos Di Sarli,
                      Juan D'Arienzo, and Aníbal Troilo. These maestros developed distinct styles that are still studied
                      and performed today. Di Sarli's elegant, flowing arrangements contrasted beautifully with
                      D'Arienzo's rhythmic intensity, while Troilo brought a romantic sensibility that influenced
                      generations of musicians.
                    </p>
                    <p className="text-foreground mb-4">
                      Astor Piazzolla revolutionized tango in the 1960s by incorporating elements of jazz and classical
                      music, creating "nuevo tango." His compositions like "Libertango" and "Adiós Nonino" demonstrated
                      that tango could evolve while maintaining its essential character and emotional depth.
                    </p>
                    <p className="text-foreground">
                      At CMEV, we celebrate both traditional and contemporary tango music, recognizing that this genre
                      continues to evolve while honoring its roots. Whether performed in an intimate house concert or a
                      grand concert hall, tango music has the power to transport listeners to the cobblestone streets of
                      Buenos Aires and touch the deepest emotions of the human experience.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-8 pt-6 border-t border-border">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      Join our tango musicality classes to deepen your understanding
                    </span>
                  </div>
                </CardContent>
              </Card>
            </article>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-16">
            <Link href="/">
              <Button size="lg" variant="outline">
                Return to Home
              </Button>
            </Link>
          </div>
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
                  <Link href="/" className="text-muted-foreground hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-primary">
                    Blog
                  </Link>
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
