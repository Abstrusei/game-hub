import { Heading } from "@chakra-ui/react";
import { IGameQuery } from "../App";

interface IGameHeadingProps {
  gameQuery: IGameQuery;
}

const GameHeading = ({ gameQuery }: IGameHeadingProps) => {
  const gamePlatform = gameQuery.platform?.name || "";
  const gameGenre = gameQuery.genre?.name || "";
  const gameHeading = `${gamePlatform} ${gameGenre} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {gameHeading}
    </Heading>
  );
};

export default GameHeading;
