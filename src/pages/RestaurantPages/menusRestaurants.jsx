import React from 'react'
import MenuCard from '../../components/RestaurantPage/MenuCard';

import {
    Grid,
    Divider,
    IconButton,
    Tooltip,
    Breadcrumbs,
    Typography
} from '@material-ui/core';
import { Link } from "react-router-dom";

import SettingsIcon from '@material-ui/icons/Settings';
import ControlPointIcon from '@material-ui/icons/ControlPoint';

const menus = [
    {
        resImg: "FastfoodIcon",
        title: "Alitas",
        noItems: 6,
        hours: "De 12:00 hrs a 23:00",
        active: true,
    },
    {
        resImg: "FastfoodIcon",
        title: "Desayunos",
        noItems: 12,
        hours: "De 8:00 hrs a 12:00",
        active: false,
    },
]

const MenusRestaurants = () => {
    return ( 
        <Grid xs={12} sm={12} md={12}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className="flex justify-between">
                    <div className="text-3xl mb-3 font-medium" style={{color: "#5F5F5F"}}>
                        Menus
                        <Breadcrumbs aria-label="breadcrumb">
                            <Typography color="inherit" component={Link} to="/restaurants">Restaurantes</Typography>
                            <Typography color="inherit">Menus</Typography>
                        </Breadcrumbs>
                    </div>
                    
                    <div>
                        <Tooltip title="Agregar Restaurante"><IconButton><ControlPointIcon/> </IconButton></Tooltip>
                        <Tooltip title="Configuraciones"><IconButton><SettingsIcon/> </IconButton></Tooltip>
                    </div>

                </div>
                <Divider style={{ width: "100%" }}></Divider>

                <section className="lg:flex lg:flex-wrap lg:space-x-8 space-y-3 mb-3">
                    {
                        menus.map(
                            data => <MenuCard data={data}></MenuCard>
                        )
                    }
                </section>

               </Grid>
        </Grid>
     );
}
 
export default MenusRestaurants;