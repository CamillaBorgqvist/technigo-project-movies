import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MovieList } from "./components/MovieList"
import { MovieDetails } from "./components/MovieDetails"

export const App = () => (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
);

export default App;
