export enum PlayerPosition {
  GK = 'GK',
  RB = 'RB',
  LB = 'LB',
  CB = 'CB',
  SW = 'SW',
  CM = 'CM',
  CDM = 'CDM',
  CAM = 'CAM',
  LMF = 'LMF',
  RMF = 'RMF',
  ST = 'ST',
  CF = 'CF',
  SS = 'SS',
  LWF = 'LWF',
  RWF = 'RWF'
}

export enum PlayerSituation {
  RETIRED = 'RETIRED',
  YOUTH = 'YOUTH',
  BENCH = 'BENCH',
  LINEUP = 'LINEUP',
  FREE = 'FREE'
}

export enum PlayerStatus {
  BANNED = 'BANNED',
  PLAYING = 'PLAYING',
  PUNISHED = 'PUNISHED',
  NEW = 'NEW',
  FREE_AGENT = 'FREE_AGENT'
}

export interface PlayerDTO {
  name: string;
  yearOfBirth: number;
  nationality: string;
  position: PlayerPosition;
  situation: PlayerSituation;
  status: PlayerStatus;
  marketValue: number;
}

export interface Player extends PlayerDTO {
  id: string;
}
