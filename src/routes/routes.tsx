import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { Layout } from "@components/Layout";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<>404 Not Found</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
