import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card borderRadius="10px" overflow="hidden" width="275px">
      <Skeleton height="200px" borderRadius="10px" overflow="hidden" />
      <CardBody>
        <SkeletonText />
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
