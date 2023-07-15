import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Document ID', width: 150 },
  { field: 'documentName', headerName: 'Document Name', width: 300 },
  { field: 'lastName', headerName: 'Due Date', width: 130 },
  {
    field: 'age',
    headerName: 'Action',
    type: 'string',
    width: 120,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.documentName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: '01/01/2023', documentName: 'Maintenance report', age:'In-prgoess' },
  { id: 2, lastName: '01/01/2023', documentName: 'Maintenance report', age:'In-prgoess' },
  { id: 3, lastName: '01/01/2023', documentName: 'Maintenance report', age:'In-prgoess' },
  { id: 4, lastName: '01/01/2023', documentName: 'Maintenance report', age:'In-prgoess' },
  { id: 5, lastName: '01/01/2023', documentName: 'Maintenance report', age: 'In-prgoess' },
  { id: 6, lastName: '01/01/2023', documentName: 'Maintenance report', age: 'In-prgoess' },
  { id: 7, lastName: 'Clifford', documentName: 'Testing report', age: 44 },
  { id: 8, lastName: 'Frances', documentName: 'Testing report', age: 36 },
  { id: 9, lastName: 'Roxie', documentName: 'Testing report', age: 65 },
  { id: 10, lastName: 'Roxie', documentName: 'Testing report', age: 65 },
  { id: 11, lastName: 'Roxie', documentName: 'Testing report', age: 65 },
  { id: 12, lastName: 'Roxie', documentName: 'Testing report', age: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 500 , width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}