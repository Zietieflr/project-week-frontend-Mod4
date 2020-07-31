import React, {useEffect} from 'react' 
import AbilityScores from './AbilityScores'

export default function BasicInformation(props) {
  const {
    id,
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
    ability_score_attributes,
    edit, 
    editCharacter,
  } = props

  const changeInput = (event, inputName, id) => {
    const object = {[inputName]: event.target.value}
    return editCharacter(object, id)
  }

  const renderField = (text, inputName, id) => {
    if (edit) {
      return <input name={inputName} value={text} onChange={(event) => changeInput(event, inputName, id)} />
    }
    else {
      return <p>{text}</p>
    }
  }
  
  return (
    <>
      <section className='basic-information' >
        <div>Character Name:<br/>{renderField(name,'name', id)}</div>
        <div>Class:<br/>{renderField(character_class, 'character_class', id)}</div>
        <div>Player Name:<br/>{renderField(player_name, 'player_name', id)}</div>
        <div>Ancestry and Heritage:<br/>{renderField(ancestry_and_heritage, 'ancestry_and_heritage', id)}</div>
        <div>Background:<br/>{renderField(background, 'background', id)}</div>
        <div>Experience Points:<br/>{renderField(experience_points, 'experience_points', id)}</div>
        <div>Size:<br/>{renderField(size, 'size', id)}</div>
        <div>Alignment:<br/>{renderField(alignment, 'alignment', id)}</div>
        <div>Traits:<br/>{renderField(traits, 'traits', id)}</div>
        <div>Deity(s):<br/>{renderField(deity, 'deity', id)}</div>
        <div className='character-level'>Level:<br/>{renderField(level, 'level', id)}</div>
        <div className='character-hero-points'>Hero Points:<br/>{renderField(hero_points, 'hero_points', id)}</div>
      </section>
      {ability_score_attributes ? <AbilityScores editCharacter={editCharacter} abilityScores={ability_score_attributes} characterID={id} edit={edit} /> : null}
    </>
  )
}