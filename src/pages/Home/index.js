import React, { useState } from 'react'
import { useLocation } from 'wouter'
import ListOfContents from '../../components/ListOfContents'
import { useContents } from '../../hooks/useContents'

export default function Home () {
  const [keyword, setKeyword] = useState('')
  const [, pushLocation] = useLocation()

  const {loading, contents} = useContents()

  const handleSubmit = evt => {
    evt.preventDefault()
    // navegate to route
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = evt => {
    setKeyword(evt.target.value)
  }

  return (
    <>
      <form className="App-field" onSubmit={handleSubmit}>
          <input 
            type='text'
            value={keyword}
            placeholder='Buscar contenido...'
            onChange={handleChange}
          />
      </form>
      <h3 className='App-title'>Última búsqueda</h3>
      <ListOfContents contents={contents} />
    </>
  )
}