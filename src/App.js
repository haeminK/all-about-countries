import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import CountriesPage, { loader as countriesLoader } from "./pages/Countries";
import RootLayout from "./pages/Root";
import CountryDetailPage, { loader as countryDetailLoader } from "./pages/CountryDetail";
import DiscussionPage, { action as submitCommentAction, loader as commentsLoader } from "./pages/Discussion";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <CountriesPage />, loader: countriesLoader },
      {
        path: 'country',
        children: [
          { path: ':countryId', element: <CountryDetailPage />, loader: countryDetailLoader }
        ]
      },
      {
        path: 'discussion',
        element: <DiscussionPage />,
        action: submitCommentAction,
        loader: commentsLoader
      }]

  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
