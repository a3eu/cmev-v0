import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Home, Users, Music, Calendar } from "lucide-react"

export default function LiveSoundPage() {
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
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Sound Reinforcement</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              When music needs to be heard
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We have been doing tango live sound&mdash;mostly for ourselves, but also for others&mdash;for over ten years.
              If you need sound reinforcement for your event, we may be able to help.
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
