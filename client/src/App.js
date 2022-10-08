import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
function App() {
  return (
    <>
      <div className="mainNavDiv">
        <Link className="tolink" to="/">
          Home Page
        </Link>
        <Link
          style={{ marginLeft: "20px" }}
          className="tolink"
          to="/createpost"
        >
          Create a post
        </Link>
      </div>

      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/createpost" exact element={<CreatePost />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
