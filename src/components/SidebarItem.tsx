import { Avatar, HStack, List, ListItem, Spacer, Text } from "@chakra-ui/react";
import {
  ArrowLeftIcon,
  ArrowUpDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { MouseEvent, useState } from "react";

const items = [
  { id: "1", name: "item1" },
  { id: "2", name: "item2" },
  { id: "3", name: "item3" },
];

const childItems = [
  { id: "4", name: "Item1 child1", parentId: "1" },
  { id: "5", name: "Item1 child2", parentId: "1" },
  { id: "6", name: "Item2 child1", parentId: "2" },
];

interface IsRotate {
  [id: string]: boolean;
}

export const SidebarItem = () => {
  const [selectedId, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [rotates, setRotates] = useState<IsRotate>(
    Object.assign({}, ...items.map(({ id }) => ({ [id]: false })))
  );

  const handleClick = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const toggleRotate = (e: MouseEvent, id: string) => {
    e.stopPropagation();
    setRotates({ ...rotates, [id]: !rotates[id] });
  };

  return (
    <>
      <HStack
        w="100%"
        h="45px"
        px="10px"
        py="2px"
        spacing="2.5"
        _hover={{ bgColor: "rgba(55, 53, 47, 0.08)", cursor: "pointer" }}
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
            visibility: "visible",
          }}
          _hover={{
            bgColor: "rgba(55, 53, 47, 0.08)",
            borderRadius: "2",
          }}
          onClick={handleClick}
        />
      </HStack>

      {/* 二番目の要素 */}
      <List mt="4">
        {items.map(({ id, name }) => (
          <ListItem key={id} w="100%" fontSize="14px" fontWeight="600">
            <HStack
              px="10px"
              py="2px"
              minH="30px"
              bgColor={id === selectedId && "rgba(55, 53, 47, 0.08)"}
              color={id === selectedId && "rgb(55, 53, 47)"}
              _hover={{
                bgColor: "rgba(55, 53, 47, 0.08)",
                cursor: "pointer",
              }}
              borderRadius="6"
              onClick={() => setSelected(id)}
            >
              <ChevronRightIcon
                p="1px"
                w="18px"
                h="18px"
                color={"rgba(55, 53, 47, 0.45)"}
                transform={rotates[id] && "rotateZ(90deg)"}
                onClick={(e) => toggleRotate(e, id)}
                _hover={{ bgColor: "rgba(55, 53, 47, 0.08)" }}
              />
              <Text>{name}</Text>
            </HStack>
            {rotates[id] &&
              childItems
                .filter(({ parentId }) => parentId === id)
                .map(({ id, name }) => (
                  <ListItem
                    bgColor={id === selectedId && "rgba(55, 53, 47, 0.08)"}
                    color={id === selectedId && "rgb(55, 53, 47)"}
                    key={id}
                    borderRadius="6"
                    _hover={{
                      bgColor: "rgba(55, 53, 47, 0.08)",
                      cursor: "pointer",
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
    </>
  );
};
