import React from 'react'
import Alert from 'react-bootstrap/Alert';

export function CurrentParticipantItem({participant}) {
  return (
    <Alert variant="dark">
      <Alert.Heading>{participant.name} {participant.surname}</Alert.Heading>
      <p>
        Рівень майстерності: {participant.degree} <br/>
        Кількість здач: {participant.competitionsNumber} <br/>
        Тренер: {participant.trainer}
      </p>
      <hr />
      <p className="mb-0">
        <b>Оцінка</b>
      </p>
    </Alert>
  )
}
