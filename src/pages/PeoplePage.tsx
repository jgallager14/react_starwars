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
  const [itemsShown, updateItemsShown] = useState(10);
  let currentItemsShown = itemsShown;

  const { data } = useFetchOnMount<SwapiBaseRouteResponse<Person>>(
    `${SWAPI_BASE_URL}${swapiResourceUrls[SwapiResources.People]}`
  );

  if (!data) {
    return <span>Loading...</span>;
  }

  return (
    <div className="m-10">
      <h2 className="text-3xl text-center">Characters</h2>
      <div className="grid grid-cols-4 gap-10">
        {data.results.map(
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
      <button
        onClick={() => {
          if (currentItemsShown > 10) {
            updateItemsShown(currentItemsShown - 10);
          }
        }}
      >
        Show Less
      </button>
      <button
        onClick={() => {
          if (currentItemsShown < 80) {
            updateItemsShown(currentItemsShown + 10);
          } else if (currentItemsShown === 80) {
            updateItemsShown((currentItemsShown += 2));
          } else {
            console.log("that's it!");
          }
        }}
      >
        Show More
      </button>
    </div>
  );
}
