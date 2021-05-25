import axios from "axios";
import { API_URL } from "../../constants/developmentConstants"

import {
    GET_CLIENTINFO
} from '../types';

export function getClientsInfo(){


    return async (dispatch) => {
        try {
          const { data } = await axios.get(`${API_URL}/clients/`);
        //   console.log("getClientsInfo" ,data);
          dispatch({ type: GET_CLIENTINFO, payload: data });
        } catch (error) {
          console.log(error);
        }
    }
}