import { Link } from "react-router-dom";
import { ServerCrash } from "lucide-react";
import { ROUTES } from "@constants/routes";

function ServerError() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <ServerCrash className="h-12 w-12 text-red-500" strokeWidth={1.5} />
      <h1 className="text-3xl font-semibold">500 — Server Error</h1>
      <p className="max-w-md text-[rgb(var(--color-text-muted))]">
        Something went wrong on our end. Please try again shortly.
      </p>
      <Link
        to={ROUTES.HOME}
        className="mt-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-brand-700"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default ServerError;
