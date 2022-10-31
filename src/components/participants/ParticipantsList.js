import React from 'react'
import {ParticipantItem} from './'
import {Estimate, Participant} from './entities'
import Table from 'react-bootstrap/Table';

export function ParticipantsList() {
  const entity = new Estimate(45, 50, 48)
  const participants = [
    new Participant('Hordii', 'Rushynets', entity),
    new Participant('Slavik', 'Pikuk', entity)
  ];

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Ім'я</th>
          <th>Прізвище</th>
        </tr>
      </thead>
      <tbody>
        {
          participants.map((participant) => {
            return <ParticipantItem key={`${participant.name} ${participant.surname}`} participant={participant}/>
          })
        }
      </tbody>
    </Table>
  )
}
