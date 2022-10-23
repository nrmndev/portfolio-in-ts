//Specs
//Returns isLoading, error, sendRequest(callback for data)
//To use: Destructure and pass pointer for sendRequest(requestConfig: requestConfig, applyData: any)
//Pass a pointer to sendRequest, with 2 argument(requestConfig, anotherPointer);
//const [printJSONData, setPrintJSONData] = useState<any>(null);
//const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();
//const callBackPointer(data)=>{setPrintJSONData(data)}
//sendTaskRequest(requestConfig,callbackPointer)
//your state 'printJSONData' now contains the data

import { useState, useCallback } from "react";

type requestConfig = {
  url: string;
  method?: string;
  headers?: { "Content-Type": string };
  body?: { text: string };
};

type UseHTTPType = {
  isLoading: boolean;
  error: string | null;
  sendRequest: (requestConfig: requestConfig, applyData: any) => Promise<void>;
};
const useHttp = (): UseHTTPType => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendRequest = useCallback(
    async (requestConfig: requestConfig, applyData: any) => {
      //setIsLoading(true);
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
