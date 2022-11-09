import { useState } from "react";
import { PageLayout } from "../components/PageLayout";
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
  const [currentData, updateCurrentData] =
    useState<SwapiBaseRouteResponse<Film>>();
  const [isLoading, updateIsLoading] = useState<boolean>(false);

  useFetchOnMount<SwapiBaseRouteResponse<Film>>({
    apiEndpoint: `${SWAPI_BASE_URL}${swapiResourceUrls[SwapiResources.Films]}`,
    postFetchCallback: updateCurrentData,
  });

  if (!currentData) {
    return <span>Loading...</span>;
  }

  return (
    <PageLayout<Film>
      title="Movies"
      isLoading={isLoading}
      data={currentData}
      updateData={updateCurrentData}
      updateIsLoading={updateIsLoading}
    >
      {currentData.results.map(
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
    </PageLayout>
  );
}
