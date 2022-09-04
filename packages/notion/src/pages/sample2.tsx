import { Box } from "@chakra-ui/react";
import { useState, MouseEvent } from "react";

export const Sample2 = () => {
  const [isSelectedParent, setIsSelectedParent] = useState(false);
  const [isSelectedChild, setIsSelectedChild] = useState(false);

  const handleClickParent = () => {
    setIsSelectedParent(true);
  };

  const handleClickChild = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsSelectedChild(true);
  };

  return (
    <Box
      onClick={handleClickParent}
      bgColor={isSelectedParent ? "black" : "red"}
      w="300px"
      h="300px"
      cursor="pointer"
    >
      <Box
        onClick={handleClickChild}
        bgColor={isSelectedChild ? "black" : "blue"}
        w="100px"
        h="100px"
        cursor="pointer"
      />
    </Box>
  );
};

export default Sample2;
