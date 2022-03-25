import { Menu, MenuList, MenuButton, MenuItem, Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const categoryList = [
  '全部',
  '狸狸兒',
  '阿腸',
  '睡覺系列',
  '配音員系列',
  '戲謔系列'
]

const Category = props => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {props.category === '' ? '全部' : props.category}
      </MenuButton>
      <MenuList>
        {categoryList.map(val => (
          <MenuItem key={val} onClick={() => props.setCategory(val)}>
            {val}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default Category
