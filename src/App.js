import './App.css';

import SimpleAppBar from './components/material/SimpleAppBar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';

import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App">
      <Grid style={{width: '100%', display: 'flex', justifyContent: 'space-evenly'}} container>

        <Grid style={{width: '100%', display: 'flex', justifyContent: 'space-evenly'}} item sm={12}>
          <SimpleAppBar />
        </Grid>

        <Grid item sm={12}>
          <Header />
        </Grid>

        <Grid item sm={12}>
          <About />
        </Grid>

        <Grid item sm={12}>
          <Grid style={{background: 'rgb(5, 35, 57, 70%)'}} container>
            <Grid item xs={1}>

            </Grid>
            <Grid item xs={10}>
              <Skills/>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sm={12}>
          <Footer />
        </Grid>

      </Grid>
    </div>
  );
}

export default App;
