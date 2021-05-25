import React, {useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import {
    MenuItem,
    Popper,
    Grow,
    Paper,
    MenuList,
    ClickAwayListener
} from '@material-ui/core';

import { Link } from "react-router-dom";

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles((theme) => ({
    state: {
        backgroundColor: "red",
        color: "white",
        borderRadius:"15px",
        width: "max-content",
        padding: "2px 10px"
    },
    stateOpen: {
        backgroundColor: "green"
    },
    imgCard: {
        borderRadius: "10px"
    }
}))

const MenuCard = ({data}) => {
    const classes = useStyles();
    const [openMenu, setOpenMenu] = useState(false);
    const [anchorMenusMenu, setAnchorMenusMenu] = useState(null);

    //Menu Handlers
    const openMenusMenu = (event) => {
        setAnchorMenusMenu(event.currentTarget);
        setOpenMenu(true)
    }

    const closeRestaurantMenu = () => {
        setAnchorMenusMenu(null);
        setOpenMenu(false)
    }

    return (  
        <div className="lg:mt-4 lg:w-72">
            <div
                className="transition transform duration-200 ease-in-out 
                p-6 pt-0 bg-white rounded-xl shadow-md space-x-1 
                hover:shadow-xl cursor-pointer
                ">
                <span className="grid flex flex-col space-y-2">
                    <span className="transition duration-75 ease-in-out justify-self-end p-1 m-1 mr-0 hover:bg-gray-100 rounded-full">
                        <MoreHorizIcon className="pr-0" 
                        onClick={openMenusMenu}
                        onMouseEnter={openMenusMenu} /> 

                        <Popper open={openMenu} anchorEl={anchorMenusMenu} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                            <Paper>
                                <ClickAwayListener onClickAway={closeRestaurantMenu}>
                                <MenuList id="menu-list-grow" onMouseLeave={closeRestaurantMenu}>
                                    <MenuItem 
                                        onClick={closeRestaurantMenu} 
                                        component={Link}
                                        to="/menus"
                                        >Menus</MenuItem>
                                    <MenuItem onClick={closeRestaurantMenu}>Editar</MenuItem>
                                    <MenuItem onClick={closeRestaurantMenu}>Cerrar</MenuItem>
                                </MenuList>
                                </ClickAwayListener>
                            </Paper>
                            </Grow>
                        )}
                        </Popper>
                    </span>
                    <img className={clsx(
                        classes.imgCard,
                    )} src='https://picsum.photos/400/300 '
                    alt="rest-img"
                    />
                    <div className="text-2xl font-medium text-black">{data.title}</div>
                    <p className="text-gray-500" style={{marginTop: "0"}}>{data.noItems} platillos</p>
                    <p className="text-gray-500" style={{marginTop: "0"}}>{data.hours}</p>
                    <div className={clsx(
                        classes.state, {
                        [classes.stateOpen]: data.active,
                    })}>
                        {data.active? "Activo" : "Inactivo"}
                    </div>

                </span>
            </div>
        </div>
    );
}
 
export default MenuCard;