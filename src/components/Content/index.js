import React from "react"
import {Link} from 'wouter'
import './styles.css'

export default function Content ({ title, id, url }) {
  return (
    <div className='Content'>
      <Link to={`/content/${id}`} className='Content-link'>
        <h4>{title}</h4>
        <img loading='lazy' alt={title} src={url} />
      </Link>
    </div>
  )
}