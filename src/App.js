import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import { ContentfulPage } from "./pages/ContentfulPage";
import { TypeformPage } from "./pages/TypeformPage";

const ROUTES = {
  root: {
    url: "/",
    title: "Home",
  },
  contentful: {
    url: "/contentful",
    title: "Contentful",
  },
  typeform: {
    url: "/typeform",
    title: "Typeform",
  },
  hubspot: {
    url: "/hubspot",
    title: "Hubspot",
  },
  tilda: {
    url: "/tilda",
    title: "Tilda",
  },
  builder: {
    url: "/builder",
    title: "Builder",
  },
};

function App() {
  const tabs = Object.entries(ROUTES).map(([key, { title, url }]) => {
    return (
      <li>
        <NavLink
          key={key}
          to={url}
          className={({ isActive }) =>
            isActive ? "text-blue-800" : "text-blue-500"
          }
        >
          {title}
        </NavLink>
      </li>
    );
  });

  return (
    <Router>
      <div className="flex flex-col h-full">
        <nav className={"p-2 shadow-2xl"}>
          <ul className={"grid grid-flow-col justify-items-center"}>{tabs}</ul>
        </nav>

        <div className={"p-6 flex flex-grow bg-gray-100"}>
          <Routes>
            <Route path={ROUTES.root.url} element={<ContentfulPage />} />
            <Route path={ROUTES.contentful.url} element={<ContentfulPage />} />
            <Route path={ROUTES.typeform.url} element={<TypeformPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
