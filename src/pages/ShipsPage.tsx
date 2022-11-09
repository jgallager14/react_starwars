import { useState } from "react";
import { PageLayout } from "../components/PageLayout";
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
  const [currentData, updateCurrentData] =
    useState<SwapiBaseRouteResponse<Ship>>();
  const [isLoading, updateIsLoading] = useState<boolean>(false);

  useFetchOnMount<SwapiBaseRouteResponse<Ship>>({
    apiEndpoint: `${SWAPI_BASE_URL}${
      swapiResourceUrls[SwapiResources.Spaceships]
    }`,
    postFetchCallback: updateCurrentData,
  });

  if (!currentData) {
    return <span>Loading...</span>;
  }

  return (
    <PageLayout<Ship>
      title="Ships"
      isLoading={isLoading}
      data={currentData}
      updateData={updateCurrentData}
      updateIsLoading={updateIsLoading}
    >
      {currentData.results.map(
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
    </PageLayout>
  );
}
