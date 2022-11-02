import { BaseParticipant } from "."

export class Participant extends BaseParticipant {
    constructor(name, surname, estimate, date_of_birth, trainer, competitionsNumber, degree, city){
        super(name, surname, estimate)
        this.date_of_birth = date_of_birth;
        this.trainer = trainer;
        this.competitionsNumber = competitionsNumber;
        this.degree = degree;
        this.city = city;
    }
}
