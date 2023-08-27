import React from 'react'
import get from 'lodash/get'
import c from 'classnames'

import './index.scss'

interface Job {
  title: string
  company: string
  duration: { start: string; end: string }
  duties: Array<string>
}

interface JobProps {
  job: Job
  className: string
}

export function Job(props: JobProps) {
  const { job, className } = props

  return (
    <div className={c('resume-job', className)}>
      <h4 className="resume-job-title">
        {job.company}
        <small>
          {job.title}, {job.duration.start}&mdash;{job.duration.end}
        </small>
      </h4>
      <ul>
        {get(job, 'duties', []).map((d: string, n: number) => (
          <li key={n}>{d}</li>
        ))}
      </ul>
    </div>
  )
}

export default Job
