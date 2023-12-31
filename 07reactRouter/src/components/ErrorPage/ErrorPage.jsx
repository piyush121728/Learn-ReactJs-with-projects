import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" >
            <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50  dark:bg-gray-800 dark:border-gray-700">
                <div className="rounded-lg bg-white p-8 text-center shadow-xl  dark:bg-gray-100">
                    <h1 className="mb-4 text-4xl font-bold"><i>{error.statusText || error.message}</i></h1>
                    <p className="text-gray-600">Oops! The page you are looking for could not be found.</p>
                    <a href="/" className="mt-4 inline-block rounded bg-orange-700 hover:bg-orange-800 focus:ring-4 px-4 py-2 font-semibold text-white dark:text-white  dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"> Go back to Home </a>
                </div>
            </div>
        </div>
    );
}