import { useRouteError } from "react-router-dom";

type RouteError = {
  data: string;
  error: {
    columnNumber: number;
    fileName: string;
    lineNumber: number;
    message: string;
    stack: string;
  };
  internal: boolean;
  status: number;
  statusText: string;
};

export default function ErrorPage() {
  const error = useRouteError() as RouteError;
  console.log(error);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-lg">Oops!</h1>
        <img
          src="https://media1.tenor.com/m/8vGjD8Kdl_4AAAAd/big-eyed-cat-stare-cat.gif"
          className="w-64"
          loading="lazy"
          alt="Confused Cat"
        />
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i className="border-2 p-3 text-lg not-italic">
            {error.statusText || error.error.message}
          </i>
        </p>
      </div>
    </div>
  );
}
