import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="App h-[100vh] bg-slate-800 text-white">
      <Router>
        <Header />
        <Routes>
          <Route index element={<MovieList />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route
            path="/*"
            element={
              <div className="h-[calc(100dvh-64px)] font-bold text-5xl flex items-center justify-center ">
                Error 404 || Page not found
              </div>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
