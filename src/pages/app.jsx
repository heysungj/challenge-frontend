import React from "react";
import { Routes, Route } from "react-router-dom";
import "./app.css";
import HomePage from "./HomePage/HomePage";
import Header from "../components/Header/Header";
import ResultPage from "./ResultPage/ResultPage";

export default function App() {
  return (
    <main className="App">
      <div className="content-wrap">
        <Header />
        <Routes>
          {/* client-side route that renders the component instance if the path matches the url in the address bar */}
          <Route path="/" element={<HomePage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </div>
    </main>
  );
}
