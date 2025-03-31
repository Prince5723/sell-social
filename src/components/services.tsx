import { HoverEffect } from "@/components/ui/hover-effect"

export function Services() {
  return (
    <div className="w-full bg-black pt-8">
        <p className="text-lg md:text-7xl font-normal pb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300">
        Services
      </p>
    <div className="max-w-5xl mx-auto px-8 ">
      <HoverEffect items={projects} />
    </div>
    </div>
  );
}
export const projects = [
  {
    title: "Branding",
    description:
      "Crafting powerful brand identities that connect and last. More than a logo, a resonating brand story. Boost visibility, and build appeal.",
    link: "https://stripe.com",
  },
  {
    title: "UI/UX Design",
    description:
      "We craft captivating digital experiences through user-centric UX/UI design. Combining aesthetics and functionality to drive meaningful interactions.",
    link: "https://netflix.com",
  },
  {
    title: "MVP Development",
    description:
      "Unleash your vision with our MVP development services. From concept to launch, we craft digital solutions that propel your business forward.",
    link: "https://meta.com",
  },
  {
    title: "Website Development",
    description:
      "Crafting websites that impress and perform, combining thoughtful design, seamless navigation, and captivating visuals.",
    link: "https://google.com",
  },
  {
    title: "App Development",
    description:
      "Drive business growth with our custom app development services. We build innovative mobile applications from concept to launch.",
    link: "https://amazon.com",
  },
  {
    title: "Digital Marketing",
    description:
      "Unleash your brand’s digital power with us. Compelling content, strategic campaigns, and expert execution, tailor made for your brand.",
    link: "https://microsoft.com",
  },
];
