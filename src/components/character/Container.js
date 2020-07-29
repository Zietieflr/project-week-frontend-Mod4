import React, { useState, useEffect } from 'react'
import Form from './Form'
import BasicInformation from './BasicInformation'
import Sheet from './Sheet'
import List from './List'

export default function Container(props) {
  const { characters, setCharacters } = props
  const [ selectCharacter, setSelectCharacter ] = useState({})
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
    setSelectCharacter(selectedCharacter)
  }

  return (
    <main className='character-container' >
      <select onChange={(event) => handleSelectChange(event)}>
        <option value='' disabled selected>Select from your characters...</option>
        {charactersList(characters)}
      </select>
      {/* <Form {...props} /> */}
      {selectCharacter.name ? <Sheet {...selectCharacter} /> : null}
    </main>
  )
}