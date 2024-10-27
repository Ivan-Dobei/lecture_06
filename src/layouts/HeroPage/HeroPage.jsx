import React from 'react';
import useCharacter from "../../hooks/useCharacter/useCharacter";
import {useParams} from "react-router-dom";
import {Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import Loading from "../../components/Loading/Loading";

function HeroPage() {
    const { id } = useParams();

    console.log(id);
    const{character, isLoading} = useCharacter(id);

    console.log(character);

    if(!character) {
        return (
            <Typography variant="h3" component="div">
                Page not found, try to choose another one
            </Typography>
        )
    }

    return (
        <Grid container justifyContent="center" alignItems="center" style={{minHeight: '100vh'}}>
            {isLoading && <Loading/>}
            <Grid >
                <Card>
                    <CardMedia
                        component="img"
                        image={character.image}
                        sx={{ width: '500px' }}
                    />
                    <CardContent>
                        <Typography variant="h4" component="div">
                            {character.name}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Status: {character.status}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default HeroPage;