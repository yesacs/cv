import React from 'react'

import './index.scss'

function SkillBar(props) {
  let { skill: s, strength: v } = props

  return (
    <div className="skill-bar-wrapper">
      <span className="skill-name">{s}</span>
      <div className="skill-bar">
        <div
          className="skill-bar-inner"
          style={{ width: `${(v / 10) * 100}%` }}
        />
      </div>
    </div>
  )
}

export default SkillBar
