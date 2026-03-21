export enum ManagerStatus {
  ACTIVE = 'ACTIVE',
  RETIRED = 'RETIRED',
  SUSPENDED = 'SUSPENDED'
}

export interface Manager {
  id?: string;
  name: string;
  yearOfBirth: number;
  status: ManagerStatus;
  nationality: string;
  careers?: number[];
}
