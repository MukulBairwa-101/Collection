import React ,{useState}from 'react'
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {MdAddCircle} from "react-icons/md"
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import {AiOutlineCloseCircle} from "react-icons/ai" 
import image1 from "../image1.png"
import Component from './Component';
const useStyles = makeStyles({
    rootContainerModal:{
        padding:'.5rem',
        display: 'flex',
        flexDirection:'column',
        
    },
    rootContainerModalF:{
        marginLeft:'-1rem',
    },
    fbtn:{
        background: 'white',
        color: ' #467cce',
        fontSize:'13px',
        padding:'.3rem',
        borderRadius:'1rem',
        width:'50%',
        marginLeft:'10rem',
        marginTop:'1.5rem',
        fontWeight:'600',
        border:".1rem solid #467cce "
    },
    gridTypo:{
        fontSize:'1rem',
        fontWeight:'600'

    },
    extbtn:{
        background: 'linear-gradient(180deg, #4e8ad8 90%, #467cce 30%)',
        boxShadow: '0 3px 5px 2px #eeecec4c',
        color: 'white',
        fontSize:'13px',
        padding:'.5rem',
        borderRadius:'1rem',
        width:'35%',
        margin:'1rem 2rem',
        fontWeight:'600',
    },
    btn: {
        background: 'linear-gradient(180deg, #4e8ad8 90%, #467cce 30%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        fontSize:'10px',
        padding:'.3rem',
        borderRadius:'1rem',
        width:'50%',
        margin:'1rem 2rem',
        fontWeight:'600',
  
      },
    modalSBtn:{
        background: 'linear-gradient(180deg, #4e8ad8 90%, #467cce 30%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        fontSize:'13px',
        padding:'.3rem',
        borderRadius:'1rem',
        width:'70%',
        margin:'1rem auto',
        fontWeight:'600',
    }  ,
      gridTypoinnerspan:{
        fontSize:'.7rem',
        color:'#949494',
    },
    img:{
        width:'18%',
    },
    creBtn:{
        width:'50%',
        fontSize:'2rem'
    },
    innergridItem:{
        borderRadius:'.8rem',
        border:'.09rem solid #cccccc',
        textAlign:'center',
        margin:'.5rem',
        cursor: 'pointer',
        boxShadow:'.1rem .2rem .9rem #cccccc '
    },
    outergrid:{
        marginTop:'1rem '
    },
    // outergridtimed:{
    //     margin:'0rem '
    // },
    modalstyle:{
        margin:'0rem auto',
        width:'25%',
        overflowY:'scroll',


    },

    box:{
        backgroundColor:'white',
        width:'100%',
        borderRadius:'.5rem',
        border:'none',
        outline:'none',
        
    },
    header:{
        color:'#5ac8f7',
        fontWeight:'700',
        marginLeft:'1rem',

    },
    headerData:{
        display: 'flex',
        width: '100%',
        justifyContent:'space-between',  
        textAlign:'center',
        margin:'.5rem auto'
    },
    gridTypoinner:{
        fontSize:'.7rem',
        color:'#afafaf',
        textAlign:'center',
        marginTop:'-1rem',
        fontWeight:'700',

    },
    gridTypoinnerR:{
        fontSize:'.7rem',
        color:'#afafaf',
        fontWeight:'700',
        margin:'.3rem',
        padding:'.8rem 0rem',
    },
    avatar:{
        borderRadius:'50%',
        width:'30%',
        height:'50%',
    },
    input:{
        fontSize:'.8rem',
        fontWeight:'700',
        display: 'flex',
        flexWrap:'wrap',
        padding:'.3rem',
    },
    innergridItemtimed:{
        width:'70%',
    }

  });

