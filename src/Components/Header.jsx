import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {GrFormClose} from "react-icons/gr"
import image from "../image.png"
const useStyles = makeStyles({
    rootContainer:{
        display:'flex',
        justifyContent:'center',
        margin:'.5rem auto',


    },
    btn: {
      background: 'linear-gradient(180deg, #2d80ad 90%, #397291 30%)',
      color: 'white',
      fontSize:'8px',
      letterSpacing:'.1rem',
      padding:'.5rem',
      borderRadius:'1rem',
      width:'40%',
      margin:'.3rem auto',
      fontWeight:'600',

    },
    grid:{
        display: 'flex',
        flexDirection:'column',
        
    },
    gridTypo:{
        fontSize:'.9rem',
        fontWeight:'600',
        margin:'2rem 0rem',
    },
    gridTypoinner:{
        fontSize:'.7rem',
        color:'#949494',
        textAlign:'center',
        margin:'1.5rem auto'
    },
    cardContent:{
        display: 'flex',
        flexDirection:'column',
        fontSize:'.8rem',
        height: '180px',
        justifyContent:'center',
        border:'.09rem dashed #dbdbd9 ',
        borderRadius:'.5rem'
    },
    cardContentSecond:{
        height:'300px',
        border:'.09rem dashed #dbdbd9 ',
        borderRadius:'.5rem',
        border:'.09rem solid #dbdbd9 ',
    }
    // innerGrid:{

    // }
  });
  
const Header = () => {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth="md" className={classes.rootContainer}>

                <Grid container spacing={1}  >
                    <Grid item sm={10}>
                    <Typography className={classes.gridTypo} >
                            Upload File
                    </Typography>
                    <Card sx={{ minWidth: 275  }} className={classes.cardContent }>
                        <CardContent  >
                            <Typography className={classes.gridTypoinner}  >
                                JPG, PNG,GIF,MP4 or MP3 Max 100mb.
                                
                            </Typography>
                            <Typography className={classes.gridTypoinner} >(620 * 620 recommended)</Typography>
                        </CardContent>
                            <Button size="small" className={classes.btn}>Choose File</Button>
                        </Card>
                    </Grid>
                    <Grid item sm={10}>
                    <Typography className={classes.gridTypo} >
                            Upload Cover
                    </Typography>
                    <Card sx={{ minWidth: 275 }} className={classes.cardContent}>
                        <CardContent  >
                            <Typography className={classes.gridTypoinner}  >
                                JPG, PNG,GIF,MP4 or MP3 Max 100mb.
                            </Typography>
                        </CardContent>
                            <Button size="small" className={classes.btn}>Choose File</Button>
                        </Card>
                        <Typography className={classes.gridTypoinner}  >
                               Please add cover image to your media file
                                
                            </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2}  >
                <Grid item xs={8}>
                    <Typography className={classes.gridTypo} >
                            Preview
                    </Typography>
                    <Card sx={{ minWidth: 275 }} className={classes.cardContentSecond}>
                        <CardContent  >
                            <Typography className={classes.gridTypoinner}  >
                                Upload File to preview your brand new NFT
                                
                            </Typography>
                        </CardContent>
                        </Card>

                    </Grid>
                </Grid> 

                </Container>
                <div className="image_c">
                <img src={image} alt ="image" />
                </div>
           
        </>
                
    )
}

export default Header;
