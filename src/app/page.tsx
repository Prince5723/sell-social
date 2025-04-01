import { Clients } from "@/components/clients";
import {DemoHeroGeometric} from "@/components/hero";
import {SaveBrands} from "@/components/saving-brands";
import {Services} from "@/components/services";
import {Projects} from "@/components/projects";

export default function Home() {
  return (
    <main className="">
      <DemoHeroGeometric />
      <SaveBrands/>
      <Services/> 
      <Clients/>
      <Projects/>
    </main>
  );
}