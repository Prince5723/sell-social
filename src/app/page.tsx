import {DemoHeroGeometric} from "@/components/hero";
import {SaveBrands} from "@/components/saving-brands";
import {Services} from "@/components/services";

export default function Home() {
  return (
    <main className="">
      <DemoHeroGeometric />
      <SaveBrands/>
      <Services/> 
    </main>
  );
}