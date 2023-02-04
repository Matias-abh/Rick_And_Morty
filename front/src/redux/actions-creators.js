import { GET_ALL_CHARS, GET_CHAR_BY_ID, CLOSE_CARD, ADD_FAVORITE, DELETE_FAVORITE, GET_FAVORITES, FILTER, ORDER } from "./action-types";
import axios from "axios";



const apiUrl = 'http://localhost:3001/rickandmorty/character';

export const getAllChars = (url = apiUrl) => {
    
        return async (dispatch) => {
            const response = await axios(url)
            const data = await response.data;
            return dispatch({
                type: GET_ALL_CHARS,
                payload: data,
            });
        };   

};


export const getCharById = (idChar) => {
    const apiUrl = 'http://localhost:3001/rickandmorty/character';


        return async (dispatch) => {
            const response = await axios(`${apiUrl}/${idChar}`)
            const data = await response.data;
            return dispatch({
                type: GET_CHAR_BY_ID,
                payload: data,
            });
        };

};





export const closeCard = (idChar) => {
    return {
        type: CLOSE_CARD,
        payload: idChar,
    };
};

export const addFavorite = (character) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`http://localhost:3001/rickandmorty/fav/`, character)
            const data = await response.data;
            dispatch({
                type: ADD_FAVORITE,
                payload: data,
            })
        } catch (error) {
            console.log(error.message)
        }
    };   
};

export const deleteFavorite = (idChar) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`http://localhost:3001/rickandmorty/fav/${idChar}`)
            const data = await response.data;
            dispatch({
                type: DELETE_FAVORITE,
                payload: idChar,
            })
        } catch (error) {
            console.log(error.message)
        }
    };    
};


export const getFavorites = () => {

    return async (dispatch) => {
        try {
            const response = await axios(`http://localhost:3001/rickandmorty/fav/`)
            const data = await response.data;
            dispatch({
                type: GET_FAVORITES,
                payload: data,
            });
        } catch (error) {
            console.log(error.message)
        };
    };
};

export const filterFavs = (gender) => {
    return {
        type: FILTER,
        payload: gender,
    };
};

export const orderFavs = (order) => {
    return {
        type: ORDER,
        payload: order,
    };
};