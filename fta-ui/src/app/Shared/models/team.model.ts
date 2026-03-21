export enum TeamStatus {
  ACTIVE = 'ACTIVE',
  SUSPENDED = 'SUSPENDED',
  DISBANDED = 'DISBANDED'
}

export interface Team {
  id?: number;
  name: string;
  establishYear: number;
  rank: number;
  city: string;
  status: TeamStatus;
  budget: number;
}
