import { Box } from "@chakra-ui/react";
import { useState } from "react";

const TransformSample = () => {
  const [isTransform, setIsTransform] = useState(false);

  const handleTranform = () => {
    setIsTransform(!isTransform);
  };

  return (
    <Box bgColor="red" w="300px" h="300px">
      <Box
        transform={
          isTransform
            ? "translateX(300px) rotate(90deg) scale(2)"
            : "translateX(0px)"
        }
        transitionDuration=".5s"
        onClick={handleTranform}
        w="100px"
        h="100px"
        bgColor="blue"
        cursor="pointer"
      />
    </Box>
  );
};

export default TransformSample;
