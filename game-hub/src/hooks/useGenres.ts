import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface IGenre {
  id: number;
  name: string;
}

export interface IFetchGenresResponse {
  count: number;
  results: IGenre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<IFetchGenresResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        console.log(res.data.results);
        setGenres(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
