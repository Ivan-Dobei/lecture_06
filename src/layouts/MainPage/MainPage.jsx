import React, {useEffect, useState} from 'react';
import Loading from "../../components/Loading/Loading";
import CharacterList from "../../components/CharacterList/CharacterList";
import Pagination from "../../components/Pagination/Pagination";
import useCharacters from "../../hooks/useCharacters/useCharacters";
import {useNavigate} from "react-router-dom";

function MainPage() {

    const { characters, info, isLoading, setUrl } = useCharacters();
    const navigate = useNavigate();

    const heroItemHandler = (id) => {
        navigate(`heroes/${id}`);
    }

    return (
        <div>
            <section className="container main_section">
                {isLoading && <Loading/>}
                <CharacterList
                    characterList={characters}
                    setCharacterId={heroItemHandler}
                />
            </section>
            <Pagination info={info} setUrl={setUrl}/>
        </div>
    );
}

export default MainPage;