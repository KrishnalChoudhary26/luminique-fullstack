import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import HeroSlider from '../components/HeroSlider'
import HeroVideo from '../components/HeroVideo'
const Home = () => {
  return (
    <div>
      <HeroSlider/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
      
    </div>
  )
}

export default Home
