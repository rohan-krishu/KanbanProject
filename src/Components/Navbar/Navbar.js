import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CgTrello } from 'react-icons/cg';
import { NotificationsNone as NotificationsNoneIcon, AccountCircle as AccountCircleIcon } from '@material-ui/icons';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  InputBase,
  Select,
  MenuItem,
} from '@material-ui/core';
import { FaTh } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'black',
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  selector: {
    marginLeft: theme.spacing(2),
    '& .MuiSelect-root': {
      color: 'white',
    },
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
      <IconButton size="medium" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <FaTh />
        </IconButton>
        <IconButton color="inherit" className={classes.logo}>
          <CgTrello />
        </IconButton>
        <Typography variant="h4" className={classes.title}>
          Trello
        </Typography>
        <div className={classes.selector}>
          <Select defaultValue="workspace1">
            <MenuItem value="workspace1">Workspace</MenuItem>
            <MenuItem value="workspace2">Workspace 1</MenuItem>
            <MenuItem value="workspace3">Workspace 2</MenuItem>
            <MenuItem value="workspace3">Workspace 3</MenuItem>
          </Select>
        </div>
        <div className={classes.selector}>
          <Select defaultValue="recent1">
            <MenuItem value="recent1">Recent</MenuItem>
            <MenuItem value="recent2">Recent 1</MenuItem>
            <MenuItem value="recent3">Recent 2</MenuItem>
            <MenuItem value="recent4">Recent 3</MenuItem>
            <MenuItem value="recent4">Recent 4</MenuItem>
          </Select>
        </div>
        <div className={classes.selector}>
          <Select defaultValue="starred1">
            <MenuItem value="starred1">Starred</MenuItem>
            <MenuItem value="starred2">Starred 1</MenuItem>
            <MenuItem value="starred3">Starred 2</MenuItem>
            <MenuItem value="starred4">Starred 3</MenuItem>
            <MenuItem value="starred4">Starred 4</MenuItem>
          </Select>
        </div>
        <div className={classes.selector}>
          <Select defaultValue="template1">
            <MenuItem value="template1">Template</MenuItem>
            <MenuItem value="template2">Template 1</MenuItem>
            <MenuItem value="template3">Template 2</MenuItem>
            <MenuItem value="template4">Template 3</MenuItem>
            <MenuItem value="template5">Template 4</MenuItem>
            <MenuItem value="template6">Template 5</MenuItem>
          </Select>
        </div>
        <div className={classes.button}>
          <Button variant="contained" color="primary">
            Create
          </Button>
        </div>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <NotificationsNoneIcon />
          </div>
          <InputBase
            placeholder="Search..."
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
