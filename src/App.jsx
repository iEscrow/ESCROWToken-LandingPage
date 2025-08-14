import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Routes>
          {/* Pages */}
          <Route path="/" element={<HomePage />} />

          {/* Error page */}
          <Route path="*" element={<h1>Error page</h1>} />
        </Routes>
      )}
    </>
  );
}
