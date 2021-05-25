import {
    SET_USERINFO
} from '../types';

const initialState = {

    personalInfo: {
        name: "",
        mail: "",
        phone: "",
        img: ""
    },
    bussinessInfo: {
        plan: "",
        active: false, 
    },
    workInfo: {
        role: "",
    },
    error: null,
    loading: false,
}

export default function foo(state = initialState, action){
    switch(action.type){

        case SET_USERINFO:
            return action.payload;

        default: return state;
    }
    // eslint-disable-next-line
}