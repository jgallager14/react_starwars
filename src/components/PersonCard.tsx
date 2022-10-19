import { useState } from "react";

interface PersonCardProps {
  name: string;
  height: string;
  weight: string;
  hair: string;
  gender: string;
  born_in: string;
}

export function PersonCard(props: PersonCardProps) {
  const [showMore, updateShowMore] = useState<boolean>(false);

  if (showMore === false) {
    return (
      <section>
        <h3 className="text-lg font-bold">{props.name}</h3>
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
      <h3 className="text-lg font-bold">{props.name}</h3>
      <ul>
        <li>Height: {props.height}cm</li>
        <li>Weight: {props.weight}kg</li>
        <li>Hair: {props.hair}</li>
        <li>{props.gender}</li>
        <li>Born in {props.born_in}</li>
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
