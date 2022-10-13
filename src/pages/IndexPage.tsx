export function IndexPage() {
  return (
    <div className="h-full flex flex-col">
      <header className="py-8 flex items-center justify-around bg-gray-200 border-b-solid border-b-2 border-b-black">
        <h1 className="text-3xl">Star Wars Info Hub</h1>
      </header>
      <div className="flex h-full">
        <nav className="h-full w-1/5 min-w-min flex flex-col bg-gray-500">
          <a className="p-6 align-middle bg-gray-300 border-b-2 border-b-black border-b-solid text-xl">
            People
          </a>
          <a className="p-6 align-middle bg-gray-300 border-b-2 border-b-black border-b-solid text-xl">
            Films
          </a>
          <a className="p-6 align-middle bg-gray-300 border-b-2 border-b-black border-b-solid text-xl">
            Spaceships
          </a>
          <a className="p-6 align-middle bg-gray-300 border-b-2 border-b-black border-b-solid text-xl">
            Vehicles
          </a>
          <a className="p-6 align-middle bg-gray-300 border-b-2 border-b-black border-b-solid text-xl">
            Species
          </a>
          <a className="p-6 align-middle bg-gray-300 border-b-2 border-b-black border-b-solid text-xl">
            Planets
          </a>
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
