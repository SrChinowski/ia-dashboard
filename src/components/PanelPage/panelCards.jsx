import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../../index.css';

import FastfoodIcon from '@material-ui/icons/Fastfood';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import TimerIcon from '@material-ui/icons/Timer';

const useStyles = makeStyles(() => ({
    icon: {
        fontSize: "50px",
        marginTop: "5px",
        color: "rgba(0, 0, 0, 0.54)",
    },
}));


const PanelCards = ({data}) => {

    const classes = useStyles();

    return ( 
        <div className="lg:mt-4 lg:w-72 ">
            <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 p-6 bg-white rounded-xl hover:shadow-lg shadow-md space-x-1">
                <span className="flex  space-y-2">
                    <div className="flex-shrink-0 ">
                        {
                            data.icon === "FastfoodIcon" ? <FastfoodIcon className={classes.icon} /> :
                            data.icon === "AttachMoneyIcon" ? <AttachMoneyIcon className={classes.icon} /> :
                            data.icon === "PersonPinIcon" ? <PersonPinIcon className={classes.icon} /> :
                            data.icon === "TimerIcon" ? <TimerIcon className={classes.icon} /> :
                            <FastfoodIcon className={classes.icon}/>

                        }
                    </div>

                    <div className="ml-5">
                        <div className="text-2xl font-medium text-black">{data.data}</div>
                        <p className="text-gray-500">{data.title}</p>
                    </div>
                </span>
                <span>
                    <div className="relative pt-1">
                        <div className={`overflow-hidden h-2 text-xs flex rounded bg-${data.color}-200`}>
                            <div style={{width: data.value}} className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${data.color}-500`}></div>
                        </div>
                    </div>
                </span>
            </div>
        </div>
     );
}
 
export default PanelCards;