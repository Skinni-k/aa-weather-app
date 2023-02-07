import { useRoutes } from "react-router-dom";
import { Root } from "../pages";
import { ErrorView } from "../pages";

export const routes = [
  { id: "root", path: "/aa-weather-app", element: <Root /> },
  { id: "no-match", path: "*", element: <Root /> },
];

export function RouteTree() {
  const tree = useRoutes(routes);

  return tree;
}
