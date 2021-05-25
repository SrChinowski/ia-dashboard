import {React, useState} from 'react'
import { Grid,
    Tabs, 
    Tab,
    Divider
} from "@material-ui/core";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import GeneralConfig from './generalConfig';
import SecurityConfig from './securityConfig';
import LicenseCinfig from './licenseConfig';
const Configs = () => {

    const [tabValue, settabValue] = useState(0);
    
    const handleTabChange = (event, newValue) => {
    settabValue(newValue);
    };
    
    // const width = window.innerWidth;
    // const breakpoint = 620;

    return ( 
        <Grid xs={12} sm={12} md={12}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <div class="text-3xl mb-3 font-medium" style={{color: "#5F5F5F"}}>Configuracion</div>
                <Router>
                <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    scrollButtons="on"
                    >
                    <Tab
                        label="General"
                        component={Link} 
                        to="/config"
                    />
                    <Tab
                        label="Licencia"
                        component={Link} 
                        to="/config/license"
                    />
                    <Tab
                        label="Notificaciones"
                        // onClick={}
                    />
                    <Tab
                        label="Seguridad"
                        component={Link} 
                        to="/config/security"
                    />
                    </Tabs>
                <Divider style={{ width: "100%" }}></Divider>

                <Switch>

                    <Route exact path="/config">
                        <GeneralConfig></GeneralConfig>
                    </Route>

                    <Route path="/config/security">
                        <SecurityConfig></SecurityConfig>
                    </Route>

                    <Route path="/config/license">
                        <LicenseCinfig></LicenseCinfig>
                    </Route>

                </Switch>
                </Router>
            </Grid>
        </Grid>
     );
}
 
export default Configs;