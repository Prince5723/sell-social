import { Clients } from "@/components/clients";
import {DemoHeroGeometric} from "@/components/hero";
import {SaveBrands} from "@/components/saving-brands";
import {Services} from "@/components/services";
import {Projects} from "@/components/projects";
import {ContactForm} from "@/components/form";
import {FooterDemo} from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-black">
      <DemoHeroGeometric />
      <SaveBrands/>
      <Services/> 
      <Clients/>
      <Projects/>
      <ContactForm/>
      <FooterDemo/>
    </main>
  );
}