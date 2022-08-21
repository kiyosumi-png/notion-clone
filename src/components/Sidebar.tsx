import { Box } from "@chakra-ui/react";
import { ReactNode, useState } from "react";

interface SidebarPorps {
  children: ReactNode;
}

export const Sidebar = ({ children }: SidebarPorps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Box
      transform={isOpen ? "translateX(0px)" : "translateX(-240px)"}
      transitionDuration=".5s"
      w="240px"
      h="100%"
      background={"rgb(251, 251, 250)"}
      color={"rgba(25, 23, 17, 0.6)"}
      role="group"
    >
      {children}
    </Box>
  );
};
