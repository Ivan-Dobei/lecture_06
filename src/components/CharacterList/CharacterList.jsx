import React from 'react';
import './characterList.css';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

function CharacterList({characterList}) {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'name',
            headerName: 'name',
            width: 150,
            editable: true,
        },
        {
            field: 'status',
            headerName: 'status',
            width: 150,
            editable: true,
        },
    ]

    return (
        <Box sx={{ height: '90vh', width: '100%', marginLeft: '150px'}}>
            <DataGrid
                rows={characterList}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 20,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
}

export default CharacterList;