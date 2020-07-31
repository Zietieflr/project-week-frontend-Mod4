import {useState, useEffect} from 'react'
import { fetchGET } from '../helpers/functions'
import url from '../helpers/urls'

export function useCharacters() {
  const [ characters, setCharacters ] = useState({})
  useEffect(() => {
    fetchGET(url('characters'))
      .then(results => charactersToState(results))
  }, [])

  const charactersToState = (backendCharacters) => {
    const editedCharacters = backendCharacters.map(character => {
      const { ability_score } = character
      const ability_score_attributes = ability_score
      delete character.ability_score
      return {...character, ability_score_attributes}
    })
    return setCharacters(editedCharacters)
  }

  const editCharacter = (newValue, id) => {
    const editedCharacters = characters.map(character => {
      if (character.id === id) {
        return {...character, ...newValue}
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