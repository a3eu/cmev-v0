import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Home, Users, Music, Calendar } from "lucide-react"

export default function MusicLessonsPage() {
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
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Music Lessons and Coaching</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              For aspiring musicians
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We offer coaching for tango groups and classical chamber music ensembles at any level.
              If you are interested in private instruction in tango or chamber music (any instrument), we
              may be able to help you directly or match you with an instructor.
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
