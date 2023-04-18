import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Models from "./pages/Models";
import Tests from './pages/Tests';
import Pools from "./pages/Pools";
import Gates from "./pages/Gates";
import Metrics from "./pages/Metrics";
import NoPage from "./pages/NoPage";  


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="models" element={<Models />} />
          <Route path="tests" element={<Tests />} />
          <Route path="pools" element={<Pools />} />
          <Route path="gates" element={<Gates />} />
          <Route path="metrics" element={<Metrics />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
