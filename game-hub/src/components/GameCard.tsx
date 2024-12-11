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
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl" marginBottom={3}>
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
