import { useEffect, useState } from "react";
import { ShowHideCard } from "../components/ShowHideCard";
import { useFetchOnMount } from "../hooks/useFetchOnMount";
import {
  Film,
  SwapiBaseRouteResponse,
  SwapiResources,
  swapiResourceUrls,
  SWAPI_BASE_URL,
} from "../utils/swapiHelpers";

export function MoviesPage(): JSX.Element {
  const { data } = useFetchOnMount<SwapiBaseRouteResponse<Film>>(
    `${SWAPI_BASE_URL}${swapiResourceUrls[SwapiResources.Films]}`
  );

  if (!data) {
    return <span>Loading...</span>;
  }

  return (
    <div className="m-10">
      <h2 className="text-3xl text-center">Movies</h2>
      <div className="grid grid-cols-4 gap-10">
        {data.results.map(
          ({ title, episode_id, release_date, director, producer }) => {
            return (
              <ShowHideCard key={title} headerName={title}>
                <ul>
                  <li>Episode {episode_id}</li>
                  <li>Directed by {director}</li>
                  <li>Produced by {producer}</li>
                  <li>Released on {release_date}</li>
                </ul>
              </ShowHideCard>
            );
          }
        )}
      </div>
    </div>
  );
}
