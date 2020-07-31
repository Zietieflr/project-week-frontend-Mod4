import React from 'react'
import AbilityScore from './AbitlityScore'

export default function AbilityScores(props) {
  const { str, dex, con, int, wis, cha } = props.abilityScores
  const { edit, editCharacter, abilityScores, characterID } = props

  const modifier = (score) => {
    return Math.floor((score-10)/2)
  }

  const displayTotal = (text) => {
    return <div className='display-total'>{text}</div>
  }

  const handleChange = (event, scoreType) => {
    const change = {...abilityScores, [scoreType]: event.target.value}
    const changeScore = {ability_score_attributes: change}
    editCharacter(changeScore, characterID)
  }

  const displayScore = (score, scoreType) => {
    return edit
      ? <input className='display-total' value={score} onChange={(event) => handleChange(event, scoreType)} />
      : displayTotal(score)
  }

  return(
    <section className='ability-scores' >
      <h1>Ability Scores</h1>
      <div className='display-ability-scores'>
        <AbilityScore 
          shortText={'STR'} 
          longText={'STRENGTH'} 
          score={str} 
          displayTotal={displayTotal}
          displayScore={displayScore}
          modifier={modifier}
        />
        <AbilityScore 
          shortText={'DEX'} 
          longText={'DEXTERITY'} 
          score={dex} 
          displayTotal={displayTotal}
          displayScore={displayScore}
          modifier={modifier}
        />
        <AbilityScore 
          shortText={'CON'} 
          longText={'CONSTITUTION'} 
          score={con} 
          displayTotal={displayTotal}
          displayScore={displayScore}
          modifier={modifier}
        />
        <AbilityScore 
          shortText={'INT'} 
          longText={'INTELLIGENCE'} 
          score={int} 
          displayTotal={displayTotal}
          displayScore={displayScore}
          modifier={modifier}
        />
        <AbilityScore 
          shortText={'WIS'} 
          longText={'WISDOM'} 
          score={wis} 
          displayTotal={displayTotal}
          displayScore={displayScore}
          modifier={modifier}
        />
        <AbilityScore 
          shortText={'CHA'} 
          longText={'CHARISMA'} 
          score={cha} 
          displayTotal={displayTotal}
          displayScore={displayScore}
          modifier={modifier}
        />
      </div>
    </section>
  )
}
