import React, { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import apiClient from "../services/api-client";

interface IGame {
  id: number;
  name: string;
}

interface IFetchGamesResponse {
  count: number;
  results: IGame[];
}

const GameGrid = () => {
  const [games, setGames] = useState<IGame[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<IFetchGamesResponse>("/games")
      .then((res) => {
        console.log(res.data.results);
        setGames(res.data.results);
      })
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
