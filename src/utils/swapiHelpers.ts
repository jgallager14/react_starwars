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
export interface SwapiBaseRouteResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}
export interface Person {
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: string;
  edited: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}
