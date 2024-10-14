import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { IGame } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import { getCroppedImageUrl } from "../services/image-url";

interface IGameCardProps {
  game: IGame;
}

const GameCard = ({ game }: IGameCardProps) => {
  return (
    <Card borderRadius="10px" overflow="hidden" width="275px">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
