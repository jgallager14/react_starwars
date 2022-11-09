import { useState } from "react";
import { PageLayout } from "../components/PageLayout";
import { ShowHideCard } from "../components/ShowHideCard";
import { useFetchOnMount } from "../hooks/useFetchOnMount";
import {
  SwapiBaseRouteResponse,
  SwapiResources,
  swapiResourceUrls,
  SWAPI_BASE_URL,
  Vehicle,
} from "../utils/swapiHelpers";

export function VehiclesPage(): JSX.Element {
  const [currentData, updateCurrentData] =
    useState<SwapiBaseRouteResponse<Vehicle>>();
  const [isLoading, updateIsLoading] = useState<boolean>(false);

  useFetchOnMount<SwapiBaseRouteResponse<Vehicle>>({
    apiEndpoint: `${SWAPI_BASE_URL}${
      swapiResourceUrls[SwapiResources.Vehicles]
    }`,
    postFetchCallback: updateCurrentData,
  });

  if (!currentData) {
    return <span>Loading...</span>;
  }

  return (
    <PageLayout<Vehicle>
      title="Vehicles"
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
          vehicle_class,
          length,
          cost_in_credits: cost,
        }) => {
          return (
            <ShowHideCard key={name} headerName={name}>
              <ul>
                <li>Model: {model}</li>
                <li>Manufactured by: {manufacturer}</li>
                <li>Class: {vehicle_class}km</li>
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
