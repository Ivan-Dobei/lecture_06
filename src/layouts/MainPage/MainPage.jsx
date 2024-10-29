import React from 'react';
import Loading from "../../components/Loading/Loading";
import CharacterList from "../../components/CharacterList/CharacterList";
import Pagination from "../../components/Pagination/Pagination";
import useCharacters from "../../hooks/useCharacters/useCharacters";
import {Outlet, useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";

function MainPage() {

    const { characters, info, isLoading, setUrl } = useCharacters();
    const navigate = useNavigate();

    const heroItemHandler = (id) => {
        navigate(`/heroes/${id}`);
    }

    return (
        <Box sx={{marginLeft: '5px', display: 'flex'}}>
            <Box sx={{width:'100%'}}>
                <Box sx={{position: 'relative',}}>
                    {isLoading && <Loading/>}
                    <CharacterList
                        characterList={characters}
                        setCharacterId={heroItemHandler}
                    />
                </Box>
                <Pagination info={info} setUrl={setUrl}/>
            </Box>
            <Outlet/>
        </Box>
    );
}

export default MainPage;