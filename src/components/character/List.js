import React from 'react'

export default function List(props) {
  const { name, character_class, id } = props.character
  return (
    <option className='character' value={id} >
      {`${name}, ${character_class}`}
    </option>
  )
}