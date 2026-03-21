export type Continent =
  | 'Africa'
  | 'Asia'
  | 'Europe'
  | 'North America'
  | 'South America'
  | 'Oceania';

export interface Country {
  name: string;
  code: string; // ISO2
}

export const COUNTRIES_BY_CONTINENT: Record<Continent, Country[]> = {
  Africa: [
    { name: 'Tunisia', code: 'tn' },
    { name: 'Algeria', code: 'dz' },
    { name: 'Morocco', code: 'ma' },
    { name: 'Egypt', code: 'eg' },
    { name: 'Nigeria', code: 'ng' },
    { name: 'South Africa', code: 'za' }
  ],

  Europe: [
    { name: 'France', code: 'fr' },
    { name: 'Germany', code: 'de' },
    { name: 'Italy', code: 'it' },
    { name: 'Spain', code: 'es' },
    { name: 'United Kingdom', code: 'gb' }
  ],

  Asia: [
    { name: 'Japan', code: 'jp' },
    { name: 'China', code: 'cn' },
    { name: 'India', code: 'in' },
    { name: 'Saudi Arabia', code: 'sa' }
  ],

  'North America': [
    { name: 'United States', code: 'us' },
    { name: 'Canada', code: 'ca' },
    { name: 'Mexico', code: 'mx' }
  ],

  'South America': [
    { name: 'Brazil', code: 'br' },
    { name: 'Argentina', code: 'ar' },
    { name: 'Chile', code: 'cl' }
  ],

  Oceania: [
    { name: 'Australia', code: 'au' },
    { name: 'New Zealand', code: 'nz' }
  ]
};
