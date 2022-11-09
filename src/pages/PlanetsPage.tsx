import { useState } from "react";
import { PageLayout } from "../components/PageLayout";
import { ShowHideCard } from "../components/ShowHideCard";
import { useFetchOnMount } from "../hooks/useFetchOnMount";
import {
  Planet,
  SwapiBaseRouteResponse,
  SwapiResources,
  swapiResourceUrls,
  SWAPI_BASE_URL,
} from "../utils/swapiHelpers";

export function PlanetsPage(): JSX.Element {
  const [currentData, updateCurrentData] =
    useState<SwapiBaseRouteResponse<Planet>>();
  const [isLoading, updateIsLoading] = useState<boolean>(false);

  useFetchOnMount<SwapiBaseRouteResponse<Planet>>({
    apiEndpoint: `${SWAPI_BASE_URL}${
      swapiResourceUrls[SwapiResources.Planets]
    }`,
    postFetchCallback: updateCurrentData,
  });

  if (!currentData) {
    return <span>Loading...</span>;
  }

  return (
    <PageLayout<Planet>
      title="Planets"
      isLoading={isLoading}
      data={currentData}
      updateData={updateCurrentData}
      updateIsLoading={updateIsLoading}
    >
      {currentData.results.map(
        ({
          name,
          climate,
          diameter,
          population,
          orbital_period,
          rotation_period,
        }) => {
          return (
            <ShowHideCard key={name} headerName={name}>
              <ul>
                <li>Population {population}</li>
                <li>{climate} climate</li>
                <li>Diameter {diameter}km</li>
                <li>Day cycle: {rotation_period}hrs</li>
                <li>Year cycle: {orbital_period} days</li>
              </ul>
            </ShowHideCard>
          );
        }
      )}
    </PageLayout>
  );
}
