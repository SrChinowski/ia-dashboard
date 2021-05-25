import React, {useState} from 'react';
import {useSelector} from 'react-redux'

import {
    Grid,
    Divider,
    IconButton,
    Tooltip,
} from '@material-ui/core';

import MaterialTable from 'material-table';
import Alert from '@material-ui/lab/Alert';
import SettingsIcon from '@material-ui/icons/Settings';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import axios from 'axios';


const Restaurants = () => {
    const { clients } = useSelector((state) => state);
    const [validAlert, setvalidAlert] = useState(false);
    const [invalidAlert, setinvalidAlert] = useState(false);

    const [currentClient, setcurrentClient] = useState({
        "id": 0,
        "status": ""
    });

    const sendToServer = async (rowData) => {
        setvalidAlert(false)
        setinvalidAlert(false)
        
        var config = {
            method: 'post',
            url: 'http://127.0.0.1:5000/prediction',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : JSON.stringify({"datos":[
                {
                    "ID": rowData.ID,
                    "Customer_Age": rowData.Customer_Age,
                    "Gender": rowData.Gender,
                    "Dependent_count": rowData.Dependent_count,
                    "Education_Level": rowData.Education_Level,
                    "Marital_Status": rowData.Marital_Status,
                    "Income_Category": rowData.Income_Category,
                    "Card_Category": rowData.Card_Category,
                    "Months_on_book": rowData.Months_on_book,
                    "Total_Relationship_Count": rowData.Total_Relationship_Count,
                    "Months_Inactive_12_mon": rowData.Months_Inactive_12_mon,
                    "Contacts_Count_12_mon": rowData.Contacts_Count_12_mon,
                    "Credit_Limit": rowData.Credit_Limit,
                    "Total_Revolving_Bal": rowData.Total_Revolving_Bal,
                    "Avg_Open_To_Buy": rowData.Avg_Open_To_Buy,
                    "Total_Amt_Chng_Q4_Q1": rowData.Total_Amt_Chng_Q4_Q1,
                    "Total_Trans_Amt": rowData.Total_Trans_Amt,
                    "Total_Trans_Ct": rowData.Total_Trans_Ct,
                    "Total_Ct_Chng_Q4_Q1": rowData.Total_Ct_Chng_Q4_Q1,
                    "Avg_Utilization_Ratio": rowData.Avg_Utilization_Ratio
                }
            ]})
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            if(response.data.datos[0].status=== "Attrited Customer"){
                setinvalidAlert(true);
                setcurrentClient({
                    "id": rowData.ID,
                    "status": "Attrited Customer"
                })
            }

            if(response.data.datos[0].status=== "Existing Customer"){
                setvalidAlert(true)
                setcurrentClient({
                    "id": rowData.ID,
                    "status": "Existing Customer"
                })
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
    return ( 
        <Grid xs={12} sm={12} md={12}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className="flex justify-between">
                    <div className="text-3xl mb-3 font-medium" style={{color: "#5F5F5F"}}>Cartera de Clientes</div>
                    
                    <div className="flex justify-center align-center">
                        <Tooltip title="Agregar Cliente"><IconButton><ControlPointIcon/> </IconButton></Tooltip>
                        <Tooltip title="Configuraciones"><IconButton><SettingsIcon/> </IconButton></Tooltip>
                    </div>

                </div>
                <Divider style={{ width: "100%" }}></Divider>
                <br></br>
                <MaterialTable
                    title="Clientes"
                    columns={[
                        { title: 'Id', field: 'ID' },
                        { title: 'Customer_Age', field: 'Customer_Age', type: 'numeric' },
                        { title: 'Gender', field: 'Gender' },
                        { title: 'Education_Level', field: 'Education_Level' },
                        { title: 'Income_Category', field: 'Income_Category' },
                        { title: 'Card_Category', field: 'Card_Category' },
                        { title: 'Months_on_book', field: 'Months_on_book' },
                        { title: 'Months_Inactive_12_mon', field: 'Months_Inactive_12_mon' },
                        { title: 'Credit_Limit', field: 'Credit_Limit' },
                        { title: 'Avg_Utilization_Ratio', field: 'Avg_Utilization_Ratio' },
                    ]}
                    data={clients.length > 1 ? clients : []}        
                    actions={[
                        {
                        icon: 'save',
                        tooltip: 'Save User',
                        onClick: (event, rowData) => {sendToServer(rowData)}
                        }
                    ]}
                />
                <br></br>

                <Alert severity="success" style={validAlert ? {display: "flex"} : {display: "none"} }>El cliente <b>{currentClient.id}</b> tiene un estado favorable. </Alert>
                <Alert severity="error" style={invalidAlert ? {display: "flex"} : {display: "none"} }>El cliente <b>{currentClient.id}</b> tiene un estado critico. </Alert>

                {/* <br></br> */}

               </Grid>
        </Grid>
     );
}
 
export default Restaurants;