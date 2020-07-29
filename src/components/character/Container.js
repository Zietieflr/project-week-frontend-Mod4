import React, { useState, useEffect } from 'react'
import Form from './Form'
import Sheet from './Sheet'
import List from './List'
import url from '../../helpers/urls'
import { fetchWithBody } from '../../helpers/functions'

export default function Container(props) {
  const { characters, editCharacter } = props
  const [ selectCharacter, setSelectCharacter ] = useState(-1)
  const [ edit, setEdit ] = useState(false)

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
    const selectedCharacter = characters.find(character => character.id = event.target.value)
    setSelectCharacter(selectedCharacter.id)
  }

  const findCharacter= () => characters.find(character => character.id = selectCharacter)

  const saveCharacter = () => {
    setEdit(!edit)
    return fetchWithBody(url('characters')+selectCharacter, 'PATCH', {character: findCharacter()})
  }

  const handleEdit = () => edit ? saveCharacter() : setEdit(!edit)

  const editText = () => edit ? 'Save' : 'Edit'

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
            <option defaultValue='' >Select from your characters...</option>
            {charactersList(characters)}
        </select>
        {selectCharacter >= 0 ? <button onClick={handleEdit}>{editText()}</button> : null}
        {/* <button>✚</button> */}
      </nav>
      <section className='character-container' >
        {/* <Form {...props} /> */}
        {handleSheetType(edit)}
      </section>
    </>
  )
}