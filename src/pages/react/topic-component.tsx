import React, { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
//import FetchError from "../../components/error/fetch-error";
import Preloader from "../../components/preloader/loading";
import { validImports } from "../validimports";

// type Props = {
//   children?: React.ReactNode;
// };

const TopicComponent = () => {
  const params = useParams();
  const valid = validImports.reacthooks.some((e) => e === params.filename);
  let HTMLRender;
  valid
    ? (HTMLRender = lazy(() => import(`./${params.filename}`)))
    : (HTMLRender = lazy(() => import(`../../components/error/fetch-error`)));

  // const HTMLRender = lazy(() => import(`./${params.filename}`));
  // HTMLRender = lazy(async () => {
  //   const rep = await import(`./${params.filename}`);
  //   const resp = await rep;
  //   return resp;
  // });
  return (
    <Suspense fallback={<Preloader />}>
      <HTMLRender error="Topic not found" />
    </Suspense>
  );
};

export default React.memo(TopicComponent);
