export function IndexPage() {
  return (
    <div className="w-screen h-screen">
      <header className="w-screen py-8 flex items-center justify-around bg-gray-200 border-b-solid border-b-2 border-b-black">
        <h1 className="text-3xl">Star Wars Info Hub</h1>
      </header>
      <div className="flex w-screen h-full">
        <nav className="h-full basis-1/5 flex flex-col bg-gray-500">
          <a className="pt-8 pb-8 pl-8 align-middle bg-gray-300 border-b-2 border-b-black border-b-solid text-xl">
            People
          </a>
          <a className="pt-8 pb-8 pl-8 align-middle bg-gray-300 border-b-2 border-b-black border-b-solid text-xl">
            Films
          </a>
          <a className="pt-8 pb-8 pl-8 align-middle bg-gray-300 border-b-2 border-b-black border-b-solid text-xl">
            Spaceships
          </a>
          <a className="pt-8 pb-8 pl-8 align-middle bg-gray-300 border-b-2 border-b-black border-b-solid text-xl">
            Vehicles
          </a>
          <a className="pt-8 pb-8 pl-8 align-middle bg-gray-300 border-b-2 border-b-black border-b-solid text-xl">
            Species
          </a>
          <a className="pt-8 pb-8 pl-8 align-middle bg-gray-300 border-b-2 border-b-black border-b-solid text-xl">
            Planets
          </a>
        </nav>
        <main className="basis-4/5 flex items-center justify-center">
          <p className="text-xl">
            Welcome, please select a resource to proceed!
          </p>
        </main>
      </div>
    </div>
  );
}
