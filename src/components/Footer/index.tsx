import React from 'react'

import './index.scss'

export function Footer() {
  return (
    <div className="resume-footer">
      <ul>
        <li>
          <a>
            <i className="fa-fw fa-solid fa-print" /> Print&hellip;
          </a>
        </li>
        <li>
          <a>
            <i className="fa-fw fa-solid fa-envelope" />{' '}
            casey.sullivan@gmail.com
          </a>
        </li>
        <li>
          <a>
            <i className="fa-fw fa-brands fa-twitter" /> caseysullivan
          </a>
        </li>
        <li>
          <a>
            <i className="fa-fw fa-brands fa-linkedin" /> caseypsullivan
          </a>
        </li>
        <li>
          <a>
            <i className="fa-fw fa-brands fa-github" /> yesacs
          </a>
        </li>
        <li>
          <a>
            <i className="fa-fw fa-solid fa-pizza-slice" /> casey.pizza
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
