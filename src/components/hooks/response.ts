type Resp = {
  response: {
    body?: ReadableStream<Uint8Array> | null;
    headers?: {};
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

export default GetResponse;
