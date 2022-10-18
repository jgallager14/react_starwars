import { SetStateAction, useEffect, useState } from "react";
import { SwapiResources } from "../utils/swapiHelpers";
import { fetchResource } from "../components/Content/SelectedPage";

export function PeoplePage(): JSX.Element {
  const [isLoading, updateIsLoading] = useState<boolean>(true);
  const [fetchResults, updateFetchResults] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    fetchResource(
      SwapiResources.People,
      abortController.signal,
      updateFetchResults,
      updateIsLoading
    );

    return () => {
      abortController.abort();
    };
  }, []);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div className="m-10">
      <p className="text-3xl text-center">People</p>
      <ul className="grid grid-cols-4 gap-10">
        {fetchResults.map((result) => {
          return (
            <li>
              <ul>
                <li className="text-lg font-bold">{result.name}</li>
                <li>Height: {result.height}cm</li>
                <li>Weight: {result.mass}kg</li>
                <li>Hair: {result.hair_color}</li>
                <li>{result.gender}</li>
                <li>Born in {result.birth_year}</li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
