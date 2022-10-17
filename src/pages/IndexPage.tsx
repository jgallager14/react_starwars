import { SidebarNavLink } from "../components/SidebarNav/SidebarNavLink";
import { swapiResourceMetadata, SwapiResources } from "../utils/swapiHelpers";
import { Outlet } from "react-router-dom";

export function IndexPage() {
  return (
    <div className="h-full flex flex-col">
      <header className="py-8 flex items-center justify-around bg-gray-200 border-b-solid border-b-2 border-b-black">
        <h1 className="text-3xl">Star Wars Info Hub</h1>
      </header>
      <div className="flex h-full">
        <nav className="h-full w-1/5 min-w-min flex flex-col bg-gray-500">
          <SidebarNavLink
            route={swapiResourceMetadata[SwapiResources.People].internalUrlPath}
            displayText={
              swapiResourceMetadata[SwapiResources.People].displayName
            }
          />
          <SidebarNavLink
            route={swapiResourceMetadata[SwapiResources.Films].internalUrlPath}
            displayText={
              swapiResourceMetadata[SwapiResources.Films].displayName
            }
          />
          <SidebarNavLink
            route={
              swapiResourceMetadata[SwapiResources.Planets].internalUrlPath
            }
            displayText={
              swapiResourceMetadata[SwapiResources.Planets].displayName
            }
          />
          <SidebarNavLink
            route={
              swapiResourceMetadata[SwapiResources.Spaceships].internalUrlPath
            }
            displayText={
              swapiResourceMetadata[SwapiResources.Spaceships].displayName
            }
          />
          <SidebarNavLink
            route={
              swapiResourceMetadata[SwapiResources.Species].internalUrlPath
            }
            displayText={
              swapiResourceMetadata[SwapiResources.Species].displayName
            }
          />
          <SidebarNavLink
            route={
              swapiResourceMetadata[SwapiResources.Vehicles].internalUrlPath
            }
            displayText={
              swapiResourceMetadata[SwapiResources.Vehicles].displayName
            }
          />
        </nav>
        <main className="w-4/5 flex items-center justify-center">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
