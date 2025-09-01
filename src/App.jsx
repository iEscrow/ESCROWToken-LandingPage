import HomePage from "./pages/HomePage";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <Loading /> : <HomePage />;
}
