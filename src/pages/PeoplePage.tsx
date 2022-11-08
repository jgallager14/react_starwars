import { useState } from "react";
import { ShowHideCard } from "../components/ShowHideCard";
import { useFetchOnMount } from "../hooks/useFetchOnMount";
import { GridLayout } from "../components/GridLayout";
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
    <div>
      <GridLayout title="Characters">
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
      </GridLayout>
      <div className="flex justify-center">
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          <>
            {currentData?.previous && (
              <button
                className="m-6 text-blue-600 text-sm"
                onClick={async () => {
                  if (currentData?.previous) {
                    updateIsLoading(true);
                    const response = await fetch(currentData.previous);
                    const data = await response.json();
                    updateCurrentData(data);
                    updateIsLoading(false);
                  }
                }}
              >
                Previous Page
              </button>
            )}
            {currentData?.next && (
              <button
                className="m-6 text-blue-600 text-sm"
                onClick={async () => {
                  if (currentData?.next) {
                    updateIsLoading(true);
                    const response = await fetch(currentData.next);
                    const data = await response.json();
                    updateCurrentData(data);
                    updateIsLoading(false);
                  }
                }}
              >
                Next Page
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
