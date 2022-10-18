import { SetStateAction, useEffect, useState } from "react";
import { SwapiResources } from "../utils/swapiHelpers";
import { fetchResource } from "../components/Content/SelectedPage";

export function SpeciesPage(): JSX.Element {
  const [isLoading, updateIsLoading] = useState<boolean>(true);
  const [fetchResults, updateFetchResults] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    fetchResource(
      SwapiResources.Species,
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
      <p className="text-3xl text-center">Species</p>
      <ul className="grid grid-cols-4 gap-10">
        {fetchResults.map((result) => {
          return (
            <li>
              <ul>
                <li className="text-lg font-bold">{result.name}</li>
                <li>Classification: {result.classification}</li>
                <li>Designation: {result.designation}</li>
                <li>Avg Height: {result.average_height}</li>
                <li>Avg Lifespan: {result.average_lifespan} years</li>
                <li>Language: {result.language}</li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
