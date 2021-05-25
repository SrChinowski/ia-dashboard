import {
    GET_CLIENTINFO
} from '../types';

const initialState = {
    ID: 0,
    Customer_Age: 0,
    Gender: "",
    Dependent_count: 0,
    Education_Level: "",
    Marital_Status: "",
    Income_Category: "",
    Card_Category: "",
    Months_on_book: 0,
    Total_Relationship_Count: 0,
    Months_Inactive_12_mon: 0,
    Contacts_Count_12_mon: 0,
    Credit_Limit: 0	,
    Total_Revolving_Bal: 0,
    Avg_Open_To_Buy: 0,
    Total_Amt_Chng_Q4_Q1: 0 ,
    Total_Trans_Amt: 0,
    Total_Trans_Ct: 0,
    Total_Ct_Chng_Q4_Q1: 0,
    Avg_Utilization_Ratio: 0
}

export default function foo(state = initialState, action){
    switch(action.type){

        case GET_CLIENTINFO:
            return action.payload;

        default: return state;
    }
    // eslint-disable-next-line
}