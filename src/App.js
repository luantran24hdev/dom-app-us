import React from 'react';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AppRoutes } from './AppRoutes';

export default function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}