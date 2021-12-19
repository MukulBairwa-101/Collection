import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {TiSocialFacebook} from "react-icons/ti"
import {FiLinkedin,FiTwitter} from "react-icons/fi"
import {BsArrowRightShort} from "react-icons/bs"
const useStyles = makeStyles({
    footerContainer:{
    //    backgroundColor:'#499bee',
       width:'100%',
       height: '600px',
       color:'white',
       display: 'flex',
       padding: '1.5rem',
       backgroundImage: 'linear-gradient(315deg, #499bee 0%, #499bee 74%)',
       '&:before':{
        content: "",
        position: "absolute",
        bottom: '0',
        left: '0',
        width: "100%",
        height: "250px",
        background: "url(https://media.geeksforgeeks.org/wp-content/uploads/20200326181026/wave3.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
       }
    },
    // .pattern {
    //     position: relative;
    //     background-color: #3bb78f;
    //     background-image: linear-gradient(315deg,
    //             #3bb78f 0%, #0bab64 74%);
    // }
    footertypo:{
        fontSize:'.9rem',
    },
    signupbtn:{
        padding:'.6rem',
        backgroundColor:'white',
        borderRadius:'.5rem',
        color:'#499bee',
        fontWeight:'600',
        width:'20%',
        marginLeft:'.5rem',
        "&:hover":{
            backgroundColor:"white",
        }
    }
   

    

})
const Footer = () => {
    const classes = useStyles();
    return (
    <Container maxWidth="lg" className={classes.footerContainer}>
        
            <Grid item sm={8}>
                <div className="social">
                    <h4>FOLLOW US </h4>
                    <div className="social_links">
                        <TiSocialFacebook className="link" />
                        <FiLinkedin className="link" />
                        <FiTwitter className="link" />
                    </div>
                </div>
                <div className="headers_f">
                    <h4>Quick Links</h4>
                    <h4>Community</h4>
                </div>
                <section >
                    <div className="link-q">
                            <a href="#">Explore</a>
                            <a href="#">How it works</a>
                            <a href="#">Support</a>
                            <a href="#">Become a partner</a>
                    </div>
                    <div className="link-c">
                            <a href="#">RARI Token</a>
                            <a href="#">Discussion</a>
                            <a href="#">Voting</a>
                            <a href="#">Suggest Feature</a>
                    </div>
                    <div className="empty_h">
                            <a href="#">Help Center</a>
                            <a href="#">Terms and Conditions</a>
                            <a href="#">Privacy Policy</a>
                    </div>
                </section>
                
                
                
            </Grid>
            <Grid item sm={8}>
            <h4>Stay In The Loop</h4>
            <Typography className={classes.footertypo}  >
                join our mailing list to stay in the loop with our newest feature ,nft drops,and tips and tricks for navigating fungy .
                            
            </Typography>
            <div >
            <input type="email" placeholder="Your Email Address" className="footer_input_1" />
            <Button className={classes.signupbtn}>Sign Up</Button>
            </div>
            <h4>KEEP IN TOUCH</h4>
           <div className="other_input_holder">
            <input type="text" placeholder="Your Name" className="footer_input_1" />
            <input type="email" placeholder=" E-mail" className="footer_input_1" />
            <input type="text" placeholder="Leave Your Message" className="footer_input_1 footer_input_1_2" />
            <Button className={classes.signupbtn}>Send <BsArrowRightShort /> </Button>
           </div>

            </Grid>
            
            
       
    </Container>
    )
}

export default Footer;
