import { Routes, Route } from "react-router-dom";
import { Layout, WIP } from "components/";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WIP />} />
        <Route path="timeline" element={<WIP />} />
        <Route path="web" element={<WIP />} />
        <Route path="mobile" element={<WIP />} />
        <Route path="game" element={<WIP />} />
        <Route path="design" element={<WIP />} />
        <Route path="other" element={<WIP />} />
        <Route path="*" element={<>404 Not Found</>} />
      </Route>
    </Routes>
  );
};

export { AppRoute };
