import React, { useState, useEffect } from 'react'
import Form from './Form'
import Sheet from './Sheet'
import List from './List'
import url from '../../helpers/urls'
import { fetchWithBody } from '../../helpers/functions'
import { blankBasicInfo } from '../../helpers/blankObjects'

export default function Container(props) {
  const { characters, setCharacters, editCharacter } = props
  const [ selectCharacter, setSelectCharacter ] = useState(-1)
  const [ edit, setEdit ] = useState(false)
  const [ newCharacter, setNewCharacter ] = useState(false)

  const charactersList = (userCharacters) => {
    if (userCharacters.length) {
      return (
        userCharacters.map(character => {
          return <List key={character.id} character={character} />
        })
      )
    }
  }

  const handleSelectChange = (event) => {
    event.stopPropagation()
    setSelectCharacter(parseInt(event.target.value))
  }

  const findCharacter= () => selectCharacter >= 0 ? characters.find(character => character.id === selectCharacter) : null

  const updateCharacter = () => {
    setEdit(!edit)
    return fetchWithBody(url('characters')+selectCharacter, 'PATCH', {character: findCharacter()})
  }

  const handleEdit = () => edit ? updateCharacter() : setEdit(!edit)

  const editText = () => edit ? 'Save' : 'Edit'

  const newText = () => newCharacter ? 'Save' : '✚'

  const updateCharacterID = (newChar, oldChar) => {
    const editedCharacters = characters.map(character => {
      if (character.id === oldChar.id && character.name === oldChar.name) {
        return {...character, id: newChar.id }
      }
      else {
        return character
      }
    })
    setCharacters([...editedCharacters])
  }

  const handleNew = () => {
    if (newCharacter) {
      setEdit(!edit)
      setNewCharacter(!newCharacter)
      const foundCharacter = findCharacter()
      fetchWithBody(url('characters'), 'POST', {character: foundCharacter})
        .then(result => updateCharacterID(result, foundCharacter))
    }
    else {
      setCharacters([...characters, blankBasicInfo()])
      setEdit(!edit)
      setNewCharacter(!newCharacter)
      setSelectCharacter(0)
    }
  }

  const handleSheetType = (editing) => {
    if (selectCharacter >= 0) {
      return editing
        ? <Form {...findCharacter(selectCharacter)} edit={edit} editCharacter={editCharacter} />
        : <Sheet {...findCharacter(selectCharacter)} edit={edit} />
    }
  }

  return (
    <>
      <nav>
        <select onChange={(event) => handleSelectChange(event)}>
          <option value='-1' >Select from your characters...</option>
          {charactersList(characters)}
        </select>
        {selectCharacter > 0 ? <button onClick={handleEdit}>{editText()}</button> : null}
        <button onClick={handleNew}>{newText()}</button>
      </nav>
      <section className='character-container' >
        {handleSheetType(edit)}
      </section>
    </>
  )
}