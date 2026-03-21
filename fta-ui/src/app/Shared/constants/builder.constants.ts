import { Builder } from '../models/builder.model';

export const BUILDER_FIELDS = [
  { key: 'name', label: 'Name', type: 'text' },
  { key: 'nationality', label: 'Nationality', type: 'text' },
  { key: 'expertise', label: 'Expertise', type: 'enum' },
  { key: 'yearEstablished', label: 'Year Established', type: 'number' },
  { key: 'price', label: 'Price', type: 'currency' }
];

export const BUILDER_TABLE_COLUMNS = [
  { key: 'id', label: 'ID',
    sortable: true },
  { key: 'name', label: 'Name',
    sortable: true },
  { key: 'nationality', label: 'Nationality',
    sortable: true },
  { key: 'expertise', label: 'Expertise',
    sortable: true },
  { key: 'price', label: 'Price',
    sortable: true }
];
