import React from 'react';
import CONSTANTS from 'constants';
const {ACTIONS} = CONSTANTS;

const AppReducer = (state, action) => {
    switch(action.type){
        case ACTIONS.MENU_OPEN:{
            return {
                ...state,
                isMenuOpen: true
            }
        }
        case ACTIONS.MENU_CLOSE:{
            return {
                ...state,
                isMenuOpen: false
            }
        }
        default: return state;
    }
}

export default AppReducer;
