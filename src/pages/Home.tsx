import HeroSectionOne from "@/components/hero-section-demo-1"
import TypeWriter from "@/components/typewriterEffect"
import HomeAccordion from "@/components/homeAccordion"
import LampSection from "@/components/ui/lamp"
import ScrollCarousel from "@/components/scrollCarousel"

const Home = () => {
  return (
    <>
    <HeroSectionOne/>
    <LampSection/>
    <ScrollCarousel/>
    <TypeWriter/>
    <HomeAccordion/>
    </>
  )
}

export default Home