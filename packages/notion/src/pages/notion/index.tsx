import { Avatar, Box, HStack, List, ListItem, Spacer, Text } from '@chakra-ui/react'
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpDownIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { MouseEvent, useState } from 'react'

const color = 'rgba(55, 53, 47, 0.45)'
const selectedColor = 'rgb(55, 53, 47)'
export const selectedBgColor = 'rgba(55, 53, 47, 0.08)'

const items = [
  { id: '1', name: 'item1' },
  { id: '2', name: 'item2' },
  { id: '3', name: 'item3' }
]

const childItems = [
  { id: '4', name: 'Item1 child1', parentId: '1' },
  { id: '5', name: 'Item1 child2', parentId: '1' },
  { id: '6', name: 'Item2 child1', parentId: '2' }
]

interface IsRotate {
  [id: string]: boolean
}

const HomePage = () => {
  const [selectedId, setSelected] = useState('')
  const [isOpen, setIsOpen] = useState(true)
  const [isRotates, setIsRotates] = useState<IsRotate>(Object.assign({}, ...items.map(({ id }) => ({ [id]: false }))))

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleOpen = () => {
    setIsOpen(true)
  }

  const toggleRotate = (e: MouseEvent, id: string) => {
    e.stopPropagation()
    setIsRotates({ ...isRotates, [id]: !isRotates[id] })
  }

  return (
    <Box h="100vh">
      {/* サイドバー */}
      <ArrowRightIcon
        w="22px"
        h="22px"
        p="5px"
        position="absolute"
        onClick={handleOpen}
        color={color}
        _hover={{
          bgColor: selectedBgColor,
          borderRadius: '2',
          cursor: 'pointer'
        }}
      />

      <Box
        transform={isOpen ? 'translateX(0px)' : 'translateX(-240px)'}
        transitionDuration=".5s"
        w="240px"
        h="100%"
        background={'rgb(251, 251, 250)'}
        color={'rgba(25, 23, 17, 0.6)'}
        role="group"
      >
        {/* 一番上の要素 */}
        <HStack
          w="100%"
          h="45px"
          px="10px"
          py="2px"
          spacing="2.5"
          _hover={{ bgColor: selectedBgColor, cursor: 'pointer' }}
        >
          <Avatar w="20px" h="20px" borderRadius="3px"></Avatar>
          <Text>Default User</Text>
          <ArrowUpDownIcon w="13px" h="13px"></ArrowUpDownIcon>
          <Spacer />
          <ArrowLeftIcon
            p="5px"
            w="22px"
            h="22px"
            visibility="hidden"
            _groupHover={{
              visibility: 'visible'
            }}
            _hover={{
              bgColor: selectedBgColor,
              borderRadius: '2'
            }}
            onClick={handleClose}
          />
        </HStack>

        {/* 二番目の要素 */}
        <List mt="4">
          {items.map(({ id, name }) => (
            <ListItem key={id} w="100%" fontSize="14px" fontWeight="600">
              <HStack
                px="10px"
                py="2px"
                h="30px"
                bgColor={id === selectedId && selectedBgColor}
                color={id === selectedId && selectedColor}
                _hover={{
                  bgColor: selectedBgColor,
                  cursor: 'pointer'
                }}
                borderRadius="6"
                onClick={() => setSelected(id)}
              >
                <ChevronRightIcon
                  p="1px"
                  w="18px"
                  h="18px"
                  color={color}
                  transform={isRotates[id] && 'rotateZ(90deg)'}
                  onClick={(e) => toggleRotate(e, id)}
                  _hover={{ bgColor: selectedBgColor }}
                />
                <Text>{name}</Text>
              </HStack>
              {isRotates[id] &&
                childItems
                  .filter(({ parentId }) => parentId === id)
                  .map(({ id, name }) => (
                    <ListItem
                      bgColor={id === selectedId && selectedBgColor}
                      color={id === selectedId && selectedColor}
                      key={id}
                      borderRadius="6"
                      _hover={{
                        bgColor: selectedBgColor,
                        cursor: 'pointer'
                      }}
                      minH="30px"
                      px="20px"
                      py="2px"
                      onClick={() => setSelected(id)}
                    >
                      {name}
                    </ListItem>
                  ))}
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  )
}

export default HomePage
