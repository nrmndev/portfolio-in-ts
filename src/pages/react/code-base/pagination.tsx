import { useEffect, useRef, useState } from "react";
import { LoadingSkeletonPage } from "../../../components/preloader/loading-skeleton.component.";
//import Preloader from "../../../components/preloader/loading";
import Paginations from "../../../utils/pagination";
import useHttp from "../../../utils/usehttp";

const CodebasePagination = () => {
  const [printJSONData, setPrintJSONData] = useState<any>();
  const { isLoading, error, sendRequest } = useHttp();

  const [currPage, setCurrPage] = useState<number>(1);
  const requestConfig = useRef<any>(null);
  const createTask = (data: any) => {
    //Do your data mutation or destructuring here
    //const generatedId = data.name; // firebase-specific => "name" contains generated id
    //const createdTask = { id: generatedId, text: taskText };
    setPrintJSONData(data);
    //or lift the state up if needed
    //props.onGetData(data);
  };

  const lastIndex = currPage * 3;
  const firstIndex = lastIndex - 3;
  let newArray: any;
  if (printJSONData) {
    newArray = printJSONData.slice(firstIndex, lastIndex);
  }
  if (requestConfig) {
    requestConfig.current = {
      url: `https://random-data-api.com/api/bank/random_bank?size=20`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: { text: e.currentTarget.value },
    };
  }

  useEffect(() => {
    sendRequest(requestConfig.current, createTask);
  }, [sendRequest]);

  const onClickHandler = (length: number) => {
    setCurrPage(length);
  };

  return (
    <>
      <h3>Data Pagination</h3>
      <p>Detailed explanation to follow</p>
      <hr />
      {isLoading && <LoadingSkeletonPage />}
      {error && <LoadingSkeletonPage />}
      {newArray && JSON.stringify(newArray)}
      <Paginations length={23} itemsPerPage={5} onClick={onClickHandler} />
    </>
  );
};

export default CodebasePagination;
