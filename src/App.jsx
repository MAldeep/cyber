import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home page/Home";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
