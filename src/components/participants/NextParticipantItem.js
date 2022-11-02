import React from 'react'
import Alert from 'react-bootstrap/Alert';

export function NextParticipantItem({ participant }) {
  return (
    <Alert variant='danger' className='next-participant'>
      <b> {participant.name} {participant.surname} </b>
    </Alert>
  )
}
