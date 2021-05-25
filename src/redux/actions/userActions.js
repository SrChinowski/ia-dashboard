import axios from "axios";
import { API_URL } from "../../constants/developmentConstants"

import {
    SET_USERINFO
} from '../types';

export function getUserInfo(){

    const userTest = "auth0-171048";

    return async (dispatch) => {
        try {
          const { data } = await axios.get(`${API_URL}/users/${userTest}`);
          console.log("getUserInfo" ,data);
          dispatch({ type: SET_USERINFO, payload: data });
        } catch (error) {
          console.log(error);
        }
    }
}