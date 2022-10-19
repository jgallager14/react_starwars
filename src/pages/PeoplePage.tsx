import { useEffect, useState } from "react";
import { PersonCard } from "../components/PersonCard";
import { SwapiResources, fetchResource, Person } from "../utils/swapiHelpers";

export function PeoplePage(): JSX.Element {
  const [isLoading, updateIsLoading] = useState<boolean>(true);
  const [fetchResults, updateFetchResults] = useState<Person[]>([]);

  useEffect(() => {
    const abortController = new AbortController();
    fetchResource(
      SwapiResources.People,
      abortController.signal,
      updateFetchResults,
      updateIsLoading
    );

    return () => {
      abortController.abort();
    };
  }, []);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div className="m-10">
      <h2 className="text-3xl text-center">People</h2>
      <div className="grid grid-cols-4 gap-10">
        {fetchResults.map((result) => {
          return (
            <PersonCard
              name={result.name}
              height={result.height}
              weight={result.mass}
              hair={result.hair_color}
              gender={result.gender}
              born_in={result.birth_year}
            ></PersonCard>
          );
        })}
      </div>
    </div>
  );
}
