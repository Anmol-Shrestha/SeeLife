import React from 'react'
import About from '../Component/Aboutus/About'
import Banner from '../Component/Banner/Banner'
import Featuredcauses from '../Component/FeaturedC/Featuredcauses'

import Majorcauses from '../Component/MajorC/Majorcauses'
import BecomeVolunteer from '../Component/MeetVolunteers/BecomeVolunteer'
import Meetvolunteers from '../Component/MeetVolunteers/Meetvolunteers'
import Ourlateststory from '../Component/Ourlatest/Ourlateststory'

export default function Home() {
  return (
    <>
          <Banner />
          <Majorcauses />
          <About />
          <Featuredcauses />
          <Meetvolunteers/>
          <BecomeVolunteer/>
          <Ourlateststory/>
          
    </>
  )
}
