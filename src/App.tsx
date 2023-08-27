import React from 'react'
import ReactDOM from 'react-dom'
import get from 'lodash/get'

import resume from './resumeData.js'

import Header from './components/Header'
import SkillBar from './components/SkillBar'
import Job from './components/Job'

import './App.scss'

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
          <Job job={j} key={i} />
        ))}
      </div>
    </div>
    )}
  </div>,
  window.document.querySelector('#app'),
  () => { }
)
