import { SetStateAction, useEffect, useState } from "react";
import { SwapiResources } from "../utils/swapiHelpers";
import { fetchResource } from "../components/Content/SelectedPage";

export function VehiclesPage(): JSX.Element {
  const [isLoading, updateIsLoading] = useState<boolean>(true);
  const [fetchResults, updateFetchResults] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    fetchResource(
      SwapiResources.Vehicles,
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
      <p className="text-3xl text-center">Vehicles</p>
      <ul className="grid grid-cols-4 gap-10">
        {fetchResults.map((result) => {
          return (
            <li>
              <ul>
                <li className="text-lg font-bold">{result.name}</li>
                <li>Model: {result.model}cm</li>
                <li>Manufacturer: {result.manufacturer}kg</li>
                <li>Class: {result.vehicle_class}</li>
                <li>Length: {result.length}m</li>
                <li>Cost: {result.cost_in_credits} credits</li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
