import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";

export default function App() {
  return (
    <>
      <Routes>
        {/* Pages */}
        <Route path="/" element={<HomePage />} />

        {/* Error page */}
        <Route path="*" element={<h1>Error page</h1>} />
      </Routes>
    </>
  );
}
