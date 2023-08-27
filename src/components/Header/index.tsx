import React from 'react'
import resume from '~/src/resumeData.js'

import Footer from '~/src/components/Footer'

import './index.scss'

export const Header = ({ name, position, location }) => {
  return (
    <header className="resume-header-wrapper">
      <div>
        <h1>{name}</h1>
        <h2>{position}</h2>
        <h2>{location}</h2>
        <p>{resume.abstract}</p>
        <p>{resume.personal}</p>
      </div>

      <Footer />
    </header>
  )
}

export default function () {
  return <Header {...resume} />
}
