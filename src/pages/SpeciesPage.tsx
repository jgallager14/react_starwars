import { useState } from "react";
import { PageLayout } from "../components/PageLayout";
import { ShowHideCard } from "../components/ShowHideCard";
import { useFetchOnMount } from "../hooks/useFetchOnMount";
import {
  SwapiBaseRouteResponse,
  SwapiResources,
  swapiResourceUrls,
  SWAPI_BASE_URL,
  Species,
} from "../utils/swapiHelpers";

export function SpeciesPage(): JSX.Element {
  const [currentData, updateCurrentData] =
    useState<SwapiBaseRouteResponse<Species>>();
  const [isLoading, updateIsLoading] = useState<boolean>(false);

  useFetchOnMount<SwapiBaseRouteResponse<Species>>({
    apiEndpoint: `${SWAPI_BASE_URL}${
      swapiResourceUrls[SwapiResources.Species]
    }`,
    postFetchCallback: updateCurrentData,
  });

  if (!currentData) {
    return <span>Loading...</span>;
  }

  return (
    <PageLayout<Species>
      title="Species"
      isLoading={isLoading}
      data={currentData}
      updateData={updateCurrentData}
      updateIsLoading={updateIsLoading}
    >
      {currentData.results.map(
        ({ name, classification, designation, language, average_lifespan }) => {
          return (
            <ShowHideCard key={name} headerName={name}>
              <ul>
                <li>Classification: {classification}</li>
                <li>Designation: {designation}</li>
                <li>Primary Language: {language}</li>
                <li>Avg Lifespan: {average_lifespan} years</li>
              </ul>
            </ShowHideCard>
          );
        }
      )}
    </PageLayout>
  );
}
