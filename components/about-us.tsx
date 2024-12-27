import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

// Types for our news items
type NewsItem = {
  type: string
  date: string
  title: string
  description?: string
  image: string
  link: {
    text: string
    url: string
  }
}

// Sample news data
const newsItems: NewsItem[] = [
  {
    type: "Press release",
    date: "24 December 2024",
    title: "Food and nutrition crisis deepens across Sudan as famine identified in additional areas",
    image: "/food.svg?height=400&width=600",
    link: {
      text: "Visit the page",
      url: "#"
    }
  },
  {
    type: "Statement",
    date: "26 December 2024",
    title: "Statement by relief.organization Regional Director for the Middle East and North Africa Edouard Beigbeder on continued deaths of children in Gaza",
    image: "/food.svg?height=400&width=600",
    link: {
      text: "Read now",
      url: "#"
    }
  },
  {
    type: "Article",
    date: "",
    title: "Families reeling from shock",
    description: "A 7.3 magnitude earthquake devastates the lives of families and children in Vanuatu",
    image: "/food.svg?height=400&width=600",
    link: {
      text: "View on relief.organization Pacific Islands",
      url: "#"
    }
  },
  {
    type: "Appeal",
    date: "",
    title: "relief.organization launches 2025 humanitarian appeal",
    description: "Working with partners, relief.organization aims to reach 109 million children with life-saving assistance, wherever it's needed",
    image: "/food.svg?height=400&width=600",
    link: {
      text: "View the appeal",
      url: "#"
    }
  }
]

export function AboutUs() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
          relief.organization, for every child
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {newsItems.map((item, index) => (
            <Link key={index} href={item.link.url} className="group">
              <Card className="relative h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={item.image}
                    alt=""
                    width={600}
                    height={400}
                    className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardContent className="flex flex-col gap-4 p-6 pb-16">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold">{item.type}</span>
                    {item.date && (
                      <>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600">{item.date}</span>
                      </>
                    )}
                  </div>
                  <div>
                    <h3 className="mb-2 font-bold leading-tight transition-colors group-hover:text-[#00BEF1]">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-sm text-gray-600">{item.description}</p>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="absolute bottom-0 left-0 w-full p-6">
                  <span className="text-sm font-semibold text-[#00BEF1] transition-colors group-hover:text-black">
                    {item.link.text}
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

