import React from 'react' 

export default function BasicInformation(props) {
  const { 
    name,
    player_name,
    alignment,
    ancestry_and_heritage, 
    background,
    character_class,
    deity,
    experience_points,
    hero_points,
    level,
    size,
    traits,
    form,
  } = props

  console.log('Basic Info form', form)
  return (
    <section className='basic-information' >
      <div>Character Name:<br/><p>{name}</p></div>
      <div>Class:<br/><p>{character_class}</p></div>
      <div>Player Name:<br/><p>{player_name}</p></div>
      <div>Ancestry and Heritage:<br/><p>{ancestry_and_heritage}</p></div>
      <div>Background:<br/><p>{background}</p></div>
      <div>Experience Points:<br/><p>{experience_points}</p></div>
      <div>Size:<br/><p>{size}</p></div>
      <div>Alignment:<br/><p>{alignment}</p></div>
      <div>Traits:<br/><p>{traits}</p></div>
      <div>Deity(s):<br/><p>{deity}</p></div>
      <div className='character-level'>Level:<br/><p>{level}</p></div>
      <div className='character-hero-points'>Hero Points:<br/><p>{hero_points}</p></div>
    </section>
  )
}