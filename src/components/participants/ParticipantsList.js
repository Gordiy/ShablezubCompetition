import './styles/ParticipantList.css';
import React from 'react';
import {ParticipantItem} from './';
import {Estimate, BaseParticipant} from './entities';
import {ParticipantsUtils} from './utils';
import Carousel from 'react-bootstrap/Carousel';

export function ParticipantsList() {
  const entity = new Estimate(45, 50, 48)
  const participants = [
    new BaseParticipant('Hordii', 'Rushynets', entity),
    new BaseParticipant('Slavik', 'Pikuk', entity),
    new BaseParticipant('Hordii', 'Rushynets', entity),
    new BaseParticipant('Slavik', 'Pikuk', entity),
    new BaseParticipant('Hordii', 'Rushynets', entity),
    new BaseParticipant('Slavik', 'Pikuk', entity),
    new BaseParticipant('Hordii', 'Rushynets', entity),
    new BaseParticipant('Slavik', 'Pikuk', entity),
  ];
  const participantsChunks = ParticipantsUtils.getParticipantsChunks(participants)

  return (
    <Carousel>
      {
        participantsChunks.map((chunk) => {
          return (
            <Carousel.Item interval={1500}>
              {
                chunk.map((participant) => {
                  return <ParticipantItem key={`${participant.name} ${participant.surname}`} participant={participant}/>
                })
              }
            </Carousel.Item>
          )
        })
      }
    </Carousel>
  )
}
