export enum Expertise {
  DEFENSE = 'DEFENSE',
  MIDFIELD = 'MIDFIELD',
  ATTACK = 'ATTACK'
}

export interface Builder {
  id?: number;
  name: string;
  nationality: string;
  expertise: Expertise;
  yearEstablished?: number;
  price: number;
}
