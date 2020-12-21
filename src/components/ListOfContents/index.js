import React from 'react'
import Content from '../Content'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default function ListOfContents({contents}) {
  return contents.length?<Container className='d-flex align-content-around flex-wrap'>
    <Row>
      {
        contents.map(({ id, provider, name, link, description, image, country, date }) =>
          <Content
            id={id}
            key={id}
            provider={provider}
            name={name}
            link={link}
            description={description ? description.replace(/<[^>]+>/g, '').substring(120,-1) + '...' : ''}
            image={image}
            country={country}
            date={date}
          />
        )
      }
    </Row>
  </Container>:<p>No encontro resultados.</p>
}