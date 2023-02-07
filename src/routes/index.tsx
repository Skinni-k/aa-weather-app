import { useRoutes } from "react-router-dom";
import { Root } from "../pages";
import { ErrorView } from "../pages";

export const routes = [
  { id: "root", path: "/", element: <Root /> },
  { id: "no-match", path: "*", element: <ErrorView /> },
];

export function RouteTree() {
  const tree = useRoutes(routes);

  return tree;
}
