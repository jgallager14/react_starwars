import { useEffect, useState } from "react";
import { SwapiResources, fetchResource, Person } from "../utils/swapiHelpers";

export function PeoplePage(): JSX.Element {
  const [isLoading, updateIsLoading] = useState<boolean>(true);
  const [fetchResults, updateFetchResults] = useState<Person[]>([]);
  const [showMore, updateShowMore] = useState<boolean>(false);

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
  }, [showMore]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div className="m-10">
      <h2 className="text-3xl text-center">People</h2>
      <div className="grid grid-cols-4 gap-10">
        {fetchResults.map((result) => {
          if (showMore === false) {
            return (
              <section>
                <h3 className="text-lg font-bold">{result.name}</h3>
                <button
                  onClick={() => {
                    updateShowMore(true);
                  }}
                >
                  Show More
                </button>
              </section>
            );
          } else {
            return (
              <section>
                <h3 className="text-lg font-bold">{result.name}</h3>
                <ul>
                  <li>Height: {result.height}cm</li>
                  <li>Weight: {result.mass}kg</li>
                  <li>Hair: {result.hair_color}</li>
                  <li>{result.gender}</li>
                  <li>Born in {result.birth_year}</li>
                </ul>
                <button
                  onClick={() => {
                    updateShowMore(false);
                  }}
                >
                  Show Less
                </button>
              </section>
            );
          }
        })}
      </div>
    </div>
  );
}
