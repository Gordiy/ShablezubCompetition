import React from 'react'
import Alert from 'react-bootstrap/Alert';

export function ParticipantItem({ participant }) {
  return (
    <Alert>
      {participant.name} {participant.surname}
    </Alert>
  )
}
