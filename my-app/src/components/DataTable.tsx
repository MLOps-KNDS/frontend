import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridCell, GridCellParams, GridRowId } from '@mui/x-data-grid';
import { GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Row } from '@/Types';
import { ModelPopup } from './ModelPopup';
import Popup from 'reactjs-popup';

export default function DataTable({rows, columns}: {rows: GridRowsProp, columns: GridColDef[]}) {
  const [selectionModel, setSelectionModel] = React.useState<number | string>();
  const tableCellHandler = (params: GridCellParams, event: React.MouseEvent) => {
    setSelectionModel(params.id);
  };

  return (
    // centered
    <div>
      <Box sx={{ height: 400, width: "65vw", margin: "auto" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          onCellClick={tableCellHandler}
        />
      </Box>
      <Popup open={selectionModel !== undefined} onClose={() => setSelectionModel(undefined)}>
        <ModelPopup id={selectionModel as number}/>
      </Popup>
    </div>
  );
}