import React, { MouseEventHandler, PropsWithChildren } from "react";

interface LayoutPageProps extends PropsWithChildren {
  title: string;
  areButtonsEnabled: boolean;
  onPrevClick: MouseEventHandler;
  onNextClick: MouseEventHandler;
  showNextButton: boolean;
  showPreviousButton: boolean;
}

export function PageLayout({
  title,
  areButtonsEnabled,
  onPrevClick,
  onNextClick,
  showNextButton,
  showPreviousButton,
  children,
}: LayoutPageProps): JSX.Element {
  return (
    <div className="m-10">
      <h2 className="text-3xl text-center font-bold">{title}</h2>
      <div className="grid grid-cols-4 gap-10 m-10">{children}</div>
      <div className="flex justify-center">
        {!areButtonsEnabled ? (
          <span>Loading...</span>
        ) : (
          <>
            {showPreviousButton && (
              <button
                className="m-6 text-blue-600 text-sm"
                onClick={onPrevClick}
              >
                Previous Page
              </button>
            )}
            {showNextButton && (
              <button
                className="m-6 text-blue-600 text-sm"
                onClick={onNextClick}
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
