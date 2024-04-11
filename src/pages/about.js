import React from 'react'
import SocialPost from '../components/about/SocialPost'
import WhyChooseProduct from '../components/about/WhyChooseProduct'
import Achivement from '../components/achivement/Achivement'
import Breadcrumb from '../components/common/Breadcrumb'
import Layout from '../components/layout/Layout'
import Testimonial1 from '../components/testimonial/Testimonial1'

function About() {
  return (
   <Layout>
    <Breadcrumb title="ABOUT OUR COMPANY" description={`The winner of this auction will receive the edition #2/5 copy of "Did you ever really love me?" by Mad Dog Jones. The edition of 1 is shown only for auction purposes.`}  />
    <WhyChooseProduct/>
    <Achivement/>
    <Testimonial1 sectionPadding="pt-110 pb-110" />
    <SocialPost/>
   </Layout>
  )
}

export default About