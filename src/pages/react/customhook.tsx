import React, { useState } from "react";
import WithLineNumbers from "../../utils/code-highlighter";
import useHttp from "./usehttp";

const exampleCode = `
import { useState, useCallback } from "react";

type requestConfig = {
  url: string;
  method?: string;
  headers?: { "Content-Type": string };
  body?: { text: string };
};
const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendRequest = useCallback(
    async (requestConfig: requestConfig, applyData: any) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : "GET",
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        });

        if (!response.ok) {
          throw new Error("Request failed!");
        }

        const data = await response.json();
        applyData(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message || "Something went wrong!");
        }
      }
      setIsLoading(false);
    },
    []
  );

  return {
    isLoading,
    error,
    sendRequest,
  };
};
export default useHttp;
`.trim();

const exampleCode2 = `
const FetchApiSample = () => {
  const [printJSONData, setPrintJSONData] = useState<any>(null);
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const createTask = (taskText: string, data: any) => {
    //Do your data mutation or destructuring here
    //const generatedId = data.name; // firebase-specific => "name" contains generated id
    //const createdTask = { id: generatedId, text: taskText };
    const StringifiedData = JSON.stringify(data, null, 10);
    setPrintJSONData(StringifiedData);

    //or lift the state up if needed
    //props.onGetData(data);
  };

  const enterTaskHandler = async (e: React.FormEvent<HTMLInputElement>) => {
    const requestConfig = {
      url: \`https://random-data-api.com/api/bank/random_bank?size=\${e.currentTarget.value}\`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: { text: e.currentTarget.value },
    };
    sendTaskRequest(
      requestConfig,
      createTask.bind(null, e.currentTarget.value)
    );
  };

  return (
    <div>
      <p className="color_1">Custom Hook</p>
      <p>Enter Number of Data you want to fetch on the API</p>
      <input type="number" onChange={enterTaskHandler} />
      {isLoading && <p>Loading data...</p>}
      <p>
        <i>
          (FetchAPI result coming from
          https://random-data-api.com/api/bank/random_bank?size=yourInputNumber)
        </i>
      </p>

      {/* <button onClick={onClickHandler}>Fetch Data (From Random API)</button> */}
      {printJSONData && (
        <>
          <p>Promised Return Data</p>
          <pre>{printJSONData}</pre>
        </>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};
`.trim();

const UseEffectSample = () => {
  const [printJSONData, setPrintJSONData] = useState<any>(null);
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const createTask = (taskText: string, data: any) => {
    //Do your data mutation or destructuring here
    //const generatedId = data.name; // firebase-specific => "name" contains generated id
    //const createdTask = { id: generatedId, text: taskText };
    const StringifiedData = JSON.stringify(data, null, 10);
    setPrintJSONData(StringifiedData);
    //or lift the state up if needed
    //props.onGetData(data);
  };

  const enterTaskHandler = async (e: React.FormEvent<HTMLInputElement>) => {
    const requestConfig = {
      url: `https://random-data-api.com/api/bank/random_bank?size=${e.currentTarget.value}}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: { text: e.currentTarget.value },
    };
    sendTaskRequest(
      requestConfig,
      createTask.bind(null, e.currentTarget.value)
    );
  };

  return (
    <div>
      <p className="color_1">Custom Hook</p>
      <p>Enter Number of Data you want to fetch on the API</p>
      <input type="number" onChange={enterTaskHandler} />
      {isLoading && <p>Loading data...</p>}
      <p>
        <i>
          (FetchAPI result coming from
          https://random-data-api.com/api/bank/random_bank?size=yourInputNumber)
        </i>
      </p>

      {/* <button onClick={onClickHandler}>Fetch Data (From Random API)</button> */}
      {printJSONData && (
        <>
          <p>Promised Return Data</p>
          <pre>{printJSONData}</pre>
        </>
      )}
      {error && <p>{error}</p>}

      <ul>
        <li>
          Sample custom hook implementation for fetchAPI, accepts props: Url
          (required), Methods with &lsquo;GET&lsquo; as the default value,
          Headers, and Body props if not supplied.
        </li>
        <li>
          Returns three objects (tuples) , loading, error and callback function
          for the response data
        </li>
      </ul>

      <WithLineNumbers code={exampleCode} language="jsx" />
      <p>
        Parent Component can then destructure the return tuples,
        [loading,error,callbackFunction]
      </p>
      <WithLineNumbers code={exampleCode2} language="jsx" />
    </div>
  );
};

export default UseEffectSample;
