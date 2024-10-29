import React from 'react';
import {getPageNumberFromUrl} from "../../utils/getNumberFromUrl";
import {Button, Typography} from "@mui/material";
import Box from "@mui/material/Box";

function Pagination({info, setUrl}) {

    const pageNumber = info.next ? getPageNumberFromUrl(info.next) - 1 : info.pages;

    function nextBtnHandler() {
        info.next && setUrl(info.next);
    }

    function prevBtnHandler() {
        info.prev && setUrl(info.prev);
    }

    return (
        <Box  sx={{width: '100%', display:'flex', alignItems:"center", justifyContent:'center'}}>
            <Button
                variant="contained"
                disabled={!info.prev}
                onClick={prevBtnHandler}
                sx={{marginRight: '10px'}}
            >Previous</Button>
            <Typography  color={'text.secondary'} variant="body2" sx={{marginRight: '10px'}}>
                Pages: {pageNumber}
            </Typography>
            <Button
                variant="contained"
                disabled={!info.next}
                onClick={nextBtnHandler}
            >Next</Button>
        </Box>
    );
}

export default Pagination;