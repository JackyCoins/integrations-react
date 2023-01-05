import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { ContentfulPage } from "./pages/ContentfulPage";
import { TypeformPage } from "./pages/TypeformPage";

const ROUTES = {
  root: "/",
  contentful: "/contentful",
  typeform: "/typeform",
  hubspot: "/hubspot",
  tilda: "/tilda",
  builder: "/builder",
};

function App() {
  return (
    <Router>
      <div className="flex flex-col h-full">
        <nav>
          <ul className={"grid grid-flow-col"}>
            <li>
              <Link to={ROUTES.root}>Home</Link>
            </li>
            <li>
              <Link to={ROUTES.contentful}>Contentful</Link>
            </li>
            <li>
              <Link to={ROUTES.typeform}>Typeform</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path={ROUTES.root} element={<ContentfulPage />} />
          <Route path={ROUTES.contentful} element={<ContentfulPage />} />
          <Route path={ROUTES.typeform} element={<TypeformPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
