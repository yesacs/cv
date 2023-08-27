import React from 'react'
import * as ReactDOM from 'react-dom/client'

import resume from './resumeData.js'

import Header from './components/Header'
import SkillBar from './components/SkillBar'
import Job from './components/Job'

import './App.scss'

const root = ReactDOM.createRoot(window.document.querySelector('#app'))

root.render(
  <div className="resume-container">
    <div className="resume-header">
      <Header {...resume} />
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
  </div>
)
