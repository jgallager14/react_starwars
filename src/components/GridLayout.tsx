import { PropsWithChildren } from "react";

interface LayoutPageProps extends PropsWithChildren {
  title: string;
}

export function GridLayout({ title, children }: LayoutPageProps): JSX.Element {
  return (
    <div className="m-10">
      <h2 className="text-3xl text-center font-bold">{title}</h2>
      <div className="grid grid-cols-4 gap-10 m-10">{children}</div>
    </div>
  );
}
