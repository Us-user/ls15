import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import NftCarousel from './NftCarousel'
import SectionMain from './SectionMain'

export default function Main() {
  return (
    <main>
      <Section1/>
      <Section2/>
      <Section3/>
      <NftCarousel/>
      <SectionMain/>
    </main>
  )
}
