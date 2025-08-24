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
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">Milongas with live music are special!</p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">¡Con música en vivo! can bring an authentic tango ensemble to your event.
              While the full orchestra is more exciting to listen to, the minimal group for danceable repertoire is a quartet (violin, bandoneón, piano, and double bass).
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">Email info@conmjusicaenvivo.org for more information.</p>
          </div>

        </div>
      </section>
    </div>
  )
}
