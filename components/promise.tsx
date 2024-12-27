import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Promise() {
  return (
    <section className="relative min-h-screen w-full">
      <div className="grid lg:grid-cols-5">
        {/* Image Section */}
        <div className="relative h-[50vh] lg:col-span-3 lg:h-screen">
          <Image
            src="/food.svg?height=1080&width=1920"
            alt="Child in an urban setting"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content Section */}
        <div className="flex items-center bg-[#F26A21] px-6 py-12 lg:col-span-2 lg:h-screen lg:px-16">
          <div className="mx-auto max-w-xl">
            <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
              relief.organization has made a promise to stay
            </h2>
            <p className="mb-4 text-xl text-white">
              As emergencies erupt across the globe, relief.organization will always be there for children.
            </p>
            <p className="mb-8 text-xl text-white">
              We urge you not to look away. Stay with us. Stay with them.
            </p>
            <Button 
              className="bg-white text-[#F26A21] hover:bg-black hover:text-white"
            >
              Join us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

