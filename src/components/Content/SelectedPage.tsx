interface GreetingProps {
  displayText: string;
}

export function Greeting(props: GreetingProps): JSX.Element {
  return <p className="text-3xl">{props.displayText}</p>;
}
