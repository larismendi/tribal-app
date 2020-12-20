import React, { useState } from 'react'
import { Link, useLocation } from 'wouter'
import ListOfContents from '../../components/ListOfContents'
import { useContents } from '../../hooks/useContents';

export default function Home () {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()

  const {loading, contents} = useContents()

  const handleSubmit = evt => {
    evt.preventDefault()
    // navegar a otra ruta
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = evt => {
    setKeyword(evt.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placeholder='Search content here ...' onChange={handleChange} type='text' value={keyword} />
      </form>
      <h3 className='App-title'>Ultima busqueda</h3>
      <ListOfContents contents={contents} />
    </>
  )
}