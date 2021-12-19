
import './App.css';
import Collection from './Components/Collection';
import Header from './Components/Header';
import Container from '@material-ui/core/Container';
import Footer from "./Components/Footer"
import { makeStyles } from '@material-ui/core/styles';
import Navigation from './Components/Navigation';
const useStyles = makeStyles({
  rootC:{
    
  }
})
function App() {
  const classes = useStyles();
  return (
    <div className="App">
       <Navigation />
      <h3>Create Your Collection</h3>
     
        <Container maxWidth="md" className={classes.rootC}>
            <Header />
            <Collection />

        </Container>
    <Footer />

    </div>
  );
}

export default App;
