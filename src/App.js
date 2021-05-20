import './App.css';

import SimpleAppBar from './components/material/SimpleAppBar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';

import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item sm={12}>
          <SimpleAppBar />
        </Grid>
        <Grid item sm={12}>
          <Header />
        </Grid>
        <Grid item sm={12}>
          <About />
        </Grid>
        <Grid item sm={12}>
          <Skills />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
