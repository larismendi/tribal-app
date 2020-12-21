import React from 'react'
import Spinner from '../../components/Spinner'
import ListOfContents from '../../components/ListOfContents'
import {useContents} from '../../hooks/useContents'

export default function SearchResults ({ params }) {
  const { keyword } = params
  const { loading, contents } = useContents({ keyword })
  return <>
    {loading
      ? <Spinner />
      : <ListOfContents contents={contents} />
    }
  </>
}