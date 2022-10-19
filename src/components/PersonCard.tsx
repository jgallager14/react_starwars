import { useState } from "react";
import { Person } from "../utils/swapiHelpers";

interface PersonCardProps {
  person: Person;
}

export function PersonCard({ person }: PersonCardProps) {
  const {
    name,
    birth_year: birthYear,
    mass,
    height,
    gender,
    hair_color: hair,
  } = person;
  const [showMore, updateShowMore] = useState<boolean>(false);

  if (showMore === false) {
    return (
      <section>
        <h3 className="text-lg font-bold">{name}</h3>
        <button
          onClick={() => {
            updateShowMore(true);
          }}
        >
          Show More
        </button>
      </section>
    );
  }
  return (
    <section>
      <h3 className="text-lg font-bold">{name}</h3>
      <ul>
        <li>Height: {height}cm</li>
        <li>Weight: {mass}kg</li>
        <li>Hair: {hair}</li>
        <li>{gender}</li>
        <li>Born in {birthYear}</li>
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
