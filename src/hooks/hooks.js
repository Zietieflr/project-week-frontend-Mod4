import React, {useState, useEffect} from 'react'
import { fetchGET } from '../helpers/functions'
import url from '../helpers/urls'

export function useCharacters() {
  const [ characters, setCharacters ] = useState({})
  useEffect(() => {
    fetchGET(url('characters'))
      .then(results => setCharacters(results))
  }, [])

  const editCharacter = (newValue, key, id) => {
    const editedCharacters = characters.map(character => {
      if (character.id === id) {
        return {...character, [key]: newValue }
      }
      else {
        return character
      }
    })
    setCharacters([...editedCharacters])
    return newValue
  }
  
  return [characters, setCharacters, editCharacter]
}