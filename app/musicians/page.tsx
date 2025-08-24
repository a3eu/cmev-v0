import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Mail, Globe } from "lucide-react"
import Link from "next/link"

export default function MusiciansPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Our Musicians</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Meet the talented artists who bring Argentine Tango and Chamber Music to life in the SF Bay Area
            </p>
          </div>
        </div>
      </section>

      {/* Musicians Bios */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Musician 1 */}
            <Card className="overflow-hidden">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/placeholder-6otmi.png')",
                }}
              />
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Elena Vásquez</CardTitle>
                <CardDescription className="text-lg">Violin, Artistic Director</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Elena is a classically trained violinist with over 15 years of experience in both chamber music and
                  Argentine tango. Born in Buenos Aires, she studied at the prestigious Conservatorio Nacional de Música
                  and later earned her Master's degree from the San Francisco Conservatory of Music.
                </p>
                <p className="text-muted-foreground mb-4">
                  As the founder and artistic director of CMEV, Elena has dedicated her career to bridging the gap
                  between traditional classical music and the passionate world of tango. She has performed with renowned
                  orchestras including the San Francisco Symphony and has been featured as a soloist in venues across
                  Argentina and the United States.
                </p>
                <p className="text-muted-foreground mb-6">
                  Elena's teaching philosophy emphasizes the emotional connection between musician and audience, drawing
                  from her deep understanding of both classical technique and tango's improvisational spirit.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                  <Button variant="outline" size="sm">
                    <Globe className="w-4 h-4 mr-2" />
                    Website
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Musician 2 */}
            <Card className="overflow-hidden">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/bandoneon-player-portrait.png')",
                }}
              />
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Carlos Mendoza</CardTitle>
                <CardDescription className="text-lg">Bandoneon, Piano</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Carlos is a master of the bandoneon, the heart and soul of Argentine tango music. Born in Rosario,
                  Argentina, he began studying bandoneon at age 8 under the tutelage of legendary tango musician Aníbal
                  Troilo's former students. His deep connection to the instrument's rich history is evident in every
                  performance.
                </p>
                <p className="text-muted-foreground mb-4">
                  After moving to the Bay Area in 2010, Carlos has become one of the most sought-after tango musicians
                  on the West Coast. He leads Orquesta Típica Tarareando and has collaborated with dancers and musicians
                  from around the world. His playing style honors the golden age of tango while incorporating
                  contemporary sensibilities.
                </p>
                <p className="text-muted-foreground mb-6">
                  In addition to his performance career, Carlos is passionate about teaching the next generation of
                  tango musicians. He offers private lessons in bandoneon and piano, as well as workshops on tango
                  musicality and improvisation.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                  <Button variant="outline" size="sm">
                    <Globe className="w-4 h-4 mr-2" />
                    Website
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="p-8 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="font-serif text-2xl mb-4">Interested in Performing with Us?</CardTitle>
                <CardDescription className="text-lg">
                  We're always looking for talented musicians who share our passion for Argentine Tango and Chamber
                  Music
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg" className="mt-4">
                  Get in Touch
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
