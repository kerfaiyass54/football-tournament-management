export const PLAYER_FIELDS = [
  { key: 'name', label: 'Name', type: 'text' },
  { key: 'nationality', label: 'Nationality', type: 'text' },
  { key: 'position', label: 'Position', type: 'enum' },
  { key: 'ability', label: 'Ability', type: 'number' },
  { key: 'status', label: 'Status', type: 'enum' },
  { key: 'marketValue', label: 'Market Value', type: 'currency' },
  { key: 'number', label: 'Number', type: 'number' }
];

export const PLAYER_TABLE_COLUMNS = [
  { key: 'id', label: 'ID',
    sortable: true },
  { key: 'name', label: 'Name',
    sortable: true },
  { key: 'position', label: 'Position',
    sortable: true },
  { key: 'ability', label: 'Ability',
    sortable: true },
  { key: 'status', label: 'Status',
    sortable: true }
];
