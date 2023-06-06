import * as React from 'react';
import './Navbar.module.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { FaTh } from 'react-icons/fa';
import { CgTrello } from 'react-icons/cg';
import { BiDownArrow } from 'react-icons/bi';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ButtonAppBar() {
  const [workspace, setWorkspace] = React.useState('');
  const [recentMenu, setRecentMenu] = React.useState('');
  const [starredMenu, setStarredMenu] = React.useState('');
  const [templatesMenu, setTemplatesMenu] = React.useState('');

  const handleWorkspaceChange = (event) => {
    setWorkspace(event.target.value);
  };
  const handleRecentMenuChange = (event) => {
    setRecentMenu(event.target.value);
  };

  const handleStarredMenuChange = (event) => {
    setStarredMenu(event.target.value);
  };

  const handleTemplatesMenuChange = (event) => {
    setTemplatesMenu(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <FaTh />
          </IconButton>
          <CgTrello size={25} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TRELLO
          </Typography>
          <FormControl sx={{ width: '140px', color: 'white', textAlign: 'center', borderColor: 'white' }}>
            <InputLabel id="workspace-select-label" sx={{ color: 'white', textAlign: 'center' }}>Workspace   <BiDownArrow /></InputLabel>
            <Select
              labelId="workspace-select-label"
              value={workspace}
              label="Workspace"
              onChange={handleWorkspaceChange}
              sx={{ color: 'white' }}
            >
              <MenuItem value={1}>Workspace 1</MenuItem>
              <MenuItem value={2}>Workspace 2</MenuItem>
              <MenuItem value={3}>Workspace 3</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: '100px', color: 'white', textAlign: 'center', borderColor: 'white' }}>
            <InputLabel id="recent-menu-select-label" sx={{ color: 'white', textAlign: 'center' }}>Recent   <BiDownArrow /></InputLabel>
            <Select
              labelId="recent-menu-select-label"
              value={recentMenu}
              label="Recent Menu"
              onChange={handleRecentMenuChange}
              sx={{ color: 'white' }}
            >
              <MenuItem value={1}>Menu 1</MenuItem>
              <MenuItem value={2}>Menu 2</MenuItem>
              <MenuItem value={3}>Menu 3</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: '100px', color: 'white', textAlign: 'center', borderColor: 'white' }}>
            <InputLabel id="starred-menu-select-label" sx={{ color: 'white', textAlign: 'center' }}>Starred   <BiDownArrow /></InputLabel>
            <Select
              labelId="starred-menu-select-label"
              value={starredMenu}
              label="Starred Menu"
              onChange={handleStarredMenuChange}
              sx={{ color: 'white' }}
            >
              <MenuItem value={1}>Starred 1</MenuItem>
              <MenuItem value={2}>Starred 2</MenuItem>
              <MenuItem value={3}>Starred 3</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: '150px', color: 'white', textAlign: 'center', borderColor: 'white'}}>
            <InputLabel id="templates-menu-select-label" sx={{ color: 'white', textAlign: 'center' }}>Templates   <BiDownArrow /></InputLabel>
            <Select
              labelId="templates-menu-select-label"
              value={templatesMenu}
              label="Templates Menu"
              onChange={handleTemplatesMenuChange}
              sx={{ color: 'white' }}
            >
              <MenuItem value={1}>Template 1</MenuItem>
              <MenuItem value={2}>Template 2</MenuItem>
              <MenuItem value={3}>Template 3</MenuItem>
            </Select>
          </FormControl>

          <Button variant="outlined" sx={{ borderColor: 'white', mr: 80 }}>Create</Button>
          <Button color="inherit">Create</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}