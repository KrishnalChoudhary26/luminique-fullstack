import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
           <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
             <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
             <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                    <p>Luminique is a modern clothing brand dedicated to bringing you stylish, high-quality fashion for every moment. We blend comfort, elegance, and contemporary design to help you express your unique style with confidence. At Luminique, we make fashion simple, effortless, and inspiring.</p>
                    <p>At Luminique, we create fashion that shines with simplicity and style. Our collection is carefully crafted to offer comfort, quality, and modern designs that fit effortlessly into your everyday life. Discover clothing that helps you look and feel your best.</p>
                    <b className='text-gray-800'>Our Mission</b>
                    <p>Our mission at Luminique is to make modern fashion accessible, comfortable, and inspiring for everyone. We aim to deliver high-quality clothing that empowers individuals to express their unique style with confidence, while staying true to simplicity, elegance, and everyday wearability.</p>
             </div>
      </div>

      <div className='text-xl py-4'>
             <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>

           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
               <b>Quality Assurance:</b>
               <p className='text-gray-600'>We handpick and rigorously inspect every product to ensure it meets our highest standards of craftsmanship. At Luminique, quality isn’t just a promise—it’s the foundation of everything we create.</p>
           </div>

           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
               <b>Convenience:</b>
               <p className='text-gray-600'>Shop your favorite styles effortlessly with a smooth, fast, and user-friendly shopping experience. From easy navigation to quick checkout, we make fashion just a click away.</p>
           </div>

           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
               <b>Exceptional Customer Service:</b>
               <p className='text-gray-600'>Our support team is dedicated to helping you with timely, friendly, and reliable assistance. At Luminique, your satisfaction is our priority, and we go the extra mile to make every interaction seamless.</p>
           </div>

      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
