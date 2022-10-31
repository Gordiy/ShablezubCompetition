import React from 'react'

export function ParticipantItem(props) {
  return (
    <li>{props.participant.name} {props.participant.surname}</li>
  )
}
