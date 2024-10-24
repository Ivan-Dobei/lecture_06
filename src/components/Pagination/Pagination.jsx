import React from 'react';
import './pagination.css';
import {getPageNumberFromUrl} from "../../utils/getNumberFromUrl";
import {Button, Typography} from "@mui/material";

function Pagination({info, setUrl}) {

    const nextBtnStyles = info.next ? 'next_button btn' : 'next_button btn disabled_btn';
    const prevBtnStyles = info.prev ? 'previous_button btn' : 'previous_button btn disabled_btn';
    const pageNumber = info.next ? getPageNumberFromUrl(info.next) - 1 : info.pages;

    function nextBtnHandler() {
        info.next && setUrl(info.next);
    }

    function prevBtnHandler() {
        info.prev && setUrl(info.prev);
    }

    return (
        <footer className="buttons">
            <Button
                variant="contained"
                disabled={!info.prev}
                className={prevBtnStyles}
                onClick={prevBtnHandler}
            >Previous</Button>
            <Typography className="count_of_pages text" variant="body2">
                Pages: {pageNumber}
            </Typography>
            <Button
                variant="contained"
                disabled={!info.next}
                onClick={nextBtnHandler}
                className={nextBtnStyles}
            >Next</Button>
        </footer>
    );
}

export default Pagination;