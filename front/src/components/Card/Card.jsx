import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from '../../redux/actions-creators.js';

import css from './card.module.css';
import icoFav from '../../img/icons/fav.svg';
import icoDisFav from '../../img/icons/disFav.svg';
import icoClose from '../../img/icons/x.svg';

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
        if (myFavorites.length > 0 && typeof myFavorites !== 'string'){
            myFavorites.forEach((char) => {
                if(char.id === id) setIsFav(true);
            });
        };
        
    }, []);
    

    return(
        <>
            <div className={css.container}>
                <div>                    
                    {
                        isFav 
                        ? (<img src={icoDisFav} onClick={handleFavorite} className={`${css.card__iconsFavs} ${css.card__icoDisFav}`} ></img>)
                        : (<img src={icoFav} onClick={handleFavorite} className={`${css.card__iconsFavs} ${css.card__icoFav}`}></img>)
                    }
                    <div className={css.card__contIconClose}>                        
                        <img src={icoClose} onClick={onClose} className={css.card__iconClose} ></img>
                    </div>
                </div>
                <img src={image} alt={name} className={css.card__img} />
                <Link to={`/detail/${id}`} className={css.card__linkNam}><h2 className={css.card__name}>{name}</h2></Link>
                <div className={css.card__speciesGen}>                    
                    <h2>{species}</h2>
                    <h2>{gender}</h2>
                </div>
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