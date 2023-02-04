import { GET_ALL_CHARS, GET_CHAR_BY_ID, CLOSE_CARD, ADD_FAVORITE, DELETE_FAVORITE, GET_FAVORITES, FILTER, ORDER } from "./action-types";

const initialState = {
    allCharacters: [],
    allCharactersCopy: [],
    myFavorites: [],
    myFavsCopy: [],
    infoPages: {},
};

const rootReducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case GET_ALL_CHARS:

            return {
                ...state,
                allCharacters: payload.results,
                infoPages: payload.info,
        };
        
        case GET_CHAR_BY_ID:
                state.allCharacters = state.allCharactersCopy;
                state.allCharactersCopy.push(payload);                  
            return {
                ...state,
                allCharacters: [ ...state.allCharacters],
        };

        case CLOSE_CARD:
            return {
                ...state,
                allCharacters: state.allCharacters.filter((char) => char.id !== payload),
                myFavorites: state.myFavorites.filter((char) => char.id !== payload),
                myFavsCopy: state.myFavsCopy.filter((char) => char.id !== payload),
            };

        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: payload,
                myFavsCopy: payload,
            };


        case DELETE_FAVORITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((char) => char.id !== payload),
                myFavsCopy: state.myFavsCopy.filter((char) => char.id !== payload),
            };
        case GET_FAVORITES:
            return {
                ...state,
                myFavorites: payload,
            }

        case FILTER:
            if (payload === 'all') {
                return {
                    ...state,
                    myFavorites: [ ...state.myFavsCopy],
                };
            }
            return {
                ...state,
                myFavorites: state.myFavsCopy.filter((char) => char.gender === payload),
            }

        case ORDER:
            if (payload === 'Ascendente') {
                return {
                    ...state,
                    myFavorites: [ ...state.myFavorites ].sort((a, b) => a.id - b.id)
                };
            };
            if (payload === 'Descendente') {
                return {
                    ...state,
                    myFavorites: [ ...state.myFavorites ].sort((a, b) => b.id - a.id)
                };
            };

        default:
            return { ...state };
    };
};

export default rootReducer;