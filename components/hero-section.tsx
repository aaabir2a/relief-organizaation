import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-8rem)] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/food.svg?height=1080&width=1920"
          alt="Students studying in classroom"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
          priority
        />
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="container relative flex h-full items-end pb-24">
        <div className="max-w-2xl space-y-4">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            The State of the Worlds Children
          </h1>
          <p className="text-xl text-white/90 sm:text-2xl">
            The future of childhood in a changing world
          </p>
          <Button
            className="bg-[#00BEF1] text-black hover:bg-black hover:text-white"
          >
            Read the report
          </Button>
        </div>
      </div>
    </section>
  )
}

