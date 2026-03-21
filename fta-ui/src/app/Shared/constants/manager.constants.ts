export const MANAGER_FIELDS = [
  { key: 'name', label: 'Name', type: 'text' },
  { key: 'yearOfBirth', label: 'Year of Birth', type: 'number' },
  { key: 'status', label: 'Status', type: 'enum' },
  { key: 'nationality', label: 'Nationality', type: 'text' }
];

export const MANAGER_TABLE_COLUMNS = [
  { key: 'id', label: 'ID',
    sortable: true },
  { key: 'name', label: 'Name',
    sortable: true },
  { key: 'nationality', label: 'Nationality',
    sortable: true },
  { key: 'status', label: 'Status',
    sortable: true },
  { key: 'year', label: 'Year of birth',
    sortable: true }
];
