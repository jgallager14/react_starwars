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
  const { data } = useFetchOnMount<SwapiBaseRouteResponse<Planet>>(
    `${SWAPI_BASE_URL}${swapiResourceUrls[SwapiResources.Planets]}`
  );

  if (!data) {
    return <span>Loading...</span>;
  }

  return (
    <div className="m-10">
      <h2 className="text-3xl text-center">Planets</h2>
      <div className="grid grid-cols-4 gap-10">
        {data.results.map(
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
      </div>
    </div>
  );
}
