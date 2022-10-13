export enum SwapiResources {
  People = 'People',
  Films = 'Films',
  Spaceships = 'Spaceships',
  Vehicles = 'Vehicles',
  Species = 'Species',
  Planets = 'Planets',
}

export const SWAPI_BASE_URL = 'https://swapi.dev/api/';

export const swapiResourceUrls: {[key in SwapiResources]: string} = {
  [SwapiResources.People]: 'people/', 
  [SwapiResources.Films]: 'films/', 
  [SwapiResources.Spaceships]: 'spaceships/', 
  [SwapiResources.Vehicles]: 'vehicles/', 
  [SwapiResources.Species]: 'species/', 
  [SwapiResources.Planets]: 'planets/', 
}

interface ResourceMetadata {
  displayName: string;
  internalUrlPath: string;
}

export const swapiResourceMetadata: {[key in SwapiResources]: ResourceMetadata} = {
  [SwapiResources.People]: {
    displayName: 'Characters',
    internalUrlPath: '/characters'
  }, 
  [SwapiResources.Films]: {
    displayName: 'Movies',
    internalUrlPath: '/movies'
  }, 
  [SwapiResources.Spaceships]: {
    displayName: 'Ships',
    internalUrlPath: '/ships'
  }, 
  [SwapiResources.Vehicles]: {
    displayName: 'Vehicles',
    internalUrlPath: '/vehicles'
  }, 
  [SwapiResources.Species]: {
    displayName: 'Species',
    internalUrlPath: '/species'
  }, 
  [SwapiResources.Planets]: {
    displayName: 'Planets',
    internalUrlPath: '/planets'
  }
}