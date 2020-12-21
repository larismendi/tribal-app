import React from "react"
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Moment from 'react-moment'

export default function Content ({ id, provider, name, link, description, image, country, date }) {

  return (
    <Col md={3} className="mb-4">
      <Card 
        style={{ width: '100%', height: '100%', color: '#000' }}
      >
        <Card.Img variant="top" src={image ? image : 'https://via.placeholder.com/286x402.png?text=TRIBAL+APP'} />
        <Card.Body>
          <Card.Title><a href={link} target="__blank" style={{color: '#000'}}>{name}</a></Card.Title>
          <Card.Subtitle>{country} <Moment format="YYYY">{date}</Moment></Card.Subtitle>
          <Card.Text>
            {description}
          </Card.Text>
          <Card.Text>
            Proveedor: <Card.Img src={'/' + provider + '.webp'} style={{width: '32px'}} />
          </Card.Text>
          <Button size="sm" href={link} target="__blank" variant="primary" disabled={!link}>Más info...</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}