const Collection = () => {
    const classes = useStyles();
    const[open,setOpen]= useState(false);
    const [fix,setFix]= useState(true);
    const[timed,setTimed]=useState(false);
    const[input,setInput]=useState(0.00);
    const [startDate,setStartDate]=useState('Right After Listing');
    const [expiDate,setExpiDate]=useState('1 DAY');
    const handleChange =(e)=>{
        setInput(e.target.value);
    }
    const handleSelectChange = (e) => {
        setStartDate(e.target.value);
      };
      const handleSelectChange2 = (e) => {
        setExpiDate(e.target.value);
      };
    const openModal=()=>{
        setOpen(true);
    }
    const handleClose=()=>{
        setOpen(false);
    }
    const handleFix =()=>{
        setTimed(false);
        setFix(true);
    }
    const handleTimed =()=>{
        setFix(false);
        setTimed(true);
    }
    const inputFixed = 0.054;
    return (
        <>
        <Typography className={classes.gridTypo} >
            Enter Price to allow users instantly purchase your NFT
        </Typography>
        <Grid container spacing={2} className={classes.outergrid} >
            <Grid item sm={2} className={classes.innergridItem} onClick={handleFix}>
                <MdAddCircle className={classes.creBtn}  />
                <h4 >Fixed Price</h4>
                
            </Grid>

            <Grid item sm={2} className={classes.innergridItem} onClick={handleTimed}>
               <img src={image1} className={classes.img} alt ="image1" />
                <h4>Timed Function</h4>
                
            </Grid>

        </Grid>
        {fix ? 
                <div className="input_r">
                <label htmlFor="token">Price</label><span className="input_span">ETH</span> 
                   <Input  className={classes.input} value={input} onChange={(e)=>handleChange(e)} id="token" placeholder="" />
                   <div className="typo_r">
                   <Typography id="modal-modal-description" className={classes.gridTypoinnerR}>
                           Service Fee <span>2.5%</span>
                   </Typography>
                   <Typography id="modal-modal-description" className={classes.gridTypoinnerR}>
                          You will recieve {input} ETH
                   </Typography>
                   </div>
                  
            </div>
            :
            <div className="input_r">
             <label htmlFor="token">Minimum Bid</label><span className="input_span">ETH</span> 
                <Input  className={classes.input} value={inputFixed} id="token" placeholder="" />
                <div className="typo_r">
                <Typography id="modal-modal-description" className={classes.gridTypoinnerR}>
                        Bids below this amount won't be allowed
                </Typography>
                </div>
                <Grid container spacing={4}  >
                  <Grid item sm={4} className={classes.innergridItemtimed}>
                            <label htmlFor="token">Starting Date</label>
                                    <Select
                                        id="simple-select"
                                        value={startDate}
                                        onChange={handleSelectChange}
                                        >
                                        <MenuItem value={"Right After Listing"}>Right After Listing</MenuItem>
                                        </Select>
                    </Grid>
                    <Grid item sm={4} className={classes.innergridItemtimed}>        
                            <label htmlFor="token">Expiration Date</label>
                                    <Select
                                        id="simple-select"
                                        value={expiDate}
                                        onChange={handleSelectChange2}
                                        >
                                        <MenuItem value={"1 DAY"}>1 DAY</MenuItem>
                                        </Select>
                    </Grid>
                    </Grid>
                <Typography id="modal-modal-description" className={classes.gridTypoinnerR}>
                        Any Bid placed in the last 10 minutes extends the auction by 10 minutes.

                </Typography>
               
         </div>       
    
    }
         <Component />
        <Typography className={classes.gridTypo} >
             Choose Collection
        </Typography>

        <Grid container spacing={2} className={classes.outergrid} >
            <Grid item sm={2} className={classes.innergridItem}>
                <MdAddCircle className={classes.creBtn}  />
                <h4 onClick={openModal}>Create</h4>
                <Typography>ERC-721</Typography>
                {open? 
                     <Modal
                     open={open}
                     aria-labelledby="modal-modal-title"
                     aria-describedby="modal-modal-description"
                     className={classes.modalstyle}
                     
                   >
                     <Box className={classes.box} >
                         <p onClick={handleClose} className="close"><AiOutlineCloseCircle /></p>
                       <Typography id="modal-modal-title" className={classes.header} variant="h6" component="h2">
                        Collection
                       </Typography>
                      <div className="container_h">
                      <Avatar className={classes.avatar}></Avatar>
                       <div>
                       <Typography id="modal-modal-description" className={classes.gridTypoinner}>
                         We recommend an image of at least 400*400. Gifs work too.
                       </Typography>
                       <Button size="small" className={classes.btn}>Choose File</Button>
                       </div>
                      </div>

                      <Container maxWidth="md" className={classes.rootContainerModal}>
                          <div className="input_d">
                          <label htmlFor="token">Display Name 
                        <Typography id="modal-modal-description" className={classes.gridTypoinner}>
                         (required)
                       </Typography></label> 
                        <Input className={classes.input} id="token" placeholder="Enter Token Name" />
                        <Typography id="modal-modal-description" className={classes.gridTypoinnerspan}>
                         Token Name cannot be change in future.
                       </Typography>
                          </div>

                          <div className="input_d">
                          <label htmlFor="token">Symbol
                        <Typography id="modal-modal-description" className={classes.gridTypoinner}>
                         (required)
                       </Typography></label> 
                        <Input  className={classes.input} id="token" placeholder="Enter Token Symbol" />

                          </div>

                          <div className="input_d">
                          <label htmlFor="token">Discription
                        <Typography id="modal-modal-description" className={classes.gridTypoinner}>
                         (Optional)
                       </Typography></label> 
                        <Input className={classes.input} id="token" placeholder="Spread some word about your token collection" />

                          </div>

                          <div className="input_d">
                          <label htmlFor="token">Short Url</label> 
                        <Input className={classes.input} id="token" placeholder="Enter Short Url" />
                        <Typography id="modal-modal-description" className={classes.gridTypoinnerspan}>
                         Will be used as public URL
                       </Typography>
                          </div>
                          <Button size="large" className={classes.modalSBtn}>Create Collection</Button>
                      </Container>
                      

                      
                     </Box>
                   </Modal>
             
                 :""} 
            </Grid>
             <Grid item sm={2} className={classes.innergridItem}>
               <img src={image1} className={classes.img} alt ="image1" />
                <h4>Fungy</h4>
                <Typography>Fungy</Typography>
            </Grid>
        </Grid>
        <Container maxWidth="sm" className={classes.rootContainerModalF}>
                          <div className="input_d">
                          <label htmlFor="token">Title</label> 
                        <Input className={classes.input} id="token" placeholder='e.g. "Redeemable T-Shirt With Logo"' />
                          </div>

                          <div className="input_d">
                          <label htmlFor="token">Discription
                        <Typography id="modal-modal-description" className={classes.gridTypoinner}>
                         (Optional)
                       </Typography></label> 
                        <Input className={classes.input} id="token" placeholder='e.g. "After purchasing you will able to get  the real T-Shirt "' />
                        <Typography id="modal-modal-description" className={classes.gridTypoinnerspan}>
                         With preserved line-breaks
                       </Typography>
                          </div>

                          <div className="input_d">
                          <label htmlFor="token">Royalities</label> 
                        <Input className={classes.input} id="token" placeholder="E.g. 10% " />
                        <Typography id="modal-modal-description" className={classes.gridTypoinnerspan}>
                         Suggested : 0%,10%,204,30%
                       </Typography>
                          </div>
                          <Button size="medium" className={classes.fbtn}>Hide Advanced Settings </Button>
                       
                          <div className="input_d">
                          <label htmlFor="token">Properties
                          <Typography id="modal-modal-description" className={classes.gridTypoinner}>
                         (Optional)
                       </Typography></label> 
                       <div className="inputProp">
                       <Input className={classes.input} id="token" placeholder="e.g. Size " />
                        <Input className={classes.input} id="token"  placeholder="e.g. M " />
                       </div>
                        
                          </div>

                          <div className="input_d">
                          <label htmlFor="token">Alternative Text for NFT
                          <Typography id="modal-modal-description" className={classes.gridTypoinner}>
                         (Optional)
                       </Typography></label> 
                        <Input className={classes.input} id="token" placeholder='image decription in details(do not start with word "image")' />
                        <Typography id="modal-modal-description" className={classes.gridTypoinnerspan}>
                            Text that will be used in VoiceOver for people with disabilities
                       </Typography>
                          </div>
                          <Button size="small" className={classes.extbtn}>Create Item </Button>
                         
                      </Container>
                      

        </>
    )
}

export default Collection;
