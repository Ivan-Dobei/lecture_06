import { useState, useEffect } from 'react';

function useCharacter(characterId) {
    const [character, setCharacter] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const url = `https://rickandmortyapi.com/api/character/${characterId}`;

    const fetchCharacter = async () => {
        if (!characterId) return;
        setIsLoading(true);
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setCharacter(data);
        } catch (error) {
            console.error('Fetch error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchCharacter();
    }, [characterId]);

    return {character, isLoading};
}

export default useCharacter;
