import { connect, useSelector } from "react-redux";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import * as actions from '../../../redux/actions-creators.js';

import css from './searchBar.module.css';
import searchIco from '../../../img/icons/search.svg';

const SearchBar = ( {getCharById} ) => {
    const allCharacters = useSelector((state) => state.allCharacters);
    const location = useLocation();
    const [ idInput, setIdInput ] = useState('');

    const inputHandler = (event) => {
        const id = event.target.value;
        setIdInput(id)
    };

    const searchHandler = (event) => {
        event.preventDefault();
        if (Number(idInput) && idInput > 0 && idInput <= 826) {       
            getCharById(idInput);              
        } else {
            console.log('ingrese un id válido');
        }
        setIdInput('');
    };

    

    return (
        <>
            <div className={css.container}>
                {
                location.pathname === '/characters' && (
                <div className={css.container}>
                    <div className={css.contInput}>
                        <input className={css.input} value={idInput} type='search' onChange={inputHandler} placeholder='id..' />
                        <img className={css.searchIco} src={searchIco} onClick={searchHandler}></img>
                    </div>
                    {/* <div className={css.contBtn}>
                        <a className={css.btn} onClick={searchHandler}>Search</a>
                    </div> */}
                </div>)
                }





                {/* <input type='text' value={idInput} onChange={inputHandler}></input>
                <a onClick={searchHandler} href="search">Search</a> */}
            </div>
        </>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCharById: (idChar) => dispatch(actions.getCharById(idChar))
    }
};

export default connect(null, mapDispatchToProps)(SearchBar);