import React from 'react'

export function ParticipantItem({ participant }) {
  return (
    <tr>
      <td>{participant.name}</td>
      <td>{participant.surname}</td>
    </tr>
  )
}
