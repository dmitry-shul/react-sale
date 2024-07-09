import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { setSort } from '../../../store/slices/filtersSlice';

const MenuSelect = () => {
  const sort = useSelector(state => state.filters.sort)
  const dispath = useDispatch()

  return (
    <>
      <Menu>
        <MenuButton 
          bg='transparent' 
          color='#7AC751' 
          _hover={{ color: '#5B963C', textDecoration: "underline dashed"}}
        >
          <span style={{fontSize: "16px"}}>{sort}</span>
        </MenuButton>
        <MenuList 
          w={160} 
          pt={16} 
          pb={16} 
          bg='#f0f0f0' borderRadius={10}
        >
          {menuList.map(item =>
            <MenuItem 
              key={item}
              pr={20} 
              pl={20} 
              pt={6} 
              pb={6} 
              _hover={{ background: '#d7d7d7'}} 
              bg='#f0f0f0' 
              fontSize={16}
              onClick={() => dispath(setSort(item))}
            >{item}</MenuItem>
          )}
        </MenuList>
      </Menu>
    </>
  )
}

export default MenuSelect



const menuList = ["popular", "cheap", "expensive", "a - z", "z - a"]