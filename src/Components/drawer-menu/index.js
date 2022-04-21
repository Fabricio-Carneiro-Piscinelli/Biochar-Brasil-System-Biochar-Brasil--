import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

// components
import ButtonAppBar from '../app-bar';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function ListComp(toggleDrawer) {
  const classes = useStyles();
  return (
    <div
      className={classes.list}
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <List>
        <ListItem button key="0">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Gerar Orçamento" />
        </ListItem>
      </List>
    </div>
  );
}

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open_) => {
    setOpen(open_);
  };

  // console.log(list);
  return (
    <div>
      <ButtonAppBar toggleDrawer={toggleDrawer} />
      <React.Fragment key={0}>
        <Drawer anchor="left" open={open} onClose={() => toggleDrawer(false)}>
          <ListComp toggleDrawer={toggleDrawer} />
        </Drawer>
      </React.Fragment>
    </div>
  );
}
