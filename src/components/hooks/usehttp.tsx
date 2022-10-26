/*** CUSTOM FETCH HOOK,
 *  pass in requestconfig and returns 4 values
 *    isLoading, error, sendRequest, responseStatus,
 */

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
  const [responseStatus, setResponseStatus] = useState<string>("");
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

        const respStatus = GetResponse({ response });
        setResponseStatus(respStatus);

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
    responseStatus,
  };
};
export default useHttp;

type Resp = {
  response: {
    body?: ReadableStream<Uint8Array> | null;
    headers?: any;
    ok?: boolean;
    redirected?: boolean;
    status?: number;
    type?: string;
    url: string;
  };
};
const GetResponse = ({ response }: Resp) => {
  switch (response.status) {
    case 404:
      return `Error 404: Item Not Found`;
    case 200:
      return `Success 200: Request valid`;
    case 201:
      return `Success 201: PUT/UPDATE`;
    case 204:
      return `Success 204: Content Deleted/Removed`;
    case 400:
      return `Error 400: Authentication Failed`;
    default:
      return ``;
  }
};
