import { HoverEffect } from "@/components/ui/hover-effect"
import { ServiceHeader } from "./service-header"

export function Services() {
  return (
    <div className="w-full bg-black">
      <ServiceHeader/>
    <div className="max-w-5xl mx-auto px-8 -mt-60">
      <HoverEffect items={projects} />
    </div>
    </div>
  );
}
export const projects = [
  {
    title: "MVP Development",
    description:
      "Unleash your vision with our MVP development services. From concept to launch, we craft digital solutions that propel your business forward.",
    link: "",
  },
  {
    title: "Website Development",
    description:
      "Crafting websites that impress and perform, combining thoughtful design, seamless navigation, and captivating visuals.",
    link: "",
  },
  {
    title: "App Development",
    description:
      "Drive business growth with our custom app development services. We build innovative mobile applications from concept to launch.",
    link: "",
  },
  {
    title: "Branding",
    description:
      "Crafting powerful brand identities that connect and last. More than a logo, a resonating brand story. Boost visibility, and build appeal.",
    link: "",
  },
  {
    title: "UI/UX Design",
    description:
      "We craft captivating digital experiences through user-centric UX/UI design. Combining aesthetics and functionality to drive meaningful interactions.",
    link: "",
  },
  {
    title: "Digital Marketing",
    description:
      "Unleash your brand’s digital power with us. Compelling content, strategic campaigns, and expert execution, tailor made for your brand.",
    link: "",
  },
];
