import React, { useState, useEffect } from 'react'
import Form from './Form'
import Sheet from './Sheet'
import List from './List'
import url from '../../helpers/urls'
import { fetchWithBody, fetchDELETE } from '../../helpers/functions'
import { blankBasicInfo } from '../../helpers/blankObjects'

export default function Container(props) {
  const { characters, setCharacters, editCharacter } = props
  const [ selectCharacter, setSelectCharacter ] = useState(-1)
  const [ edit, setEdit ] = useState(false)
  const [ newCharacter, setNewCharacter ] = useState(false)

  useEffect(() => {
    if (selectCharacter === 0){
      setNewCharacter(true)
      setEdit(true)
    }
  }, [selectCharacter])

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
    setEdit(false)
    setNewCharacter(false)
    newText()
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
        const { ability_score } = newChar
        const ability_score_attributes = ability_score
        delete newChar.ability_score
        return {...newChar, ability_score_attributes}
      }
      else {
        return character
      }
    })
    setCharacters([...editedCharacters])
    setSelectCharacter(newChar.id)
  }

  const handleNew = () => {
    if (newCharacter) {
      setEdit(!edit)
      setNewCharacter(!newCharacter)
      const foundCharacter = findCharacter()
      fetchWithBody(url('characters'), 'POST', {character: foundCharacter})
        .then(result => updateCharacterID(result, foundCharacter))
    }
    else if (characters.find(character => character.id === 0)) {
      setSelectCharacter(0)
    }
    else {
      setCharacters([...characters, blankBasicInfo()])
      setEdit(!edit)
      setNewCharacter(!newCharacter)
      setSelectCharacter(0)
    }
  }

  const handleDiscard = () => {
    const oneLessCharacter = characters.filter(character => character.id !== selectCharacter)
    if (selectCharacter > 0) {fetchDELETE(url('characters'), selectCharacter)}
    setSelectCharacter(-1)
    return setCharacters(oneLessCharacter)
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
        <select onChange={(event) => handleSelectChange(event)} value={selectCharacter}>
          <option value='-1' >Select from your characters...</option>
          {charactersList(characters)}
        </select>
        {selectCharacter > 0 ? <button onClick={handleEdit}>{editText()}</button> : null}
        {selectCharacter > 0 ? <button onClick={handleDiscard}>Delete</button> : null}
        <button onClick={handleNew}>{newText()}</button>
        {selectCharacter === 0 ? <button onClick={handleDiscard}>Discard</button> : null}
      </nav>
      <section className='character-container' >
        {handleSheetType(edit)}
      </section>
    </>
  )
}