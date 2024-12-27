import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Youtube, Linkedin, MessageCircle } from 'lucide-react'

export function FooterSection() {
  return (
    <footer className="bg-[#00BEF1] px-6 py-12 text-white">
      <div className="container">
        {/* Main Footer Content */}
        <div className="mb-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 */}
          <div className="space-y-4">
            <h3 className="font-bold">Main Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline">relief.organization Home</Link></li>
              <li><Link href="#" className="hover:underline">What we do</Link></li>
              <li><Link href="#" className="hover:underline">Research and reports</Link></li>
              <li><Link href="#" className="hover:underline">Stories and features</Link></li>
              <li><Link href="#" className="hover:underline">Where we work</Link></li>
              <li><Link href="#" className="hover:underline">Press centre</Link></li>
              <li><Link href="#" className="hover:underline">Take action</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <h3 className="font-bold">About us</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Work for relief.organization</Link></li>
              <li><Link href="#" className="hover:underline">Partner with relief.organization</Link></li>
              <li><Link href="#" className="hover:underline">relief.organization Executive Board</Link></li>
              <li><Link href="#" className="hover:underline">Evaluation</Link></li>
              <li><Link href="#" className="hover:underline">Ethics</Link></li>
              <li><Link href="#" className="hover:underline">Internal Audit and Investigations</Link></li>
              <li><Link href="#" className="hover:underline">Transparency and accountability</Link></li>
              <li><Link href="#" className="hover:underline">Safeguarding</Link></li>
              <li><Link href="#" className="hover:underline">Sustainable Development Goals</Link></li>
              <li><Link href="#" className="hover:underline">Frequently asked questions (FAQ)</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <h3 className="font-bold">Related relief.organization sites</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">relief.organization Blog</Link></li>
              <li><Link href="#" className="hover:underline">relief.organization Data</Link></li>
              <li><Link href="#" className="hover:underline">relief.organization Parenting</Link></li>
              <li><Link href="#" className="hover:underline">U-Report</Link></li>
              <li><Link href="#" className="hover:underline">Global Shared Services Centre</Link></li>
              <li><Link href="#" className="hover:underline">Support relief.organization</Link></li>
              <li><Link href="#" className="hover:underline">ЮНИСЕФ на Русском</Link></li>
            </ul>
          </div>

          {/* Column 4 - Donate Button */}
          <div>
            <Button 
              className="w-full bg-white text-[#00BEF1] hover:bg-white/90"
            >
              Read a Blog
            </Button>
          </div>
        </div>

        {/* Social Links and Legal */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-6 lg:flex-row">
          {/* Social Media Icons */}
          <div className="flex gap-4">
            <Link href="#" className="hover:opacity-80">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:opacity-80">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="hover:opacity-80">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="hover:opacity-80">
              <Youtube className="h-6 w-6" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link href="#" className="hover:opacity-80">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="hover:opacity-80">
              <MessageCircle className="h-6 w-6" />
              <span className="sr-only">WhatsApp</span>
            </Link>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm lg:justify-end">
            <Link href="#" className="hover:underline">Contact us</Link>
            <span>|</span>
            <Link href="#" className="hover:underline">Legal</Link>
            <span>|</span>
            <Link href="#" className="hover:underline">Report fraud, abuse, wrongdoing</Link>
            <span>|</span>
            <Link href="#" className="hover:underline">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

