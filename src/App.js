import './App.css';

import SimpleAppBar from './components/material/SimpleAppBar';
import Header from './components/Header';
import About from './components/About';

import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App">
      <Grid sm={12}>
        <SimpleAppBar />
      </Grid>
      <Grid sm={12}>
        <Header />
      </Grid>
      <Grid sm={12}>
        <About />
      </Grid>
    </div>
  );
}

export default App;
