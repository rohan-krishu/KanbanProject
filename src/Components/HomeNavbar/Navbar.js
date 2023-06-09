import React, { useState } from 'react';
import { styled } from '@mui/system';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  MenuItem,
  IconButton,
  Menu
} from '@mui/material';
import { CgTrello } from 'react-icons/cg';

const NavbarWrapper = styled(AppBar)({
  backgroundColor: '#026AA7',
});

const LogoIconButton = styled(IconButton)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
}));

const DropdownWrapper = styled('div')(({ theme }) => ({
  marginRight: theme.spacing(5),
}));

const RightSpace = styled('div')({
  marginRight: '1rem',
});

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <NavbarWrapper position="static">
      <Toolbar>
        <LogoIconButton edge="start" color="inherit" aria-label="menu" style={{ fontSize: '2rem' }}>
          <CgTrello />
        </LogoIconButton>
        <Typography variant="h4" fontWeight="bold" color="inherit" sx={{ flexGrow: 1, ml: 2 }}>
          Trello
        </Typography>
        {/* Dropdown Menus */}
        <DropdownWrapper>
          <Button color="inherit" onClick={handleMenuOpen} sx={{ mr: 2 }}>
            <Typography color="inherit">
              Features
            </Typography>
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            getContentAnchorEl={null}
          >
            <MenuItem onClick={handleMenuClose}>Dummy 1</MenuItem>
            <MenuItem onClick={handleMenuClose}>Dummy 2</MenuItem>
            <MenuItem onClick={handleMenuClose}>Dummy 3</MenuItem>
          </Menu>
        </DropdownWrapper>

        <DropdownWrapper>
          <Button color="inherit" onClick={handleMenuOpen} sx={{ mr: 2 }}>
            <Typography  color="inherit">
              Solutions
            </Typography>
          </Button>
        </DropdownWrapper>

        <DropdownWrapper>
          <Button color="inherit" onClick={handleMenuOpen} sx={{ mr: 2 }}>
            <Typography color="inherit">
              Plans
            </Typography>
          </Button>
        </DropdownWrapper>

        <DropdownWrapper>
          <Button color="inherit" onClick={handleMenuOpen} sx={{ mr: 2 }}>
            <Typography color="inherit">
              Resources
            </Typography>
          </Button>
        </DropdownWrapper>

        <Button color="inherit" sx={{ border: 'none', m: '0 30px', marginRight: '250px' }}>
          <Typography  sx={{ color: 'inherit' }}>
            Pricing
          </Typography>
        </Button>

        <Button
          style={{
            backgroundColor: 'white',
            color: 'black',
            width: '150px',
            height: '50px',
            fontSize: '1rem',
            fontWeight: 'bold',
            border: 'none',
          }}
        >
          Log in
        </Button>
        <Button
          style={{
            backgroundColor: '#5AAC44',
            color: 'white',
            width: '300px',
            height: '50px',
            fontSize: '1rem',
            fontWeight: 'bold',
            border: 'none',
          }}
        >
          Get Trello For Free
        </Button>

        <RightSpace />
      </Toolbar>
    </NavbarWrapper>
  );
};

export default Navbar;
