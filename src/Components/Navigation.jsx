import React from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import image3 from "../image3.png";
import {FiSearch} from "react-icons/fi"
import {IoNotificationsCircleOutline} from "react-icons/io5"
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
const useStyles = makeStyles({
    rootnav:{
        borderBottom:'.1rem solid #e8e8e8',
        padding:'1rem',
        display:'flex',
    },
    logo:{
        width:'10%',
    },
    // searchIcon:{
    //     margin:"1rem -1.5rem"
    // },
    search:{
        width:"25%",
        borderRadius:"1.5rem",
        paddingLeft:"2rem",
        marginLeft:"5.2rem", 
        backgroundColor:"#e0e0e0",
        color:'gray',
        outline:'none',
        border:"none",
        fontSize:".8rem",

    },
    ulist:{
        display: "flex",
    },
    llist:{
        listStyle:"none",
        paddingRight:"1rem",
        fontWeight:"600",
        color:"#a5a5a5",
        fontSize:'.8rem',
    },
    notification:{
        listStyle:"none",
        paddingRight:"1rem",
        fontWeight:"600",
        color:"#a5a5a5",
        fontSize:'2rem',
        marginTop:"-.5rem",
    },
    llistActive:{
        listStyle:"none",
        paddingRight:"1rem",
        fontWeight:"600",
        color:"#467cce",
        fontSize:'.8rem',
    },
    fbtn:{
        background: 'white',
        color: ' #4cb5ee ',
        borderRadius:'1rem',
        width:"11%",
        padding:'0rem',
        fontWeight:'600',
        border:".1rem solid #4cb5ee  ",
        marginTop:"-.5rem",
    },
    avatar:{
        borderRadius:'50%',
        width:'70%',
        marginLeft:".2rem",
        
    },
})
const Navigation = () => {
    const classes= useStyles();
    return (
        <Container maxWidth="lg"className={classes.rootnav} >
            <img src={image3} alt="logo" className={classes.logo} />
            {/* <FiSearch className={classes.searchIcon}/> */}
            <input type="search" placeholder ="Search items, collections, creators" className={classes.search} />
            <ul className={classes.ulist}>
                <li className={classes.llist}>Explore</li>
                <li className={classes.llistActive}>My items</li>
                <li className={classes.llist}>Following</li>
                <li className={classes.llist}>Activity</li>
                <li className={classes.llist}>How it Works</li>
                <li className={classes.llist}>Community</li>
                <IoNotificationsCircleOutline  className={classes.notification}/>
                <Button size="small" className={classes.fbtn}>0 Token </Button>
               
            </ul>
            <div className="avatar_nav">
            <Avatar className={classes.avatar}></Avatar>
            </div>
            
            
        </Container>
    )
}

export default Navigation;
