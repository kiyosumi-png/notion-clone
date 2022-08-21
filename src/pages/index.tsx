import {
  Avatar,
  Box,
  HStack,
  List,
  ListItem,
  Spacer,
  Text,
} from "@chakra-ui/react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { MouseEvent, useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { SidebarItem } from "../components/SidebarItem";

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

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <Box h="100vh">
      {/* サイドバー */}
      <ArrowRightIcon
        w="22px"
        h="22px"
        p="5px"
        position="absolute"
        onClick={handleOpen}
        color="rgba(55, 53, 47, 0.45)"
        _hover={{
          bgColor: "rgba(55, 53, 47, 0.08)",
          borderRadius: "2",
          cursor: "pointer",
        }}
      />
      <Sidebar>
        <SidebarItem />
      </Sidebar>
    </Box>
  );
};

export default HomePage;
