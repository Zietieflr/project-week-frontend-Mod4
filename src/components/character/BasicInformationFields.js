import React from 'react'

export default function BasicInformationField(props) {
  const { renderField, text, keyString, id, label } = props
  return (
    <div>
      {label}<br/>{renderField(text, keyString, id)}
    </div>
  )
}