import React from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root:{
        margin:".5rem -1.5rem",
        width:"60%",
    },
    gridTypoinnerR:{
        fontSize:'.7rem',
        color:'#afafaf',
        fontWeight:'700',
        margin:'0rem',
        padding:'.5rem 0rem',
    },
    input:{
        fontSize:'.8rem',
        fontWeight:'700',
        display: 'flex',
        flexWrap:'wrap',
        marginTop:'1rem',
    },
    heading:{
        color:"#4cb5ee ",
    }
})
const Component = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="md"className={classes.root} >
            <div>
            <h4 className={classes.heading}>Unlock Once Purchased</h4>
            </div>
            <div>
            <Typography id="modal-modal-description" className={classes.gridTypoinnerR}>
                        Content will be unlocked after succesful transaction

                </Typography>
                <Input  className={classes.input}  placeholder="Digital key code to redeem or link to a file...  " />
                <Typography id="modal-modal-description" className={classes.gridTypoinnerR}>
                       Markdown is supported 

                </Typography>
                <Typography id="modal-modal-description" className={classes.gridTypoinnerR}>
                        Unicode symbols are NOT supported

                </Typography>
            </div>
          
        </Container>
    )
}

export default Component;
