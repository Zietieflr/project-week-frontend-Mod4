import React from 'react' 

export default function BasicInformation(props) {
  const { character, setCharacter } = props
  // const { ... } = character
  // console.log('character name')
  return (
    <section className='character basic-information' >
      I'm basic. 
    </section>
  )
}