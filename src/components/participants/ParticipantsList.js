import React from 'react'
import {ParticipantItem} from './ParticipantItem'
import {Estimate, Participant} from './entity'

export function ParticipantsList() {
  const entity = new Estimate(45, 50, 48)
  const participants = [
    new Participant('Hordii', 'Rushynets', entity),
    new Participant('Slavik', 'Pikuk', entity)
  ];

  return (
    <ul>
      {
        participants.map((participant) => {
          return <ParticipantItem key={`${participant.name} ${participant.surname}`} participant={participant}/>
        })
      }
    </ul>
  )
}
