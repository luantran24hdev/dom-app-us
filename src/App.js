import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AppRoutes } from "./AppRoutes";
import { Loading } from "./components/Loading";
import { useSelector } from "react-redux";

export default function App() {
  const isLoading = useSelector((state) => state.app.isLoading);
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <Footer />
      <Loading isLoading={isLoading} />
    </div>
  );
}
