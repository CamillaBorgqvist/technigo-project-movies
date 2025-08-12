import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MovieList} from "./components/MovieList"

export const App = () => (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieList />} />
        </Routes>
      </BrowserRouter>
);

export default App;
