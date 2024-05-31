import { useRouteError } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();
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
            {(error as Error)?.message ||
              (error as { statusText?: string })?.statusText}
          </i>
        </p>
      </div>
    </div>
  );
}
