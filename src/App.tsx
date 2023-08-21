import React from 'react'
import ReactDOM from 'react-dom'
import get from 'lodash/get'

import resume from './resumeData.js'
import Header from './components/Header'

import './App.scss'
import SkillBar from './components/SkillBar'

ReactDOM.render(
  <div className="resume-container">
    <div className="resume-header">
      <Header />
    </div>
    <div className="resume-main">
      <div className="resume-skills">
        {Object.keys(resume.skills)
          .sort((a, b) => resume.skills[b] - resume.skills[a])
          .map(s => (
            <SkillBar skill={s} strength={resume.skills[s]} key={s} />
          ))}
      </div>
      <div className="resume-experience">
        {resume.jobs.map((j, i) => (
          <div className="resume-job" key={i}>
            <h4 className="resume-job-title">
              {j.company}
              <small>{j.title}</small>
            </h4>
            <ul>
              {get(j, 'duties', []).map((d, n) => (
                <li key={n}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    {false && (
      <div className="resume-footer">
        <ul>
          <li>
            <a>
              <i className="fa-fw fa-solid fa-print" /> Print&hellip;
            </a>
          </li>
          <li>
            <a>
              <i className="fa-fw fa-solid fa-envelope" /> Email&hellip;
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
    )}
  </div>,
  window.document.querySelector('#app'),
  () => {}
)
