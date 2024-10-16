import useData from "./useData";
import { IGenre } from "./useGenres";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

export interface IGame {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (selectedGenre: IGenre | null) =>
  useData<IGame>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useGames;
