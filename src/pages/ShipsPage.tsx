import { useEffect, useState } from "react";
import { ShowHideCard } from "../components/ShowHideCard";
import { useFetchOnMount } from "../hooks/useFetchOnMount";
import {
  Ship,
  SwapiBaseRouteResponse,
  SwapiResources,
  swapiResourceUrls,
  SWAPI_BASE_URL,
} from "../utils/swapiHelpers";

export function ShipsPage(): JSX.Element {
  const { data } = useFetchOnMount<SwapiBaseRouteResponse<Ship>>(
    `${SWAPI_BASE_URL}${swapiResourceUrls[SwapiResources.Spaceships]}`
  );

  if (!data) {
    return <span>Loading...</span>;
  }

  return (
    <div className="m-10">
      <h2 className="text-3xl text-center">Ships</h2>
      <div className="grid grid-cols-4 gap-10">
        {data.results.map(
          ({
            name,
            model,
            manufacturer,
            starship_class,
            length,
            cost_in_credits: cost,
          }) => {
            return (
              <ShowHideCard key={name} headerName={name}>
                <ul>
                  <li>Model: {model}</li>
                  <li>Manufactured by: {manufacturer}</li>
                  <li>Class: {starship_class}km</li>
                  <li>Length: {length}m</li>
                  <li>Cost: {cost} credits</li>
                </ul>
              </ShowHideCard>
            );
          }
        )}
      </div>
    </div>
  );
}
