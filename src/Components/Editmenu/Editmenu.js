import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem } from '@mui/material';
import { ChevronDown as ChevronDownIcon } from 'react-icons';

const Editmenu = () => {
  return (
    <div>
      <h4>List Actions</h4>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
              {isOpen ? 'Close' : 'Open'}
            </MenuButton>
            <MenuList>
              <MenuItem>Add Cart</MenuItem>
              <MenuItem>Copy List</MenuItem>
              <MenuItem>Move List</MenuItem>
              <MenuItem>Watch</MenuItem>
            </MenuList>
          </>
        )}
      </Menu>

      <h4>Automation</h4>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
              {isOpen ? 'Close' : 'Open'}
            </MenuButton>
            <MenuList>
              <MenuItem>When a card is added to the list…</MenuItem>
              <MenuItem>Every day, sort list by…</MenuItem>
              <MenuItem>Every Monday, sort list by…</MenuItem>
              <MenuItem>Create a rule</MenuItem>
            </MenuList>
          </>
        )}
      </Menu>

      <h4></h4>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
              {isOpen ? 'Close' : 'Open'}
            </MenuButton>
            <MenuList>
              <MenuItem>Move all cards in this list…</MenuItem>
              <MenuItem>Archive all cards in this list…</MenuItem>
            </MenuList>
          </>
        )}
      </Menu>

      <h4></h4>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
              {isOpen ? 'Close' : 'Open'}
            </MenuButton>
            <MenuList>
              <MenuItem>Archive this list</MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </div>
  );
};

export default Editmenu;
