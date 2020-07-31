import React from 'react'

export default function AbilityScore(props) {
  const { shortText, longText, score, displayScore, displayTotal, modifier} = props

  return (
    <div className='score-container'>
          <div className='modifier'>
            {displayTotal(modifier(score))}
            <p>
              {shortText}<br/><span>Modifier</span>
            </p>
          </div>
          <div className='ability-score'>
            <p>
              {longText}<br/><span>Score</span>
            </p>
            {displayScore(score, shortText.toLowerCase())}
          </div>
    </div>
  )
}