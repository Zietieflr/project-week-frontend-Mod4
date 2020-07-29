import React from 'react'
import BasicInformation from './BasicInformation'

export default function Sheet(props) {
  return (
    <main className='character-sheet' >
      <BasicInformation {...props} />
    </main>
  )
}