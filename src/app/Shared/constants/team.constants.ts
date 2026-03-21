export const TEAM_FIELDS = [
  { key: 'name', label: 'Name', type: 'text' },
  { key: 'establishYear', label: 'Established', type: 'number' },
  { key: 'rank', label: 'Rank', type: 'number' },
  { key: 'city', label: 'City', type: 'text' },
  { key: 'status', label: 'Status', type: 'enum' },
  { key: 'budget', label: 'Budget', type: 'currency' }
];

export const TEAM_TABLE_COLUMNS = [
  { key: 'name', label: 'Name',
    sortable: true },
  { key: 'rank', label: 'Rank',
    sortable: true },
  { key: 'city', label: 'City',
    sortable: true },
  { key: 'status', label: 'Status',
    sortable: true }
];
