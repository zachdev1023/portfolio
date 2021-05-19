import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
// import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import logo from '../../img/logo-transparent-bg.png';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{background: 'rgb(58, 96, 130, 1)', width: '100%'}} position="static">
        <Toolbar>

            {/* <Container>
                    <img src={logo} style={{height: '1em'}} alt="logo" />
            </Container> */}

                <Button style={{fontWeight:'bold'}} color="inherit">
                    Zach
                </Button>

              <Button color="inherit">
                  Projects
              </Button>

                <Button color="inherit">
                    Contact
                </Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}
