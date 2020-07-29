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
    <>
      <nav>
        <select onChange={(event) => handleSelectChange(event)}>
            <option defaultValue='' >Select from your characters...</option>
            {charactersList(characters)}
        </select>
        {selectCharacter.name ? <button>Edit</button> : null}
        <button>✚</button>
      </nav>
      <section className='character-container' >
        {/* <Form {...props} /> */}
        {selectCharacter.name ? <Sheet {...selectCharacter} /> : null}
      </section>
    </>
  )
}