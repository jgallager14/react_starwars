import { PropsWithChildren, useState } from "react";

interface ShowHideCardProps extends PropsWithChildren {
  headerName: string;
}

export function ShowHideCard({ headerName, children }: ShowHideCardProps) {
  const [shouldShowMore, updateShouldShowMore] = useState<boolean>(false);

  return (
    <section>
      <h3 className="text-lg font-bold">{headerName}</h3>
      {shouldShowMore && children}
      <button
        onClick={() => {
          updateShouldShowMore(
            (currentShouldShowMore) => !currentShouldShowMore
          );
        }}
      >
        Show {shouldShowMore ? "Less" : "More"}
      </button>
    </section>
  );
}
