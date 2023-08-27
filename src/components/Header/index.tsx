import React from 'react'

import Footer from '~/src/components/Footer'

import './index.scss'

interface HeaderProps {
  name: string
  position: string
  location: string
  abstract: string
  personal: string
}

export const Header = (props: HeaderProps) => {
  let { name, position, location, abstract, personal } = props

  return (
    <header className="resume-header-wrapper">
      <div>
        <h1>{name}</h1>
        <h2>{position}</h2>
        <h2>{location}</h2>
        <p>{abstract}</p>
        <p>{personal}</p>
      </div>

      <Footer />
    </header>
  )
}

export default Header
