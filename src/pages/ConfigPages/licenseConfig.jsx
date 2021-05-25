import React, {useState} from 'react'  
import { Button } from '@material-ui/core';

const LicenseCinfig = () => {

    const [nameState, setnameState] = useState("andres");

    const handleDrawerOpen = () => {
        nameState === "andres" ? setnameState("serch") : setnameState("andres")
    };

    return ( 
        <div>
            Huevos {nameState} <br></br>
            <Button variant="contained" color="secondary" onClick={handleDrawerOpen}>Cambiar Huevos</Button>
        </div>
     );
}
 
export default LicenseCinfig;