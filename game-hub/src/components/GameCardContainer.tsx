import { Box, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface IGameCardContainerProps {
  children: ReactNode;
}

const GameCardContainer = ({ children }: IGameCardContainerProps) => {
  return (
    <Box borderRadius="10px" overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
