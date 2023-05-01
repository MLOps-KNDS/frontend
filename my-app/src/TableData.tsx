import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Model } from './Types';


// model columns
export const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Model Name',
      width: 150,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
    },
    {
      field: 'createdAt',
      headerName: 'Created at',
      width: 150,
    },
    {
      field: 'updatedAt',
      headerName: 'Updated at',
      width: 150,
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 150,
    },
  ];

// model example data
export const rows: Model[] = [
    {
      id: 1,
      name: 'Snow',
      status: "ACTIVE",
      createdAt: "2021-10-10",
      updatedAt: "2021-10-10",
      description: "Snow is white",
    },
    {
      id: 2,
      name: 'Lannister',
      status: "INACTIVE",
      createdAt: "2021-10-10",
      updatedAt: "2021-10-10",
      description: "A Lannister always pays his debts",
    },
    {
      id: 3,
      name: 'Mario',
      status: "ACTIVE",
      createdAt: "2021-10-10",
      updatedAt: "2021-10-10",
      description: "It's a me, Mario!",
    },
    {
      id: 4,
      name: 'Yuuki',
      status: "ACTIVE",
      createdAt: "2021-10-10",
      updatedAt: "2021-10-10",
      description: "I'm Yuuki",
    },
];
