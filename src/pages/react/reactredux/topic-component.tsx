import React, { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";

const ReactRedux = () => {
  const params = useParams();
  const HTMLRender = lazy(() => import(`./${params.filename}`));
  return (
    <Suspense fallback={<div>Page is Loading...</div>}>
      <HTMLRender />
    </Suspense>
  );
};

export default ReactRedux;
