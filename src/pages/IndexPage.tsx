import { SidebarNavLink } from "../components/SidebarNav/SidebarNavLink";
import { swapiResourceMetadata, SwapiResources } from "../utils/swapiHelpers";

export function IndexPage() {
  return (
    <div className="h-full flex flex-col">
      <header className="py-8 flex items-center justify-around bg-gray-200 border-b-solid border-b-2 border-b-black">
        <h1 className="text-3xl">Star Wars Info Hub</h1>
      </header>
      <div className="flex h-full">
        <nav className="h-full w-1/5 min-w-min flex flex-col bg-gray-500">
          <SidebarNavLink
            urlPath=""
            displayText={
              swapiResourceMetadata[SwapiResources.People].displayName
            }
          />
          <SidebarNavLink
            urlPath=""
            displayText={
              swapiResourceMetadata[SwapiResources.Films].displayName
            }
          />
          <SidebarNavLink
            urlPath=""
            displayText={
              swapiResourceMetadata[SwapiResources.Planets].displayName
            }
          />
          <SidebarNavLink
            urlPath=""
            displayText={
              swapiResourceMetadata[SwapiResources.Spaceships].displayName
            }
          />
          <SidebarNavLink
            urlPath=""
            displayText={
              swapiResourceMetadata[SwapiResources.Species].displayName
            }
          />
          <SidebarNavLink
            urlPath=""
            displayText={
              swapiResourceMetadata[SwapiResources.Vehicles].displayName
            }
          />
        </nav>
        <main className="w-4/5 flex items-center justify-center">
          <p className="text-xl p-4">
            Welcome, please select a resource to proceed!
          </p>
        </main>
      </div>
    </div>
  );
}
