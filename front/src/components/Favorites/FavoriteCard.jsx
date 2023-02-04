import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from '../../redux/actions-creators.js';

import css from './favoriteCard.module.css';

const Card = ( { id, name, species, gender, image, myFavorites, addFavorite, deleteFavorite } ) => {

    const [ isFav, setIsFav ] = useState(false);
    const dispatch = useDispatch();

    const char = {id: id, name: name, species: species, gender: gender, image: image};

    const onClose = () => {
        dispatch(actions.closeCard(id));
    };

    const handleFavorite = () => {
        if (isFav) {
            setIsFav(false);
            deleteFavorite(id);
        };
        if (!isFav) {
            setIsFav(true);
            addFavorite(char);
        };
    };

    
    useEffect(() => {
        myFavorites.forEach((char) => {
            if(char.id === id) setIsFav(true);
        })
    }, [myFavorites]);
    

    return(
        <>
            <div>
                <div>                    
                    <button onClick={onClose}>X</button>
                    {
                    isFav 
                        ? (<button onClick={handleFavorite}>❤️</button>)
                        : (<button onClick={handleFavorite}>🤍</button>)
                    }
                </div>
                <img src={image} alt={name} />
                <Link to={`/detail/${id}`}><h2>{name}</h2></Link>
                <h2>{species}</h2>
                <h2>{gender}</h2>
            </div>
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addFavorite: (character) => dispatch(actions.addFavorite(character)),
        deleteFavorite: (idChar) => dispatch(actions.deleteFavorite(idChar)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);