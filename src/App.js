import "./App.css";
import { ContentfulPage } from "./pages/ContentfulPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to={ROUTES.root}>Home</Link>
            </li>
            <li>
              <Link to={ROUTES.contentful}>Contentful</Link>
            </li>
            <li>
              <Link to={ROUTES.typeform}>typeform</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path={ROUTES.root} element={<ContentfulPage />} />
          <Route path={ROUTES.contentful} element={<ContentfulPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
