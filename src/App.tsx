import React from 'react'
import ReactDOM from 'react-dom'

import ResumeData from 'resumeData.js'
import { Header } from './components/Header'

ReactDOM.render(
  <div className="resume-container">
    <Header />
  </div>,
  window.document.querySelector('#app'),
  () => {}
)
