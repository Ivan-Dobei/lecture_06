import { useState, useEffect } from 'react';

function useCharacters(initialUrl) {
    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState({});
    const [url, setUrl] = useState(initialUrl || 'https://rickandmortyapi.com/api/character');
    const [isLoading, setIsLoading] = useState(false);

    const fetchCharacters = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setInfo(data.info);
            setCharacters(data.results);
        } catch (error) {
            console.error('Fetch error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchCharacters();
    }, [url]);

    return {characters, info, isLoading, setUrl};
}

export default useCharacters;
