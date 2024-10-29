import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import {Card} from "@mui/material";

function CharacterList({characterList, setCharacterId}) {

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

    const handleRowClick = (item) => {
        setCharacterId(item.id);
    }

    return (
        <Box sx={{ height: '90vh', width: '100%', marginBottom: '10px'}}>
            <DataGrid
                onRowClick={handleRowClick}
                rows={characterList}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 20,
                        },
                    },
                }}
                disableRowSelectionOnClick
            />
        </Box>
    );
}

export default CharacterList;