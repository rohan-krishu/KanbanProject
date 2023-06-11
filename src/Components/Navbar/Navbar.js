import * as React from 'react';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { RiQuestionLine } from 'react-icons/ri';
import { FaTrello } from 'react-icons/fa'
import { FaTh } from 'react-icons/fa'
import { MdBrightness6 } from 'react-icons/md'

import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import styles from './Navbar.module.css';

import { ImHome } from 'react-icons/im'

import { HiUsers } from 'react-icons/hi'

import {FiStar} from 'react-icons/fi'
import {SiPowerbi} from 'react-icons/si';
import {AiTwotoneThunderbolt} from 'react-icons/ai'
import {BiFilter} from 'react-icons/bi'
import {RiUserAddLine} from 'react-icons/ri'
import {BsThreeDots} from 'react-icons/bs'




const Search = styled('div')(({ theme }) => ({
    position: 'relative',

    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,

        transition: theme.transitions.create('width'),
        width: '100%',

        [theme.breakpoints.up('sm')]: {

            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));







export default function SearchAppBar() {
    return (

        
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar className={styles.Appbar} style={{ backgroundColor: 'rgb(22, 22, 22)' }}>
                    <Toolbar >
                        <FaTh />


                        <ImHome className={styles.home} />


                        {/* //SearchAppBar */}
                        <div className={styles.searchbar}>
                            <Search >
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                        </div>
                        <div className={styles.tag}>
                            <FaTrello />
                            <strong style={{ marginLeft: "4px" }}>Trello</strong>

                        </div>
                        <div className={styles.notification}>
                            <MdOutlineNotificationsNone />
                            <RiQuestionLine style={{ marginLeft: "6px" }} />
                            <MdBrightness6 style={{ marginLeft: "6px" }} />
                        </div>

                        <img className={styles.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9345jS1_3tkJK_gPIhK8tKcOiXy8XbNWi902Otr_6-Cb2uTQO-L5oDH1H-elFT-l_iI8&usqp=CAU" alt="userlogin" />
                    </Toolbar>
                </AppBar>
                
             </Box>
         
             <AppBar className={styles.transparentAppbar} style={{ backgroundColor: 'transparent' , marginTop : '3rem' , color:'white' }}>
        <Toolbar>
        <h4>Kanban</h4>
        <FiStar className={styles.star}/>

        <HiUsers  className={styles.users}/>
        <h5>Workspace visible</h5>

        <SiPowerbi className={styles.power}/>
        <h5>Power-Ups</h5>
        <AiTwotoneThunderbolt className={styles.Automation}/>
        <h5>Automation</h5>

        <BiFilter className={styles.filter}/>
        <h5>Filter</h5>
        <div className={styles.div}>
        <RiUserAddLine/>
        <h6 className={styles.share}>Share</h6>
        </div>
        <BsThreeDots className={styles.dots} />

        <img className={styles.img} src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt= "userImg"/>
        </Toolbar>
      </AppBar>
     
</div>
      


    );
}

