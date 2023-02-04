import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import FavoriteCard from "./FavoriteCard";
import * as actions from '../../redux/actions-creators.js';

import css from './favorites.module.css';

const Favorites = ( {myFavorites, getFavorites} ) => {

    const dispatch = useDispatch();

    const optionsFilterHandler = (event) => {
        const value = event.target.value;
        dispatch(actions.filterFavs(value));
    };

    const optionsOrderHandler = (event) => {
        const value = event.target.value;
        dispatch(actions.orderFavs(value));
    };

    useEffect(() => {
        getFavorites();
    }, []);

    return (
        <>
            <div>
                <select name="filter" onChange={optionsFilterHandler}>
                    <option value='all'>All</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Genderless'>Genderless</option>
                    <option value='unknown'>unknown</option>
                </select>
                <select name="order" onChange={optionsOrderHandler}>          
                    <option value='Ascendente'>Ascendente</option>
                    <option value='Descendente'>Descendente</option>
                </select>
            </div>

            <div className={css.containerCards}>                
                {
                    typeof myFavorites === 'string'  ? null :                     
                    myFavorites.length > 0 && myFavorites.map((char, idx) => {
                            return (
                            <FavoriteCard
                            key={idx}
                            id={char.id}
                            name={char.name}
                            species={char.species}
                            gender={char.gender}
                            image={char.image}
                            />)
                        })                    

                }
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
        getFavorites: () => dispatch(actions.getFavorites())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Favorites);