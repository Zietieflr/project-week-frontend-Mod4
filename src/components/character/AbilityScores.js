import React from 'react'

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
        <div className='score-container'>
          <div className='modifier'>{displayTotal(modifier(str))}<p>STR<br/><span>Modifier</span></p></div>
          <div className='ability-score'><p>STRENGTH<br/><span>Score</span></p>{displayScore(str, 'str')}</div>
        </div>
        <div className='score-container'>
          <div className='modifier'>{displayTotal(modifier(dex))}<p>DEX<br/><span>Modifier</span></p></div>
          <div className='ability-score'><p>DEXTERITY<br/><span>Score</span></p>{displayScore(dex, 'dex')}</div>
        </div>
        <div className='score-container'>
          <div className='modifier'>{displayTotal(modifier(con))}<p>CON<br/><span>Modifier</span></p></div>
          <div className='ability-score'><p>CONSTITUTION<br/><span>Score</span></p>{displayScore(con, 'con')}</div>
        </div>
        <div className='score-container'>
          <div className='modifier'>{displayTotal(modifier(int))}<p>INT<br/><span>Modifier</span></p></div>
          <div className='ability-score'><p>INTELLIGENCE<br/><span>Score</span></p>{displayScore(int, 'int')}</div>
        </div>
        <div className='score-container'>
          <div className='modifier'>{displayTotal(modifier(wis))}<p>WIS<br/><span>Modifier</span></p></div>
          <div className='ability-score'><p>WISDOM<br/><span>Score</span></p>{displayScore(wis, 'wis')}</div>
        </div>
        <div className='score-container'>
          <div className='modifier'>{displayTotal(modifier(cha))}<p>CHA<br/><span>Modifier</span></p></div>
          <div className='ability-score'><p>CHARISMA<br/><span>Score</span></p>{displayScore(cha, 'cha')}</div>
        </div>
      </div>
    </section>
  )
}
