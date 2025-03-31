import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useNavigate} from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Chip} from "@mui/material";
import {useUserContext} from "../Context/userContext.jsx";
import SimpleModal from "./SimpleModal.jsx";
import {useState} from "react";
import LoginForm from "./LoginForm.jsx";

const RecipeCard = ({id, name, image, category, area, isFavourite}) => {
    const navigate = useNavigate()
    const {currentUser} = useUserContext()
    const [favourite, setFavourite] = useState(isFavourite)
    const [openLoginPopup, setOpenLoginPopup] = useState(false)

    const showLoginPopup = () => {
        setOpenLoginPopup(true)
    }

    const handeFavouriteClick = () => {
        if (!currentUser) {
            showLoginPopup()
        } else {
            setFavourite(!favourite)
        }
    }

    return (
        <>
            <SimpleModal title={"Login"} open={openLoginPopup} setOpen={setOpenLoginPopup}>
                <LoginForm />
            </SimpleModal>
            <Card sx={{minWidth: 345, maxWidth: 345}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="280"
                    image={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Chip label={category} sx={{mr: 0.5}}/>
                    <Chip label={area} sx={{mr: 0.5}}/>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={handeFavouriteClick}>
                        {favourite ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
                    </Button>
                    <Button size="small" onClick={() => navigate(`/recipe/${id}`)}>Recipe</Button>
                </CardActions>
            </Card>
        </>
    );
}

export default RecipeCard;
