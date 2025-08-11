import { Hero } from "../components/Hero";
import { Downloads } from "../components/Downloads";
import { Screenshots } from "../components/Screenshots";
import { UpdateBanner } from "../components/UpdateBanner";
import { Partners } from "../components/Partners";
import { Testimonials } from "../components/Testimonials";
import { Support } from "../components/Support";
import { BlocksInfo } from "../components/BlocksInfo";
import { Gratitudes } from "../components/Gratitudes";

export default function Home() {
  const base = import.meta.env.BASE_URL;
  const bg = `${base}figma/Vector.svg`;
  const ellipse = `${base}figma/Ellipse2.svg`;
  return (
    <>
      <Hero />
      <img
        src={ellipse}
        alt="фон"
        className="absolute block w-screen max-w-none h-auto z-0 top-[20rem] left-0 opacity-60"
      />
      <img
        src={bg}
        alt="подорожник"
        className="absolute block w-screen max-w-none h-auto z-0 "
      />
      <Downloads />
      <Screenshots />
      <BlocksInfo />
      <UpdateBanner />
      <Partners />
      <Testimonials />
      <Gratitudes />
      <Support />
    </>
  );
}
