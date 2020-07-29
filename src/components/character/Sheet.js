import React from 'react'
import BasicInformation from './BasicInformation'

export default function Sheet(props) {
  return (
    <section className='character-sheet' >
      <BasicInformation {...props} />
    </section>
  )
}