import React, {useState, useEffect} from 'react'
import { fetchGET } from '../helpers/functions'
import url from '../helpers/urls'

export function useCharacters() {
  const [ characters, setCharacters ] = useState({})
  useEffect(() => {
    fetchGET(url('characters'))
      .then(results => setCharacters(results))
  }, [])
  
  
  return [characters, setCharacters]
}