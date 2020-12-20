import React from 'react'
import Content from '../Content'
import './styles.css'

export default function ListOfContents({contents}) {
  return <div className='ListOfContents'>
    {
      contents.map(({id, title, url}) =>
        <Content
          id={id}
          key={id}
          title={title}
          url={url}
        />
      )
    }
  </div>
}