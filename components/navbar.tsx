"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Search } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-md' 
        : 'bg-[#00BEF1] border-b'
    }`}>
      {/* Top row with logo and buttons - only visible when not scrolled */}
      {!isScrolled && (
        <div className="container flex h-16 items-center justify-between px-4 sm:px-8 lg:px-12">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-white">relief.organization</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="hidden border-2 border-black bg-transparent text-black hover:bg-black hover:text-white sm:inline-flex"
            >
              BLOG
            </Button>
            <Button className="bg-white text-black hover:bg-white/90">
              Donate
            </Button>
          </div>
        </div>
      )}

      {/* Navigation row */}
      <div className={`container flex items-center justify-between px-4 sm:px-8 lg:px-12 ${
        isScrolled ? 'h-16' : 'h-12 border-t border-white/20'
      }`}>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="space-x-6">
            <NavigationMenuItem>
              <NavigationMenuTrigger className={`${
                isScrolled ? 'text-black' : 'text-black'
              } hover:bg-transparent hover:bg-black hover:text-white data-[state=open]:bg-black`}>
                What we do
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                  <Link href="#emergency" className="group grid h-auto w-full gap-1 rounded-md p-4 hover:bg-accent">
                    <div className="text-sm font-medium leading-none group-hover:underline">
                      Emergency Relief
                    </div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Immediate assistance in crisis situations
                    </div>
                  </Link>
                  <Link href="#development" className="group grid h-auto w-full gap-1 rounded-md p-4 hover:bg-accent">
                    <div className="text-sm font-medium leading-none group-hover:underline">
                      Development Programs
                    </div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Long-term sustainable development initiatives
                    </div>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#research" legacyBehavior passHref>
                <NavigationMenuLink className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 ${
                  isScrolled ? 'text-black' : 'text-black'
                } hover:bg-transparent hover:text-black`}>
                  Research and reports
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#stories" legacyBehavior passHref>
                <NavigationMenuLink className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 ${
                  isScrolled ? 'text-black' : 'text-black'
                } hover:bg-transparent hover:text-black`}>
                  Stories
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#who-we-are" legacyBehavior passHref>
                <NavigationMenuLink className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 ${
                  isScrolled ? 'text-black' : 'text-black'
                } hover:bg-transparent hover:text-black`}>
                  Who we are
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#take-action" legacyBehavior passHref>
                <NavigationMenuLink className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 ${
                  isScrolled ? 'text-black' : 'text-black'
                } hover:bg-transparent hover:text-black`}>
                  Take action
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          {isScrolled && (
            <Button className="hidden bg-white text-black hover:bg-white/90 sm:inline-flex">
              Donate
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="hidden text-black hover:bg-transparent lg:flex"
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="px-0 text-black hover:bg-black/10 lg:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full">
            <nav className="flex flex-col gap-4">
              <Link href="#what-we-do" className="text-lg font-semibold text-black">
                What we do
              </Link>
              <Link href="#research" className="text-lg font-semibold text-black">
                Research and reports
              </Link>
              <Link href="#stories" className="text-lg font-semibold text-black">
                Stories
              </Link>
              <Link href="#who-we-are" className="text-lg font-semibold text-black">
                Who we are
              </Link>
              <Link href="#take-action" className="text-lg font-semibold text-black">
                Take action
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

