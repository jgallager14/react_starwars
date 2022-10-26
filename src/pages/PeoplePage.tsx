import { useState } from "react";
import { ShowHideCard } from "../components/ShowHideCard";
import { useFetchOnMount } from "../hooks/useFetchOnMount";
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

  const { data, isLoading: isLoadingOnMount } = useFetchOnMount<
    SwapiBaseRouteResponse<Person>
  >(`${SWAPI_BASE_URL}${swapiResourceUrls[SwapiResources.People]}`);

  if (isLoadingOnMount) {
    return <span>Loading...</span>;
  }

  if (!currentData) {
    updateCurrentData(data);
  }

  return (
    <div className="m-10">
      <h2 className="text-3xl text-center font-bold">Characters</h2>
      <div className="grid grid-cols-4 gap-10 m-10">
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
      </div>
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
