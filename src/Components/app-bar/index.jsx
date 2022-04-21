import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// icons
import { ReactComponent as Logo } from '../../icons/logo.svg';

// styled
import {
  LogoContent,
  TopBar,
  IconMenuContent,
  DropDownContent,
} from './style-app-bar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // position: 'fixed',
    // top: 0,
    // width: '100%',
    // zIndex: 9,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar({ toggleDrawer }) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <TopBar position="static" elevation={0}>
        <Toolbar>
          <Grid container spacing={3}>
            <IconMenuContent item xs={3}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={() => toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </IconMenuContent>

            <LogoContent item xs={6}>
              <Logo />
            </LogoContent>
            <DropDownContent item xs={3}>
              <Button aria-controls="simple-menu" onClick={handleClick}>
                Usuário
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Fabricio</MenuItem>
                <MenuItem onClick={handleClose}>Aline</MenuItem>
                <MenuItem onClick={handleClose}>Willian</MenuItem>
              </Menu>
            </DropDownContent>
          </Grid>
        </Toolbar>
      </TopBar>
    </div>
  );
}
