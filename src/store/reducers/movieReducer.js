import { movies } from "../../movies";

const initalState = [...movies];

export const movieActions = {
    setMovieList:"SET_MOVİE_LİST",
};

export const movieReducer = (state = initalState, action) => {
    switch (action.type) {
        case movieActions.setMovieList:
            return action.payload;
        

         default:
            return state;
    }
};