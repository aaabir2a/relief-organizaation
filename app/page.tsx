import { AboutUs } from "@/components/about-us";
import { FooterSection } from "@/components/footer-section";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { Promise } from "@/components/promise";
import { Services } from "@/components/services";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <AboutUs/>
      <Services/>      
      <Promise/>
      <FooterSection/>
    </>
  )
}
