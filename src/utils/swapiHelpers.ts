import { Dispatch, SetStateAction } from "react";

export enum SwapiResources {
  People = "People",
  Films = "Films",
  Spaceships = "Spaceships",
  Vehicles = "Vehicles",
  Species = "Species",
  Planets = "Planets",
}

export const SWAPI_BASE_URL = "https://swapi.dev/api/";

export const swapiResourceUrls: { [key in SwapiResources]: string } = {
  [SwapiResources.People]: "people/",
  [SwapiResources.Films]: "films/",
  [SwapiResources.Spaceships]: "starships/",
  [SwapiResources.Vehicles]: "vehicles/",
  [SwapiResources.Species]: "species/",
  [SwapiResources.Planets]: "planets/",
};

interface ResourceMetadata {
  displayName: string;
  internalUrlPath: string;
}

export const swapiResourceMetadata: {
  [key in SwapiResources]: ResourceMetadata;
} = {
  [SwapiResources.People]: {
    displayName: "Characters",
    internalUrlPath: "/characters",
  },
  [SwapiResources.Films]: {
    displayName: "Movies",
    internalUrlPath: "/movies",
  },
  [SwapiResources.Spaceships]: {
    displayName: "Ships",
    internalUrlPath: "/ships",
  },
  [SwapiResources.Vehicles]: {
    displayName: "Vehicles",
    internalUrlPath: "/vehicles",
  },
  [SwapiResources.Species]: {
    displayName: "Species",
    internalUrlPath: "/species",
  },
  [SwapiResources.Planets]: {
    displayName: "Planets",
    internalUrlPath: "/planets",
  },
};

export async function fetchResource(
  resource: SwapiResources,
  signal: AbortSignal,
  updateData: Dispatch<SetStateAction<unknown[]>>,
  updateLoading: Dispatch<SetStateAction<boolean>>
) {
  const response = await fetch(
    `${SWAPI_BASE_URL}${swapiResourceUrls[resource]}`,
    {
      signal: signal,
    }
  );
  const data = await response.json();
  updateData(data.results);
  updateLoading(false);
}
