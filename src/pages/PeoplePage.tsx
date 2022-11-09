import { useState } from "react";
import { ShowHideCard } from "../components/ShowHideCard";
import { useFetchOnMount } from "../hooks/useFetchOnMount";
import { PageLayout } from "../components/PageLayout";
import {
  Person,
  SwapiBaseRouteResponse,
  swapiResourceMetadata,
  SwapiResources,
  swapiResourceUrls,
  SWAPI_BASE_URL,
} from "../utils/swapiHelpers";

export function PeoplePage(): JSX.Element {
  const [currentData, updateCurrentData] =
    useState<SwapiBaseRouteResponse<Person>>();
  const [isLoading, updateIsLoading] = useState<boolean>(false);

  useFetchOnMount<SwapiBaseRouteResponse<Person>>({
    apiEndpoint: `${SWAPI_BASE_URL}${swapiResourceUrls[SwapiResources.People]}`,
    postFetchCallback: updateCurrentData,
  });

  async function handlePaginationClick(url: string | null) {
    updateIsLoading(true);
    if (url) {
      const response = await fetch(url);
      const data = await response.json();
      updateCurrentData(data);
    }
    updateIsLoading(false);
  }

  if (!currentData) {
    return <span>Loading...</span>;
  }

  return (
    <PageLayout
      title={swapiResourceMetadata[SwapiResources.People].displayName}
      areButtonsEnabled={!isLoading}
      onPrevClick={() => {
        handlePaginationClick(currentData.previous);
      }}
      onNextClick={() => {
        handlePaginationClick(currentData.next);
      }}
      showNextButton={!!currentData.next}
      showPreviousButton={!!currentData.previous}
    >
      <>
        {currentData?.results.map(
          ({
            name,
            height,
            mass,
            hair_color: hair,
            gender,
            birth_year: birthYear,
          }) => {
            return (
              <ShowHideCard key={name} headerName={name}>
                <ul>
                  <li>Height: {height}cm</li>
                  <li>Weight: {mass}kg</li>
                  <li>Hair: {hair}</li>
                  <li>{gender}</li>
                  <li>Born in {birthYear}</li>
                </ul>
              </ShowHideCard>
            );
          }
        )}
      </>
    </PageLayout>
  );
}
