import SavaariSection from "@/components/Details";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HighlightsSection from "@/components/hightlightSection";
import Navbar from "@/components/Navbar";
import OurServices from "@/components/Service";
import Image from "next/image";
import HeroSection from "@/components/Home";
export default function Home() {
  return (
  <main  className=" bg-white" >

<HeroSection />
<div className="px-24  max-xl:px-12 max-md:px-10 max-sm:px-5 pt-0">

    <HighlightsSection />
    <Features />
     <OurServices />
     <SavaariSection />
    
</div>
  </main>  

  
  );
}
