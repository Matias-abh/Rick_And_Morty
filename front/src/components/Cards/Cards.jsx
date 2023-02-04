import { connect } from "react-redux";
import * as actions from '../../redux/actions-creators.js';
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";

import css from './cards.module.css';

const Cards = ( {infoPages, allCharacters, getAllChars} ) => {

    const getAllCharacters = () => {
        getAllChars();
    };

    const prevPage = () => {
        getAllChars(infoPages.prev);
    };

    const nextPage = () => {
        getAllChars(infoPages.next);    
    };
    
    return (
        <>
            <div>
                <ul className={css.contButtons}>                    
                    <li><button onClick={getAllCharacters} className={css.contButtons__btns} >All characters</button></li>
                    {/* <li><button className={css.contButtons__btns}>Search by id</button></li> */}
                </ul>
                <Pagination
                    prev={infoPages.prev}
                    next={infoPages.next}
                    prevPage={prevPage}
                    nextPage={nextPage}
                 />
            </div>
            <div className={css.containerCards}>
                
                {
                    allCharacters?.map((char, idx) => {
                        return (
                        <Card
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
            <div>
                <Pagination
                    prev={infoPages.prev}
                    next={infoPages.next}
                    prevPage={prevPage}
                    nextPage={nextPage}
                 />
            </div>
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        allCharacters: state.allCharacters,
        infoPages: state.infoPages,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllChars: (url) => dispatch(actions.getAllChars(url)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);



// name: Nombre
// species: Especie
// gender: Género
// image: Imagen
// onClose: La función que se va a ejecutar cuando el usuario haga click en el botón de cerrar.