import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Home, Users, Music, Calendar } from "lucide-react"
import Link from "next/link"

export default function HouseConcertsPage() {
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
              Our house concerts feature Argentine tango and chamber music in settings
              that foster genuine musical connection.
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              There is much flexibility in forming groups for house concerts. The ensemble and the repertoire
              are tailored to the hosts' circumstances. We hope your house has a nice piano but we can also bring a keyboard.
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Email info@conmusicaenvivo.org for more information.
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}
