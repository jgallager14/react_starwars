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
  const { data } = useFetchOnMount<SwapiBaseRouteResponse<Species>>(
    `${SWAPI_BASE_URL}${swapiResourceUrls[SwapiResources.Species]}`
  );

  if (!data) {
    return <span>Loading...</span>;
  }

  return (
    <div className="m-10">
      <h2 className="text-3xl text-center">Species</h2>
      <div className="grid grid-cols-4 gap-10">
        {data.results.map(
          ({
            name,
            classification,
            designation,
            language,
            average_lifespan,
          }) => {
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
      </div>
    </div>
  );
}
