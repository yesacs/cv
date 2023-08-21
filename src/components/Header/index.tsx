import React from 'react'
import resume from '../../../src/resumeData.js'

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

      <ul>
        <li>
          <a>
            <i className="fa-fw fa-solid fa-print" /> <span>Print&hellip;</span>
          </a>
        </li>
        <li>
          <a>
            <i className="fa-fw fa-solid fa-envelope" />{' '}
            <span>Email&hellip;</span>{' '}
          </a>
        </li>
        <li>
          <a>
            <i className="fa-fw fa-brands fa-twitter" />{' '}
            <span>caseysullivan</span>
          </a>
        </li>
        <li>
          <a>
            <i className="fa-fw fa-brands fa-linkedin" />{' '}
            <span>caseypsullivan</span>
          </a>
        </li>
        <li>
          <a>
            <i className="fa-fw fa-brands fa-github" /> <span>yesacs</span>
          </a>
        </li>
        <li>
          <a>
            <i className="fa-fw fa-solid fa-pizza-slice" />{' '}
            <span>casey.pizza</span>
          </a>
        </li>
      </ul>
    </header>
  )
}

export default function () {
  return <Header {...resume} />
}
