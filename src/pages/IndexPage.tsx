export function IndexPage() {
  return (
    <div className="w-screen h-screen">
      <header className="w-screen h-24 flex items-center justify-around bg-gray-200 border-b-solid border-b-2 border-b-black">
        <h1 className="text-3xl">Star Wars Info Hub</h1>
      </header>
      <div className="flex w-screen h-full">
        <nav className="h-100% basis-1/5 flex flex-col bg-gray-500">
          <a className="h-20 pt-6 pb-4 pl-8 align-middle bg-gray-300 border-b-2 border-b-black border-b-solid text-xl">
            People
          </a>
          <a className="h-20 pt-6 pb-4 pl-8 align-middle bg-gray-300 border-b-2 border-b-black border-b-solid text-xl">
            Films
          </a>
          <a className="h-20 pt-6 pb-4 pl-8 align-middle bg-gray-300 border-b-2 border-b-black border-b-solid text-xl">
            Spaceships
          </a>
          <a className="h-20 pt-6 pb-4 pl-8 align-middle bg-gray-300 border-b-2 border-b-black border-b-solid text-xl">
            Vehicles
          </a>
          <a className="h-20 pt-6 pb-4 pl-8 align-middle bg-gray-300 border-b-2 border-b-black border-b-solid text-xl">
            Species
          </a>
          <a className="h-20 pt-6 pb-4 pl-8 align-middle bg-gray-300 border-b-2 border-b-black border-b-solid text-xl">
            Planets
          </a>
        </nav>
        <main className="basis-4/5">
          <p className="greeting mt-40 pt-96 text-center text-xl">
            Welcome, please select a resource to proceed!
          </p>
        </main>
      </div>
    </div>
  );
}
