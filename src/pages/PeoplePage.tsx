import { useState } from "react";
import { ShowHideCard } from "../components/ShowHideCard";
import { useFetchOnMount } from "../hooks/useFetchOnMount";
import { PageLayout } from "../components/PageLayout";
import {
  Person,
  SwapiBaseRouteResponse,
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

  if (!currentData) {
    return <span>Loading...</span>;
  }

  return (
    <PageLayout<Person>
      title="Characters"
      data={currentData}
      isLoading={isLoading}
      updateData={updateCurrentData}
      updateIsLoading={updateIsLoading}
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
