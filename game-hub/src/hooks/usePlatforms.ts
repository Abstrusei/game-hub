import platforms from "../data/platforms";

export interface IPlatform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => ({
  data: platforms,
  error: false,
  isLoading: false,
});

export default usePlatforms;
