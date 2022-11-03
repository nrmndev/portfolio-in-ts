import React, { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { LoadingSkeletonPage } from "../../components/preloader/loading-skeleton.component.";
//import FetchError from "../../components/error/fetch-error";
//import Preloader from "../../components/preloader/loading";

type Props = {
  links: string[] | undefined;
};

const TopicComponent = ({ links }: Props) => {
  const { foldername, filename } = useParams();

  const valid = links && links.some((e) => e === foldername + "/" + filename);
  let HTMLRender;
  valid
    ? (HTMLRender = lazy(() => import(`./${foldername}/${filename}`)))
    : (HTMLRender = lazy(() => import(`../../components/error/fetch-error`)));

  // const HTMLRender = lazy(() => import(`./${params.filename}`));
  // HTMLRender = lazy(async () => {
  //   const rep = await import(`./${params.filename}`);
  //   const resp = await rep;
  //   return resp;
  // });
  return (
    <Suspense fallback={<LoadingSkeletonPage />}>
      <HTMLRender error="Topic not found" />
    </Suspense>
  );
};

export default React.memo(TopicComponent);
