import React from 'react' 
import AbilityScores from './AbilityScores'
import BasicInformationField from './BasicInformationFields'

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
        <BasicInformationField 
          label={'Character Name:'} 
          text={name} 
          keyString={'name'} 
          id={id} 
          renderField={renderField} 
        />
        <BasicInformationField 
          label={'Class:'} 
          text={character_class} 
          keyString={'character_class'} 
          id={id} 
          renderField={renderField} 
        />
        <BasicInformationField 
          label={'Player Name:'} 
          text={player_name} 
          keyString={'player_name'} 
          id={id} 
          renderField={renderField} 
        />
        <BasicInformationField 
          label={'Ancestry and Heritage:'} 
          text={ancestry_and_heritage} 
          keyString={'ancestry_and_heritage'} 
          id={id} 
          renderField={renderField} 
        />
        <BasicInformationField 
          label={'Background:'} 
          text={background} 
          keyString={'background'} 
          id={id} 
          renderField={renderField} 
        />
        <BasicInformationField 
          label={'Experience Points:'} 
          text={experience_points} 
          keyString={'experience_points'} 
          id={id} 
          renderField={renderField} 
        />
        <BasicInformationField 
          label={'Size:'} 
          text={size} 
          keyString={'size'} 
          id={id} 
          renderField={renderField} 
        />
        <BasicInformationField 
          label={'Alignment:'} 
          text={alignment} 
          keyString={'alignment'} 
          id={id} 
          renderField={renderField} 
        />
        <BasicInformationField 
          label={'Traits:'} 
          text={traits} 
          keyString={'traits'} 
          id={id} 
          renderField={renderField} 
        />
        <BasicInformationField 
          label={'Deity(s):'} 
          text={deity} 
          keyString={'deity'} 
          id={id} 
          renderField={renderField} 
        />
        <BasicInformationField 
          label={'Level:'} 
          text={level} 
          keyString={'level'} 
          id={id} 
          renderField={renderField} 
        />
        <BasicInformationField 
          label={'Hero Points:'} 
          text={hero_points} 
          keyString={'hero_points'} 
          id={id} 
          renderField={renderField} 
        />
      </section>
      {ability_score_attributes ? <AbilityScores editCharacter={editCharacter} abilityScores={ability_score_attributes} characterID={id} edit={edit} /> : null}
    </>
  )
}