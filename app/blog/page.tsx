import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Music, Users } from "lucide-react"
import PageHeader from "@/components/page-header"
import PageFooter from "@/components/page-footer"
import Link from "next/link"


// TODO:
// DISABLE INITIALLY
// BEFORE ENABLING:
// Write blog texts:
// Concert:
//  Put videos, photos
// Making live music fair trade


export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#b0c4c4]">
      <PageHeader title="Blog" />

      {/* Blog Posts */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Concert Recap Post */}
            <article className="border-b border-border pb-12">
              <Card className="border-0 shadow-none p-0">
                <CardHeader className="px-0">
                  <div className="flex items-center gap-4 mb-4">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">May 5, 2025</span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">Concert Recap</span>
                  </div>
                  <CardTitle className="font-serif text-3xl md:text-4xl font-bold mb-4">
                    Highlights from our inaugural concert
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">
                    Great energy on May the 4th&mdash;the Star Wars Day&mdash;at the Gradus ad Parnassum Music Academy
                    recital hall with special guests Yukie Kawanami and Polina Sedukh. In addition to tango classics,
                    we played adaptations of a Shostakovich trio, Tango Seis (Piazzolla's hidden gem), and, yes,
                    a couple of Star Wars covers. Two pianos in the hall? Of course there were piano duos!
                    {/*TODO: edit text*/}
                    {/*TODO: add a couple pictures and a couple videos: ALLA CLIP 51:11 + Sveta + Kolbasov */}

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
                      It was great to see many old friends and new faces in the audience!
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

      <PageFooter />
    </div>
  )
}
