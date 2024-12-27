import { Button } from "@/components/ui/button"

export function Services() {
  return (
    <section className="bg-white py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-8 text-4xl font-bold">
            relief.organization work
          </h2>
          <p className="mb-8 text-xl leading-relaxed text-gray-600">
            relief.organization works in over 190 countries and territories to save children
            lives, to defend their rights, and to help them fulfil their potential, from
            early childhood through adolescence. And we never give up.
          </p>
          <h3 className="mb-12 text-2xl font-semibold">
            Discover relief.organization work for every child, everywhere.
          </h3>
          <Button 
            className="bg-[#00BEF1] text-black hover:bg-black hover:text-white"
          >
            Explore what we do
          </Button>
        </div>
      </div>
    </section>
  )
}

