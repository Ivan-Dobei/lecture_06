import React from 'react';
import useCharacter from "../../hooks/useCharacter/useCharacter";
import {useNavigate, useParams} from "react-router-dom";
import {Button, Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import Loading from "../../components/Loading/Loading";
import Box from "@mui/material/Box";

function HeroPage() {
    const { id } = useParams();
    const{character, isLoading} = useCharacter(id);

    const navigate = useNavigate();

    const closeHeroPage = (id) => {
        navigate(`/heroes`);
    }

    if(!character) {
        return (
            <Typography color={'text.secondary'} variant="h3" component="div">
                Page not found, try to choose another character
            </Typography>
        )
    }

    return (
        <Grid container justifyContent="center" alignItems="center" sx={{
            width: '20%',
            position: 'fixed',
            height: '100vh',
            top: 0,
            right: '50px',
            [`& .MuiDrawer-paper`]: {width: '20%'},
        }}>
            <Grid >
                <Card sx={{
                    padding: '60px',
                    position: 'relative',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                    borderRadius: '8px',
                }}>
                    {isLoading && <Loading/>}
                    <CardMedia
                        component="img"
                        image={character.image}
                    />
                    <CardContent>
                        <Typography variant="h5" component="div" color="text.secondary">
                            {character.name}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Status: {character.status}
                        </Typography>
                    </CardContent>
                    <Button
                        sx={{position: 'absolute', top: '10px', right: '10px'}}
                        variant="contained"
                        onClick={closeHeroPage}
                    >Close</Button>
                </Card>
            </Grid>
        </Grid>
    );
}

export default HeroPage;