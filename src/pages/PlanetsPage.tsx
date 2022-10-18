import { SetStateAction, useEffect, useState } from "react";
import { SwapiResources } from "../utils/swapiHelpers";
import { fetchResource } from "../components/Content/SelectedPage";

export function PlanetsPage(): JSX.Element {
  const [isLoading, updateIsLoading] = useState<boolean>(true);
  const [fetchResults, updateFetchResults] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    fetchResource(
      SwapiResources.Planets,
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
      <p className="text-3xl text-center">Planets</p>
      <ul className="grid grid-cols-4 gap-10">
        {fetchResults.map((result) => {
          return (
            <li>
              <ul>
                <li className="text-lg font-bold">{result.name}</li>
                <li>Diameter: {result.diameter}m</li>
                <li>Climate: {result.climate}</li>
                <li>Population: {result.population}</li>
                <li>Day Length: {result.rotation_period}hrs</li>
                <li>Year Length: {result.orbital_period} days</li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
