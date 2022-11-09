import React, { PropsWithChildren } from "react";
import { SwapiBaseRouteResponse } from "../utils/swapiHelpers";

interface LayoutPageProps<T> extends PropsWithChildren {
  title: string;
  isLoading: boolean;
  data: SwapiBaseRouteResponse<T>;
  updateData: React.Dispatch<
    React.SetStateAction<SwapiBaseRouteResponse<T> | undefined>
  >;
  updateIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export function PageLayout<T>({
  title,
  isLoading,
  data,
  updateData,
  updateIsLoading,
  children,
}: LayoutPageProps<T>): JSX.Element {
  return (
    <div className="m-10">
      <h2 className="text-3xl text-center font-bold">{title}</h2>
      <div className="grid grid-cols-4 gap-10 m-10">{children}</div>
      <div className="flex justify-center">
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          <>
            {data?.previous && (
              <button
                className="m-6 text-blue-600 text-sm"
                onClick={async () => {
                  if (data?.previous) {
                    updateIsLoading(true);
                    const response = await fetch(data.previous);
                    const newData = await response.json();
                    updateData(newData);
                    updateIsLoading(false);
                  }
                }}
              >
                Previous Page
              </button>
            )}
            {data?.next && (
              <button
                className="m-6 text-blue-600 text-sm"
                onClick={async () => {
                  if (data?.next) {
                    updateIsLoading(true);
                    const response = await fetch(data.next);
                    const newData = await response.json();
                    updateData(newData);
                    updateIsLoading(false);
                  }
                }}
              >
                Next Page
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
