import { Hero } from "../components/Hero";
import { Downloads } from "../components/Downloads";
import { Screenshots } from "../components/Screenshots";
import { UpdateBanner } from "../components/UpdateBanner";
import { Partners } from "../components/Partners";
import { Testimonials } from "../components/Testimonials";
import { Support } from "../components/Support";
import { BlocksInfo } from "../components/BlocksInfo";
import { Gratitudes } from "../components/Gratitudes";
import { Flag } from "../components/Flag";

export default function Home() {
  const base = import.meta.env.BASE_URL;
  const bg = `${base}figma/Vector.svg`;
  const ellipse = `${base}figma/Ellipse.svg`;
  const ellipse2 = `${base}figma/Ellipse2.svg`;
  return (
    <>
      <Hero />
      <img
        src={ellipse2}
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
      <Testimonials />
      <Partners />{" "}
      <img
        src={ellipse}
        alt="фон"
        className="absolute block w-screen max-w-none h-auto bottom-0 z-0 left-0 "
      />
      <img
        src={bg}
        alt="подорожник"
        className="absolute block w-screen max-w-none h-auto z-0 "
      />
      <Gratitudes />
      <Support />
      <Flag />
    </>
  );
}
