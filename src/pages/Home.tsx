import { Hero } from '../components/Hero'
import { NoticeBar } from '../components/NoticeBar'
import { Features } from '../components/Features'
import { Testimonials } from '../components/Testimonials'
import { ThanksWall } from '../components/ThanksWall'
import { Support } from '../components/Support'

export default function Home() {
  return (
    <>
      <NoticeBar />
      <Hero />
      <Features />
      <Testimonials />
      <ThanksWall />
      <Support />
    </>
  )
}
