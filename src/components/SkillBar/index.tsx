import React, { useState, useEffect } from 'react'

import './index.scss'

function SkillBar(props) {
  let { skill: s, strength: v } = props,
    [rendered, setRendered] = useState(false),
    barWidth = ((rendered ? v : 0) / 10) * 100

  useEffect(() => {
    setTimeout(() => setRendered(true), 500)
  }, [])

  return (
    <div className="skill-bar-wrapper">
      <span className="skill-name">{s}</span>
      <div className="skill-bar">
        <div className="skill-bar-inner" style={{ width: `${barWidth}%` }} />
      </div>
    </div>
  )
}

export default SkillBar
