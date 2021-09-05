import React, { Suspense } from "react";
import useNearScreen from "../../hooks/useNearScreen";

const TrendigSearches = React.lazy(() => import("./index"));

export const LazyTrending = () => {
  const { isNearScreen, fromRef } = useNearScreen({ distance: "20px" });

  return (
    <div ref={fromRef} className="ml-10 ">
      <Suspense fallback={null}>
        {isNearScreen ? <TrendigSearches /> : null}
      </Suspense>
    </div>
  );
};
